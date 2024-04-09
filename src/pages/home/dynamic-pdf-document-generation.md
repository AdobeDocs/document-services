<TextBlock slots="heading, buttons, text" theme="dark" hasCodeBlock className="bgBlue showMobileView"/>

##### Dynamic PDF Document Generation

- [See documentation](/document-services/docs/overview/document-generation-api/)

Merge your JSON data with custom Word templates to generate high-fidelity PDF and Word documents

<CodeBlock slots="heading, code" repeat="4" languages="curl, js,.net,java" />

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

#### .Net

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
