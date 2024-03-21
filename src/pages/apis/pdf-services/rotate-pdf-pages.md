---
title: Adobe Developer — PDF Services API  — Rotate PDF Pages
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link linking rotate-page"/>

### Rotate a page in a PDF file

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/rotate-pages/)

Rotate a page in an existing document.

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
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718f",
    "pageActions": [
        {
            "rotate": {
                "angle": 90,
                "pageRanges": [
                    {
                        "start": 1
                    }
                ]
            }
        },
        {
            "rotate": {
                "angle": 180,
                "pageRanges": [
                    {
                        "start": 2,
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
// node src/rotatepages/rotate-pdf-pages.js

const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    PageRanges,
    RotatePagesParams,
    Angle,
    RotatePagesJob,
    RotatePagesResult,
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
        readStream = fs.createReadStream("resources/rotatePagesInput.pdf");
        const inputAsset = await pdfServices.upload({
            readStream,
            mimeType: MimeType.PDF
        });

        // First set of page ranges for rotating the specified pages of the input PDF file
        const firstPageRange = getFirstPageRangeForRotation();

        // Second set of page ranges for rotating the specified pages of the input PDF file
        const secondPageRange = getSecondPageRangeForRotation();

        // Create parameters for the job
        const params = new RotatePagesParams()
            .setAngleToRotatePagesBy(Angle._90, firstPageRange)
            .setAngleToRotatePagesBy(Angle._180, secondPageRange);

        // Creates a new job instance
        const job = new RotatePagesJob({
            inputAsset,
            params
        });

        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({
            job
        });
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: RotatePagesResult
        });

        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.asset;
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

function getFirstPageRangeForRotation() {
    // Specify pages for rotation.
    const firstPageRange = new PageRanges();
    // Add page 1.
    firstPageRange.addSinglePage(1);
    // Add pages 3 to 4.
    firstPageRange.addRange(3, 4);
    return firstPageRange;
}

// Generates a string containing a directory structure and file name for the output file
function createOutputFilePath() {
    const filePath = "output/RotatePages/";
    const date = new Date();
    const dateString = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
        ("0" + date.getDate()).slice(-2) + "T" + ("0" + date.getHours()).slice(-2) + "-" +
        ("0" + date.getMinutes()).slice(-2) + "-" + ("0" + date.getSeconds()).slice(-2);
    fs.mkdirSync(filePath, {
        recursive: true
    });
    return (`${filePath}rotate${dateString}.pdf`);
}

```

#### .Net

```clike
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd RotatePDFPages/
// dotnet run RotatePDFPages.csproj

namespace RotatePDFPages
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
                RotatePagesOperation rotatePagesOperation = RotatePagesOperation.CreateNew();

                // Set operation input from a source file.
                FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"rotatePagesInput.pdf");
                rotatePagesOperation.SetInput(sourceFileRef);

                // Sets angle by 90 degrees (in clockwise direction) for rotating the specified pages of the input PDF file.
                PageRanges firstPageRange = GetFirstPageRangeForRotation();
                rotatePagesOperation.SetAngleToRotatePagesBy(Angle._90, firstPageRange);

                // Sets angle by 180 degrees (in clockwise direction) for rotating the specified pages of the input PDF file.
                PageRanges secondPageRange = GetSecondPageRangeForRotation();
                rotatePagesOperation.SetAngleToRotatePagesBy(Angle._180, secondPageRange);

                // Execute the operation.
                FileRef result = rotatePagesOperation.Execute(executionContext);

                // Save the result to the specified location.
                result.SaveAs(Directory.GetCurrentDirectory() + "/output/rotatePagesOutput.pdf");
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

        private static PageRanges GetFirstPageRangeForRotation()
        {
            // Specify pages for rotation.
            PageRanges firstPageRange = new PageRanges();
            // Add page 1.
            firstPageRange.AddSinglePage(1);

            // Add pages 3 to 4.
            firstPageRange.AddRange(3, 4);
            return firstPageRange;
        }

        private static PageRanges GetSecondPageRangeForRotation()
        {
            // Specify pages for rotation.
            PageRanges secondPageRange = new PageRanges();
            // Add page 2.
            secondPageRange.AddSinglePage(2);

            return secondPageRange;
        }
    }
}
```

#### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.rotatepages.RotatePDFPages

public class RotatePDFPages {

    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(RotatePDFPages.class);

    public static void main(String[] args) {
        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/rotatePagesInput.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                    System.getenv("PDF_SERVICES_CLIENT_ID"),
                    System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

            // First set of page ranges for rotating the specified pages of the input PDF file.
            PageRanges firstPageRange = getFirstPageRangeForRotation();

            // Second set of page ranges for rotating the specified pages of the input PDF file.
            PageRanges secondPageRange = getSecondPageRangeForRotation();

            // Create parameters for the job
            RotatePagesParams rotatePagesParams = RotatePagesParams.rotatePagesParamsBuilder()
                    .withAngleToRotatePagesBy(Angle._90, firstPageRange)
                    .withAngleToRotatePagesBy(Angle._180, secondPageRange)
                    .build();

            // Creates a new job instance
            RotatePagesJob rotatePagesJob = new RotatePagesJob(asset, rotatePagesParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(rotatePagesJob);
            PDFServicesResponse<RotatePagesResult> pdfServicesResponse = pdfServices.getJobResult(location, RotatePagesResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/rotatePagesOutput.pdf").toPath());
            LOGGER.info("Saving asset at output/rotatePagesOutput.pdf");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();

        } catch (IOException | ServiceApiException | SDKException | ServiceUsageException e) {
            LOGGER.error("Exception encountered while executing operation", e);
        }
    }

    private static PageRanges getFirstPageRangeForRotation() {
        // Specify pages for rotation
        PageRanges firstPageRange = new PageRanges();
        // Add page 1
        firstPageRange.addSinglePage(1);

        // Add pages 3 to 4

        firstPageRange.addRange(3, 4);
        return firstPageRange;
    }

    private static PageRanges getSecondPageRangeForRotation() {
        // Specify pages for rotation.
        PageRanges secondPageRange = new PageRanges();
        // Add page 2.
        secondPageRange.addSinglePage(2);

        return secondPageRange;
    }
}
```
