---
title: Adobe Developer — PDF Services API  —  Convert PDF
---

<TextBlock slots="heading, buttons, text, text1, text2" theme="dark" hasCodeBlock className="bgBlue link linking convert-pdf"/>

### Convert a PDF file to other formats

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/export-pdf/)

Convert existing PDFs to popular formats, such as Microsoft Word, Excel, and PowerPoint, as well as text and image

Support for PDF to DOC, PDF to DOCX, PDF to JPEG, PDF to PNG, PDF to PPTX, PDF to RTF, PDF to XLSX

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Export-PDF) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="5" languages="curl,JS,.NET, Java,python" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Export-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/exportpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "targetFormat": "docx"
}'

// Legacy API can be found here
// https://documentcloud.adobe.com/document-services/index.html#post-exportPDF
```

#### Node js

```js
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/exportpdftoimages/export-pdf-to-jpeg.js

const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    ExportPDFToImagesJob,
    ExportPDFToImagesTargetFormat,
    ExportPDFToImagesOutputType,
    ExportPDFToImagesParams,
    ExportPDFToImagesResult,
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
        readStream = fs.createReadStream("./exportPDFToImageInput.pdf");
        const inputAsset = await pdfServices.upload({
            readStream,
            mimeType: MimeType.PDF
        });

        // Create parameters for the job
        const params = new ExportPDFToImagesParams({
            targetFormat: ExportPDFToImagesTargetFormat.JPEG,
            outputType: ExportPDFToImagesOutputType.LIST_OF_PAGE_IMAGES
        });

        // Creates a new job instance
        const job = new ExportPDFToImagesJob({
            inputAsset,
            params
        });

        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({
            job
        });
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: ExportPDFToImagesResult
        });

        // Get content from the resulting asset(s)
        const resultAssets = pdfServicesResponse.result.assets;

        for (let i = 0; i < resultAssets.length; i++) {
            const _outputFilePath = "./exportPDFToImageOutput_${i}.jpeg";
            console.log(`Saving asset at ${_outputFilePath}`);

            const streamAsset = await pdfServices.getContent({
                asset: resultAssets[i]
            });

            // Creates an output stream and copy stream asset's content to it
            const outputStream = fs.createWriteStream(_outputFilePath);
            streamAsset.readStream.pipe(outputStream);
        }
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
// cd ExportPDFToDocx/
// dotnet run ExportPDFToDocx.csproj

 namespace ExportPDFToDocx
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
                ExportPDFOperation exportPdfOperation = ExportPDFOperation.CreateNew(ExportPDFTargetFormat.DOCX);

                // Set operation input from a local PDF file
                FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"exportPdfInput.pdf");
                exportPdfOperation.SetInput(sourceFileRef);

                // Execute the operation.
                FileRef result = exportPdfOperation.Execute(executionContext);

                // Save the result to the specified location.
                result.SaveAs(Directory.GetCurrentDirectory() + "/output/exportPdfOutput.docx");
            }
            catch (ServiceUsageException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            // Catch more errors here. . .
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
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.exportpdf.ExportPDFToDOCX

public class ExportPDFToDOCX {

    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(ExportPDFToDOCX.class);

    public static void main(String[] args) {

        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/exportPDFInput.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                    System.getenv("PDF_SERVICES_CLIENT_ID"),
                    System.getenv("PDF_SERVICES_CLIENT_SECRET"));
            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

            // Create parameters for the job
            ExportPDFParams exportPDFParams = ExportPDFParams.exportPDFParamsBuilder(ExportPDFTargetFormat.DOCX)
                .build();

            // Creates a new job instance
            ExportPDFJob exportPDFJob = new ExportPDFJob(asset, exportPDFParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(exportPDFJob);
            PDFServicesResponse<ExportPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, ExportPDFResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/exportPdfOutput.docx").toPath());
            LOGGER.info("Saving asset at output/exportPdfOutput.docx");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);

        } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
            LOGGER.error("Exception encountered while executing operation", ex);
        }
    }
}
```

#### Python

```python
# Get the samples https://github.com/adobe/pdfservices-python-sdk-samples
# Run the sample:
# python python src/exportpdftoimages/export_pdf_to_jpeg.py

# Initialize the logger
logging.basicConfig(level=logging.INFO)


class ExportPDFtoJPEG:
    def __init__(self):
        try:
            file = open("./exportPDFToImageInput.pdf", "rb")
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

            # Create parameters for the job
            export_pdf_to_images_params = ExportPDFtoImagesParams(
                export_pdf_to_images_target_format=ExportPDFToImagesTargetFormat.JPEG,
                export_pdf_to_images_output_type=ExportPDFToImagesOutputType.LIST_OF_PAGE_IMAGES,
            )

            # Creates a new job instance
            export_pdf_to_images_job = ExportPDFtoImagesJob(
                input_asset=input_asset,
                export_pdf_to_images_params=export_pdf_to_images_params,
            )

            # Submit the job and gets the job result
            location = pdf_services.submit(export_pdf_to_images_job)
            pdf_services_response = pdf_services.get_job_result(
                location, ExportPDFtoImagesResult
            )

            # Get content from the resulting asset(s)
            result_assets = pdf_services_response.get_result().get_assets()

            output_file_path = "output/ExportPDFToImages"

            for (asset_index, asset) in enumerate(result_assets):
                save_output_file_path = f"{output_file_path}_{asset_index}.jpeg"
                stream_asset: StreamAsset = pdf_services.get_content(asset)
                # Creates an output stream and copy stream asset's content to it
                with open(save_output_file_path, "wb") as file:
                    file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f"Exception encountered while executing operation: {e}")


if __name__ == "__main__":
    ExportPDFtoJPEG()
```