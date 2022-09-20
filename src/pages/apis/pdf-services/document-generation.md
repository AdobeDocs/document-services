---
title: Adobe Developer — PDF Services API  —  Document Generation
---


<TextBlock slots="heading, buttons, text, text1, text2" theme="dark" hasCodeBlock className="bgBlue link  button-screen linking pdf-word-doc-gen" 
variantsTypePrimary='primary' variantsTypeSecondary='cta' isPrimaryBtn  primaryOutline/>

### PDF and Word document generation with dynamic data

- [Learn more](/src/pages/apis/doc-generation.md)
- [Try the demo](https://adobe.com/go/dcdocgen_api_demo)



Generate PDF or Word documents from Microsoft Word templates and your data. Merge dynamic data with your custom templates to generate on brand contracts, proposals, invoices, NDAs, and more.

Use our Word add-in to quickly create templates and add signatures with out of the box Adobe Acrobat Sign integration.

See our public  [API Reference](https://developer-stage.adobe.com/document-services/docs/apis/#tag/Document-Generation) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="4" languages="curl, js,.net,java" />

#### REST API

```bash
// Please refer our Rest API docs for more information 
// https://developer-stage.adobe.com/document-services/docs/apis/#tag/Document-Generation

curl --location --request POST 'https://pdf-services.adobe.io/operation/documentgeneration' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "outputFormat": "pdf",
    "jsonDataForMerge": {
        "customerName": "Kane Miller",
        "customerVisits": 100,
        "itemsBought": [
            {
                "name": "Sprays",
                "quantity": 50,
                "amount": 100
            },
            {
                "name": "Chemicals",
                "quantity": 100,
                "amount": 200
            }
        ],
        "totalAmount": 300,
        "previousBalance": 50,
        "lastThreeBillings": [
            100,
            200,
            300
        ],
        "photograph": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88h8AAu0B9XNPCQQAAAAASUVORK5CYII="
    }
}'

// Legacy API can be found here 
// https://documentcloud.adobe.com/document-services/index.html#post-documentGeneration
```

#### Node js

```js
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/documentmerge/merge-document-to-docx.js

 const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');

 try {
   // Initial setup, create credentials instance.
   const credentials =  PDFServicesSdk.Credentials
       .serviceAccountCredentialsBuilder()
       .fromFile("pdfservices-api-credentials.json")
       .build();

   // Setup input data for the document merge process.
   const jsonString = "{\"customerName\": \"Kane Miller\", \"customerVisits\": 100}",
       jsonDataForMerge = JSON.parse(jsonString);

   // Create an ExecutionContext using credentials.
   const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);

   // Create a new DocumentMerge options instance.
   const documentMerge = PDFServicesSdk.DocumentMerge,
       documentMergeOptions = documentMerge.options,
       options = new documentMergeOptions.DocumentMergeOptions(jsonDataForMerge, documentMergeOptions.OutputFormat.PDF);

   // Create a new operation instance using the options instance.
   const documentMergeOperation = documentMerge.Operation.createNew(options);

   // Set operation input document template from a source file.
   const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/documentMergeTemplate.docx');
   documentMergeOperation.setInput(input);

   // Execute the operation and Save the result to the specified location.
   documentMergeOperation.execute(executionContext)
       .then(result => result.saveAsFile('output/documentMergeOutput.pdf'))
       .catch(err => {
           if(err instanceof PDFServicesSdk.Error.ServiceApiError
               || err instanceof PDFServicesSdk.Error.ServiceUsageError) {
               console.log('Exception encountered while executing operation', err);
           } else {
               console.log('Exception encountered while executing operation', err);
           }
       });
 }
 catch (err) {
     console.log('Exception encountered while executing operation', err);
 }
```

#### .NET

```clike
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd MergeDocumentToDocx/
// dotnet run MergeDocumentToDOCX.csproj

  namespace MergeDocumentToPDF
   {
       class Program
       {
           private static readonly ILog log = LogManager.GetLogger(typeof(Program));
  
           static void Main()
           {
               //Configure the logging.
               ConfigureLogging();
               try
               {
                   // Initial setup, create credentials instance.
                   Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()
                            .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")
                            .Build();
  
                   // Create an ExecutionContext using credentials.
                   ExecutionContext executionContext = ExecutionContext.Create(credentials);
  
                   // Setup input data for the document merge process.
                   JObject jsonDataForMerge = JObject.Parse("{\"customerName\": \"Kane Miller\",\"customerVisits\": 100}");
  
                   // Create a new DocumentMerge Options instance.
                   DocumentMergeOptions documentMergeOptions = new DocumentMergeOptions(jsonDataForMerge, OutputFormat.PDF);
  
                   // Create a new DocumentMerge Operation instance with the DocumentMerge Options instance.
                   DocumentMergeOperation documentMergeOperation = DocumentMergeOperation.CreateNew(documentMergeOptions);
  
                   // Set the operation input document template from a source file.
                   documentMergeOperation.SetInput(FileRef.CreateFromLocalFile(@"documentMergeTemplate.docx"));
  
                   // Execute the operation.
                   FileRef result = documentMergeOperation.Execute(executionContext);
  
                   // Save the result to the specified location.
                   result.SaveAs(Directory.GetCurrentDirectory() + "/output/documentMergeOutput.pdf");
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
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.documentmerge.MergeDocumentToDOCX
 
   package com.adobe.pdfservices.operation.samples.documentmerge;
 
   public class MergeDocumentToPDF {
 
      // Initialize the logger.
      private static final Logger LOGGER = LoggerFactory.getLogger(MergeDocumentToPDF.class);
 
      public static void main(String[] args) {
 
          try {
 
            // Initial setup, create credentials instance.
            Credentials credentials = Credentials.serviceAccountCredentialsBuilder()
                    .fromFile("pdfservices-api-credentials.json")
                    .build();
 
            // Setup input data for the document merge process.
            JSONObject jsonDataForMerge = new JSONObject("{\"customerName\": \"Kane Miller\",\"customerVisits\": 100}");
 
            // Create an ExecutionContext using credentials.
            ExecutionContext executionContext = ExecutionContext.create(credentials);
 
            // Create a new DocumentMergeOptions instance.
            DocumentMergeOptions documentMergeOptions = new DocumentMergeOptions(jsonDataForMerge, OutputFormat.PDF);
 
            // Create a new DocumentMergeOperation instance with the DocumentMergeOptions instance.
            DocumentMergeOperation documentMergeOperation = DocumentMergeOperation.createNew(documentMergeOptions);
 
            // Set the operation input document template from a source file.
            FileRef documentTemplate = FileRef.createFromLocalFile("src/main/resources/documentMergeTemplate.docx");
            documentMergeOperation.setInput(documentTemplate);
 
            // Execute the operation.
            FileRef result = documentMergeOperation.execute(executionContext);
 
            // Save the result to the specified location.
            result.saveAs("output/documentMergeOutput.pdf");
 
          } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {
              LOGGER.error("Exception encountered while executing operation", ex);
          }
      }
   }

```
