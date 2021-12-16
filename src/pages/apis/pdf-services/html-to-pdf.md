---
title: Adobe Developer — PDF Services API  —  HTML to PDF
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link linking"/>

### Create a PDF file from HTML

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/create-pdf/#create-a-pdf-from-static-html)

Create PDFs from static and dynamic HTML, Zip, and URL.

See our public [API Reference](https://documentcloud.adobe.com/document-services/index.html#post-createPDFFromHTML) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="4" languages="curl, js,.net,java" />

#### REST API

```bash
curl --location --request POST 'https://cpf-ue1.adobe.io/ops/:create?respondWith=%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D' \
  --header 'Authorization: Bearer ' \
  --header 'Accept: application/json, text/plain, */*' \
  --header 'x-api-key: ' \
  --header 'Prefer: respond-async,wait=0' \
  --form 'contentAnalyzerRequests="{
    \"cpf:inputs\": {
      \"documentIn\": {
        \"cpf:location\": \"InputFile0\",
        \"dc:format\": \"application/vnd.openxmlformats-officedocument.wordprocessingml.document\"
      }
    },
    \"cpf:engine\": {
      \"repo:assetId\": \"urn:aaid:cpf:Service-1538ece812254acaac2a07799503a430\"
    },
    \"cpf:outputs\": {
      \"documentOut\": {
        \"cpf:location\": \"multipartLabelOut\",
        \"dc:format\": \"application/pdf\"
      }
    }
  }"' \
  --form 'InputFile0=@""'
```

#### Node js

```js
// Create an ExecutionContext using credentials and create a new operation instance
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
    createPDF = PDFServicesSdk.CreatePDF,
    htmlToPDFOperation = createPDF.Operation.createNew();

// Set operation input from a source URL.
const input = PDFServicesSdk.FileRef.createFromURL(
    "https://www.adobe.io"
);
htmlToPDFOperation.setInput(input);

// Provide any custom configuration options for the operation.
setCustomOptions(htmlToPDFOperation);

// Execute the operation and Save the result to the specified location.
htmlToPDFOperation.execute(executionContext)
    .then(result => result.saveAsFile('output/createPdfFromURLOutput.pdf'))
```

#### .Net

```clike
//Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.Create(credentials);
CreatePDFOperation htmlToPDFOperation = CreatePDFOperation.CreateNew();

// Set operation input from a source URL.
FileRef source = FileRef.CreateFromURI(new Uri("https://www.adobe.io"));
htmlToPDFOperation.SetInput(source);

// Provide any custom configuration options for the operation.
SetCustomOptions(htmlToPDFOperation);

// Execute the operation.
FileRef result = htmlToPDFOperation.Execute(executionContext);

// Save the result to the specified location.
result.SaveAs(Directory.GetCurrentDirectory() + "/output/createPdfFromURLOutput.pdf");
```

#### Java

```javascript
//Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.create(credentials);
CreatePDFOperation htmlToPDFOperation = CreatePDFOperation.createNew();

// Set operation input from a source file.
FileRef source = FileRef.createFromURL(new URL("https://www.adobe.io"));
htmlToPDFOperation.setInput(source);

// Provide any custom configuration options for the operation.
CreatePDFOptions htmlToPdfOptions = CreatePDFOptions.htmlOptionsBuilder()
    .includeHeaderFooter(true)
    .build();
htmlToPDFOperation.setOptions(htmlToPdfOptions);

// Provide any custom configuration options for the operation.
setCustomOptions(htmlToPDFOperation);

// Execute the operation.
FileRef result = htmlToPDFOperation.execute(executionContext);

// Save the result to the specified location.
result.saveAs("output/createPDFFromURLOutput.pdf");
```
