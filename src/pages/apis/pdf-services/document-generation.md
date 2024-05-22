---
title: Adobe Developer — PDF Services API  —  Document Generation
---


<TextBlock slots="heading, buttons, text, text1, text2" theme="dark" hasCodeBlock className="bgBlue link  button-screen linking pdf-word-doc-gen"
variantsTypePrimary="accent" variantsTypeSecondary="secondary" variantStyleFill='fill' variantStyleOutline="outline"/>

### PDF and Word document generation with dynamic data

- [Learn more](/src/pages/apis/doc-generation.md)
- [Try the demo](https://acrobatservices.adobe.com/dc-docgen-playground/index.html#/)

Generate PDF or Word documents from Microsoft Word templates and your data. Merge dynamic data with your custom templates to generate on brand contracts, proposals, invoices, NDAs, and more.

Use our Word add-in to quickly create templates and add signatures with out of the box Adobe Acrobat Sign integration.

See our public  [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Document-Generation) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="5" languages="curl, js,.net,java,python" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Document-Generation

curl --location --request POST 'https://pdf-services.adobe.io/operation/documentgeneration' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "outputFormat": "pdf",
    "jsonDataForMerge": {
        "customerName": "Kane Miller",
        "customerVisits": 100,
        "itemsBought": [
            {
                "name": "Sprays",
                "quantity": 50,
                "amount": 100
            },
            {
                "name": "Chemicals",
                "quantity": 100,
                "amount": 200
            }
        ],
        "totalAmount": 300,
        "previousBalance": 50,
        "lastThreeBillings": [
            100,
            200,
            300
        ],
        "photograph": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88h8AAu0B9XNPCQQAAAAASUVORK5CYII="
    }
}'

// Legacy API can be found here
// https://documentcloud.adobe.com/document-services/index.html#post-documentGeneration
```

#### Node js

```js
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/documentmerge/merge-document-to-pdf.js

const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    DocumentMergeParams,
    OutputFormat,
    DocumentMergeJob,
    DocumentMergeResult,
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

        // Setup input data for the document merge process
        const jsonDataForMerge = {
            customerName: "Kane Miller",
            customerVisits: 100
        }

        // Creates an asset(s) from source file(s) and upload
        readStream = fs.createReadStream("./documentMergeTemplate.docx");
        const inputAsset = await pdfServices.upload({
            readStream,
            mimeType: MimeType.DOCX
        });

        // Create parameters for the job
        const params = new DocumentMergeParams({
            jsonDataForMerge,
            outputFormat: OutputFormat.PDF
        });

        // Creates a new job instance
        const job = new DocumentMergeJob({
            inputAsset,
            params
        });

        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({
            job
        });
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: DocumentMergeResult
        });

        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.asset;
        const streamAsset = await pdfServices.getContent({
            asset: resultAsset
        });

        // Creates a write stream and copy stream asset's content to it
        const outputFilePath = "./documentMergeOutput.pdf";
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
```

#### .NET

```clike
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd MergeDocumentToPDF/
// dotnet run MergeDocumentToPDF.csproj

namespace MergeDocumentToPDF
{
    class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));

        static void Main()
        {
            //Configure the logging.
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

                // Setup input data for the document merge process.
                JObject jsonDataForMerge = JObject.Parse("{\"customerName\": \"Kane Miller\",\"customerVisits\": 100}");

                // Create a new DocumentMerge Options instance.
                DocumentMergeOptions documentMergeOptions = new DocumentMergeOptions(jsonDataForMerge, OutputFormat.PDF);

                // Create a new DocumentMerge Operation instance with the DocumentMerge Options instance.
                DocumentMergeOperation documentMergeOperation = DocumentMergeOperation.CreateNew(documentMergeOptions);

                // Set the operation input document template from a source file.
                documentMergeOperation.SetInput(FileRef.CreateFromLocalFile(@"documentMergeTemplate.docx"));

                // Execute the operation.
                FileRef result = documentMergeOperation.Execute(executionContext);

                // Save the result to the specified location.
                result.SaveAs(Directory.GetCurrentDirectory() + "/output/documentMergeOutput.pdf");
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
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.documentmerge.MergeDocumentToPDF

package com.adobe.pdfservices.operation.samples.documentmerge;

public class MergeDocumentToPDF {

    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(MergeDocumentToPDF.class);

    public static void main(String[] args) {

          try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/documentMergeTemplate.docx").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                    System.getenv("PDF_SERVICES_CLIENT_ID"),
                    System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Setup input data for the document merge process.
            JSONObject jsonDataForMerge = new JSONObject("{\"customerName\": \"Kane Miller\",\"customerVisits\": 100}");

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.DOCX.getMediaType());

            // Create parameters for the job
            DocumentMergeParams documentMergeParams = DocumentMergeParams.documentMergeParamsBuilder()
                    .withJsonDataForMerge(jsonDataForMerge)
                    .withOutputFormat(OutputFormat.PDF)
                    .build();

            // Creates a new job instance
            DocumentMergeJob documentMergeJob = new DocumentMergeJob(asset, documentMergeParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(documentMergeJob);
            PDFServicesResponse<DocumentMergeResult> pdfServicesResponse = pdfServices.getJobResult(location, DocumentMergeResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            OutputStream outputStream = Files.newOutputStream(new File("output/documentMergeOutput.pdf").toPath());
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();

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
# python src/documentmerge/merge_document_to_pdf.py

# Initialize the logger
logging.basicConfig(level=logging.INFO)

class MergeDocumentToPDF:
    def __init__(self):
        try:
            file = open("./salesOrderTemplate.docx", "rb")
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
                input_stream=input_stream, mime_type=PDFServicesMediaType.DOCX
            )

            # Setup input data for the document merge process
            with open("./salesOrder.json", "r") as file:
                content_string = file.read()
            json_data_for_merge = json.loads(content_string)

            # Create parameters for the job
            document_merge_params = DocumentMergeParams(
                json_data_for_merge=json_data_for_merge, output_format=OutputFormat.PDF
            )

            # Creates a new job instance
            document_merge_job = DocumentMergeJob(
                input_asset=input_asset, document_merge_params=document_merge_params
            )

            # Submit the job and gets the job result
            location = pdf_services.submit(document_merge_job)
            pdf_services_response = pdf_services.get_job_result(
                location, DocumentMergePDFResult
            )

            # Get content from the resulting asset(s)
            result_asset: CloudAsset = pdf_services_response.get_result().get_asset()
            stream_asset: StreamAsset = pdf_services.get_content(result_asset)

            # Creates an output stream and copy stream asset's content to it
            output_file_path = "output/MergeDocumentToPDF.pdf"
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f"Exception encountered while executing operation: {e}")


if __name__ == "__main__":
    MergeDocumentToPDF()
```
