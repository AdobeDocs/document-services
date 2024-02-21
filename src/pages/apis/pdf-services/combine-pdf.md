---
title: Adobe Developer — PDF Services API  —  Combine PDF
---

<TextBlock slots="heading, buttons, text, text1"  theme="dark" hasCodeBlock className="bgBlue link linking combine-pdf"/>

### Combine multiple documents into a pdf file

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/combine-pdf/)

Combine two or more documents into a single PDF file

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Combine-PDF) and quickly try our APIs using the Postman collections.

<CodeBlock slots="heading, code" repeat="4" languages="curl, js,.net,java" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Combine-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/combinepdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assets": [
        {
            "assetID": "urn:aaid:AS:UE1:23c30ee0-2c4d-46d6-87f2-087832fca718"
        },
        {
            "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
        }
    ]
}'

// Legacy API can be found here
// https://documentcloud.adobe.com/document-services/index.html#post-combinePDF
```

#### Node js

```js
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/combinepdf/combine-pdf.js

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
        combineFilesOperation = PDFServicesSdk.CombineFiles.Operation.createNew();

    // Set operation input from a source file.
    const combineSource1 = PDFServicesSdk.FileRef.createFromLocalFile('resources/combineFilesInput1.pdf'),
        combineSource2 = PDFServicesSdk.FileRef.createFromLocalFile('resources/combineFilesInput2.pdf');
    combineFilesOperation.addInput(combineSource1);
    combineFilesOperation.addInput(combineSource2);

    // Execute the operation and Save the result to the specified location.
    combineFilesOperation.execute(executionContext)
        .then(result => result.saveAsFile('output/combineFilesOutput.pdf'))
        .catch(err => {
            if (err instanceof PDFServicesSdk.Error.ServiceApiError
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
// cd CombinePDF/
// dotnet run CombinePDF.csproj

namespace CombinePDF
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
                CombineFilesOperation combineFilesOperation = CombineFilesOperation.CreateNew();

                // Add operation input from source files.
                FileRef combineSource1 = FileRef.CreateFromLocalFile(@"combineFilesInput1.pdf");
                FileRef combineSource2 = FileRef.CreateFromLocalFile(@"combineFilesInput2.pdf");
                combineFilesOperation.AddInput(combineSource1);
                combineFilesOperation.AddInput(combineSource2);

                // Execute the operation.
                FileRef result = combineFilesOperation.Execute(executionContext);

                // Save the result to the specified location.
                result.SaveAs(Directory.GetCurrentDirectory() + "/output/combineFilesOutput.pdf");

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
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.combinepdf.CombinePDF

public class CombinePDF {

    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(CombinePDF.class);

    public static void main(String[] args) {
        try (InputStream inputStream1 = Files.newInputStream(new File("src/main/resources/combineFilesInput1.pdf").toPath()); InputStream inputStream2 = Files.newInputStream(new File("src/main/resources/combineFilesInput2.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                System.getenv("PDF_SERVICES_CLIENT_ID"),
                System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            List < StreamAsset > streamAssets = new ArrayList < > ();
            streamAssets.add(new StreamAsset(inputStream1, PDFServicesMediaType.PDF.getMediaType()));
            streamAssets.add(new StreamAsset(inputStream2, PDFServicesMediaType.PDF.getMediaType()));
            List < Asset > assets = pdfServices.uploadAssets(streamAssets);

            // Create parameters for the job
            CombinePDFParams combinePDFParams = CombinePDFParams.combinePDFParamsBuilder()
                .addAsset(assets.get(0))
                .addAsset(assets.get(1))
                .build();

            // Creates a new job instance
            CombinePDFJob combinePDFJob = new CombinePDFJob(combinePDFParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(combinePDFJob);
            PDFServicesResponse < CombinePDFResult > pdfServicesResponse = pdfServices.getJobResult(location, CombinePDFResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/combineFilesOutput.pdf").toPath());
            LOGGER.info("Saving asset at output/combineFilesOutput.pdf");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
        } catch (IOException | ServiceApiException | SDKException | ServiceUsageException e) {
            LOGGER.error("Exception encountered while executing operation", e);
        }
    }
}
```
