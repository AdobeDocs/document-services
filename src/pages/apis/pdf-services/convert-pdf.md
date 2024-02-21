---
title: Adobe Developer — PDF Services API  —  Convert PDF
---

<TextBlock slots="heading, buttons, text, text1, text2" theme="dark" hasCodeBlock className="bgBlue link linking convert-pdf"/>

### Convert a PDF file to other formats

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/export-pdf/)

Convert existing PDFs to popular formats, such as Microsoft Word, Excel, and PowerPoint, as well as text and image

Support for PDF to DOC, PDF to DOCX, PDF to JPEG, PDF to PNG, PDF to PPTX, PDF to RTF, PDF to XLSX

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Export-PDF) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="4" languages="curl,JS,.NET, Java" />

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
// node src/exportpdf/export-pdf-to-docx.js

const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');

try {
    // Initial setup, create credentials instance.
    const credentials =  PDFServicesSdk.Credentials
        .servicePrincipalCredentialsBuilder()
        .withClientId("PDF_SERVICES_CLIENT_ID")
        .withClientSecret("PDF_SERVICES_CLIENT_SECRET")
        .build();

    //Create an ExecutionContext using credentials and create a new operation instance.
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
        exportPDF = PDFServicesSdk.ExportPDF,
        exportPdfOperation = exportPDF.Operation.createNew(exportPDF.SupportedTargetFormats.DOCX);

    // Set operation input from a source file
    const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/exportPDFInput.pdf');
    exportPdfOperation.setInput(input);

    // Execute the operation and Save the result to the specified location.
    exportPdfOperation.execute(executionContext)
        .then(result => result.saveAsFile('output/exportPdfOutput.docx'))
        .catch(err => {
            if(err instanceof PDFServicesSdk.Error.ServiceApiError
                || err instanceof PDFServicesSdk.Error.ServiceUsageError) {
                console.log('Exception encountered while executing operation', err);
            } else {
                console.log('Exception encountered while executing operation', err);
            }
        });
} catch (err) {
    console.log('Exception encountered while executing operation', err);
}
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
            PDFServicesResponse < ExportPDFResult > pdfServicesResponse = pdfServices.getJobResult(location, ExportPDFResult.class);

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
