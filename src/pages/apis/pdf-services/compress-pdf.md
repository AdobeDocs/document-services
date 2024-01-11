---
title: Adobe Developer — PDF Services API  —  Compress - PDF
---

<TextBlock slots="heading, buttons, text, text1, text2" theme="dark" hasCodeBlock className="bgBlue link linking compress-pdf"/>

### Compress a pdf file

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/compress-pdf/)

Reduce the size of PDF files by compressing to smaller sizes for lower bandwidth viewing, downloading, and sharing.

Support for multiple compression levels to retain the quality of images and graphics

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Compress-PDF) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="4" languages="curl,JS,.NET, Java" />

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

const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');

try {
    // Initial setup, create credentials instance.
    const credentials =  PDFServicesSdk.Credentials
        .servicePrincipalCredentialsBuilder()
        .withClientId("PDF_SERVICES_CLIENT_ID")
        .withClientSecret("PDF_SERVICES_CLIENT_SECRET")
        .build();

    // Create an ExecutionContext using credentials and create a new operation instance.
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
        compressPDF = PDFServicesSdk.CompressPDF,
        compressPDFOperation = compressPDF.Operation.createNew();

    // Set operation input from a source file.
    const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/compressPDFInput.pdf');
    compressPDFOperation.setInput(input);

    // Execute the operation and Save the result to the specified location.
    compressPDFOperation.execute(executionContext)
        .then(result => result.saveAsFile('output/compressPDFOutput.pdf'))
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
