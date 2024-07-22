<TextBlock slots="heading, buttons, text" theme="dark" hasCodeBlock className="bgBlue showMobileView"/>

##### PDF Electronic Seal API

- [See documentation](/document-services/docs/overview/pdf-electronic-seal-api/)

An Electronic Seal in PDF is akin to an organization's rubber stamp on a paper, but it’s more secure.

<CodeBlock slots="heading, code" repeat="5" languages="curl, js,.net,java,python" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://developer-stage.adobe.com/document-services/docs/apis/#tag/PDF-Electronic-Seal

curl --location --request POST 'https://pdf-services.adobe.io/operation/electronicseal' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "inputDocumentAssetID": "urn:aaid:AS:UE1:23c30ee0-2c4d-xxxx-xxxx-087832fca718",
    "sealImageAssetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-xxxx-xxxx-087832fca718",
    "sealOptions": {
        "signatureFormat": "PKCS7",
        "cscCredentialOptions": {
            "credentialId": "<CREDENTIAL_ID>",
            "providerName": "<PROVIDER_NAME>",
            "authorizationContext": {
                "tokenType": "Bearer",
                "accessToken": "<ACCESS_TOKEN>"
            },
            "credentialAuthParameters": {
                "pin": "<PIN>"
            }
        },
        "sealFieldOptions": {
            "location": {
                "top": 300,
                "left": 50,
                "right": 250,
                "bottom": 100
            },
            "fieldName": "Signature1",
            "pageNumber": 1
        },
        "sealAppearanceOptions": {
            "displayOptions": [
                "NAME",
                "DATE",
                "DISTINGUISHED_NAME",
                "LABELS",
                "SEAL_IMAGE"
            ]
        }
    }
}'
```

#### Node js

```js
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/electronicseal/electronic-seal.js

const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    DocumentLevelPermission,
    FieldLocation,
    FieldOptions,
    CSCAuthContext,
    CSCCredential,
    PDFElectronicSealParams,
    PDFElectronicSealJob,
    PDFElectronicSealResult,
    SDKError,
    ServiceUsageError,
    ServiceApiError
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");

(async () => {
    let sourceFileReadStream;
    let sealImageReadStream;
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
        sourceFileReadStream = fs.createReadStream("./sampleInvoice.pdf")
        sealImageReadStream = fs.createReadStream("./sampleSealImage.png");
        const [sourceFileAsset, sealImageAsset] = await pdfServices.uploadAssets({
            streamAssets: [{
                readStream: sourceFileReadStream,
                mimeType: MimeType.PDF
            }, {
                readStream: sealImageReadStream,
                mimeType: MimeType.PNG
            }]
        });

        // Set the document level permission to be applied for output document
        const documentLevelPermission = DocumentLevelPermission.FORM_FILLING;

        // Set the Seal Field Name to be created in input PDF document
        const sealFieldName = "Signature1";

        // Set the page number in input document for applying seal
        const sealPageNumber = 1;

        // Set if seal should be visible or invisible
        const sealVisible = true;

        // Create FieldLocation instance and set the coordinates for applying signature
        const fieldLocation = new FieldLocation({
            left: 150,
            top: 250,
            right: 350,
            bottom: 200
        });

        // Create FieldOptions instance with required details
        const sealFieldOptions = new FieldOptions({
            visible: sealVisible,
            location: fieldLocation,
            fieldName: sealFieldName,
            pageNumber: sealPageNumber,
        });

        // Set the name of TSP Provider being used
        const providerName = "<PROVIDER_NAME>";

        // Set the access token to be used to access TSP provider hosted APIs
        const accessToken = "<ACCESS_TOKEN>";

        // Set the credential ID
        const credentialId = "<CREDENTIAL_ID>";

        // Set the PIN generated while creating credentials
        const pin = "<PIN>";

        // Create CSCAuthContext instance using access token and token type
        const authorizationContext = new CSCAuthContext({
            accessToken,
            tokenType: "Bearer"
        });

        // Create CertificateCredentials instance with required certificate details
        const certificateCredentials = new CSCCredential({
            providerName,
            credentialId,
            pin,
            authorizationContext,
        });

        // Create parameters for the job
        const params = new PDFElectronicSealParams({
            certificateCredentials,
            sealFieldOptions,
            documentLevelPermission,
        });

        // Creates a new job instance
        const job = new PDFElectronicSealJob({
            inputAsset: sourceFileAsset,
            sealImageAsset,
            params,
        });

        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({
            job
        });
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: PDFElectronicSealResult
        });

        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.asset;
        const streamAsset = await pdfServices.getContent({
            asset: resultAsset
        });

        // Creates a write stream and copy stream asset's content to it
        const outputFilePath = "./sealedOutput.pdf";
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
        sourceFileReadStream?.destroy();
        sealImageReadStream?.destroy();
    }
})();
```

#### .Net

```clike
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd ElectronicSeal/
// dotnet run ElectronicSeal.csproj

