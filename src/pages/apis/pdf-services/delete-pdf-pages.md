---
title: Adobe Developer — PDF Services API  —  Delete PDF
---

<TextBlock slots="heading, buttons, text, text1"  theme="dark" className="bgBlue link"/>

### Delete a page from a PDF file

- [See documentation](/document-services/docs/overview/pdf-services-api/)

Delete one or more pages from a document

See our public [API Reference](https://www.adobe.com/go/dcsdk_APIdocs#post-pageManipulation) and quickly try our APIs using the Postman collections


<CodeBlock slots="heading, code" repeat="3" languages="js,.net,java" />

#### Node.js

```js
// Create an ExecutionContext using credentials and create a new operation instance.
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
  deletePagesOperation = PDFServicesSdk.DeletePages.Operation.createNew();

// Set operation input from a source file.
const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/deletePagesInput.pdf');
deletePagesOperation.setInput(input);

// Delete pages of the document (as specified by PageRanges).
const pageRangesForDeletion = getPageRangesForDeletion();
deletePagesOperation.setPageRanges(pageRangesForDeletion);

// Execute the operation and Save the result to the specified location.
deletePagesOperation.execute(executionContext)
  .then(result => result.saveAsFile('output/deletePagesOutput.pdf'))
```

#### .Net

```c#
// Create an ExecutionContext using credentials.
ExecutionContext executionContext = ExecutionContext.Create(credentials);

// Create a new operation instance
DeletePagesOperation deletePagesOperation = DeletePagesOperation.CreateNew();

// Set operation input from a source file.
FileRef sourceFileRef = FileRef.CreateFromLocalFile(
    @"deletePagesInput.pdf"
  );
deletePagesOperation.SetInput(sourceFileRef);

// Delete pages of the document
// (as specified by PageRanges).
PageRanges pageRangeForDeletion = GetPageRangeForDeletion();
deletePagesOperation
  .SetPageRanges(pageRangeForDeletion);

// Execute the operation.
FileRef result = deletePagesOperation
  .Execute(executionContext);

// Save the result to the specified location.
result.SaveAs(Directory.GetCurrentDirectory() +
  "/output/deletePagesOutput.pdf");
```

#### Java

```java
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.create(credentials);
DeletePagesOperation deletePagesOperation = DeletePagesOperation.createNew();

// Set operation input from a source file.
FileRef source = FileRef.createFromLocalFile(
    "src/main/resources/deletePagesInput.pdf"
  );
deletePagesOperation.setInput(source);

// Delete pages of the document (as specified by PageRanges).
PageRanges pageRangeForDeletion = getPageRangeForDeletion();
deletePagesOperation.setPageRanges(pageRangeForDeletion);

// Execute the operation.
FileRef result = deletePagesOperation.execute(executionContext);

// Save the result to the specified location.
result.saveAs("output/deletePagesOutput.pdf");
```
