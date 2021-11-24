---
title: Adobe Developer — PDF Services API  — Linear size PDF
---

<TextBlock slots="heading, buttons, text, text1" hasCodeBlock theme="dark" className="bgBlue link"/>

### Linearize a PDF file for fast web view

- [See documentation](/document-services/docs/overview/pdf-services-api/)

Optimize PDFs for quick viewing on the web, especially for mobile clients. Linearization allows your end users to view large PDF documents incrementally so that they can view pages much faster in lower bandwidth conditions.

See our public [API Reference](https://documentcloud.adobe.com/document-services/index.html#post-linearizePDF) and quickly try our APIs using the Postman collections


<CodeBlock slots="heading, code" repeat="3" languages="js,.net,java" />


#### Node.js

```js
// Create an ExecutionContext using credentials and create a new operation instance.
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
  linearizePDF = PDFServicesSdk.LinearizePDF,
  linearizePDFOperation = linearizePDF.Operation.createNew();

// Set operation input from a source file.
const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/linearizePDFInput.pdf');
linearizePDFOperation.setInput(input);

// Execute the operation and Save the result to the specified location.
linearizePDFOperation.execute(executionContext)
  .then(result => result.saveAsFile('output/linearizePDFOutput.pdf'))
```

#### .Net

```clike
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.Create(credentials);
LinearizePDFOperation linearizePDFOperation = LinearizePDFOperation.CreateNew();

// Set operation input from a source file.
FileRef sourceFileRef = FileRef.CreateFromLocalFile(
    @"linearizePDFInput.pdf"
  );
linearizePDFOperation.SetInput(sourceFileRef);

// Execute the operation.
FileRef result = linearizePDFOperation.Execute(executionContext);

// Save the result to the specified location.
result.SaveAs(Directory.GetCurrentDirectory() +
  "/output/linearizePDFOutput.pdf");
```

#### Java

```java
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.create(credentials);
LinearizePDFOperation linearizePDFOperation = LinearizePDFOperation.createNew();

// Set operation input from a source file.
FileRef source = FileRef.createFromLocalFile(
  "src/main/resources/linearizePDFInput.pdf" );
linearizePDFOperation.setInput(source);

// Execute the operation
FileRef result = linearizePDFOperation.execute(executionContext);

// Save the result at the specified location
result.saveAs("output/linearizePDFOutput.pdf");
```
