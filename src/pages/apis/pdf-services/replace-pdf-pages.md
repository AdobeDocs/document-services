---
title: Adobe Developer — PDF Services API  — Replace PDF Pages
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link linking"/>

### Replace a page within a PDF file

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/replace-pages/)

Replace one or more pages with another page in an existing document

See our public [API Reference](https://documentcloud.adobe.com/document-services/index.html#post-combinePDF) and quickly try our APIs using the Postman collections



<CodeBlock slots="heading, code" repeat="4" languages="curl,JS,.NET,Java" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://documentcloud.adobe.com/document-services/index.html#post-combinePDF

curl --location --request POST 'https://cpf-ue1.adobe.io/ops/:create?respondWith=%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'Accept: application/json, text/plain, */*' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Prefer: respond-async,wait=0' \
--form 'contentAnalyzerRequests="{
    \"cpf:inputs\": {
        \"documentsIn\": [{
            \"pageRanges\": {
                \"cpf:inline\": [{
                    \"start\": 1,
                    \"end\": 4
                }]
            },
            \"documentIn\": {
                \"cpf:location\": \"InputFile0\",
                \"dc:format\": \"application/pdf\"
            }
        }, {
            \"pageRanges\": {
                \"cpf:inline\": [{
                    \"start\": 1,
                    \"end\": 25
                }]
            },
            \"documentIn\": {
                \"cpf:location\": \"InputFile1\",
                \"dc:format\": \"application/pdf\"
            }
        }, {
            \"pageRanges\": {
                \"cpf:inline\": [{
                    \"start\": 1
                }, {
                    \"end\": 25
                }, {
                    \"start\": 1,
                    \"end\": 25
                }]
            },
            \"documentIn\": {
                \"cpf:location\": \"InputFile2\",
                \"dc:format\": \"application/pdf\"
            }
        }]
    },
    \"cpf:engine\": {
        \"repo:assetId\": \"urn:aaid:cpf:Service-916ee91c156b42349a7847a7d564fb13\"
    },
    \"cpf:outputs\": {
        \"documentOut\": {
            \"cpf:location\": \"OutputFile\",
            \"dc:format\": \"application/pdf\"
        }
    }
}"' \
--form 'InputFile0=@"{{Placeholder for input file (absolute path)}}"' \
--form 'InputFile1=@"{{Placeholder for input file (absolute path)}}"' \
--form 'InputFile2=@"{{Placeholder for input file (absolute path)}}"'

```

#### Node js

```js
// Create an ExecutionContext using credentials and create a new operation instance.
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
replacePagesOperation = PDFServicesSdk.ReplacePages.Operation.createNew();

// Set operation base input from a source file.
const baseInputFile = PDFServicesSdk.FileRef.createFromLocalFile('resources/baseInput.pdf');
replacePagesOperation.setBaseInput(baseInputFile);

// Create a FileRef instance using a local file.
const firstInputFile = PDFServicesSdk.FileRef.createFromLocalFile('resources/replacePagesInput1.pdf'),
pageRanges = getPageRangesForFirstFile();

// Adds the pages (specified by the page ranges) of the input PDF file for replacing the page of the base PDF file.
replacePagesOperation.addPagesForReplace(1, firstInputFile, pageRanges);

// Create a FileRef instance using a local file.
const secondInputFile = PDFServicesSdk.FileRef.createFromLocalFile('resources/replacePagesInput2.pdf');

// Adds all the pages of the input PDF file for replacing the page of the base PDF file.
replacePagesOperation.addPagesForReplace(3, secondInputFile);

// Execute the operation and Save the result to the specified location.
replacePagesOperation.execute(executionContext)
  .then(result => result.saveAsFile('output/replacePagesOutput.pdf'))
```

#### .Net

```clike
// Create an ExecutionContext using credentials.
ExecutionContext executionContext = ExecutionContext.Create(credentials);

// Create a new operation instance
ReplacePagesOperation replacePagesOperation = ReplacePagesOperation.CreateNew();

// Set operation base input from a source file.
FileRef baseSourceFile = FileRef.CreateFromLocalFile(@"baseInput.pdf");
replacePagesOperation.SetBaseInput(baseSourceFile);

// Create a FileRef instance using a local file.
FileRef firstInputFile = FileRef.CreateFromLocalFile(
    @"replacePagesInput1.pdf"
  );
PageRanges pageRanges = GetPageRangeForFirstFile();

// Adds the pages (specified by the page ranges) of the input PDF file for replacing the page of the base PDF file.
replacePagesOperation
  .AddPagesForReplace(firstInputFile, pageRanges, 1);

// Create a FileRef instance using a local file.
FileRef secondInputFile = FileRef.CreateFromLocalFile(
    @"replacePagesInput2.pdf"
  );

// Adds all the pages of the input PDF file for replacing the page of the base PDF file.
replacePagesOperation
  .AddPagesForReplace(secondInputFile, 3);

// Execute the operation.
FileRef result = replacePagesOperation.Execute(executionContext);

// Save the result to the specified location.
result.SaveAs(Directory.GetCurrentDirectory() +
  "/output/replacePagesOutput.pdf");
```

#### Java

```javascript
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.create(credentials);
ReplacePagesOperation replacePagesOperation = ReplacePagesOperation.createNew();

// Set operation base input from a source file.
FileRef baseSourceFile = FileRef.createFromLocalFile(
    "src/main/resources/baseInput.pdf"
  );
replacePagesOperation.setBaseInput(baseSourceFile);

// Create a FileRef instance using a local file.
FileRef firstInputFile = FileRef.createFromLocalFile(
    "src/main/resources/replacePagesInput1.pdf"
  );
PageRanges pageRanges = getPageRangeForFirstFile();

// Adds the pages (specified by the page ranges) of the input PDF file for replacing the page of the base PDF file.
replacePagesOperation.addPagesForReplace(
    firstInputFile, pageRanges, 1
  );

// Create a FileRef instance using a local file.
FileRef secondInputFile = FileRef.createFromLocalFile(
    "src/main/resources/replacePagesInput2.pdf"
  );

// Adds all the pages of the input PDF file for replacing the page of the base PDF file.
replacePagesOperation
  .addPagesForReplace(secondInputFile, 3);

// Execute the operation
FileRef result = replacePagesOperation.execute(executionContext);

// Save the result at the specified location
result.saveAs("output/replacePagesOutput.pdf");
```