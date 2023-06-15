---
title: Adobe Developer — PDF Services API  — E seal API
---

<TextBlock slots="heading, buttons, text1,text2" hasCodeBlock theme="dark" className="bgBlue linking link e-seal-api"/>

### PDF Electronic Seal API

- [See documentation](/document-services/docs/overview/pdf-electronic-seal-api/)

Apply an electronic seal to documents at scale using a certificate issued by a Trust Service Provider on Adobe’s Approved Trust List (AATL). The electronic seal helps verify the identity and integrity of documents.

See our public [API Reference](/document-services/docs/apis/#tag/Electronic-Seal) and quickly try our APIs using the Postman collections.

<CodeBlock slots="heading, code" repeat="4" languages="curl, js, .net, java" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://developer.adobe.com/document-services/docs/overview/pdf-electronic-seal-api/

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
const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');

try {
    // Initial setup, create credentials instance.
    const credentials =  PDFServicesSdk.Credentials
        .servicePrincipalCredentialsBuilder()
        .withClientId(process.env.PDF_SERVICES_CLIENT_ID)
        .withClientSecret(process.env.PDF_SERVICES_CLIENT_SECRET)
        .build();

    // Create an ExecutionContext using credentials
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);

    const pdfElectronicSeal = PDFServicesSdk.PDFElectronicSeal,
        options = pdfElectronicSeal.options;

    //Get the input document to perform the sealing operation
    const sourceFile = PDFServicesSdk.FileRef.createFromLocalFile('resources/sampleInvoice.pdf'),

    //Get the background seal image for signature , if required.
    sealImageFile = PDFServicesSdk.FileRef.createFromLocalFile('resources/sampleSealImage.png');

    // Set the Seal Field Name to be created in input PDF document.
    sealFieldName = "Signature1";

    // Set the page number in input document for applying seal.
    sealPageNumber = 1;

    // Set if seal should be visible or invisible.
    sealVisible = true;

    //Create FieldLocation instance and set the coordinates for applying signature
    fieldLocation = new options.FieldLocation(150,250,350,200);

    //Create FieldOptions instance with required details.
    fieldOptions = new options.FieldOptions.Builder(sealFieldName)
        .setFieldLocation(fieldLocation)
        .setPageNumber(sealPageNumber)
        .setVisible(sealVisible)
        .build();

    //Set the name of TSP Provider being used.
    providerName = "<PROVIDER_NAME>";

    //Set the access token to be used to access TSP provider hosted APIs.
    accessToken = "<ACCESS_TOKEN>";

    //Set the credential ID.
    credentialID = "<CREDENTIAL_ID>";

    //Set the PIN generated while creating credentials.
    pin = "<PIN>";

    //Create CSCAuthContext instance using access token and token type.
    cscAuthContext = new options.CSCAuthContext(accessToken, "Bearer");

    //Create CertificateCredentials instance with required certificate details.
    certificateCredentials = options.CertificateCredentials.cscCredentialBuilder()
        .withProviderName(providerName)
        .withCredentialID(credentialID)
        .withPin(pin)
        .withCSCAuthContext(cscAuthContext)
        .build();

    //Create SealOptions instance with sealing parameters.
    sealOptions = new options.SealOptions.Builder(certificateCredentials, fieldOptions)
        .build()

    //Create the PDFElectronicSealOperation instance using the SealOptions instance
    const pdfElectronicSealOperation = pdfElectronicSeal.Operation.createNew(sealOptions);

    //Set the input source file for PDFElectronicSealOperation instance
    pdfElectronicSealOperation.setInput(sourceFile);

    //Set the optional input seal image for PDFElectronicSealOperation instance
    pdfElectronicSealOperation.setSealImage(sealImageFile);

    // Execute the operation and Save the result to the specified location.
    pdfElectronicSealOperation.execute(executionContext)
        .then(result => result.saveAsFile("output/ElectronicSeal/sealedOutput.pdf"))
        .catch(err => {
            if(err instanceof PDFServicesSdk.Error.ServiceApiError
                || err instanceof PDFServicesSdk.Error.ServiceUsageError) {
                console.log('Exception encountered while executing operation', err);
            } else {
                console.log('Exception encountered while executing operation', err);
            }
    });
```

#### .Net

```clike
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
                // Initial setup, create credentials instance.
                Credentials credentials = Credentials.ServicePrincipalCredentialsBuilder()
                    .WithClientId(Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_ID"))
                    .WithClientSecret(Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_SECRET"))
                    .Build();

                // Create an ExecutionContext using credentials.
                ExecutionContext executionContext = ExecutionContext.Create(credentials);

                //Set the input document to perform the sealing operation
                FileRef sourceFile = FileRef.CreateFromLocalFile(@"SampleInvoice.pdf");

                //Set the background seal image for signature , if required.
                FileRef sealImageFile = FileRef.CreateFromLocalFile(@"sampleSealImage.png");

                //Set the Seal Field Name to be created in input PDF document.
                string sealFieldName = "Signature1";

                //Set the page number in input document for applying seal.
                int sealPageNumber = 1;

                //Set if seal should be visible or invisible.
                bool sealVisible = true;

                //Create FieldLocation instance and set the coordinates for applying signature
                FieldLocation fieldLocation = new FieldLocation(150, 250, 350, 200);

                //Create FieldOptions instance with required details.
                FieldOptions sealFieldOptions = new FieldOptions.Builder(sealFieldName)
                    .SetVisible(sealVisible)
                    .SetFieldLocation(fieldLocation)
                    .SetPageNumber(sealPageNumber)
                    .Build();

                //Set the name of TSP Provider being used.
                string providerName = "<PROVIDER_NAME>";

                //Set the access token to be used to access TSP provider hosted APIs.
                string accessToken = "<ACCESS TOKEN>";

                //Set the credential ID.
                string credentialID = "<CREDENTIAL_ID>";

                //Set the PIN generated while creating credentials.
                string pin = "<PIN>";

                CSCAuthContext cscAuthContext = new CSCAuthContext(accessToken, "Bearer");

                //Create CertificateCredentials instance with required certificate details.
                CertificateCredentials certificateCredentials = CertificateCredentials.CSCCredentialBuilder()
                    .WithProviderName(providerName)
                    .WithCredentialID(credentialID)
                    .WithPin(pin)
                    .WithCSCAuthContext(cscAuthContext)
                    .Build();

                //Create SealingOptions instance with all the sealing parameters.
                SealOptions sealOptions = new SealOptions.Builder(certificateCredentials, sealFieldOptions).Build();

                //Create the PDFElectronicSealOperation instance using the PDFElectronicSealOptions instance
                PDFElectronicSealOperation pdfElectronicSealOperation = PDFElectronicSealOperation.CreateNew(sealOptions);

                //Set the input source file for PDFElectronicSealOperation instance
                pdfElectronicSealOperation.SetInput(sourceFile);

                //Set the optional input seal image for PDFElectronicSealOperation instance
                pdfElectronicSealOperation.SetSealImage(sealImageFile);

                //Execute the operation
                FileRef result = pdfElectronicSealOperation.Execute(executionContext);

                // Save the result to the specified location.
                result.SaveAs("/output/sealedOutput");
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
```

#### Java

```javascript
public class ElectronicSeal {

    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(ElectronicSeal.class);

    public static void main(String[] args) {
        try {
            // Initial setup, create credentials instance.
            Credentials credentials = Credentials.servicePrincipalCredentialsBuilder()
                    .withClientId(System.getenv("PDF_SERVICES_CLIENT_ID"))
                    .withClientSecret(System.getenv("PDF_SERVICES_CLIENT_SECRET"))
                    .build();

            // Create an ExecutionContext using credentials.
            ExecutionContext executionContext = ExecutionContext.create(credentials);

            //Get the input document to perform the sealing operation
            FileRef sourceFile = FileRef.createFromLocalFile("src/main/resources/sampleInvoice.pdf");

            //Get the background seal image for signature , if required.
            FileRef sealImageFile = FileRef.createFromLocalFile("src/main/resources/sampleSealImage.png");

            //Set the Seal Field Name to be created in input PDF document.
            String sealFieldName = "signature1";

            //Set the page number in input document for applying seal.
            Integer sealPageNumber = 1;

            //Set if seal should be visible or invisible.
            Boolean sealVisible = true;

            //Create FieldLocation instance and set the coordinates for applying signature
            FieldLocation fieldLocation = new FieldLocation(150, 250, 350, 200);

            //Create FieldOptions instance with required details.
            FieldOptions fieldOptions = new FieldOptions.Builder(sealFieldName)
                    .setFieldLocation(fieldLocation)
                    .setPageNumber(sealPageNumber)
                    .setVisible(sealVisible)
                    .build();

            //Set the name of TSP Provider being used.
            String providerName = "<PROVIDER_NAME>";

            //Set the access token to be used to access TSP provider hosted APIs.
            String accessToken = "<ACCESS_TOKEN>";

            //Set the credential ID.
            String credentialID = "<CREDENTIAL_ID>";

            //Set the PIN generated while creating credentials.
            String pin = "<PIN>";

            //Create CSCAuthContext instance using access token and token type.
            CSCAuthContext cscAuthContext = new CSCAuthContext(accessToken, "Bearer");

            //Create CertificateCredentials instance with required certificate details.
            CertificateCredentials certificateCredentials = CertificateCredentials.cscCredentialBuilder()
                    .withProviderName(providerName)
                    .withCredentialID(credentialID)
                    .withPin(pin)
                    .withCSCAuthContext(cscAuthContext)
                    .build();

            //Create SealOptions instance with sealing parameters.
            SealOptions sealOptions = new SealOptions.Builder(certificateCredentials, fieldOptions).build();

            //Create the PDFElectronicSealOperation instance using the SealOptions instance
            PDFElectronicSealOperation pdfElectronicSealOperation = PDFElectronicSealOperation.createNew(sealOptions);

            //Set the input source file for PDFElectronicSealOperation instance
            pdfElectronicSealOperation.setInput(sourceFile);

            //Set the optional input seal image for PDFElectronicSealOperation instance
            pdfElectronicSealOperation.setSealImage(sealImageFile);

            //Execute the operation
            FileRef result = pdfElectronicSealOperation.execute(executionContext);

            //Save the output at specified location
            result.saveAs("output/ElectronicSeal/sealedOutput.pdf");


        } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {
            LOGGER.error("Exception encountered while executing operation", ex);
        }
    }
```
