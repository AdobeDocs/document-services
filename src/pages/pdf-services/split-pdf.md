---
title: Adobe Developer — PDF Services API  — Split PDF Pages
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" className="bgBlue link"/>

### Split a PDF into multiple files

- [See documentation](https://www.adobe.com/go/pdftoolsapi_doc)

Split a PDF document into multiple smaller documents by simply specifying either the number of files, pages per file, or page ranges.

See our public [API Reference](https://documentcloud.adobe.com/document-services/index.html#post-splitPDF) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="3" languages="js,.net,java" />

#### Node.js

```js
// Create an ExecutionContext using credentials
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);

// Create a new operation instance.
const splitPDFOperation = PDFServicesSdk.SplitPDF.Operation.createNew(),
input = PDFServicesSdk.FileRef.createFromLocalFile('resources/splitPDFInput.pdf',
PDFServicesSdk.SplitPDF.SupportedSourceFormat.pdf);

// Set operation input from a source file.
splitPDFOperation.setInput(input);

// Set the number of documents to split the input PDF file into.
splitPDFOperation.setFileCount(2);

// Execute the operation and Save the result to the specified location.
splitPDFOperation.execute(executionContext)
  .then(result => {
  let saveFilesPromises = [];
  for(let i = 0; i < result.length; i++){
    saveFilesPromises.push(result[i].saveAsFile(`output/splitPDFOutput_${i}.pdf`));
  }
  return Promise.all(saveFilesPromises);
});
```

#### .Net

```c#
// Create an ExecutionContext using credentials.
ExecutionContext executionContext = ExecutionContext.Create(credentials);

// Create a new operation instance
SplitPDFOperation splitPDFOperation = SplitPDFOperation.CreateNew();

// Set operation input from a source file.
FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"splitPDFInput.pdf");
splitPDFOperation.SetInput(sourceFileRef);

// Set the number of documents to split the input PDF file into.
splitPDFOperation.SetFileCount(2);

// Execute the operation.
List result = splitPDFOperation.Execute(executionContext);

// Save the result to the specified location.
int index = 0;
foreach (FileRef fileRef in result)
{
  fileRef.SaveAs(Directory.GetCurrentDirectory() + "/output/splitPDFOutput_" +
    index + ".pdf");
  index++;
}
```

#### Java

```java
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.create(credentials);
SplitPDFOperation splitPDFOperation = SplitPDFOperation.createNew();

// Set operation input from a source file.
FileRef source = FileRef.createFromLocalFile("src/main/resources/splitPDFInput.pdf");
splitPDFOperation.setInput(source);

// Set the number of documents to split the input PDF file into.
splitPDFOperation.setFileCount(2);

// Execute the operation.
List result = splitPDFOperation.execute(executionContext);

// Save the result to the specified location.
int index = 0;
for (FileRef fileRef : result) {
  fileRef.saveAs("output/splitPDFOutput_" + index + ".pdf");
  index++;
}
```
