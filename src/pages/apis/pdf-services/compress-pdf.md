---
title: Adobe Developer — PDF Services API  —  Compress - PDF
---

<TextBlock slots="heading, buttons, text, text1, text2" theme="dark" hasCodeBlock className="bgBlue link linking compress-pdf"/>

### Compress a pdf file

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/compress-pdf/)

Reduce the size of PDF files by compressing to smaller sizes for lower bandwidth viewing, downloading, and sharing.

Support for multiple compression levels to retain the quality of images and graphics

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Compress-PDF) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="5" languages="curl,JS,.NET, Java,python" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Compress-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/compresspdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
}'

// Legacy API can be found here
// https://documentcloud.adobe.com/document-services/index.html#post-compressPDF
```

#### Node js

```js
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/compresspdf/compress-pdf.js

const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    CompressPDFJob,
    CompressPDFResult,
    SDKError,
    ServiceUsageError,
    ServiceApiError
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
        readStream = fs.createReadStream("./compressPDFInput.pdf");
        const inputAsset = await pdfServices.upload({
            readStream,
            mimeType: MimeType.PDF
        });

        // Creates a new job instance
        const job = new CompressPDFJob({
            inputAsset
        });

        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({
            job
        });
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: CompressPDFResult
        });

        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.asset;
        const streamAsset = await pdfServices.getContent({
            asset: resultAsset
        });

        // Creates an output stream and copy stream asset's content to it
        const outputFilePath = "./compressPDFOutput.pdf";
        console.log(`Saving asset at ${outputFilePath}`);

        const outputStream = fs.createWriteStream(outputFilePath);
        streamAsset.readStream.pipe(outputStream);
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
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd CompressPDF/
// dotnet run CompressPDF.csproj

namespace CompressPDF
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

                // Create an ExecutionContext using credentials and create a new operation instance.
                ExecutionContext executionContext = ExecutionContext.Create(credentials);
                CompressPDFOperation compressPDFOperation = CompressPDFOperation.CreateNew();

                // Set operation input from a source file.
                FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"compressPDFInput.pdf");
                compressPDFOperation.SetInput(sourceFileRef);

                // Execute the operation.
                FileRef result = compressPDFOperation.Execute(executionContext);

                // Save the result to the specified location.
                result.SaveAs(Directory.GetCurrentDirectory() + "/output/compressPDFOutput.pdf");
            }
            catch (ServiceUsageException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            // Catch more errors here . . .
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
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.compresspdf.CompressPDF

public class CompressPDF {
    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(CompressPDF.class);

    public static void main(String[] args) {

        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/compressPDFInput.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                    System.getenv("PDF_SERVICES_CLIENT_ID"),
                    System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

            // Creates a new job instance
            CompressPDFJob compressPDFJob = new CompressPDFJob(asset);

            // Submit the job and gets the job result
            String location = pdfServices.submit(compressPDFJob);
            PDFServicesResponse<CompressPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, CompressPDFResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creating an output stream and copying stream asset content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/compressPDFOutput.pdf").toPath());
            LOGGER.info("Saving asset at output/compressPDFOutput.pdf");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
        } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {
            LOGGER.error("Exception encountered while executing operation", ex);
        }
    }
}
```

#### Python 
```python
# Get the samples https://github.com/adobe/pdfservices-python-sdk-samples
# Run the sample:
# python src/compresspdf/compress_pdf.py

# Initialize the logger
logging.basicConfig(level=logging.INFO)


class CompressPDF:
    def __init__(self):
        try:
            file = open("./compressPDFInput.pdf", "rb")
            input_stream = file.read()
            file.close()

            # Initial setup, create credentials instance
            credentials = ServicePrincipalCredentials(
                client_id=os.getenv("PDF_SERVICES_CLIENT_ID"),
                client_secret=os.getenv("PDF_SERVICES_CLIENT_SECRET"),
            )

            # Creates a PDF Services instance
            pdf_services = PDFServices(credentials=credentials)

            # Creates an asset(s) from source file(s) and upload
            input_asset = pdf_services.upload(
                input_stream=input_stream, mime_type=PDFServicesMediaType.PDF
            )

            # Creates a new job instance
            compress_pdf_job = CompressPDFJob(input_asset=input_asset)

            # Submit the job and gets the job result
            location = pdf_services.submit(compress_pdf_job)
            pdf_services_response = pdf_services.get_job_result(
                location, CompressPDFResult
            )

            # Get content from the resulting asset(s)
            result_asset: CloudAsset = pdf_services_response.get_result().get_asset()
            stream_asset: StreamAsset = pdf_services.get_content(result_asset)

            # Creates an output stream and copy stream asset's content to it
            output_file_path = "output/CompressPDF.pdf"
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f"Exception encountered while executing operation: {e}")


if __name__ == "__main__":
    CompressPDF()
```