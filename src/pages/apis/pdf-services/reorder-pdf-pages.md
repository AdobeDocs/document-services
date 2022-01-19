---
title: Adobe Developer — PDF Services API  — Render PDF Pages
---

<TextBlock slots="heading, buttons, text, text1" hasCodeBlock  theme="dark" className="bgBlue link linking"/>

### Reorder pages within PDF files

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/reorder-pages/)

Reorder the pages of a PDF file to reorganize.

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
  reorderPagesOperation = PDFServicesSdk.ReorderPages.Operation.createNew();

// Set operation input from a source file, along with specifying the order of the pages for rearranging the pages in a PDF file.
const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/reorderPagesInput.pdf');
const pageRanges = getPageRangeForReorder();
reorderPagesOperation.setInput(input);
reorderPagesOperation.setPagesOrder(pageRanges);

// Execute the operation and Save the result to the specified location.
reorderPagesOperation.execute(executionContext)
  .then(result => result.saveAsFile('output/reorderPagesOutput.pdf'));
```

#### .Net

```clike
// Create an ExecutionContext using credentials.
ExecutionContext executionContext = ExecutionContext.Create(credentials);

// Create a new operation instance
ReorderPagesOperation reorderPagesOperation = ReorderPagesOperation.CreateNew();

// Set operation input from a source file, along with specifying the order of the pages for rearranging the pages in a PDF file.
FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"reorderPagesInput.pdf");
reorderPagesOperation.SetInput(sourceFileRef);
PageRanges pageRanges = GetPageRangeForReorder();
reorderPagesOperation.SetPagesOrder(pageRanges);

// Execute the operation.
FileRef result = reorderPagesOperation.Execute(executionContext);

// Save the result to the specified location.
result.SaveAs(Directory.GetCurrentDirectory() +
  "/output/reorderPagesOutput.pdf");
```

#### Java

```javascript
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.create(credentials);
ReorderPagesOperation reorderPagesOperation = ReorderPagesOperation.createNew();

// Set operation input from a source file, along with specifying the order of the pages for rearranging the pages in a PDF file.
FileRef source =
  FileRef.createFromLocalFile( "src/main/resources/reorderPagesInput.pdf" );
PageRanges pageRanges = getPageRangeForReorder();
reorderPagesOperation.setInput(source);
reorderPagesOperation.setPagesOrder(pageRanges);

// Execute the operation.
FileRef result = reorderPagesOperation.execute(executionContext);

// Save the result to the specified location.
result.saveAs("output/reorderPagesOutput.pdf");
```