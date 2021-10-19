---
title: Adobe Developer — PDF Services API  —  Combine PDF
---

<TextBlock slots="heading, buttons, text, text1"  theme="dark" className="bgBlue link"/>

### Combine multiple documents into a pdf file

- [See documentation](https://www.adobe.com/go/pdftoolsapi_doc)

Combine two or more documents into a single PDF file

See our public [API Reference](https://documentcloud.adobe.com/document-services/index.html#post-combinePDF) and quickly try our APIs using the Postman collections.


<CodeBlock slots="heading, code" repeat="4" languages="curl, js,.net,java" />


#### REST API

```bash
  curl --location --request POST 'https://cpf-ue1.adobe.io/ops/:create?respondWith=%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D' \
  --header 'Authorization: Bearer ' \
  --header 'Accept: application/json, text/plain, */*' \
  --header 'x-api-key: ' \
  --header 'Prefer: respond-async,wait=0' \
  --form 'contentAnalyzerRequests="{
    \"cpf:inputs\": {
      \"documentsIn\": [{
        \"pageRanges\": {
          \"cpf:inline\": [{
            \"start\": 1,
            \"end\": 4
          }]
        },
        \"documentIn\": {
          \"cpf:location\": \"InputFile0\",
          \"dc:format\": \"application/pdf\"
        }
      }, {
        \"pageRanges\": {
          \"cpf:inline\": [{
            \"start\": 1,
            \"end\": 25
          }]
        },
        \"documentIn\": {
          \"cpf:location\": \"InputFile1\",
          \"dc:format\": \"application/pdf\"
        }
      }, {
        \"pageRanges\": {
          \"cpf:inline\": [{
            \"start\": 1
          }, {
            \"end\": 25
          }, {
            \"start\": 1,
            \"end\": 25
          }]
        },
        \"documentIn\": {
          \"cpf:location\": \"InputFile2\",
          \"dc:format\": \"application/pdf\"
        }
      }]
    },
    \"cpf:engine\": {
      \"repo:assetId\": \"urn:aaid:cpf:Service-916ee91c156b42349a7847a7d564fb13\"
    },
    \"cpf:outputs\": {
      \"documentOut\": {
        \"cpf:location\": \"OutputFile\",
        \"dc:format\": \"application/pdf\"
      }
    }
  }"' \
  --form 'InputFile0=@""' \
  --form 'InputFile1=@""' \
  --form 'InputFile2=@""'
```

#### Node.js

```js
// Create an ExecutionContext using credentials and create a new operation instance.
const executionContext = PDFServicesSdk.ExecutionContext.create( credentials ),
  combineFilesOperation = PDFServicesSdk.CombineFiles.Operation.createNew();

// Set operation input from a source file.
const combineSource1 = PDFServicesSdk.FileRef.createFromLocalFile( 'resources/combineFilesInput1.pdf' ),
  combineSource2 = PDFServicesSdk.FileRef.createFromLocalFile( 'resources/combineFilesInput2.pdf' );
combineFilesOperation.addInput( combineSource1 );
combineFilesOperation.addInput( combineSource2 );

// Execute the operation and Save the result to the specified location.
combineFilesOperation.execute( executionContext )
  .then(result => result.saveAsFile( 'output/combineFilesOutput.pdf' ));
```

#### .Net

```c#
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.Create( credentials );
CombineFilesOperation combineFilesOperation = CombineFilesOperation.CreateNew();

// Add operation input from source files.
FileRef combineSource1 = FileRef
  .CreateFromLocalFile( @"combineFilesInput1.pdf" );
FileRef combineSource2 = FileRef
  .CreateFromLocalFile( @"combineFilesInput2.pdf" );
combineFilesOperation.AddInput( combineSource1 );
combineFilesOperation.AddInput( combineSource2 );

// Execute the operation.
FileRef result = combineFilesOperation.Execute( executionContext );

// Save the result to the specified location.
result.SaveAs( Directory.GetCurrentDirectory() +
  "/output/combineFilesOutput.pdf" );
```

#### Java

```java
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.create(credentials);
ReorderPagesOperation reorderPagesOperation = ReorderPagesOperation.createNew();

// Set operation input from a source file, along with specifying the order of the pages for rearranging the pages in a PDF file.
FileRef source =
  FileRef.createFromLocalFile( "src/main/resources/reorderPagesInput.pdf" );
PageRanges pageRanges = getPageRangeForReorder();
reorderPagesOperation.setInput(source);
reorderPagesOperation.setPagesOrder(pageRanges);

// Execute the operation.
FileRef result = reorderPagesOperation.execute(executionContext);

// Save the result to the specified location.
result.saveAs("output/reorderPagesOutput.pdf");
```