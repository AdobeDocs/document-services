---
title: Adobe Developer — PDF Services API  —  Compress - PDF
---

<TextBlock slots="heading, buttons, text, text1, text2" theme="dark" hasCodeBlock className="bgBlue link linking"/>

### Compress a pdf file

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/compress-pdf/)

Reduce the size of PDF files by compressing to smaller sizes for lower bandwidth viewing, downloading, and sharing.

Support for multiple compression levels to retain the quality of images and graphics

See our public [API Reference](https://www.adobe.com/go/dcsdk_APIdocs#post-compressPDF) and quickly try our APIs using the Postman collections


<CodeBlock slots="heading, code" repeat="4" languages="curl,JS,.NET, Java" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://documentcloud.adobe.com/document-services/index.html#post-compressPDF

curl --location --request POST 'https://cpf-ue1.adobe.io/ops/:create?respondWith=%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'Accept: application/json, text/plain, */*' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Prefer: respond-async,wait=0' \
--form 'contentAnalyzerRequests="{
    \"cpf:inputs\": {
        \"documentIn\": {
            \"cpf:location\": \"InputFile0\",
            \"dc:format\": \"application/pdf\"
        }
    },
    \"cpf:engine\": {
        \"repo:assetId\": \"urn:aaid:cpf:Service-f37d36f4e6724eed92149a8ff35ea061\"
    },
    \"cpf:outputs\": {
        \"documentOut\": {
            \"cpf:location\": \"multipartLabelOut\",
            \"dc:format\": \"application/pdf\"
        }
    }
}"' \
--form 'InputFile0=@"{{Placeholder for input file (absolute path)}}"'
```

#### Node js

```js
// Create an ExecutionContext using credentials and create a new operation instance.
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
    compressPDF = PDFServicesSdk.CompressPDF,
    compressPDFOperation = compressPDF.Operation.createNew();

// Set operation input from a source file.
const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/compressPDFInput.pdf');
compressPDFOperation.setInput(input);

// Execute the operation and Save the result to the specified location.
compressPDFOperation.execute(executionContext)
  .then(result => result.saveAsFile('output/compressPDFOutput.pdf'))
```

#### .Net

```clike
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext =
 ExecutionContext.Create(credentials);
CompressPDFOperation compressPDFOperation =
  CompressPDFOperation.CreateNew();

// Set operation input from a source file.
FileRef sourceFileRef =
  FileRef.CreateFromLocalFile(
      @"compressPDFInput.pdf"
    );
compressPDFOperation.SetInput(sourceFileRef);

// Execute the operation.
FileRef result = compressPDFOperation.Execute(executionContext);

// Save the result to the specified location.
result.SaveAs(Directory
  .GetCurrentDirectory()
  + "/output/compressPDFOutput.pdf");
```

#### Java

```javascript
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext =
ExecutionContext.create(credentials);
CompressPDFOperation compressPDFOperation = CompressPDFOperation.createNew();

// Set operation input from a source file.
FileRef source =
  FileRef.createFromLocalFile(
    "src/main/resources/compressPDFInput.pdf
    ");
compressPDFOperation.setInput(source);

// Execute the operation
FileRef result = compressPDFOperation.execute(executionContext);

// Save the result at the specified location
result.saveAs("output/compressPDFOutput.pdf");
```