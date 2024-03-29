---
title: Adobe Developer — PDF Services API  —  Delete PDF
---

<TextBlock slots="heading, buttons, text, text1"  theme="dark" hasCodeBlock className="bgBlue link linking delete-page"/>

### Delete a page from a PDF file

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/delete-pages/)

Delete one or more pages from a document

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Page-Manipulation) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="4" languages="curl,JS,.NET,Java" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Page-Manipulation

curl --location --request POST 'https://pdf-services.adobe.io/operation/pagemanipulation' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "pageActions": [
        {
            "delete": {
                "pageRanges": [
                    {
                        "start": 1,
                        "end": 2
                    }
                ]
            }
        }
    ]
}'

// Legacy API can be found here
// https://documentcloud.adobe.com/document-services/index.html#post-pageManipulation
```

#### Node js

```js
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/replacepages/replace-pdf-pages.js

const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');

const getPageRangesForDeletion = () => {
    // Specify pages for deletion.
    const pageRangesForDeletion = new PDFServicesSdk.PageRanges();
    // Add page 1.
    pageRangesForDeletion.addSinglePage(1);

    // Add pages 3 to 4.
    pageRangesForDeletion.addPageRange(3, 4);
    return pageRangesForDeletion;
};

try {
    // Initial setup, create credentials instance.
    const credentials =  PDFServicesSdk.Credentials
        .servicePrincipalCredentialsBuilder()
        .withClientId("PDF_SERVICES_CLIENT_ID")
        .withClientSecret("PDF_SERVICES_CLIENT_SECRET")
        .build();

    // Create an ExecutionContext using credentials and create a new operation instance.
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
    deletePagesOperation = PDFServicesSdk.DeletePages.Operation.createNew();

    // Set operation input from a source file.
    const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/deletePagesInput.pdf');
    deletePagesOperation.setInput(input);

    // Delete pages of the document (as specified by PageRanges).
    const pageRangesForDeletion = getPageRangesForDeletion();
    deletePagesOperation.setPageRanges(pageRangesForDeletion);

    // Execute the operation and Save the result to the specified location.
    deletePagesOperation.execute(executionContext)
        .then(result => result.saveAsFile('output/deletePagesOutput.pdf'))
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
// cd DeletePDFPages/
// dotnet run DeletePDFPages.csproj

namespace DeletePDFPages
{
    class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));
        static void Main()
        {
            // Configure the logging
            ConfigureLogging();
            try
            {
                // Initial setup, create credentials instance.
                Credentials credentials = Credentials.ServicePrincipalCredentialsBuilder()
                    .WithClientId("PDF_SERVICES_CLIENT_ID")
                    .WithClientSecret("PDF_SERVICES_CLIENT_SECRET")
                    .Build();

                // Create an ExecutionContext using credentials.
                ExecutionContext executionContext = ExecutionContext.Create(credentials);

                // Create a new operation instance
                DeletePagesOperation deletePagesOperation = DeletePagesOperation.CreateNew();

                // Set operation input from a source file.
                FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"deletePagesInput.pdf");
                deletePagesOperation.SetInput(sourceFileRef);

                // Delete pages of the document (as specified by PageRanges).
                PageRanges pageRangeForDeletion = GetPageRangeForDeletion();
                deletePagesOperation.SetPageRanges(pageRangeForDeletion);

                // Execute the operation.
                FileRef result = deletePagesOperation.Execute(executionContext);

                // Save the result to the specified location.
                result.SaveAs(Directory.GetCurrentDirectory() + "/output/deletePagesOutput.pdf");
            }
            catch (ServiceUsageException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            // Catch more errors here . . .
        }

        private static PageRanges GetPageRangeForDeletion()
        {
            // Specify pages for deletion.
            PageRanges pageRangeForDeletion = new PageRanges();
            // Add page 1.
            pageRangeForDeletion.AddSinglePage(1);

            // Add pages 3 to 4.
            pageRangeForDeletion.AddRange(3, 4);
            return pageRangeForDeletion;
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
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.deletepages.DeletePDFPages


public class DeletePDFPages {

// Initialize the logger.
private static final Logger LOGGER = LoggerFactory.getLogger(DeletePDFPages.class);

public static void main(String[] args) {
        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/deletePagesInput.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                    System.getenv("PDF_SERVICES_CLIENT_ID"),
                    System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

            // Delete pages of the document (as specified by PageRanges).
            PageRanges pageRangeForDeletion = getPageRangeForDeletion();

            // Create parameters for the job
            DeletePagesParams deletePagesParams = new DeletePagesParams(pageRangeForDeletion);

            // Creates a new job instance
            DeletePagesJob deletePagesJob = new DeletePagesJob(asset, deletePagesParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(deletePagesJob);
            PDFServicesResponse<DeletePagesResult> pdfServicesResponse = pdfServices.getJobResult(location, DeletePagesResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/deletePagesOutput.pdf").toPath());
            LOGGER.info("Saving asset at output/deletePagesOutput.pdf");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
       } catch (IOException | ServiceApiException | SDKException | ServiceUsageException e) {
           LOGGER.error("Exception encountered while executing operation", e);
       }
   }

    private static PageRanges getPageRangeForDeletion() {
        // Specify pages for deletion
        PageRanges pageRangeForDeletion = new PageRanges();
        // Add page 1
        pageRangeForDeletion.addSinglePage(1);

          // Add pages 3 to 4
        pageRangeForDeletion.addRange(3, 4);
        return pageRangeForDeletion;
    }
}
```
