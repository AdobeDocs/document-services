---
title: Adobe Developer — PDF Services API  — Insert PDF Pages
---

<TextBlock slots="heading, buttons, text, text1" hasCodeBlock  theme="dark" className="bgBlue link linking"/>

### Insert a page into a PDF document

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/insert-pages/)

Insert one or more pages into an existing document

See our public [API Reference](https://www.adobe.com/go/dcsdk_APIdocs#post-combinePDF) and quickly try our APIs using the Postman collections


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
  insertPagesOperation = PDFServicesSdk.InsertPages.Operation.createNew();

// Set operation base input from a source file.
const baseInputFile = PDFServicesSdk.FileRef.createFromLocalFile('resources/baseInput.pdf');
insertPagesOperation.setBaseInput(baseInputFile);

// Create a FileRef instance using a local file.
const firstFileToInsert = PDFServicesSdk.FileRef.createFromLocalFile('resources/firstFileToInsertInput.pdf'),
  pageRanges = getPageRangesForFirstFile();

// Adds the pages (specified by the page ranges)
// of the input PDF file to be
// inserted at the specified page of the base PDF file.
insertPagesOperation.addPagesToInsertAt(2, firstFileToInsert, pageRanges);

// Create a FileRef instance using a local file.
const secondFileToInsert = PDFServicesSdk.FileRef.createFromLocalFile('resources/secondFileToInsertInput.pdf');

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

```clike
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

// Adds the pages (specified by the page ranges) of the input PDF file to be inserted at the specified page of the base PDF file.
insertPagesOperation.AddPagesToInsertAt(
    firstFileToInsert, pageRanges, 2
  );

// Create a FileRef instance using a local file.
FileRef secondFileToInsert = FileRef
  .CreateFromLocalFile(
    @"secondFileToInsertInput.pdf"
  );

// Adds all the pages of the input PDF file to be inserted at the specified page of the base PDF file.
insertPagesOperation
  .AddPagesToInsertAt(secondFileToInsert, 3);

// Execute the operation.
FileRef result = insertPagesOperation.Execute(executionContext);

// Save the result to the specified location.
result.SaveAs(Directory.GetCurrentDirectory()
  + "/output/insertPagesOutput.pdf");
```

#### Java

```javascript
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

// Adds the pages (specified by the page ranges) of the input PDF file to be inserted at the specified page of the base PDF file.
insertPagesOperation
  .addPagesToInsertAt(firstFileToInsert, pageRanges, 2);

// Create a FileRef instance using a local file.
FileRef secondFileToInsert = FileRef.createFromLocalFile(
    "src/main/resources/secondFileToInsertInput.pdf"
  );

// Adds all the pages of the input PDF file to be inserted at the specified page of the base PDF file.
insertPagesOperation
  .addPagesToInsertAt(secondFileToInsert, 3);

// Execute the operation.
FileRef result = insertPagesOperation.execute(executionContext);

// Save the result to the specified location.
result.saveAs("output/insertPagesOutput.pdf");
```