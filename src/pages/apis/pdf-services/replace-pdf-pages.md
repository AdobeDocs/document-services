---
title: Adobe Developer — PDF Services API  — Replace PDF Pages
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link linking replace-page"/>

### Replace a page within a PDF file

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/replace-pages/)

Replace one or more pages with another page in an existing document

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Combine-PDF) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="4" languages="curl,JS,.NET,Java" />

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
            "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
            "pageRanges": [
                {
                    "start": 1,
                    "end": 1
                }
            ]
        },
        {
            "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
            "pageRanges": [
                {
                    "start": 2
                }
            ]
        },
        {
            "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
            "pageRanges": [
                {
                    "start": 3
                }
            ]
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
// node src/replacepages/replace-pdf-pages.js

const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');

const getPageRangesForFirstFile = () => {
    // Specify pages of the first file for replacing the page of base PDF file.
    const pageRangesForFirstFile = new PDFServicesSdk.PageRanges();
    // Add pages 1 to 3.
    pageRangesForFirstFile.addPageRange(1, 3);

    // Add page 4.
    pageRangesForFirstFile.addSinglePage(4);

    return pageRangesForFirstFile;
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
    replacePagesOperation = PDFServicesSdk.ReplacePages.Operation.createNew();

    // Set operation base input from a source file.
    const baseInputFile = PDFServicesSdk.FileRef.createFromLocalFile('resources/baseInput.pdf');
    replacePagesOperation.setBaseInput(baseInputFile);

    // Create a FileRef instance using a local file.
    const firstInputFile = PDFServicesSdk.FileRef.createFromLocalFile('resources/replacePagesInput1.pdf'),
    pageRanges = getPageRangesForFirstFile();

    // Adds the pages (specified by the page ranges) of the input PDF file for replacing the page of the base PDF file.
    replacePagesOperation.addPagesForReplace(1, firstInputFile, pageRanges);

    // Create a FileRef instance using a local file.
    const secondInputFile = PDFServicesSdk.FileRef.createFromLocalFile('resources/replacePagesInput2.pdf');

    // Adds all the pages of the input PDF file for replacing the page of the base PDF file.
    replacePagesOperation.addPagesForReplace(3, secondInputFile);

    // Execute the operation and Save the result to the specified location.
    replacePagesOperation.execute(executionContext)
    .then(result => result.saveAsFile('output/replacePagesOutput.pdf'))
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
// cd ReplacePDFPages/
// dotnet run ReplacePDFPages.csproj

namespace ReplacePDFPages
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

                // Create an ExecutionContext using credentials.
                ExecutionContext executionContext = ExecutionContext.Create(credentials);

                // Create a new operation instance
                ReplacePagesOperation replacePagesOperation = ReplacePagesOperation.CreateNew();

                // Set operation base input from a source file.
                FileRef baseSourceFile = FileRef.CreateFromLocalFile(@"baseInput.pdf");
                replacePagesOperation.SetBaseInput(baseSourceFile);

                // Create a FileRef instance using a local file.
                FileRef firstInputFile = FileRef.CreateFromLocalFile(@"replacePagesInput1.pdf");
                PageRanges pageRanges = GetPageRangeForFirstFile();

                // Adds the pages (specified by the page ranges) of the input PDF file for replacing the page of the base PDF file.
                replacePagesOperation.AddPagesForReplace(firstInputFile, pageRanges, 1);

                // Create a FileRef instance using a local file.
                FileRef secondInputFile = FileRef.CreateFromLocalFile(@"replacePagesInput2.pdf");

                // Adds all the pages of the input PDF file for replacing the page of the base PDF file.
                replacePagesOperation.AddPagesForReplace(secondInputFile, 3);

                // Execute the operation.
                FileRef result = replacePagesOperation.Execute(executionContext);

                // Save the result to the specified location.
                result.SaveAs(Directory.GetCurrentDirectory() + "/output/replacePagesOutput.pdf");
            }
            catch (ServiceUsageException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            // Catch more errors here . . .
        }

        private static PageRanges GetPageRangeForFirstFile()
        {
            // Specify pages of the first file for replacing the page of base PDF file.
            PageRanges pageRanges = new PageRanges();
            // Add pages 1 to 3.
            pageRanges.AddRange(1, 3);

            // Add page 4.
            pageRanges.AddSinglePage(4);

            return pageRanges;
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
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.replacepages.ReplacePDFPages

public class ReplacePDFPages {

    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(ReplacePDFPages.class);

    public static void main(String[] args) {
        try (InputStream baseInputStream = Files.newInputStream(new File("src/main/resources/baseInput.pdf").toPath());
            InputStream inputStream1 = Files.newInputStream(new File("src/main/resources/replacePagesInput1.pdf").toPath());
            InputStream inputStream2 = Files.newInputStream(new File("src/main/resources/replacePagesInput2.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                    System.getenv("PDF_SERVICES_CLIENT_ID"),
                    System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset baseAsset = pdfServices.upload(baseInputStream, PDFServicesMediaType.PDF.getMediaType());
            Asset asset1 = pdfServices.upload(inputStream1, PDFServicesMediaType.PDF.getMediaType());
            Asset asset2 = pdfServices.upload(inputStream2, PDFServicesMediaType.PDF.getMediaType());

            PageRanges pageRanges = getPageRangeForFirstFile();

            // Create parameters for the job
            ReplacePagesParams replacePagesParams = ReplacePagesParams.replacePagesParamsBuilder(baseAsset)
                .addPagesForReplace(asset1, pageRanges, 1) // Add the first asset as input to the params, along with its page ranges and base page
                .addPagesForReplace(asset2, 3) // Add the second asset as input to the params, along with base page
                .build();

            // Creates a new job instance
            ReplacePagesPDFJob replacePagesPDFJob = new ReplacePagesPDFJob(replacePagesParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(replacePagesPDFJob);
            PDFServicesResponse<ReplacePagesResult> pdfServicesResponse = pdfServices.getJobResult(location, ReplacePagesResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/replacePagesOutput.pdf").toPath());
            LOGGER.info("Saving asset at output/replacePagesOutput.pdf");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();

        } catch (IOException | ServiceApiException | SDKException | ServiceUsageException e) {
            LOGGER.error("Exception encountered while executing operation", e);
        }
    }

    private static PageRanges getPageRangeForFirstFile() {
        // Specify pages of the first file for replacing the page of base PDF file
        PageRanges pageRanges = new PageRanges();
        // Add pages 1 to 3
        pageRanges.addRange(1, 3);

        // Add page 4
        pageRanges.addSinglePage(4);

        return pageRanges;
    }
}
```
