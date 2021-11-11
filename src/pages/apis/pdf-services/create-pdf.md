---
title: Adobe Developer — PDF Services API  —  Create PDF
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link"/>

### Create a PDF file

- [See documentation](/document-services/docs/overview/pdf-services-api/)

Create PDFs from a variety of formats, including static and dynamic HTML; Microsoft Word, PowerPoint, and Excel; as well as text, image, Zip, and URL.
Support for HTML to PDF, DOC to PDF, DOCX to PDF, PPT to PDF, PPTX to PDF, XLS to PDF, XLSX to PDF, TXT to PDF, RTF to PDF, BMP to PDF, JPEG to PDF, GIF to PDF, TIFF to PDF, PNG to PDF

See our public [API Reference](https://www.adobe.com/go/dcsdk_APIdocs#post-createPDF) and quickly try our APIs using the Postman collections


<CodeBlock slots="heading, code" repeat="4" languages="curl, js,.net,java" />

#### REST API

```bash
curl --location --request POST 'https://cpf-ue1.adobe.io/ops/:create?respondWith
    =%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D' \
  --header 'Authorization: Bearer ' \
  --header 'Accept: application/json, text/plain, */*' \
  --header 'x-api-key: ' \
  --header 'Prefer: respond-async,wait=0' \
  --form 'contentAnalyzerRequests="{
    \"cpf:inputs\": {
      \"documentIn\": {
        \"cpf:location\": \"InputFile0\",
        \"dc:format\": \"application/vnd.openxmlformats-officedocument.wordprocessingml.document\"
      }
    },
    \"cpf:engine\": {
      \"repo:assetId\": \"urn:aaid:cpf:Service-1538ece812254acaac2a07799503a430\"
    },
    \"cpf:outputs\": {
      \"documentOut\": {
        \"cpf:location\": \"multipartLabelOut\",
        \"dc:format\": \"application/pdf\"
      }
    }
  }"' \
  --form 'InputFile0=@""'
```

#### Node.js

```js
// Create an ExecutionContext using credentials and create a new operation instance.
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
  createPdfOperation = PDFServicesSdk.CreatePDF.Operation.createNew();

// Set operation input from a source file.
const input = PDFServicesSdk.FileRef.createFromLocalFile(
  "resources/createPDFInput.docx"
);
createPdfOperation.setInput(input);

// Execute the operation and Save the result to the specified location.
createPdfOperation
  .execute(executionContext)
  .then((result) => result.saveAsFile("output/createPDFFromDOCX.pdf"));
```

#### .Net

```c#
// Create an ExecutionContext using credentials and create a new operation instance.
const executionContext = PDFServicesSdk.ExecutionContext.create( credentials ),
createPdfOperation = PDFServicesSdk.CreatePDF.Operation.createNew();

// Set operation input from a source file.
const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/createPDFInput.docx');
createPdfOperation.setInput(input);

// Execute the operation and Save the result to the specified location.
createPdfOperation.execute(executionContext)
.then(result => result.saveAsFile('output/createPDFFromDOCX.pdf'))
```

#### Java

```java
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.create(credentials);
CreatePDFOperation createPdfOperation = CreatePDFOperation.createNew();

// Set operation input from a source file.
FileRef source = FileRef.createFromLocalFile("src/main/resources/createPDFInput.docx");
createPdfOperation.setInput(source);

// Execute the operation.
FileRef result = createPdfOperation.execute(executionContext);

// Save the result to the specified location.
result.saveAs("output/createPDFFromDOCX.pdf");
```
