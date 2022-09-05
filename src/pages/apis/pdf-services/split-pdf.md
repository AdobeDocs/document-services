---
title: Adobe Developer — PDF Services API  — Split PDF Pages
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link linking"/>

### Split a PDF into multiple files

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/split-pdf/)

Split a PDF document into multiple smaller documents by simply specifying either the number of files, pages per file, or page ranges.

See our public [API Reference](https://developer-stage.adobe.com/document-services/docs/apis/#tag/Split-PDF) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="4" languages="curl,JS,.NET, Java" />

#### REST API

```bash
// Please refer our Rest API docs for more information 
// https://developer-stage.adobe.com/document-services/docs/apis/#tag/Split-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/splitpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "ce8fe9da-99f2-4d01-999e-42b9ce22ec5f",
    "splitoption": {
        "pageCount": 9
    }
}'

// Legacy API can be found here 
// https://documentcloud.adobe.com/document-services/index.html#post-splitPDF
```

#### Node js

```js
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/splitpdf/split-pdf-by-number-of-pages.js

 const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');

 try {
   // Initial setup, create credentials instance.
   const credentials =  PDFServicesSdk.Credentials
       .serviceAccountCredentialsBuilder()
       .fromFile("pdfservices-api-credentials.json")
       .build();

   // Create an ExecutionContext using credentials
   const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);

   // Create a new operation instance.
   const splitPDFOperation = PDFServicesSdk.SplitPDF.Operation.createNew(),
       input = PDFServicesSdk.FileRef.createFromLocalFile(
           'resources/splitPDFInput.pdf',
           PDFServicesSdk.SplitPDF.SupportedSourceFormat.pdf
       );
   // Set operation input from a source file.
   splitPDFOperation.setInput(input);

   // Set the maximum number of pages each of the output files can have.
   splitPDFOperation.setPageCount(2);

   // Execute the operation and Save the result to the specified location.
   splitPDFOperation.execute(executionContext)
       .then(result => {
           let saveFilesPromises = [];
           for(let i = 0; i < result.length; i++){
               saveFilesPromises.push(result[i].saveAsFile(`output/SplitPDFByNumberOfPagesOutput_${i}.pdf`));
           }
           return Promise.all(saveFilesPromises);
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
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd SplitPDFByNumberOfPages/
// dotnet run SplitPDFByNumberOfPages.csproj

   namespace SplitPDFByNumberOfPages
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
  
                 // Create an ExecutionContext using credentials.
                 ExecutionContext executionContext = ExecutionContext.Create(credentials);
  
                 // Create a new operation instance
                 SplitPDFOperation splitPDFOperation = SplitPDFOperation.CreateNew();
  
                 // Set operation input from a source file.
                 FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"splitPDFInput.pdf");
                 splitPDFOperation.SetInput(sourceFileRef);
  
                 // Set the maximum number of pages each of the output files can have.
                 splitPDFOperation.SetPageCount(2);
  
                 // Execute the operation.
                 List result = splitPDFOperation.Execute(executionContext);
  
                 // Save the result to the specified location.
                 int index = 0;
                 foreach (FileRef fileRef in result)
                 {
                     fileRef.SaveAs(Directory.GetCurrentDirectory() + "/output/SplitPDFByNumberOfPagesOutput_" + index + ".pdf");
                     index++;
                 }
  
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
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.splitpdf.SplitPDFByNumberOfPages
 
   public class SplitPDFByNumberOfPages {
  
     // Initialize the logger.
     private static final Logger LOGGER = LoggerFactory.getLogger(SplitPDFByNumberOfPages.class);
  
     public static void main(String[] args) {
         try {
             // Initial setup, create credentials instance.
             Credentials credentials = Credentials.serviceAccountCredentialsBuilder()
                     .fromFile("pdfservices-api-credentials.json")
                     .build();
  
             // Create an ExecutionContext using credentials and create a new operation instance.
             ExecutionContext executionContext = ExecutionContext.create(credentials);
             SplitPDFOperation splitPDFOperation = SplitPDFOperation.createNew();
  
             // Set operation input from a source file.
             FileRef source = FileRef.createFromLocalFile("src/main/resources/splitPDFInput.pdf");
             splitPDFOperation.setInput(source);
  
             // Set the maximum number of pages each of the output files can have.
             splitPDFOperation.setPageCount(2);
  
             // Execute the operation.
             List result = splitPDFOperation.execute(executionContext);
  
             // Save the result to the specified location.
             int index = 0;
             for (FileRef fileRef : result) {
                 fileRef.saveAs("output/SplitPDFByNumberOfPagesOutput_" + index + ".pdf");
                 index++;
             }
  
         } catch (IOException| ServiceApiException | SdkException | ServiceUsageException e) {
             LOGGER.error("Exception encountered while executing operation", e);
         }
     }
  
   }
```
