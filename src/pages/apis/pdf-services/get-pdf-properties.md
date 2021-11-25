---
title: Adobe Developer — PDF Services API  — Get PDF
---

<TextBlock slots="heading, buttons, text, text1, text2" hasCodeBlock theme="dark" className="bgBlue"/>

### Get the properties of a PDF file

- [See documentation](/document-services/docs/overview/pdf-services-api/)

Use this service to get the metadata properties of a PDF. Metadata including page count, PDF version, file size, compliance levels, font info, permissions and more are provided in JSON format for easy processing.

This data can be used to: check if a document is fully text searchable (OCR), understand the e-signature certificate info, find out compliance levels (e.g., PDF/A and PDF/UA), assess file size before compressing, check permissions related to copy, edit, printing, encryption, and much more.


See our public [API Reference](https://documentcloud.adobe.com/document-services/index.html#post-pdfProperties) and quickly try our APIs using the Postman collections


<CodeBlock slots="heading, code" repeat="4" languages="curl, js, .net, java" />

#### REST API

```bash
curl --location --request POST 'https://cpf-ue1.adobe.io/ops/:create?respondWith=%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D' \
--header 'Authorization: Bearer ' \
--header 'Accept: application/json, text/plain, */*' \
--header 'x-api-key: ' \
--header 'Prefer: respond-async,wait=0' \
--form 'contentAnalyzerRequests="{
  \"cpf:inputs\": {
    \"params\": {
      \"cpf:inline\": {
        \"print\": {
          \"includeHeaderFooter\": true
        },
        \"pageLayout\": {
          \"pageHeight\": 8.5,
          \"pageWidth\": 11
        },
        \"json\": \"{\\\"k1\\\": \\\"v1\\\", \\\"k2\\\": \\\"v2\\\"}\"
      }
    },
    \"inputUrl\": \"\"
  },
  \"cpf:engine\": {
    \"repo:assetId\": \"urn:aaid:cpf:Service-e2ee120a2b06427cb449592f5db967e7\"
  },
  \"cpf:outputs\": {
    \"documentOut\": {
      \"cpf:location\": \"multipartLabelOut\",
      \"dc:format\": \"application/pdf\"
    }
  }
}"'
```
#### Node js

```js
const credentials =  PDFServicesSdk.Credentials
	.serviceAccountCredentialsBuilder()
	.fromFile("pdfservices-api-credentials.json")
	.build();

// Create an ExecutionContext using credentials and create a new operation instance.
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
	pdfPropertiesOperation = PDFServicesSdk.PDFProperties.Operation.createNew();

// Set operation input from a source file.
const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/pdfPropertiesInput.pdf');
pdfPropertiesOperation.setInput(input);

// Provide any custom configuration options for the operation.
const options = new PDFServicesSdk.PDFProperties.options.PDFPropertiesOptions.Builder()
	.includePageLevelProperties(true)
	.build();
pdfPropertiesOperation.setOptions(options);

// Execute the operation and log the JSON Object.
pdfPropertiesOperation.execute(executionContext)
	.then(result => console.log("The resultant json object is : " + JSON.stringify(result)))

```

#### .Net

```clike
// Initial setup, create credentials instance
Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()
    .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")
    .Build();

// Create an ExecutionContext using credentials and create a new operation instance
   ExecutionContext executionContext = ExecutionContext.Create(credentials);
PDFPropertiesOperation pdfPropertiesOperation = PDFPropertiesOperation.CreateNew();

// Provide an input FileRef for the operation
FileRef source = FileRef.CreateFromLocalFile(@"pdfPropertiesInput.pdf");
pdfPropertiesOperation.SetInput(source);

// Build PDF Properties options to include page level properties and set them into the operation
PDFPropertiesOptions pdfPropertiesOptions = PDFPropertiesOptions.PDFPropertiesOptionsBuilder()
    .IncludePageLevelProperties(true)
    .Build();
pdfPropertiesOperation.SetOptions(pdfPropertiesOptions);

// Execute the operation and return JSON Object
JObject result = pdfPropertiesOperation.Execute(executionContext);
```

#### Java

```javascript
// Initial setup, create credentials instance.
Credentials credentials = Credentials.serviceAccountCredentialsBuilder()
    .fromFile("pdfservices-api-credentials.json")
    .build();

//Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.create(credentials);
PDFPropertiesOperation pdfPropertiesOperation = PDFPropertiesOperation.createNew();

// Provide an input FileRef for the operation
FileRef source = FileRef.createFromLocalFile("src/main/resources/pdfPropertiesInput.pdf");
pdfPropertiesOperation.setInputFile(source);

// Build PDF Properties options to include page level properties and set them into the operation
PDFPropertiesOptions pdfPropertiesOptions = PDFPropertiesOptions.PDFPropertiesOptionsBuilder()
    .includePageLevelProperties(true)
    .build();
pdfPropertiesOperation.setOptions(pdfPropertiesOptions);

// Execute the operation and return JSON Object
JSONObject result = pdfPropertiesOperation.execute(executionContext);

```
