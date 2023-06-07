---
title: Adobe Developer — PDF Services API  — OCR PDF
---

<TextBlock slots="heading, buttons, text, text1" hasCodeBlock  theme="dark" className="bgBlue link linking ocr-pdf-file"/>

### OCR a PDF file

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/ocr-pdf/)

Use built-in optical character recognition (OCR) to convert images to text and enable fully text searchable documents for archiving and creation of searchable indexes.

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/OCR) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="4" languages="curl,JS,.NET, Java" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Ocr

curl --location --request POST 'https://pdf-services.adobe.io/operation/ocr' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
}'

// Legacy API can be found here
// https://documentcloud.adobe.com/document-services/index.html#post-ocr
```

#### Node js

```js
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/ocr/ocr-pdf.js

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
       ocrOperation = PDFServicesSdk.OCR.Operation.createNew();

   // Set operation input from a source file.
   const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/ocrInput.pdf');
   ocrOperation.setInput(input);

   // Execute the operation and Save the result to the specified location.
   ocrOperation.execute(executionContext)
       .then(result => result.saveAsFile('output/ocrOutput.pdf'))
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
// cd OcrPDF/
// dotnet run OcrPDF.csproj

 namespace OcrPDF
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
         OCROperation ocrOperation = OCROperation.CreateNew();

         // Set operation input from a source file.
         FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"ocrInput.pdf");
         ocrOperation.SetInput(sourceFileRef);

         // Execute the operation.
         FileRef result = ocrOperation.Execute(executionContext);

         // Save the result to the specified location.
         result.SaveAs(Directory.GetCurrentDirectory() + "/output/ocrOperationOutput.pdf");
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
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.ocrpdf.OcrPDF

 public class OcrPDF {

  // Initialize the logger.
  private static final Logger LOGGER = LoggerFactory.getLogger(OcrPDF.class);

  public static void main(String[] args) {

   try {

    // Initial setup, create credentials instance.
    Credentials credentials = Credentials.servicePrincipalCredentialsBuilder()
        .withClientId("PDF_SERVICES_CLIENT_ID")
        .withClientSecret("PDF_SERVICES_CLIENT_SECRET")
        .build();

    //Create an ExecutionContext using credentials and create a new operation instance.
    ExecutionContext executionContext = ExecutionContext.create(credentials);
    OCROperation ocrOperation = OCROperation.createNew();

    // Set operation input from a source file.
    FileRef source = FileRef.createFromLocalFile("src/main/resources/ocrInput.pdf");
    ocrOperation.setInput(source);

    // Execute the operation
    FileRef result = ocrOperation.execute(executionContext);

    // Save the result at the specified location
    result.saveAs("output/ocrOutput.pdf");

   } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {
    LOGGER.error("Exception encountered while executing operation", ex);
   }
  }
 }
```
