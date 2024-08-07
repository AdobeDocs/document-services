---
title: Adobe Developer — PDF Services API  — Split PDF Pages
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link linking split-pdf"/>

### Split a PDF into multiple files

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/split-pdf/)

Split a PDF document into multiple smaller documents by simply specifying either the number of files, pages per file, or page ranges.

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Split-PDF) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="5" languages="curl,JS,.NET, Java,python" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Split-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/splitpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "splitoption": {
        "pageCount": 9
    }
}'

// Legacy API can be found here
// https://documentcloud.adobe.com/document-services/index.html#post-splitPDF
```

#### Node js

```js
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/splitpdf/split-pdf-by-number-of-pages.js

const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    SplitPDFParams,
    SplitPDFJob,
    SplitPDFResult,
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
        readStream = fs.createReadStream("./splitPDFInput.pdf")
        const inputAsset = await pdfServices.upload({
            readStream,
            mimeType: MimeType.PDF
        });

        // Create parameters for the job
        const params = new SplitPDFParams({
            pageCount: 2
        });

        // Creates a new job instance
        const job = new SplitPDFJob({
            inputAsset,
            params
        });

        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({
            job
        });
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: SplitPDFResult
        });

        // Get content from the resulting asset(s)
        const resultAssets = pdfServicesResponse.result.assets;

        for (let i = 0; i < resultAssets.length; i++) {
            const streamAsset = await pdfServices.getContent({
                asset: resultAssets[i]
            });

            // Creates an output stream and copy stream asset's content to it
            const _outputFilePath = "./SplitPDFByNumberOfPagesOutput_" + i + ".pdf";
            console.log(`Saving asset at ${_outputFilePath}`);

            const writeStream = fs.createWriteStream(_outputFilePath);
            streamAsset.readStream.pipe(writeStream);
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
// cd SplitPDFByNumberOfPages/
// dotnet run SplitPDFByNumberOfPages.csproj


namespace SplitPDFByNumberOfPages
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
                // Initial setup, create credentials instance
                ICredentials credentials = new ServicePrincipalCredentials(
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_ID"),
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_SECRET"));

                // Creates a PDF Services instance
                PDFServices pdfServices = new PDFServices(credentials);

                // Creates an asset(s) from source file(s) and upload
                using Stream inputStream = File.OpenRead(@"splitPDFInput.pdf");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());

                // Create parameters for the job
                SplitPDFParams splitPDFParams = new SplitPDFParams();
                splitPDFParams.SetPageCount(2);

                // Creates a new job instance
                SplitPDFJob splitPDFJob = new SplitPDFJob(asset, splitPDFParams);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(splitPDFJob);
                PDFServicesResponse<SplitPDFResult> pdfServicesResponse =
                    pdfServices.GetJobResult<SplitPDFResult>(location, typeof(SplitPDFResult));
                List<IAsset> resultAssets = pdfServicesResponse.Result.Assets;

                // Save the result to the specified location.
                int index = 0;
                foreach (IAsset resultAsset in resultAssets)
                {
                    // Get content from the resulting asset(s)
                    StreamAsset streamAsset = pdfServices.GetContent(resultAsset);
                    Stream outputStream =
                        File.OpenWrite(Directory.GetCurrentDirectory() + "/output/SplitPDFByNumberOfPagesOutput_" + index + ".pdf");
                    streamAsset.Stream.CopyTo(outputStream);
                    outputStream.Close();
                    index++;
                }
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
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.splitpdf.SplitPDFByNumberOfPages

public class SplitPDFByNumberOfPages {

    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(SplitPDFByNumberOfPages.class);

    public static void main(String[] args) {
        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/splitPDFInput.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                    System.getenv("PDF_SERVICES_CLIENT_ID"),
                    System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

            // Create parameters for the job
            SplitPDFParams splitPDFParams = new SplitPDFParams();
            // Sets the maximum number of pages each of the output files can have
            splitPDFParams.setPageCount(2);

            // Creates a new job instance
            SplitPDFJob splitPDFJob = new SplitPDFJob(asset, splitPDFParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(splitPDFJob);
            PDFServicesResponse<SplitPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, SplitPDFResult.class);

            // Get content from the resulting asset(s)
            List<Asset> resultAssets = pdfServicesResponse.getResult().getAssets();

            Files.createDirectories(Paths.get("output/"));
            int index = 0;
            for (Asset resultAsset : resultAssets) {
                StreamAsset streamAsset = pdfServices.getContent(resultAsset);

                // Creates an output stream and copy stream asset's content to it
                OutputStream outputStream = Files.newOutputStream(new File("output/SplitPDFByNumberOfPagesOutput_" + index + ".pdf").toPath());
                LOGGER.info("Saving asset at output/SplitPDFByNumberOfPagesOutput_" + index + ".pdf");
                IOUtils.copy(streamAsset.getInputStream(), outputStream);
                outputStream.close();
                index++;
            }

        } catch (IOException| ServiceApiException | SDKException | ServiceUsageException e) {
            LOGGER.error("Exception encountered while executing operation", e);
        }
    }

}
```

#### Python

```python
# Get the samples from https://github.com/adobe/pdfservices-python-sdk-samples
# Run the sample:
# python src/splitpdf/split_pdf_by_number_of_pages.py

# Initialize the logger
logging.basicConfig(level=logging.INFO)

class SplitPDFByNumberOfPages:
    def __init__(self):
        try:

            file = open('splitPDFInput.pdf', 'rb')
            input_stream = file.read()
            file.close()

            # Initial setup, create credentials instance
            credentials = ServicePrincipalCredentials(
                client_id=os.getenv('PDF_SERVICES_CLIENT_ID'),
                client_secret=os.getenv('PDF_SERVICES_CLIENT_SECRET')
            )
            # Creates a PDF Services instance
            pdf_services = PDFServices(credentials=credentials)

            # Creates an asset(s) from source file(s) and upload
            input_asset = pdf_services.upload(input_stream=input_stream,
                                              mime_type=PDFServicesMediaType.PDF)

            # Create parameters for the job
            split_pdf_params = SplitPDFParams(page_count=2)

            # Creates a new job instance
            split_pdf_job = SplitPDFJob(input_asset, split_pdf_params)

            # Submit the job and gets the job result
            location = pdf_services.submit(split_pdf_job)
            pdf_services_response = pdf_services.get_job_result(location, SplitPDFResult)

            # Get content from the resulting asset(s)
            result_assets = pdf_services_response.get_result().get_assets()

            # Creates an output stream and copy stream asset's content to it
            output_file_path = 'SplitPDFByNumberOfPagesOutput.pdf'

            for i, result_asset in enumerate(result_assets):
                stream_asset: StreamAsset = pdf_services.get_content(result_asset)
                with open(f"{output_file_path}_{i}.pdf", "wb") as file:
                    file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')


if __name__ == "__main__":
    SplitPDFByNumberOfPages()
```
