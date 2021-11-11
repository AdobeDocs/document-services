---
title: Adobe Developer — PDF Services API  — Insert PDF Pages
---

<TextBlock slots="heading, buttons, text, text1" hasCodeBlock  theme="dark" className="bgBlue link"/>

### Insert a page into a PDF document

- [See documentation](/document-services/docs/overview/pdf-services-api/)

Insert one or more pages into an existing document

See our public [API Reference](https://www.adobe.com/go/dcsdk_APIdocs#post-combinePDF) and quickly try our APIs using the Postman collections


<CodeBlock slots="heading, code" repeat="3" languages="js,.net,java" />

#### Node.js

```js
// Create an ExecutionContext using credentials and create a new operation instance.
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
  insertPagesOperation = PDFServicesSdk.InsertPages.Operation.createNew();

// Set operation base input from a source file.
const baseInputFile = PDFServicesSdk.FileRef.
createFromLocalFile('resources/baseInput.pdf');

insertPagesOperation.setBaseInput(baseInputFile);

// Create a FileRef instance using a local file.
const firstFileToInsert = PDFServicesSdk.FileRef.
createFromLocalFile('resources/firstFileToInsertInput.pdf'),

  pageRanges = getPageRangesForFirstFile();

// Adds the pages (specified by the page ranges)
// of the input PDF file to be
// inserted at the specified page of the base PDF file.
insertPagesOperation.addPagesToInsertAt(2, firstFileToInsert, pageRanges);

// Create a FileRef instance using a local file.
const secondFileToInsert = PDFServicesSdk.FileRef.
createFromLocalFile('resources/secondFileToInsertInput.pdf');

// Adds all the pages of the input PDF file
// to be inserted at the specified
// page of the base PDF file.
insertPagesOperation.addPagesToInsertAt(3, secondFileToInsert);

// Execute the operation and Save the
// result to the specified location.
insertPagesOperation.execute(executionContext)
  .then(result => result.saveAsFile('output/insertPagesOutput.pdf'))
```

#### .Net

```c#
// Create an ExecutionContext using credentials.
ExecutionContext executionContext = ExecutionContext.Create(credentials);

// Create a new operation instance
InsertPagesOperation insertPagesOperation = InsertPagesOperation.CreateNew();

// Set operation base input from a source file.
FileRef baseSourceFile = FileRef.CreateFromLocalFile(@"baseInput.pdf");
insertPagesOperation.SetBaseInput(baseSourceFile);

// Create a FileRef instance using a local file.
FileRef firstFileToInsert =
  FileRef.CreateFromLocalFile(
    @"firstFileToInsertInput.pdf"
  );
PageRanges pageRanges = GetPageRangeForFirstFile();

// Adds the pages (specified by the page ranges) of
//the input PDF file to be inserted at the specified page of the base PDF file.

insertPagesOperation.AddPagesToInsertAt(
    firstFileToInsert, pageRanges, 2
  );

// Create a FileRef instance using a local file.
FileRef secondFileToInsert = FileRef
  .CreateFromLocalFile(
    @"secondFileToInsertInput.pdf"
  );

// Adds all the pages of the input PDF file to be
//inserted at the specified page of the base PDF file.

insertPagesOperation
  .AddPagesToInsertAt(secondFileToInsert, 3);

// Execute the operation.
FileRef result = insertPagesOperation.Execute(executionContext);

// Save the result to the specified location.
result.SaveAs(Directory.GetCurrentDirectory()
  + "/output/insertPagesOutput.pdf");
```

#### Java

```java
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.create(credentials);
InsertPagesOperation insertPagesOperation = InsertPagesOperation.createNew();

// Set operation base input from a source file.
FileRef baseSourceFile = FileRef.createFromLocalFile(
    "src/main/resources/baseInput.pdf"
  );
insertPagesOperation.setBaseInput(baseSourceFile);

// Create a FileRef instance using a local file.
FileRef firstFileToInsert =
  FileRef.createFromLocalFile(
    "src/main/resources/firstFileToInsertInput.pdf"
  );
PageRanges pageRanges =
  getPageRangeForFirstFile ();

// Adds the pages (specified by the page ranges) of the input
//PDF file to be inserted at the specified page of the base PDF file.

insertPagesOperation
  .addPagesToInsertAt(firstFileToInsert, pageRanges, 2);

// Create a FileRef instance using a local file.
FileRef secondFileToInsert = FileRef.createFromLocalFile(
    "src/main/resources/secondFileToInsertInput.pdf"
  );

// Adds all the pages of the input PDF file to be
//inserted at the specified page of the base PDF file.

insertPagesOperation
  .addPagesToInsertAt(secondFileToInsert, 3);

// Execute the operation.
FileRef result = insertPagesOperation.execute(executionContext);

// Save the result to the specified location.
result.saveAs("output/insertPagesOutput.pdf");
```