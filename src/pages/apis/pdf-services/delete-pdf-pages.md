---
title: Adobe Developer — PDF Services API  —  Delete PDF
---

<TextBlock slots="heading, buttons, text, text1"  theme="dark" hasCodeBlock className="bgBlue link linking"/>

### Delete a page from a PDF file

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/delete-pages/)

Delete one or more pages from a document

See our public [API Reference](https://www.adobe.com/go/dcsdk_APIdocs#post-pageManipulation) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="4" languages="curl,JS,.NET,Java" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://documentcloud.adobe.com/document-services/index.html#post-pageManipulation

curl --location --request POST 'https://cpf-ue1.adobe.io/ops/:create?respondWith=%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'Accept: application/json, text/plain, */*' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Prefer: respond-async,wait=0' \
--form 'contentAnalyzerRequests="{
    \"cpf:inputs\": {
        \"params\": {
            \"cpf:inline\": {
                \"pageActions\": [{
                    \"pageAction\": {
                        \"delete\": {
                            \"pageRanges\": [{
                                \"start\": 1,
                                \"end\": 1
                            }]
                        }
                    }
                }]
            }
        },
        \"documentIn\": {
            \"cpf:location\": \"InputFile0\",
            \"dc:format\": \"application/pdf\"
        }
    },
    \"cpf:engine\": {
        \"repo:assetId\": \"urn:aaid:cpf:Service-4735fcf3cf924b25879e6fcf7aa84ad4\"
    },
    \"cpf:outputs\": {
        \"documentOut\": {
            \"cpf:location\": \"cid:multipartLabelOut\",
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
  deletePagesOperation = PDFServicesSdk.DeletePages.Operation.createNew();

// Set operation input from a source file.
const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/deletePagesInput.pdf');
deletePagesOperation.setInput(input);

// Delete pages of the document (as specified by PageRanges).
const pageRangesForDeletion = getPageRangesForDeletion();
deletePagesOperation.setPageRanges(pageRangesForDeletion);

// Execute the operation and Save the result to the specified location.
deletePagesOperation.execute(executionContext)
  .then(result => result.saveAsFile('output/deletePagesOutput.pdf'))
```

#### .Net

```clike
// Create an ExecutionContext using credentials.
ExecutionContext executionContext = ExecutionContext.Create(credentials);

// Create a new operation instance
DeletePagesOperation deletePagesOperation = DeletePagesOperation.CreateNew();

// Set operation input from a source file.
FileRef sourceFileRef = FileRef.CreateFromLocalFile(
    @"deletePagesInput.pdf"
  );
deletePagesOperation.SetInput(sourceFileRef);

// Delete pages of the document
// (as specified by PageRanges).
PageRanges pageRangeForDeletion = GetPageRangeForDeletion();
deletePagesOperation
  .SetPageRanges(pageRangeForDeletion);

// Execute the operation.
FileRef result = deletePagesOperation
  .Execute(executionContext);

// Save the result to the specified location.
result.SaveAs(Directory.GetCurrentDirectory() +
  "/output/deletePagesOutput.pdf");
```

#### Java

```javascript
// Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.create(credentials);
DeletePagesOperation deletePagesOperation = DeletePagesOperation.createNew();

// Set operation input from a source file.
FileRef source = FileRef.createFromLocalFile(
    "src/main/resources/deletePagesInput.pdf"
  );
deletePagesOperation.setInput(source);

// Delete pages of the document (as specified by PageRanges).
PageRanges pageRangeForDeletion = getPageRangeForDeletion();
deletePagesOperation.setPageRanges(pageRangeForDeletion);

// Execute the operation.
FileRef result = deletePagesOperation.execute(executionContext);

// Save the result to the specified location.
result.saveAs("output/deletePagesOutput.pdf");
```
