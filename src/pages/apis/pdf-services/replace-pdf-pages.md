---
title: Adobe Developer — PDF Services API  — Replace PDF Pages
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link linking replace-page"/>

### Replace a page within a PDF file

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/replace-pages/)

Replace one or more pages with another page in an existing document

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Combine-PDF) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="5" languages="curl,JS,.NET,Java,python" />

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

const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    PageRanges,
    InsertPagesResult,
    ReplacePagesJob,
    ReplacePagesParams,
    SDKError,
    ServiceUsageError,
    ServiceApiError
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");

(async () => {
    let baseReadStream;
    let readStream1;
    let readStream2;
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
        baseReadStream = fs.createReadStream("./baseInput.pdf");
        readStream1 = fs.createReadStream("./replacePagesInput1.pdf");
        readStream2 = fs.createReadStream("./replacePagesInput2.pdf");
        const [baseAsset, asset1, asset2] = await pdfServices.uploadAssets({
            streamAssets: [{
                readStream: baseReadStream,
                mimeType: MimeType.PDF
            }, {
                readStream: readStream1,
                mimeType: MimeType.PDF
            }, {
                readStream: readStream2,
                mimeType: MimeType.PDF
            }]
        });

        // Create parameters for the job
        const params = new ReplacePagesParams(baseAsset)
            // Add the first asset as input to the params, along with its page ranges and base page
            .addPagesForReplace({
                asset: asset1,
                pageRanges: getPageRangesForFirstFile(),
                basePage: 1
            })
            // Add the second asset as input to the params, along with base page
            .addPagesForReplace({
                asset: asset2,
                basePage: 3
            });

        // Create a new job instance
        const job = new ReplacePagesJob({
            params
        });

        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({
            job
        });
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: InsertPagesResult
        });

        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.asset;
        const streamAsset = await pdfServices.getContent({
            asset: resultAsset
        });

        // Creates an output stream and copy result asset's content to it
        const outputFilePath = "./replacePagesOutput.pdf";
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
        baseReadStream?.destroy();
        readStream1?.destroy();
        readStream2?.destroy();
    }
})();

function getPageRangesForFirstFile() {
    // Specify pages of the first file for replacing the page of base PDF file
    const pageRanges = new PageRanges();
    // Add pages 1 to 3
    pageRanges.addRange(1, 3);
    // Add page 4
    pageRanges.addSinglePage(4);
    return pageRanges;
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

#### Python 
```python
# Get the samples from https://github.com/adobe/pdfservices-python-sdk-samples
# Run the sample:
# python src/replacepages/replace_pdf_pages.py

# Initialize the logger
logging.basicConfig(level=logging.INFO)

class ReplacePDFPages:
    def __init__(self):
        try:
            base_file = open('baseInput.pdf', 'rb')
            base_input_stream = base_file.read()
            base_file.close()

            file_1 = open('replacePagesInput1.pdf', 'rb')
            input_stream_1 = file_1.read()
            file_1.close()

            file_2 = open('replacePagesInput2.pdf', 'rb')
            input_stream_2 = file_2.read()
            file_2.close()

            # Initial setup, create credentials instance
            credentials = ServicePrincipalCredentials(
                client_id=os.getenv('PDF_SERVICES_CLIENT_ID'),
                client_secret=os.getenv('PDF_SERVICES_CLIENT_SECRET')
            )

            # Creates a PDF Services instance
            pdf_services = PDFServices(credentials=credentials)

            # Creates an asset(s) from source file(s) and upload
            base_asset = pdf_services.upload(input_stream=base_input_stream,
                                             mime_type=PDFServicesMediaType.PDF)
            asset_1 = pdf_services.upload(input_stream=input_stream_1,
                                          mime_type=PDFServicesMediaType.PDF)
            asset_2 = pdf_services.upload(input_stream=input_stream_2,
                                          mime_type=PDFServicesMediaType.PDF)

            page_ranges = self.get_page_range_for_first_file()

            # Create parameters for the job
            replace_pages_params = ReplacePagesParams(base_asset=base_asset)

            # Add the first asset as input to the params, along with its page ranges and base page
            replace_pages_params.add_pages_to_replace(input_asset=asset_1, page_ranges=page_ranges, base_page=1)

            # Add the second asset as input to the params, along with base page
            replace_pages_params.add_pages_to_replace(input_asset=asset_2, base_page=3)

            # Creates a new job instance
            replace_pages_job = ReplacePagesJob(replace_pages_params=replace_pages_params)

            # Submit the job and gets the job result
            location = pdf_services.submit(replace_pages_job)
            pdf_services_response = pdf_services.get_job_result(location, ReplacePagesResult)

            # Get content from the resulting asset(s)
            result_asset: CloudAsset = pdf_services_response.get_result().get_asset()
            stream_asset: StreamAsset = pdf_services.get_content(result_asset)

            # Creates an output stream and copy stream asset's content to it
            output_file_path = "replacePagesOutput.pdf"
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

    @staticmethod
    def get_page_range_for_first_file() -> PageRanges:
        # Specify page ranges
        page_ranges = PageRanges()
        # Add pages 1 to 3
        page_ranges.add_range(1, 3)
        # Add page 4
        page_ranges.add_single_page(4)
        return page_ranges


if __name__ == "__main__":
    ReplacePDFPages()
```