---
title: Adobe Developer — PDF Services API  — Linear size PDF
---

<TextBlock slots="heading, buttons, text, text1" hasCodeBlock theme="dark" className="bgBlue link linking"/>

### Linearize a PDF file for fast web view

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/linearize-pdf/)

Optimize PDFs for quick viewing on the web, especially for mobile clients. Linearization allows your end users to view large PDF documents incrementally so that they can view pages much faster in lower bandwidth conditions.

See our public [API Reference](https://documentcloud.adobe.com/document-services/index.html#post-linearizePDF) and quickly try our APIs using the Postman collections


<CodeBlock slots="heading, code" repeat="4" languages="curl,JS,.NET,Java" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://documentcloud.adobe.com/document-services/index.html#post-linearizePDF

curl --location --request POST 'https://cpf-ue1.adobe.io/ops/:create?respondWith=%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'Accept: application/json, text/plain, */*' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Prefer: respond-async,wait=0' \
--form 'contentAnalyzerRequests="{
    \"cpf:inputs\": {
        \"documentIn\": {
            \"cpf:location\": \"InputFile0\",
            \"dc:format\": \"application/pdf\"
        }
    },
    \"cpf:engine\": {
        \"repo:assetId\": \"urn:aaid:cpf:Service-e4d5f0b75e5d43ea9eaa187860772d27\"
    },
    \"cpf:outputs\": {
        \"documentOut\": {
            \"cpf:location\": \"multipartLabelOut\",
            \"dc:format\": \"application/pdf\"
        }
    }
}"' \
--form 'InputFile0=@"{{Placeholder for input file (absolute path)}}"'

```


#### Node js

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

```javascript
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
