---
title: Adobe Developer — PDF Services API  — Get PDF
---

<TextBlock slots="heading, buttons, text, text1, text2" hasCodeBlock theme="dark" className="bgBlue linking get-properties"/>

### Get the properties of a PDF file

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/pdf-properties/)

Use this service to get the metadata properties of a PDF. Metadata including page count, PDF version, file size, compliance levels, font info, permissions and more are provided in JSON format for easy processing.

This data can be used to: check if a document is fully text searchable (OCR), understand the e-signature certificate info, find out compliance levels (e.g., PDF/A and PDF/UA), assess file size before compressing, check permissions related to copy, edit, printing, encryption, and much more.

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/PDF-Properties) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="4" languages="curl, js, .net, java" />

#### REST API

```bash
// Please refer our Rest API docs for more information 
// https://developer.adobe.com/document-services/docs/apis/#tag/PDF-Properties

curl --location --request POST 'https://pdf-services.adobe.io/operation/pdfproperties' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "pageLevel": false
}'

// Legacy API can be found here 
// https://documentcloud.adobe.com/document-services/index.html#post-pdfProperties
```

#### Node js

```js
const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');

try {

    const credentials = PDFServicesSdk.Credentials
        .serviceAccountCredentialsBuilder()
        .fromFile("pdfservices-api-credentials.json")
        .build();

    //Create an ExecutionContext using credentials and create a new operation instance.
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
        pdfPropertiesOperation = PDFServicesSdk.PDFProperties.Operation.createNew();

    // Set operation input from a source file.
    const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/pdfPropertiesInput.pdf');
    pdfPropertiesOperation.setInput(input);

    // Provide any custom configuration options for the operation.
    const options = new PDFServicesSdk.PDFProperties.options.PDFPropertiesOptions.Builder()
        .includePageLevelProperties(true)
        .build();
    pdfPropertiesOperation.setOptions(options);

    // Execute the operation and log the JSON Object.
    pdfPropertiesOperation.execute(executionContext)
        .then(result => {
            console.log("The resultant properties of the PDF are : " + JSON.stringify(result, null, 4));
        })
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
namespace GetPDFProperties
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
                Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()
                                .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")
                                .Build();

                //Create an ExecutionContext using credentials and create a new operation instance.
                ExecutionContext executionContext = ExecutionContext.Create(credentials);
                PDFPropertiesOperation pdfPropertiesOperation = PDFPropertiesOperation.CreateNew();
                
                // Provide an input FileRef for the operation.
                FileRef source = FileRef.CreateFromLocalFile(@"pdfPropertiesInput.pdf");
                pdfPropertiesOperation.SetInput(source);
                
                // Build PDF Properties options to include page level properties and set them into the operation.
                PDFPropertiesOptions pdfPropertiesOptions = PDFPropertiesOptions.PDFPropertiesOptionsBuilder()
                        .IncludePageLevelProperties(true)               
                        .Build();
                pdfPropertiesOperation.SetOptions(pdfPropertiesOptions);
            
                // Execute the operation.
                PDFProperties pdfProperties = pdfPropertiesOperation.Execute(executionContext);
                
                // Fetch the requisite properties of the specified PDF.
                log.Info("The size of input PDF is : " + pdfProperties.Document?.FileSize);
                log.Info("Input PDF Version is : " + pdfProperties.Document?.PDFVersion);
                log.Info("Number of pages in input PDF : " + pdfProperties.Document?.PageCount);
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
public class GetPDFProperties {

    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(GetPDFProperties.class);

    public static void main(String[] args) {

        try {

            // Initial setup, create credentials instance.
            Credentials credentials = Credentials.serviceAccountCredentialsBuilder()
                    .fromFile("pdfservices-api-credentials.json")
                    .build();

            //Create an ExecutionContext using credentials and create a new operation instance.
            ExecutionContext executionContext = ExecutionContext.create(credentials);
            PDFPropertiesOperation pdfPropertiesOperation = PDFPropertiesOperation.createNew();

            // Provide an input FileRef for the operation
            FileRef source = FileRef.createFromLocalFile("src/main/resources/pdfPropertiesInput.pdf");
            pdfPropertiesOperation.setInputFile(source);

            // Build PDF Properties options to include page level properties and set them into the operation
            PDFPropertiesOptions pdfPropertiesOptions = PDFPropertiesOptions.PDFPropertiesOptionsBuilder()
                    .includePageLevelProperties(true)
                    .build();
            pdfPropertiesOperation.setOptions(pdfPropertiesOptions);

            // Execute the operation.
            PDFProperties result = pdfPropertiesOperation.execute(executionContext);

            // Fetch the requisite properties of the specified PDF.
            LOGGER.info("The Page level properties of the PDF: {}", result.getDocument().getPageCount());

            LOGGER.info("The Fonts used in the PDF: ");
            for(Font font: result.getDocument().getFonts()) {
                LOGGER.info(font.getName());
            }

        } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {
            LOGGER.error("Exception encountered while executing operation", ex);
        }
    }
}

```
