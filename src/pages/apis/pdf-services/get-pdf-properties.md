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
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/exportpdf/get-pdf-properties.js

const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');

try {
    // Initial setup, create credentials instance.
    const credentials =  PDFServicesSdk.Credentials
        .servicePrincipalCredentialsBuilder()
        .withClientId("PDF_SERVICES_CLIENT_ID")
        .withClientSecret("PDF_SERVICES_CLIENT_SECRET")
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

    // Execute the operation ang get properties of the PDF in PDFProperties object.
    pdfPropertiesOperation.execute(executionContext)
        .then(result => console.log("The resultant json object is : " + JSON.stringify(result, null, 4)))
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
// cd PDFPropertiesAsJSONObject/
// dotnet run GetPDFProperties.csproj

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
                Credentials credentials = Credentials.ServicePrincipalCredentialsBuilder()
                    .WithClientId("PDF_SERVICES_CLIENT_ID")
                    .WithClientSecret("PDF_SERVICES_CLIENT_SECRET")
                    .Build();

                //Create an ExecutionContext using credentials and create a new operation instance.
                ExecutionContext executionContext = ExecutionContext.Create(credentials);
                PDFPropertiesOperation pdfPropertiesOperation = PDFPropertiesOperation.CreateNew();

                // Provide an input FileRef for the operation
                FileRef source = FileRef.CreateFromLocalFile(@"pdfPropertiesInput.pdf");
                pdfPropertiesOperation.SetInput(source);

                // Build PDF Properties options to include page level properties and set them into the operation
                PDFPropertiesOptions pdfPropertiesOptions = PDFPropertiesOptions.PDFPropertiesOptionsBuilder()
                .IncludePageLevelProperties(true)
                .Build();
                pdfPropertiesOperation.SetOptions(pdfPropertiesOptions);

                // Execute the operation ang get properties of the PDF in PDFProperties object.
                PDFProperties pdfProperties = pdfPropertiesOperation.Execute(executionContext);
                Console.WriteLine("The resultant PDF Properties are: " + result.ToString());

            }
            catch (ServiceUsageException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            // Catch more errors here. . .
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
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.pdfproperties.GetPDFProperties

public class GetPDFProperties {

    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(GetPDFProperties.class);

    public static void main(String[] args) {

        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/pdfPropertiesInput.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                System.getenv("PDF_SERVICES_CLIENT_ID"),
                System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Create parameters for the job
            PDFPropertiesParams pdfPropertiesParams = PDFPropertiesParams.pdfPropertiesParamsBuilder()
                .includePageLevelProperties()
                .build();

            // Creates a new job instance
            PDFPropertiesJob pdfPropertiesJob = new PDFPropertiesJob(asset)
                .setParams(pdfPropertiesParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(pdfPropertiesJob);
            PDFServicesResponse < PDFPropertiesResult > pdfServicesResponse = pdfServices.getJobResult(location, PDFPropertiesResult.class);

            PDFProperties pdfProperties = pdfServicesResponse.getResult().getPdfProperties();

            // Fetch the requisite properties of the specified PDF.
            LOGGER.info("Size of the specified PDF file: {}", pdfProperties.getDocument().getFileSize());
            LOGGER.info("Version of the specified PDF file: {}", pdfProperties.getDocument().getPDFVersion());
            LOGGER.info("Page count of the specified PDF file: {}", pdfProperties.getDocument().getPageCount());

        } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
            LOGGER.error("Exception encountered while executing operation", ex);
        }
    }
}
```
