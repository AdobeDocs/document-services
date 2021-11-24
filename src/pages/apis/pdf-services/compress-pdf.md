---
title: Adobe Developer — PDF Services API  —  Compress - PDF
---

<TextBlock slots="heading, buttons, text, text1, text2" theme="dark" hasCodeBlock className="bgBlue link"/>

### Compress a pdf file

- [See documentation](/document-services/docs/overview/pdf-services-api/)

Reduce the size of PDF files by compressing to smaller sizes for lower bandwidth viewing, downloading, and sharing.

Support for multiple compression levels to retain the quality of images and graphics

See our public [API Reference](https://www.adobe.com/go/dcsdk_APIdocs#post-compressPDF) and quickly try our APIs using the Postman collections


<CodeBlock slots="heading, code" repeat="3" languages="js,.net,java" />

#### Node.js

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

```java
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