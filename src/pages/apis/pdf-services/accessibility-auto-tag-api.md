---
title: Adobe Developer — PDF Services API  —  Create PDF
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link linking auto-tag"/>

##### Adobe PDF Accessibility Auto-Tag API

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/pdf-accessibility-auto-tag-api/)

Tag PDFs to improve accessibility. Identify the content structure and reading order, and tag tables, paragraphs, lists, headings, figures, and more to improve the reading experience of native or scanned PDFs with assistive technologies. Generate a tailored tagging report about added tags and any content that needs additional review.

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Auto-Tag) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="4" languages="curl, js,.net,java" />

#### REST API

```bash
// Please refer our REST API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/PDF-Accessibility-Auto-Tag

curl --location --request POST 'https://pdf-services.adobe.io/operation/autotag' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
}'
```

#### Node js

```js
// Get the samples from https://github.com/adobe/pdfservices-node-sdk-samples
// Run the sample:
// node src/autotagpdf/autotag-pdf.js

const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');

try {
    // Initial setup, create credentials instance.
    const credentials =  PDFServicesSdk.Credentials
        .servicePrincipalsCredentialsBuilder()
        .withClientId("PDF_SERVICES_CLIENT_ID")
        .withClientSecret("PDF_SERVICES_CLIENT_SECRET")
        .build();

    // Create an ExecutionContext using credentials and create a new operation instance.
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
        autotagPDF = PDFServicesSdk.AutotagPDF,
        autotagPDFOperation = autotagPDF.Operation.createNew();

    // Set operation input from a source file.
    const input = PDFServicesSdk.FileRef.createFromLocalFile('autotagPDFInput.pdf');
    autotagPDFOperation.setInput(input);

    // Execute the operation and Save the result to the specified location.
    autotagPDFOperation.execute(executionContext)
        .then(result => {
            result.taggedPDF.saveAsFile('autotagPDFOutput.pdf');
        })
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
// Get the samples from https://github.com/adobe/PDFServices.NET.SDK.Samples
// Run the sample:
// cd AutotagPDF/
// dotnet run AutotagPDF.csproj

namespace AutotagPDF
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
            AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.CreateNew();

            // Provide an input FileRef for the operation
            autotagPDFOperation.SetInput(FileRef.CreateFromLocalFile(@"autotagPDFInput.pdf"));

            // Execute the operation
            AutotagPDFOutput autotagPDFOutput = autotagPDFOperation.Execute(executionContext);

            // Save the output files at the specified location
            autotagPDFOutput.GetTaggedPDF().SaveAs(Directory.GetCurrentDirectory() + "autotagPDFOutput.pdf");
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
// Get the samples from https://github.com/adobe/pdfservices-java-sdk-samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDF

public class AutotagPDF {
    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(AutotagPDF.class);

    public static void main(String[] args) {

        try {
            // Initial setup, create credentials instance.
            Credentials credentials = Credentials.servicePrincipalCredentialsBuilder()
                .withClientId("PDF_SERVICES_CLIENT_ID")
                .withClientSecret("PDF_SERVICES_CLIENT_SECRET")
                .build();

            // Create an ExecutionContext using credentials and create a new operation instance.
            ExecutionContext executionContext = ExecutionContext.create(credentials);
            AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.createNew();

            // Set operation input from a source file.
            FileRef source = FileRef.createFromLocalFile("autotagPDFInput.pdf");
            autotagPDFOperation.setInput(source);

            // Execute the operation
            AutotagPDFOutput autotagPDFOutput = autotagPDFOperation.execute(executionContext);

            // Save the tagged PDF output at the specified location
            autotagPDFOutput.getTaggedPDF().saveAs("autotagPDFOutput.pdf");

        } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {
            LOGGER.error("Exception encountered while executing operation", ex);
        }
    }
```