namespace ElectronicSeal
{
    class Program
    {
        // Initialize the logger.
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
                using Stream inputStream = File.OpenRead(@"SampleInvoice.pdf");
                using Stream inputStreamSealImage = File.OpenRead(@"sampleSealImage.png");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());
                IAsset sealImageAsset =
                    pdfServices.Upload(inputStreamSealImage, PDFServicesMediaType.PNG.GetMIMETypeValue());

                // Set the document level permission to be applied for output document
                DocumentLevelPermission documentLevelPermission = DocumentLevelPermission.FORM_FILLING;

                // Sets the Seal Field Name to be created in input PDF document.
                String sealFieldName = "Signature1";

                // Sets the page number in input document for applying seal.
                int sealPageNumber = 1;

                // Sets if seal should be visible or invisible.
                bool sealVisible = true;

                // Creates FieldLocation instance and set the coordinates for applying signature
                FieldLocation fieldLocation = new FieldLocation(150, 250, 350, 200);

                // Create FieldOptions instance with required details.
                FieldOptions fieldOptions = new FieldOptions.Builder(sealFieldName)
                    .SetVisible(sealVisible)
                    .SetFieldLocation(fieldLocation)
                    .SetPageNumber(sealPageNumber)
                    .Build();

                // Sets the name of TSP Provider being used.
                String providerName = "<PROVIDER_NAME>";

                // Sets the access token to be used to access TSP provider hosted APIs.
                String accessToken = "<ACCESS_TOKEN>";

                // Sets the credential ID.
                String credentialID = "<CREDENTIAL_ID>";

                // Sets the PIN generated while creating credentials.
                String pin = "<PIN>";

                // Creates CSCAuthContext instance using access token and token type.
                CSCAuthContext cscAuthContext = new CSCAuthContext(accessToken, "Bearer");

                // Create CertificateCredentials instance with required certificate details.
                CertificateCredentials certificateCredentials = CertificateCredentials.CSCCredentialBuilder()
                    .WithProviderName(providerName)
                    .WithCredentialID(credentialID)
                    .WithPin(pin)
                    .WithCSCAuthContext(cscAuthContext)
                    .Build();

                // Create parameters for the job
                PDFElectronicSealParams pdfElectronicSealParams =
                    PDFElectronicSealParams.PDFElectronicSealParamsBuilder(certificateCredentials, fieldOptions)
                        .WithDocumentLevelPermission(documentLevelPermission)
                        .Build();

