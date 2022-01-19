---
title: Adobe Developer — PDF Services API  —  Convert PDF
---

<TextBlock slots="heading, buttons, text, text1, text2" theme="dark" hasCodeBlock className="bgBlue link linking"/>

### Convert a PDF file to other formats

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/export-pdf/)

Convert existing PDFs to popular formats, such as Microsoft Word, Excel, and PowerPoint, as well as text and image

Support for PDF to DOC, PDF to DOCX, PDF to JPEG, PDF to PNG, PDF to PPTX, PDF to RTF, PDF to XLSX

See our public [API Reference](https://documentcloud.adobe.com/document-services/index.html#post-exportPDF) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="4" languages="curl,JS,.NET, Java" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://documentcloud.adobe.com/document-services/index.html#post-exportPDF

curl --location --request POST 'https://cpf-ue1.adobe.io/ops/:create?respondWith=%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'Accept: application/json, text/plain, */*' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Prefer: respond-async,wait=0' \
--form 'contentAnalyzerRequests="{
    \"cpf:inputs\": {
        \"params\": {
            \"cpf:inline\": {
                \"targetFormat\": \"docx\"
            }
        },
        \"documentIn\": {
            \"cpf:location\": \"InputFile0\",
            \"dc:format\": \"application/pdf\"
        }
    },
    \"cpf:engine\": {
        \"repo:assetId\": \"urn:aaid:cpf:Service-26c7fda2890b44ad9a82714682e35888\"
    },
    \"cpf:outputs\": {
        \"documentOut\": {
            \"cpf:location\": \"multipartLabelOut\",
            \"dc:format\": \"application/vnd.openxmlformats-officedocument.wordprocessingml.document\"
        }
    }
}"' \
--form 'InputFile0=@"{{Placeholder for input file (absolute path)}}"'
```

#### Node js

```js
// Create an ExecutionContext using
// credentials and create a new
// operation instance.
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
exportPDF = PDFServicesSdk.ExportPDF,
exportPdfOperation = exportPDF.Operation.createNew(exportPDF.SupportedTargetFormats.DOCX);

// Set operation input from a source file
const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/exportPDFInput.pdf');
exportPdfOperation.setInput(input);

// Execute the operation and Save the result to the specified location.
exportPdfOperation.execute(executionContext)
.then(result => result.saveAsFile('output/exportPdfOutput.docx'))
```

#### .Net

```clike
// Create an ExecutionContext using
// credentials and create a new
// operation instance.
ExecutionContext executionContext = ExecutionContext.Create(credentials);
ExportPDFOperation exportPdfOperation = ExportPDFOperation.CreateNew( ExportPDFTargetFormat.DOCX );

// Set operation input from a local PDF file
FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"exportPdfInput.pdf");
exportPdfOperation.SetInput(sourceFileRef);

// Execute the operation.
FileRef result = exportPdfOperation.Execute(executionContext);

// Save the result to the specified location.
result.SaveAs(Directory.GetCurrentDirectory()
  + "/output/exportPdfOutput.docx");
```

#### Java

```javascript
// Create an ExecutionContext using
// credentials and create a new
// operation instance.
ExecutionContext executionContext = ExecutionContext.create(credentials);
ExportPDFOperation exportPdfOperation = ExportPDFOperation
  .createNew(ExportPDFTargetFormat.DOCX);

// Set operation input from a local PDF file
FileRef sourceFileRef = FileRef
  .createFromLocalFile(
    "src/main/resources/exportPDFInput.pdf"
  );
exportPdfOperation.setInput(sourceFileRef);

// Execute the operation.
FileRef result = exportPdfOperation.execute(executionContext);

// Save the result to the specified location.
result.saveAs("output/exportPdfOutput.docx");
```