---
title: Adobe Developer — PDF Services API  —  Convert PDF
---

<TextBlock slots="heading, buttons, text, text1, text2" theme="dark"  className="bgBlue link"/>

### Convert a PDF file to other formats

- [See documentation](https://www.adobe.com/go/pdftoolsapi_doc)

Convert existing PDFs to popular formats, such as Microsoft Word, Excel, and PowerPoint, as well as text and image

Support for PDF to DOC, PDF to DOCX, PDF to JPEG, PDF to PNG, PDF to PPTX, PDF to RTF, PDF to XLSX

See our public [API Reference](https://documentcloud.adobe.com/document-services/index.html#post-exportPDF) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="3" languages="js,.net,java" />

#### Node.js

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

```c#
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

```java
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