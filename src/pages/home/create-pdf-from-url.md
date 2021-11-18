<TextBlock slots="heading, buttons, text" theme="dark" hasCodeBlock className="bgBlue showMobileView"/>

##### Create PDF from URL

- [See documentation](/document-services/docs/overview/)

Create PDFs from a variety of formats, including static and dynamic HTML; Microsoft Word, PowerPoint, and Excel; as well as text, image, and, Zip


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

#### Node.js

```js
// Create an ExecutionContext using credentials and create a new operation instance.
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
    createPDF = PDFServicesSdk.CreatePDF,
    htmlToPDFOperation = createPDF.Operation.createNew();

// Set operation input from a source URL.
const input = PDFServicesSdk.FileRef.createFromURL("https://www.adobe.io");
htmlToPDFOperation.setInput(input);

// Provide any custom configuration options for the operation.
const options = new createPDF.options.html.CreatePDFFromHtmlOptions.Builder()
    .includesHeaderFooter(true)
    .build();
htmlToPDFOperation.setOptions(options);

// Execute the operation and Save the result to the specified location.
htmlToPDFOperation.execute(executionContext)
.then(result => result.saveAsFile('output/createPdfFromURLOutput.pdf'))
```

#### .Net

```c#
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

```java
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