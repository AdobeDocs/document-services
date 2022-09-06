<TextBlock slots="heading, buttons, text" theme="dark" hasCodeBlock className="bgBlue showMobileView"/>

##### Create PDF from URL

- [See documentation](/document-services/docs/overview/pdf-services-api/)

Create PDFs from a variety of formats, including static and dynamic HTML; Microsoft Word, PowerPoint, and Excel; as well as text, image, and, Zip


<CodeBlock slots="heading, code" repeat="4" languages="curl, js,.net,java" />

#### REST API

```bash
// Please refer our Rest API docs for more information 
// https://developer-stage.adobe.com/document-services/docs/apis/#tag/Create-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/createpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "ce8fe9da-99f2-4d01-999e-42b9ce22ec5f"
}'

// Legacy API can be found here 
// https://documentcloud.adobe.com/document-services/index.html#post-createPDF

```

#### Node js

```js
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/createpdf/create-pdf-from-docx.js 

const PDFservicesSdk = require('@adobe/pdfservices-node-sdk');

 try {
   // Initial setup, create credentials instance.
   const credentials =  PDFServicesSdk.Credentials
       .serviceAccountCredentialsBuilder()
       .fromFile("pdfservices-api-credentials.json")
       .build();

   // Create an ExecutionContext using credentials and create a new operation instance.
   const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
       createPdfOperation = PDFServicesSdk.CreatePDF.Operation.createNew();

   // Set operation input from a source file.
   const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/createPDFInput.docx');
   createPdfOperation.setInput(input);

   // Execute the operation and Save the result to the specified location.
   createPdfOperation.execute(executionContext)
       .then(result => result.saveAsFile('output/createPDFFromDOCX.pdf'))
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
// cd CreatePDFFromDocx/
// dotnet run CreatePDFFromDocx.csproj

namespace CreatePDFFromDocx
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
         CreatePDFOperation createPdfOperation = CreatePDFOperation.CreateNew();

         // Set operation input from a source file.
         FileRef source = FileRef.CreateFromLocalFile(@"createPdfInput.docx");
         createPdfOperation.SetInput(source);

         // Execute the operation.
         FileRef result = createPdfOperation.Execute(executionContext);

         // Save the result to the specified location.
         result.SaveAs(Directory.GetCurrentDirectory() + "/output/createPdfOutput.pdf");
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
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.createpdf.CreatePDFFromDOCX

public class CreatePDFFromDOCX {

    // Initialize the logger. 
    private static final Logger LOGGER = LoggerFactory.getLogger(CreatePDFFromDOCX .class);
    public static void main(String[] args) {
        try {

            // Initial setup, create credentials instance. 
            Credentials credentials = Credentials.serviceAccountCredentialsBuilder()
                    .fromFile("pdfservices-api-credentials.json").build();
            //Create an ExecutionContext using credentials and create a new operation instance.
            ExecutionContext executionContext = ExecutionContext.create(credentials);
            CreatePDFOperation createPdfOperation = CreatePDFOperation.createNew();
            // Set operation input from a source file. 
            FileRef source = FileRef.createFromLocalFile("src/main/resources/createPDFInput.docx");
            createPdfOperation.setInput(source);
            // Execute the operation. 
            FileRef result = createPdfOperation.execute(executionContext);
            // Save the result to the specified location.
            result.saveAs("output/createPDFFromDOCX.pdf");

        } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {
            LOGGER.error("Exception encountered while executing
                    operation", ex);
        }
    }
}
```
