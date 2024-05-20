---
title: Adobe Developer — PDF Services API  —  HTML to PDF
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link linking create-pdf-html"/>

### Create a PDF file from HTML

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/create-pdf/#create-a-pdf-from-static-html)

Create PDFs from static and dynamic HTML, Zip, and URL.

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Html-to-PDF) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="5" languages="curl, js,.net,java,python" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Html-To-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/htmltopdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "json": "{}",
    "includeHeaderFooter": true,
    "pageLayout": {
        "pageWidth": 11,
        "pageHeight": 8.5
    }
}'

// Legacy API can be found here
// https://documentcloud.adobe.com/document-services/index.html#post-htmlToPDF
```

#### Node js

```js
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/htmltopdf/static-html-to-pdf.js

const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    PageLayout,
    HTMLToPDFParams,
    HTMLToPDFResult,
    HTMLToPDFJob,
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
        readStream = fs.createReadStream("./createPDFFromStaticHtmlInput.zip");
        const inputAsset = await pdfServices.upload({
            readStream,
            mimeType: MimeType.ZIP
        });

        // Create parameters for the job
        const params = getHTMLToPDFParams();

        // Creates a new job instance
        const job = new HTMLToPDFJob({
            inputAsset,
            params
        });

        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({
            job
        });
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: HTMLToPDFResult
        });

        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.asset;
        const streamAsset = await pdfServices.getContent({
            asset: resultAsset
        });

        // Creates an output stream and copy result asset's content to it
        const outputFilePath = "createPdfFromStaticHtmlOutput.pdf";
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

function getHTMLToPDFParams() {
    // Define the page layout, in this case an 8 x 11.5 inch page (effectively portrait orientation)
    const pageLayout = new PageLayout({
        pageHeight: 11.5,
        pageWidth: 8
    });

    return new HTMLToPDFParams({
        pageLayout,
        includeHeaderFooter: true,
    });
}
```

#### .Net

```clike
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd CreatePDFFromStaticHtml/
// dotnet run CreatePDFFromStaticHtml.csproj

namespace CreatePDFFromStaticHtml
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
                CreatePDFOperation htmlToPDFOperation = CreatePDFOperation.CreateNew();

                // Set operation input from a source file.
                FileRef source = FileRef.CreateFromLocalFile(@"createPDFFromStaticHtmlInput.zip");
                htmlToPDFOperation.SetInput(source);

                // Provide any custom configuration options for the operation.
                SetCustomOptions(htmlToPDFOperation);

                // Execute the operation.
                FileRef result = htmlToPDFOperation.Execute(executionContext);

                // Save the result to the specified location.
                result.SaveAs(Directory.GetCurrentDirectory() + "/output/createPdfFromStaticHtmlOutput.pdf");
            }
            catch (ServiceUsageException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            // Catch more errors here. . .
        }

        private static void SetCustomOptions(CreatePDFOperation htmlToPDFOperation)
        {
            // Define the page layout, in this case an 8 x 11.5 inch page (effectively portrait orientation).
            PageLayout pageLayout = new PageLayout();
            pageLayout.SetPageSize(8, 11.5);

            // Set the desired HTML-to-PDF conversion options.
            CreatePDFOptions htmlToPdfOptions = CreatePDFOptions.HtmlOptionsBuilder()
                .IncludeHeaderFooter(true)
                .WithPageLayout(pageLayout)
                . Build();
            htmlToPDFOperation.SetOptions(htmlToPdfOptions);
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
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.createpdf.CreatePDFFromStaticHTML

// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.htmltopdf.StaticHTMLToPDF

public class StaticHTMLToPDF {

  // Initialize the logger.
  private static final Logger LOGGER = LoggerFactory.getLogger(StaticHTMLToPDF.class);

  public static void main(String[] args) {

    try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/createPDFFromStaticHtmlInput.zip").toPath())) {
       // Initial setup, create credentials instance
       Credentials credentials = new ServicePrincipalCredentials(
               System.getenv("PDF_SERVICES_CLIENT_ID"),
               System.getenv("PDF_SERVICES_CLIENT_SECRET"));

       // Creates a PDF Services instance
       PDFServices pdfServices = new PDFServices(credentials);

       // Creates an asset(s) from source file(s) and upload
       Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.ZIP.getMediaType());

       // Create parameters for the job
       HTMLToPDFParams htmlToPDFParams = getHTMLToPDFParams();

       // Creates a new job instance
       HTMLToPDFJob htmLtoPDFJob = new HTMLToPDFJob(asset)
               .setParams(htmlToPDFParams);

       // Submit the job and gets the job result
       String location = pdfServices.submit(htmLtoPDFJob);
       PDFServicesResponse<HTMLToPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, HTMLToPDFResult.class);

       // Get content from the resulting asset(s)
       Asset resultAsset = pdfServicesResponse.getResult().getAsset();
       StreamAsset streamAsset = pdfServices.getContent(resultAsset);

       // Creates an output stream and copy stream asset's content to it
       File.createDirectories(Paths.get("output/"));
       OutputStream outputStream = Files.newOutputStream(new File("output/staticHTMLToPDFOutput.pdf").toPath());
       LOGGER.info("Saving asset at output/staticHTMLToPDFOutput.pdf");
       IOUtils.copy(streamAsset.getInputStream(), outputStream);
       outputStream.close();
    } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
       LOGGER.error("Exception encountered while executing operation", ex);
    }
  }
   private static HTMLToPDFParams getHTMLToPDFParams() {
       // Define the page layout, in this case an 8 x 11.5 inch page (effectively portrait orientation)
       PageLayout pageLayout = new PageLayout();
       pageLayout.setPageSize(8, 11.5);

       return new HTMLToPDFParams.Builder()
           .includeHeaderFooter(true).withPageLayout(pageLayout)
           .build();
   }
}
```

#### Python 

```python
# Get the samples https://github.com/adobe/pdfservices-python-sdk-samples
# Run the sample:
# python src/htmltopdf/static_html_to_pdf.py

# Initialize the logger
logging.basicConfig(level=logging.INFO)

class StaticHTMLtoPDF:
    def __init__(self):
        try:
            file = open('./createPDFFromStaticHtmlInput.zip', 'rb')
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
            input_asset = pdf_services.upload(input_stream=input_stream, mime_type=PDFServicesMediaType.ZIP)

            # Create parameters for the job
            html_to_pdf_params = self.get_html_to_pdf_params()

            # Creates a new job instance
            html_to_pdf_job = HTMLtoPDFJob(input_asset=input_asset, html_to_pdf_params=html_to_pdf_params)

            # Submit the job and gets the job result
            location = pdf_services.submit(html_to_pdf_job)
            pdf_services_response = pdf_services.get_job_result(location, HTMLtoPDFResult)

            # Get content from the resulting asset(s)
            result_asset: CloudAsset = pdf_services_response.get_result().get_asset()
            stream_asset: StreamAsset = pdf_services.get_content(result_asset)

            # Creates an output stream and copy stream asset's content to it
            output_file_path = 'output/StaticHTMLToPDF.pdf'
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

    @staticmethod
    def get_html_to_pdf_params() -> HTMLtoPDFParams:
        # Define the page layout, in this case an 8 x 11.5 inch page (effectively portrait orientation)
        page_layout = PageLayout(page_height=11.5, page_width=8)
        return HTMLtoPDFParams(page_layout=page_layout, include_header_footer=True)

if __name__ == "__main__":
    StaticHTMLtoPDF()
```