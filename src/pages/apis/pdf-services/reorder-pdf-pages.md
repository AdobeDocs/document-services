---
title: Adobe Developer — PDF Services API  — Render PDF Pages
---

<TextBlock slots="heading, buttons, text, text1" hasCodeBlock  theme="dark" className="bgBlue link"/>

### Reorder pages within PDF files

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/reorder-pages/)

Reorder the pages of a PDF file to reorganize.

See our public [API Reference](https://documentcloud.adobe.com/document-services/index.html#post-combinePDF) and quickly try our APIs using the Postman collections


<CodeBlock slots="heading, code" repeat="3" languages="js,.net,java" />

#### Node js

```js
// Create an ExecutionContext using credentials and create a new operation instance.
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
  reorderPagesOperation = PDFServicesSdk.ReorderPages.Operation.createNew();

// Set operation input from a source file, along with specifying the order of the pages for rearranging the pages in a PDF file.
const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/reorderPagesInput.pdf');
const pageRanges = getPageRangeForReorder();
reorderPagesOperation.setInput(input);
reorderPagesOperation.setPagesOrder(pageRanges);

// Execute the operation and Save the result to the specified location.
reorderPagesOperation.execute(executionContext)
  .then(result => result.saveAsFile('output/reorderPagesOutput.pdf'));
```

#### .Net

```clike
// Create an ExecutionContext using credentials.
ExecutionContext executionContext = ExecutionContext.Create(credentials);

// Create a new operation instance
ReorderPagesOperation reorderPagesOperation = ReorderPagesOperation.CreateNew();

// Set operation input from a source file, along with specifying the order of the pages for rearranging the pages in a PDF file.
FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"reorderPagesInput.pdf");
reorderPagesOperation.SetInput(sourceFileRef);
PageRanges pageRanges = GetPageRangeForReorder();
reorderPagesOperation.SetPagesOrder(pageRanges);

// Execute the operation.
FileRef result = reorderPagesOperation.Execute(executionContext);

// Save the result to the specified location.
result.SaveAs(Directory.GetCurrentDirectory() +
  "/output/reorderPagesOutput.pdf");
```

#### Java

```javascript
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