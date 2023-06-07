<TextBlock slots="heading, buttons, text, text1, text2" theme="dark" hasCodeBlock className="bgBlue link linking secure-PDF-file"/>

### Secure a PDf file and set restrictions

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/protect-pdf/)

Secure a PDF file with a password encrypt the document. Set an owner password and restrictions on certain features like printing, editing and copying in the PDF document to prevent end users from modifying it.

Support for AES-128 and AES-256 encryption on PDF files, with granular permissions for high and low quality printing and fill and sign form field restrictions.

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Protect-PDF) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="4" languages="curl,JS,.NET, Java" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Protect-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/protectpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "passwordProtection": {
        "userPassword": "user_password"
    },
    "encryptionAlgorithm": "AES_128",
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
}'

// Legacy API can be found here
// https://documentcloud.adobe.com/document-services/index.html#post-protectPDF
```

#### Node js

```js
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/protectpdf/protect-pdf.js

    const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');

    try {
      // Initial setup, create credentials instance.
        const credentials =  PDFServicesSdk.Credentials
            .servicePrincipalsCredentialsBuilder()
            .withClientId("PDF_SERVICES_CLIENT_ID")
            .withClientSecret("PDF_SERVICES_CLIENT_SECRET")
            .build();

      // Create an ExecutionContext using credentials
      const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);

      // Build ProtectPDF options by setting a User Password and Encryption
      // Algorithm (used for encrypting the PDF file).
      const protectPDF = PDFServicesSdk.ProtectPDF,
          options = new protectPDF.options.PasswordProtectOptions.Builder()
              .setUserPassword("encryptPassword")
              .setEncryptionAlgorithm(PDFServicesSdk.ProtectPDF.options.EncryptionAlgorithm.AES_256)
              .build();

      // Create a new operation instance.
      const protectPDFOperation = protectPDF.Operation.createNew(options);

      // Set operation input from a source file.
      const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/protectPDFInput.pdf');
      protectPDFOperation.setInput(input);

      // Execute the operation and Save the result to the specified location.
      protectPDFOperation.execute(executionContext)
          .then(result => result.saveAsFile('output/protectPDFOutput.pdf'))
          .catch(err => {
              if(err instanceof PDFServicesSdk.Error.ServiceApiError
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
// cd ProtectPDF/
// dotnet run ProtectPDF.csproj

  namespace ProtectPDF
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

                // Build ProtectPDF options by setting a User Password and Encryption
                // Algorithm (used for encrypting the PDF file).
                ProtectPDFOptions protectPDFOptions = ProtectPDFOptions.PasswordProtectOptionsBuilder()
                        .SetUserPassword("encryptPassword")
                        .SetEncryptionAlgorithm(EncryptionAlgorithm.AES_256)
                        .Build();

                // Create a new operation instance
                ProtectPDFOperation protectPDFOperation = ProtectPDFOperation.CreateNew(protectPDFOptions);

                // Set operation input from a source file.
                FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"protectPDFInput.pdf");
                protectPDFOperation.SetInput(sourceFileRef);

                // Execute the operation.
                FileRef result = protectPDFOperation.Execute(executionContext);

                // Save the result to the specified location.
                result.SaveAs(Directory.GetCurrentDirectory() + "/output/protectPDFOutput.pdf");
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
    }
  }
```

#### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.protectpdf.ProtectPDF

      public class ProtectPDF {
        // Initialize the logger.
        private static final Logger LOGGER = LoggerFactory.getLogger(ProtectPDF.class);

        public static void main(String[] args) {

            try {
                // Initial setup, create credentials instance.
                Credentials credentials = Credentials.servicePrincipalCredentialsBuilder()
                    .withClientId("PDF_SERVICES_CLIENT_ID")
                    .withClientSecret("PDF_SERVICES_CLIENT_SECRET")
                    .build();

                // Create an ExecutionContext using credentials.
                ExecutionContext executionContext = ExecutionContext.create(credentials);

                // Build ProtectPDF options by setting a User Password and Encryption
                // Algorithm (used for encrypting the PDF file).
                ProtectPDFOptions protectPDFOptions = ProtectPDFOptions.passwordProtectOptionsBuilder()
                        .setUserPassword("encryptPassword")
                        .setEncryptionAlgorithm(EncryptionAlgorithm.AES_256)
                        .build();

                // Create a new operation instance.
                ProtectPDFOperation protectPDFOperation = ProtectPDFOperation.createNew(protectPDFOptions);

                // Set operation input from a source file.
                FileRef source = FileRef.createFromLocalFile("src/main/resources/protectPDFInput.pdf");
                protectPDFOperation.setInput(source);

                // Execute the operation
                FileRef result = protectPDFOperation.execute(executionContext);

                // Save the result at the specified location
                result.saveAs("output/protectPDFOutput.pdf");

            } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {
                LOGGER.error("Exception encountered while executing operation", ex);
            }
        }
      }
```
