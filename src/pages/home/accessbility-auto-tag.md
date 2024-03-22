<TextBlock slots="heading, buttons, text" theme="dark" hasCodeBlock className="bgBlue showMobileView"/>

##### Adobe PDF Accessibility Auto-Tag API

- [See documentation](/document-services/docs/overview/pdf-accessibility-auto-tag/)

Auto-tag PDF content to improve accessibility.

<CodeBlock slots="heading, code" repeat="5" languages="curl, js,.net,java,python" />

#### REST API

```bash
// Please refer our REST API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/PDF-Accessibility-Auto-Tag

curl --location --request POST 'https://pdf-services.adobe.io/operation/autotag' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
}'
```

#### Node js

```js
// Get the samples from https://github.com/adobe/pdfservices-node-sdk-samples
// Run the sample:
// node src/autotagpdf/autotag-pdf.js

const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    AutotagPDFJob,
    AutotagPDFResult,
    SDKError,
    ServiceUsageError,
    ServiceApiError,
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");

(async () => {
    let readStream;
    try {
        // Initial setup, create credentials instance
        const credentials = new ServicePrincipalCredentials({
            clientId: process.env.PDF_SERVICES_CLIENT_ID,
            clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET
        });

        // Creates a PDF Services instance
        const pdfServices = new PDFServices({
            credentials
        });

        // Creates an asset(s) from source file(s) and upload
        readStream = fs.createReadStream("./autotagPDFInput.pdf");
        const inputAsset = await pdfServices.upload({
            readStream,
            mimeType: MimeType.PDF
        });

        // Creates a new job instance
        const job = new AutotagPDFJob({
            inputAsset
        });

        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({
            job
        });
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: AutotagPDFResult
        });

        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.taggedPDF;
        const streamAsset = await pdfServices.getContent({
            asset: resultAsset
        });

        // Creates an output stream and copy stream asset's content to it
        const outputFilePath = "./autotag-tagged.pdf";
        console.log(`Saving asset at ${outputFilePath}`);

        let writeStream = fs.createWriteStream(outputFilePath);
        streamAsset.readStream.pipe(writeStream);
    } catch (err) {
        if (err instanceof SDKError || err instanceof ServiceUsageError || err instanceof ServiceApiError) {
            console.log("Exception encountered while executing operation", err);
        } else {
            console.log("Exception encountered while executing operation", err);
        }
    } finally {
        readStream?.destroy();
    }
})();
```

#### .Net

```clike
// Get the samples from https://github.com/adobe/PDFServices.NET.SDK.Samples
// Run the sample:
// cd AutotagPDF/
// dotnet run AutotagPDF.csproj

namespace AutotagPDF
{
    class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));

        static void Main()
        {
            //Configure the logging
            ConfigureLogging();
            try
            {
                // Initial setup, create credentials instance.
                Credentials credentials = Credentials.ServicePrincipalCredentialsBuilder()
                    .WithClientId("PDF_SERVICES_CLIENT_ID")
                    .WithClientSecret("PDF_SERVICES_CLIENT_SECRET")
                    .Build();

                //Create an ExecutionContext using credentials and create a new operation instance.
                ExecutionContext executionContext = ExecutionContext.Create(credentials);
                AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.CreateNew();

                // Provide an input FileRef for the operation
                autotagPDFOperation.SetInput(FileRef.CreateFromLocalFile(@"autotagPDFInput.pdf"));

                // Execute the operation
                AutotagPDFOutput autotagPDFOutput = autotagPDFOperation.Execute(executionContext);

                // Save the output files at the specified location
                autotagPDFOutput.GetTaggedPDF().SaveAs(Directory.GetCurrentDirectory() + "autotagPDFOutput.pdf");
            }
            catch (ServiceUsageException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (ServiceApiException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (SDKException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (IOException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (Exception ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
        }

        static void ConfigureLogging()
        {
            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());
            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));
        }
    }
}
```

#### Java

```javascript
// Get the samples from https://github.com/adobe/pdfservices-java-sdk-samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDF

public class AutotagPDF {
    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(AutotagPDF.class);

    public static void main(String[] args) {

        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/autotagPDFInput.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                System.getenv("PDF_SERVICES_CLIENT_ID"),
                System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

            // Creates a new job instance
            AutotagPDFJob autotagPDFJob = new AutotagPDFJob(asset);

            // Submit the job and gets the job result
            String location = pdfServices.submit(autotagPDFJob);
            PDFServicesResponse<AutotagPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, AutotagPDFResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getTaggedPDF();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/autotagPDFOutput.pdf").toPath());
            LOGGER.info("Saving asset at output/autotagPDFOutput.pdf");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();

        } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
            LOGGER.error("Exception encountered while executing operation", ex);
        }
    }
}
```

#### Python

```python
# Get the samples from https://github.com/adobe/pdfservices-python-sdk-samples
# Run the sample:
# python src/autotagpdf/autotag_pdf.py

logging.basicConfig(level=os.environ.get('LOGLEVEL', 'INFO'))

try:
    # get base path.
    base_path = str(Path(__file__).parents[2])

    # Initial setup, create credentials instance.
    credentials = Credentials.service_principal_credentials_builder()
        .with_client_id('PDF_SERVICES_CLIENT_ID')
        .with_client_secret('PDF_SERVICES_CLIENT_SECRET')
        .build()

    # Create an ExecutionContext using credentials and create a new operation instance.
    execution_context = ExecutionContext.create(credentials)
    autotag_pdf_operation = AutotagPDFOperation.create_new()

    # Set operation input from a source file.
    input_file_path = 'autotagPdfInput.pdf'
    source = FileRef.create_from_local_file(base_path + '/resources/' + input_file_path)
    autotag_pdf_operation.set_input(source)

    # Execute the operation.
    autotag_pdf_output: AutotagPDFOutput = autotag_pdf_operation.execute(execution_context)

    input_file_name = Path(input_file_path).stem
    base_output_path = base_path + '/output/AutotagPDF/'

    Path(base_output_path).mkdir(parents=True, exist_ok=True)
    tagged_pdf_path = f'{base_output_path}{input_file_name}-tagged.pdf'

    # Save the result to the specified location.
    autotag_pdf_output.get_tagged_pdf().save_as(tagged_pdf_path)

except (ServiceApiException, ServiceUsageException, SdkException) as e:
    logging.exception(f'Exception encountered while executing operation: {e}')
```
