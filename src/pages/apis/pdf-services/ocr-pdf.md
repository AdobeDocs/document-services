---
title: Adobe Developer — PDF Services API  — OCR PDF
---

<TextBlock slots="heading, buttons, text, text1" hasCodeBlock  theme="dark" className="bgBlue link"/>

### OCR a PDF file

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/ocr-pdf/)

Use built-in optical character recognition (OCR) to convert images to text and enable fully text searchable documents for archiving and creation of searchable indexes.

See our public [API Reference](https://documentcloud.adobe.com/document-services/index.html#post-ocr) and quickly try our APIs using the Postman collections


<CodeBlock slots="heading, code" repeat="3" languages="js,.net, java" />

#### Node js

```js
// Create an ExecutionContext using credentials and create a new operation instance.
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
  ocrOperation = PDFServicesSdk.OCR.Operation.createNew();

// Set operation input from a source file.
const input = PDFServicesSdk.FileRef.createFromLocalFile( 'resources/ocrInput.pdf', PDFServicesSdk.OCR.SupportedMediaTypes.pdf );
ocrOperation.setInput(input);

// Execute the operation and Save the result to the specified location.
ocrOperation.execute(executionContext)
  .then(result => result.saveAsFile('output/ocrOutput.pdf'));
```

#### .Net

```clike
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.Create(credentials);
OCROperation ocrOperation = OCROperation.CreateNew();

// Set operation input from a source file.
FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"ocrInput.pdf");
ocrOperation.SetInput(sourceFileRef);

// Execute the operation.
FileRef result = ocrOperation.Execute(executionContext);

// Save the result to the specified location.
result.SaveAs(Directory.GetCurrentDirectory() + "/output/ocrOperationOutput.pdf");
```

#### Java

```javascript
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.create(credentials);
OCROperation ocrOperation = OCROperation.createNew();

// Set operation input from a source file.
FileRef source = FileRef.createFromLocalFile( "src/main/resources/ocrInput.pdf" );
ocrOperation.setInput(source);

// Execute the operation
FileRef result = ocrOperation.execute(executionContext);

// Save the result at the specified location
result.saveAs("output/ocrOutput.pdf");
```
