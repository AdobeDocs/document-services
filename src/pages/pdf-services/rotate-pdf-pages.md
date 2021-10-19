---
title: Adobe Developer — PDF Services API  — Rotate PDF Pages
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" className="bgBlue link"/>

### Rotate a page in a PDF file

- [See documentation](https://www.adobe.com/go/pdftoolsapi_doc)

Rotate a page in an existing document.

See our public [API Reference](https://documentcloud.adobe.com/document-services/index.html#post-pageManipulation) and quickly try our APIs using the Postman collections


<CodeBlock slots="heading, code" repeat="3" languages="js,.net,java" />


#### Node.js

```js
// Create an ExecutionContext using credentials and create a new operation instance.
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
  rotatePagesOperation = PDFServicesSdk.RotatePages.Operation.createNew();

// Set operation input from a source file.
const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/rotatePagesInput.pdf');
rotatePagesOperation.setInput(input);

// Sets angle by 90 degrees (in clockwise direction) for rotating the specified pages of the input PDF file.
const firstPageRange = getFirstPageRangeForRotation();
rotatePagesOperation.setAngleToRotatePagesBy(PDFServicesSdk.RotatePages.Angle._90, firstPageRange);

// Sets angle by 180 degrees (in clockwise direction) for rotating the specified pages of the input PDF file.
const secondPageRange = getSecondPageRangeForRotation();
rotatePagesOperation.setAngleToRotatePagesBy(PDFServicesSdk.RotatePages.Angle._180,secondPageRange);

// Execute the operation and Save the result to the specified location.
rotatePagesOperation.execute(executionContext)
  .then(result => result.saveAsFile('output/rotatePagesOutput.pdf'));
```

#### .Net

```c#
// Create an ExecutionContext using credentials.
ExecutionContext executionContext = ExecutionContext.Create(credentials);

// Create a new operation instance
RotatePagesOperation rotatePagesOperation = RotatePagesOperation.CreateNew();

// Set operation input from a source file.
FileRef sourceFileRef = FileRef.CreateFromLocalFile(
    @"rotatePagesInput.pdf"
  );
rotatePagesOperation.SetInput(sourceFileRef);

// Sets angle by 90 degrees (in clockwise direction) for rotating the specified pages of the input PDF file.
PageRanges firstPageRange = GetFirstPageRangeForRotation();
rotatePagesOperation.SetAngleToRotatePagesBy(
    Angle._90, firstPageRange
  );

// Sets angle by 180 degrees (in clockwise direction) for rotating the specified pages of the input PDF file.
PageRanges secondPageRange = GetSecondPageRangeForRotation();
rotatePagesOperation
  .SetAngleToRotatePagesBy(Angle._180, secondPageRange);

// Execute the operation.
FileRef result = rotatePagesOperation.Execute(executionContext);

// Save the result to the specified location.
result.SaveAs(Directory.GetCurrentDirectory() +
  "/output/rotatePagesOutput.pdf");
```

#### Java

```java
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.create(credentials);
RotatePagesOperation rotatePagesOperation = RotatePagesOperation.createNew();

// Set operation input from a source file.
FileRef source = FileRef.createFromLocalFile(
    "src/main/resources/rotatePagesInput.pdf"
  );
rotatePagesOperation.setInput(source);

// Sets angle by 90 degrees (in clockwise direction) for rotating the specified pages of the input PDF file.
PageRanges firstPageRange = getFirstPageRangeForRotation();
rotatePagesOperation.setAngleToRotatePagesBy(
    Angle._90, firstPageRange
  );

// Sets angle by 180 degrees (in clockwise direction) for rotating the specified pages of the input PDF file.
PageRanges secondPageRange = getSecondPageRangeForRotation();
rotatePagesOperation
.setAngleToRotatePagesBy(
  Angle._180, secondPageRange
);

// Execute the operation.
FileRef result = rotatePagesOperation.execute(executionContext);

// Save the result to the specified location.
result.saveAs("output/rotatePagesOutput.pdf");
```
