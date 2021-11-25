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
// Create an ExecutionContext using credentials and create a new operation instance.
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
    createPdfOperation = PDFServicesSdk.CreatePDF.Operation.createNew();

// Set operation input from a source file.
const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/createPDFInput.docx');
createPdfOperation.setInput(input);

// Execute the operation and Save the result to the specified location.
createPdfOperation.execute(executionContext)
    .then(result => result.saveAsFile('output/createPDFFromDOCX.pdf'))

```

#### .Net

```clike
//Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.Create(credentials);
CreatePDFOperation createPdfOperation = CreatePDFOperation.CreateNew();

// Set operation input from a source file.
FileRef source = FileRef.CreateFromLocalFile(@"createPdfInput.docx");
createPdfOperation.SetInput(source);

// Execute the operation.
FileRef result = createPdfOperation.Execute(executionContext);

// Save the result to the specified location.
result.SaveAs(Directory.GetCurrentDirectory() + "/output/createPdfOutput.pdf");
```

#### Java

```javascript
//Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.create(credentials);
CreatePDFOperation createPdfOperation = CreatePDFOperation.createNew();

// Set operation input from a source file.
FileRef source = FileRef.createFromLocalFile("src/main/resources/createPDFInput.docx");
createPdfOperation.setInput(source);

// Execute the operation.
FileRef result = createPdfOperation.execute(executionContext);

// Save the result to the specified location.
result.saveAs("output/createPDFFromDOCX.pdf");
```
