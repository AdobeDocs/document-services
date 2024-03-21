---
title: Adobe Developer — PDF Services API  — Extract PDF Content
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link linking pdf-content-extraction"/>

### PDF content extraction

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/extract-pdf/)

Extract text, images, tables, and more from native and scanned PDFs into a structured JSON file. PDF Extract API leverages AI technology to accurately identify text objects and understand the natural reading order of different elements such as headings, lists, and paragraphs spanning multiple columns or pages. Extract font styles with identification of metadata such as bold and italic text and their position within your PDF. Extracted content is output in a structured JSON file format with tables in CSV or XLSX and images saved as PNG.

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Extract-PDF) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="5" languages="curl, js,.net, Java" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Extract-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/extractpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "elementsToExtract": [
        "text"
    ]
}'

// Legacy API can be found here
// https://documentcloud.adobe.com/document-services/index.html#post-extractPDF
```

#### Node js

```js
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/extractpdf/extract-text-info-from-pdf.js

const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    ExtractPDFParams,
    ExtractElementType,
    ExtractPDFJob,
    ExtractPDFResult,
    SDKError,
    ServiceUsageError,
    ServiceApiError
} = require("@dcloud/pdfservices-node-sdk");
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
        readStream = fs.createReadStream("resources/extractPDFInput.pdf");
        const inputAsset = await pdfServices.upload({
            readStream,
            mimeType: MimeType.PDF
        });

        // Create parameters for the job
        const params = new ExtractPDFParams({
            elementsToExtract: [ExtractElementType.TEXT]
        });

        // Creates a new job instance
        const job = new ExtractPDFJob({
            inputAsset,
            params
        });

        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({
            job
        });
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: ExtractPDFResult
        });

        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.resource;
        const streamAsset = await pdfServices.getContent({
            asset: resultAsset
        });

        // Creates a write stream and copy stream asset's content to it
        const outputFilePath = createOutputFilePath();
        console.log(`Saving asset at ${outputFilePath}`);
        const writeStream = fs.createWriteStream(outputFilePath);
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

// Generates a string containing a directory structure and file name for the output file
function createOutputFilePath() {
    const filePath = "output/ExtractTextInfoFromPDF/";
    const date = new Date();
    const dateString = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
        ("0" + date.getDate()).slice(-2) + "T" + ("0" + date.getHours()).slice(-2) + "-" +
        ("0" + date.getMinutes()).slice(-2) + "-" + ("0" + date.getSeconds()).slice(-2);
    fs.mkdirSync(filePath, {
        recursive: true
    });
    return (`${filePath}extract${dateString}.zip`);
}
```

#### .Net

```clike
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd ExtractTextInfoFromPDF/
// dotnet run ExtractTextInfoFromPDF.csproj

namespace ExtractTextInfoFromPDF
{
    class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));
        static void Main()
        {
            // Configure the logging.
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
                ExtractPDFOperation extractPdfOperation = ExtractPDFOperation.CreateNew();

                // Set operation input from a source file.
                FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"extractPDFInput.pdf");
                extractPdfOperation.SetInputFile(sourceFileRef);

                // Build ExtractPDF options and set them into the operation.
                ExtractPDFOptions extractPdfOptions = ExtractPDFOptions.ExtractPDFOptionsBuilder()
                    .AddElementsToExtract(new List<ExtractElementType>(new []{ ExtractElementType.TEXT}))
                    .Build();
                extractPdfOperation .SetOptions(extractPdfOptions);

                // Execute the operation.
                FileRef result = extractPdfOperation.Execute(executionContext);

                // Save the result to the specified location.
                result.SaveAs(Directory.GetCurrentDirectory() + "/output/ExtractTextInfoFromPDF.zip");
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
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.extractpdf.ExtractTextInfoFromPDF

public class ExtractTextInfoFromPDF {

    private static final Logger LOGGER = LoggerFactory.getLogger(ExtractTextInfoFromPDF.class);

    public static void main(String[] args) {

        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/extractPdfInput.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                System.getenv("PDF_SERVICES_CLIENT_ID"),
                System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

            // Create parameters for the job
            ExtractPDFParams extractPDFParams = ExtractPDFParams.extractPDFParamsBuilder()
                .addElementsToExtract(Arrays.asList(ExtractElementType.TEXT)).build();

            // Creates a new job instance
            ExtractPDFJob extractPDFJob = new ExtractPDFJob(asset)
                .setParams(extractPDFParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(extractPDFJob);
            PDFServicesResponse<ExtractPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, ExtractPDFResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getResource();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/ExtractTextInfoFromPDF.zip").toPath());
            LOGGER.info("Saving asset at output/ExtractTextInfoFromPDF.zip");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();

        } catch (ServiceApiException | IOException | SDKException | ServiceUsageException e) {
            LOGGER.error("Exception encountered while executing operation", e);
        }
    }
}
```

#### Python

```py
# Get the samples from http://www.adobe.com/go/pdftoolsapi_python_sample
# Run the sample:
# python src/extractpdf/extract_txt_from_pdf.py

logging.basicConfig(level=os.environ.get("LOGLEVEL", "INFO"))

try:
    #get base path.
    base_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

    #Initial setup, create credentials instance.
    credentials = Credentials.service_principal_credentials_builder()
        .with_client_id('PDF_SERVICES_CLIENT_ID')
        .with_client_secret('PDF_SERVICES_CLIENT_SECRET')
        .build()

    #Create an ExecutionContext using credentials and create a new operation instance.
    execution_context = ExecutionContext.create(credentials)
    extract_pdf_operation = ExtractPDFOperation.create_new()

    #Set operation input from a source file.
    source = FileRef.create_from_local_file(base_path + "/resources/extractPdfInput.pdf")
    extract_pdf_operation.set_input(source)

    #Build ExtractPDF options and set them into the operation
    extract_pdf_options: ExtractPDFOptions = ExtractPDFOptions.builder() \
        .with_element_to_extract(ExtractElementType.TEXT) \
        .build()
    extract_pdf_operation.set_options(extract_pdf_options)

    #Execute the operation.
    result: FileRef = extract_pdf_operation.execute(execution_context)

    #Save the result to the specified location.
    result.save_as(base_path + "/output/ExtractTextInfoFromPDF.zip")
except (ServiceApiException, ServiceUsageException, SdkException):
    logging.exception("Exception encountered while executing operation")
```
