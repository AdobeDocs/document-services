---
title: Adobe Developer — PDF Services API  —  HTML to PDF
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link linking create-pdf-html"/>

### Create a PDF file from HTML

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/create-pdf/#create-a-pdf-from-static-html)

Create PDFs from static and dynamic HTML, Zip, and URL.

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Html-To-PDF) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="4" languages="curl, js,.net,java" />

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
// https://documentservices.adobe.com/document-services/index.html#post-htmlToPDF
```

#### Node js

```js
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/createpdf/create-pdf-from-static-html.js

const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');

 const setCustomOptions = (htmlToPDFOperation) => {
   // Define the page layout, in this case an 8 x 11.5 inch page (effectively portrait orientation).
   const pageLayout = new PDFServicesSdk.CreatePDF.options.PageLayout();
   pageLayout.setPageSize(8, 11.5);

   // Set the desired HTML-to-PDF conversion options.
   const htmlToPdfOptions = new PDFServicesSdk.CreatePDF.options.html.CreatePDFFromHtmlOptions.Builder()
     .includesHeaderFooter(true)
     .withPageLayout(pageLayout)
     .build();
   htmlToPDFOperation.setOptions(htmlToPdfOptions);
 };


 try {
   // Initial setup, create credentials instance.
   const credentials =  PDFServicesSdk.Credentials
     .serviceAccountCredentialsBuilder()
     .fromFile("pdfservices-api-credentials.json")
     .build();

   // Create an ExecutionContext using credentials and create a new operation instance.
   const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
     htmlToPDFOperation = PDFServicesSdk.CreatePDF.Operation.createNew();

   // Set operation input from a source file.
   const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/createPDFFromStaticHtmlInput.zip');
   htmlToPDFOperation.setInput(input);

   // Provide any custom configuration options for the operation.
   setCustomOptions(htmlToPDFOperation);

   // Execute the operation and Save the result to the specified location.
   htmlToPDFOperation.execute(executionContext)
     .then(result => result.saveAsFile('output/createPdfFromStaticHtmlOutput.pdf'))
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
         Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()
                 .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")
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

public class CreatePDFFromStaticHTML {

   // Initialize the logger.
   private static final Logger LOGGER = LoggerFactory.getLogger(CreatePDFFromStaticHTML.class);

   public static void main(String[] args) {

     try {

       // Initial setup, create credentials instance.
       Credentials credentials = Credentials.serviceAccountCredentialsBuilder()
           .fromFile("pdfservices-api-credentials.json")
           .build();

       //Create an ExecutionContext using credentials and create a new operation instance.
       ExecutionContext executionContext = ExecutionContext.create(credentials);
       CreatePDFOperation htmlToPDFOperation = CreatePDFOperation.createNew();

       // Set operation input from a source file.
       FileRef source = FileRef.createFromLocalFile("src/main/resources/createPDFFromStaticHtmlInput.zip");
       htmlToPDFOperation.setInput(source);

       // Provide any custom configuration options for the operation.
       setCustomOptions(htmlToPDFOperation);

       // Execute the operation.
       FileRef result = htmlToPDFOperation.execute(executionContext);

       // Save the result to the specified location.
       result.saveAs("output/createPDFFromStaticHtmlOutput.pdf");

     } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {
       LOGGER.error("Exception encountered while executing operation", ex);
     }
   }

   private static void setCustomOptions(CreatePDFOperation htmlToPDFOperation) {
     // Define the page layout, in this case an 8 x 11.5 inch page (effectively portrait orientation).
     PageLayout pageLayout = new PageLayout();
     pageLayout.setPageSize(8, 11.5);

     // Set the desired HTML-to-PDF conversion options.
     CreatePDFOptions htmlToPdfOptions = CreatePDFOptions.htmlOptionsBuilder()
         .includeHeaderFooter(true)
         .withPageLayout(pageLayout)
         .build();
     htmlToPDFOperation.setOptions(htmlToPdfOptions);
   }
 }
```
