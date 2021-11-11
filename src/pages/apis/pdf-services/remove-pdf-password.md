---
title: Adobe Developer — PDF Services API  — Remove PDF Password
---

<TextBlock slots="heading, buttons, text, text1" hasCodeBlock theme="dark" className="bgBlue link"/>

### Remove the password from a PDF file

- [See documentation](/document-services/docs/overview/pdf-services-api/)

Remove password security from a PDF document. This can only be accomplished with the owner password of the document which must be passed in the operation.

See our public [API  Reference ](https://documentcloud.adobe.com/document-services/index.html#post-removeProtection) and quickly try our APIs using the Postman collections


<CodeBlock slots="heading, code" repeat="3" languages="js,.net,java" />

#### Node.js

```js
// Create an ExecutionContext using credentials
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);

// Create a new operation instance.
const removeProtectionOperation = PDFServicesSdk.RemoveProtection.Operation.createNew(),
  input = PDFServicesSdk.FileRef.createFromLocalFile(
    'resources/removeProtectionInput.pdf',
    PDFServicesSdk.RemoveProtection.SupportedSourceFormat.pdf);

// Set operation input from a source file.
removeProtectionOperation.setInput(input);

// Set the password for removing security from a PDF document.
removeProtectionOperation.setPassword("password");

// Execute the operation and Save the result to the specified location.
removeProtectionOperation.execute(executionContext)
  .then(result => result.saveAsFile('output/removeProtectionOutput.pdf'))
```

#### .Net

```c#
// Create an ExecutionContext using credentials.
ExecutionContext executionContext = ExecutionContext.Create(credentials);

// Create a new operation instance
RemoveProtectionOperation removeProtectionOperation = RemoveProtectionOperation.CreateNew();

// Set operation input from a source file.
FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"removeProtectionInput.pdf");
removeProtectionOperation.SetInput(sourceFileRef);

// Set the password for removing security from a PDF document.
removeProtectionOperation.SetPassword("password");

// Execute the operation.
FileRef result = removeProtectionOperation.Execute(executionContext);

// Save the result to the specified location.
result.SaveAs(Directory.GetCurrentDirectory() +
  "/output/removeProtectionOutput.pdf");
```

#### Java

```java
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.create(credentials);
RemoveProtectionOperation removeProtectionOperation = RemoveProtectionOperation.createNew();

// Set operation input from a source file.
FileRef source = FileRef.createFromLocalFile("src/main/resources/removeProtectionInput.pdf");
removeProtectionOperation.setInput(source);

// Set the password for removing security from a PDF document.
removeProtectionOperation.setPassword("password");

// Execute the operation.
FileRef result = removeProtectionOperation.execute(executionContext);

// Save the result to the specified location.
result.saveAs("output/removeProtectionOutput.pdf");
```