                // Creates a new job instance
                PDFElectronicSealJob pdfElectronicSealJob = new PDFElectronicSealJob(asset, pdfElectronicSealParams);
                pdfElectronicSealJob.SetSealImageAsset(sealImageAsset);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(pdfElectronicSealJob);
                PDFServicesResponse<PDFElectronicSealResult> pdfServicesResponse =
                    pdfServices.GetJobResult<PDFElectronicSealResult>(location, typeof(PDFElectronicSealResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/sealedOutput.pdf";
                new FileInfo(Directory.GetCurrentDirectory() + outputFilePath).Directory.Create();
                Stream outputStream = File.OpenWrite(Directory.GetCurrentDirectory() + outputFilePath);
                streamAsset.Stream.CopyTo(outputStream);
                outputStream.Close();
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
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.electronicseal.ElectronicSeal

public class ElectronicSeal {

    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(ElectronicSeal.class);

    public static void main(String[] args) {
        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/sampleInvoice.pdf").toPath());
             InputStream inputStreamSealImage = Files.newInputStream(new File("src/main/resources/sampleSealImage.png").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                System.getenv("PDF_SERVICES_CLIENT_ID"),
                System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());
            Asset sealImageAsset = pdfServices.upload(inputStreamSealImage, PDFServicesMediaType.PNG.getMediaType());

            // Set the document level permission to be applied for output document
            DocumentLevelPermission documentLevelPermission = DocumentLevelPermission.FORM_FILLING;

            // Sets the Seal Field Name to be created in input PDF document.
            String sealFieldName = "Signature1";

            // Sets the page number in input document for applying seal.
            Integer sealPageNumber = 1;

            // Sets if seal should be visible or invisible.
            Boolean sealVisible = true;

            // Creates FieldLocation instance and set the coordinates for applying signature
            FieldLocation fieldLocation = new FieldLocation(150, 250, 350, 200);

            // Create FieldOptions instance with required details.
            FieldOptions fieldOptions = new FieldOptions.Builder(sealFieldName)
                .setFieldLocation(fieldLocation)
                .setPageNumber(sealPageNumber)
                .setVisible(sealVisible)
                .build();

            // Sets the name of TSP Provider being used.
            String providerName = "<PROVIDER_NAME>";

            // Sets the access token to be used to access TSP provider hosted APIs.
            String accessToken = "<ACCESS_TOKEN>";

            // Sets the credential ID.
            String credentialID = "<CREDENTIAL_ID>";

            // Sets the PIN generated while creating credentials.
            String pin = "<PIN>";

            // Creates CSCAuthContext instance using access token and token type.
            CSCAuthContext cscAuthContext = new CSCAuthContext(accessToken, "Bearer");

            // Create CertificateCredentials instance with required certificate details.
            CertificateCredentials certificateCredentials = CertificateCredentials.cscCredentialBuilder()
                .withProviderName(providerName)
                .withCredentialID(credentialID)
                .withPin(pin)
                .withCSCAuthContext(cscAuthContext)
                .build();

            // Create parameters for the job
            PDFElectronicSealParams pdfElectronicSealParams = PDFElectronicSealParams
                .pdfElectronicSealParamsBuilder(certificateCredentials, fieldOptions)
                .withDocumentLevelPermission(documentLevelPermission)
                .build();

            // Creates a new job instance
            PDFElectronicSealJob pdfElectronicSealJob = new PDFElectronicSealJob(asset, pdfElectronicSealParams);

            // Sets the optional input seal image for PDFElectronicSealOperation instance
            pdfElectronicSealJob.setSealImageAsset(sealImageAsset);

            // Submit the job and gets the job result
            String location = pdfServices.submit(pdfElectronicSealJob);
            PDFServicesResponse<PDFElectronicSealResult> pdfServicesResponse = pdfServices.getJobResult(location, PDFElectronicSealResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/sealedOutput.pdf").toPath());
            LOGGER.info("Saving asset at output/sealedOutput.pdf");
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
# Initialize the logger
logging.basicConfig(level=logging.INFO)


class ElectronicSeal:
    def __init__(self):
        try:
            pdf_file = open("./sampleInvoice.pdf", "rb")
            file_input_stream = pdf_file.read()
            pdf_file.close()

            seal_image_file = open("./sampleSealImage.png", "rb")
            seal_image_input_stream = seal_image_file.read()
            seal_image_file.close()

            # Initial setup, create credentials instance
            credentials = ServicePrincipalCredentials(
                client_id=os.getenv("PDF_SERVICES_CLIENT_ID"),
                client_secret=os.getenv("PDF_SERVICES_CLIENT_SECRET"),
            )

            # Creates a PDF Services instance
            pdf_services = PDFServices(credentials=credentials)

            # Creates an asset(s) from source file(s) and upload
            asset = pdf_services.upload(
                input_stream=file_input_stream, mime_type=PDFServicesMediaType.PDF
            )
            seal_image_asset = pdf_services.upload(
                input_stream=seal_image_input_stream, mime_type=PDFServicesMediaType.PNG
            )

            # Set the document level permission to be applied for output document
            document_level_permission = DocumentLevelPermission.FORM_FILLING

            # Sets the Seal Field Name to be created in input PDF document.
            seal_field_name = "Signature1"

            # Sets the page number in input document for applying seal.
            seal_page_number = 1

            # Sets if seal should be visible or invisible.
            seal_visible = True

            # Creates FieldLocation instance and set the coordinates for applying signature
            field_location = FieldLocation(150, 250, 350, 200)

            # Create FieldOptions instance with required details.
            field_options = FieldOptions(
                field_name=seal_field_name,
                field_location=field_location,
                page_number=seal_page_number,
                visible=seal_visible,
            )

            # Sets the name of TSP Provider being used.
            provider_name = "<PROVIDER_NAME>"

            # Sets the access token to be used to access TSP provider hosted APIs.
            access_token = "<ACCESS_TOKEN>"

            # Sets the credential ID.
            credential_id = "<CREDENTIAL_ID>"

            # Sets the PIN generated while creating credentials.
            pin = "<PIN>"

            # Creates CSCAuthContext instance using access token and token type.
            csc_auth_context = CSCAuthContext(
                access_token=access_token,
                token_type="Bearer",
            )

            # Create CertificateCredentials instance with required certificate details.
            certificate_credentials = CSCCredentials(
                provider_name=provider_name,
                credential_id=credential_id,
                pin=pin,
                csc_auth_context=csc_auth_context,
            )

            # Create parameters for the job
            electronic_seal_params = PDFElectronicSealParams(
                seal_certificate_credentials=certificate_credentials,
                seal_field_options=field_options,
            )

            # Creates a new job instance
            electronic_seal_job = PDFElectronicSealJob(
                input_asset=asset,
                electronic_seal_params=electronic_seal_params,
                seal_image_asset=seal_image_asset,
            )

            # Submit the job and gets the job result
            location = pdf_services.submit(electronic_seal_job)
            pdf_services_response = pdf_services.get_job_result(
                location, ESealPDFResult
            )

            # Get content from the resulting asset(s)
            result_asset: CloudAsset = pdf_services_response.get_result().get_asset()
            stream_asset: StreamAsset = pdf_services.get_content(result_asset)

            # Creates an output stream and copy stream asset's content to it

            output_file_path = "output/ElectronicSeal.pdf"
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f"Exception encountered while executing operation: {e}")


if __name__ == "__main__":
    ElectronicSeal()
```
