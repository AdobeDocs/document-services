<TextBlock slots="heading, buttons, text" theme="dark" hasCodeBlock className="bgBlue showMobileView"/>

##### Dynamic PDF Document Generation

- [See documentation](/document-services/docs/overview/)

Merge your JSON data with custom Word templates to generate high-fidelity PDF and Word documents

<CodeBlock slots="heading, code" repeat="4" languages="curl, js,.net,java" />

#### REST API

```bash
curl --location --request POST 'https://cpf-ue1.adobe.io/ops/:create?respondWith=
    %7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D' \
  --header 'Authorization: Bearer ' \
  --header 'Accept: application/json, text/plain, */*' \
  --header 'x-api-key: ' \
  --header 'Prefer: respond-async,wait=0' \
  --form 'contentAnalyzerRequests="{
     \"cpf:engine\":{
        \"repo:assetId\":\"urn:aaid:cpf:Service-52d5db6097ed436ebb96f13a4c7bf8fb\"
     },
     \"cpf:inputs\":{
        \"documentIn\":{
           \"cpf:location\":\"InputFile0\",
           \"dc:format\":\"application/vnd.openxmlformats-officedocument.wordprocessingml.document\"
        },
        \"params\":{
           \"cpf:inline\":{
              \"outputFormat\": \"pdf\",
              \"jsonDataForMerge\": {
                \"customerName\": \"Kane Miller\",
                \"customerVisits\": 100,
                \"itemsBought\": [
                  {
                    \"name\": \"Sprays\",
                    \"quantity\": 50,
                    \"amount\": 100
                  },
                  {
                    \"name\": \"Chemicals\",
                    \"quantity\": 100,
                    \"amount\": 200
                  }
                ],
                \"totalAmount\": 300,
                \"previousBalance\": 50,
                \"lastThreeBillings\": [100, 200, 300],
                \"photograph\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC
                1HAwCAAAAC0lEQVR42mP88h8AAu0B9XNPCQQAAAAASUVORK5CYII=\"
              }
           }
        }
     },
     \"cpf:outputs\":{
        \"documentOut\":{
           \"cpf:location\":\"OutputFile\",
           \"dc:format\":\"application/pdf\"
        }
     }
  }"' \
  --form 'InputFile0=@""'
```

#### Node.js

```js
// Setup input data for the document merge process
const jsonString = fs.readFileSync('resources/salesOrder.json'),
  jsonDataForMerge = JSON.parse(jsonString);

// Create an ExecutionContext using credentials
const executionContext = PDFToolsSdk.ExecutionContext.create(credentials);

// Create a new DocumentMerge options instance
const documentMerge = PDFToolsSdk.DocumentMerge,
  documentMergeOptions = documentMerge.options,
  options = new documentMergeOptions.DocumentMergeOptions(jsonDataForMerge, documentMergeOptions.OutputFormat.PDF);

// Create a new operation instance using the options instance
const documentMergeOperation = documentMerge.Operation.createNew(options)

// Set operation input document template from a source file.
const input = PDFToolsSdk.FileRef.createFromLocalFile('resources/salesOrderTemplate.docx');
documentMergeOperation.setInput(input);

// Execute the operation and Save the result to the specified location.
documentMergeOperation.execute(executionContext)
  .then(result => result.saveAsFile('output/salesOrderOutput.pdf'))
```

#### .Net

```c#
// Create an ExecutionContext using credentials.
ExecutionContext executionContext = ExecutionContext.Create(credentials);

// Setup input data for the document merge process
var content = File.ReadAllText(@"salesOrder.json");
JObject jsonDataForMerge = JObject.Parse(content);

// Create a new DocumentMerge Options instance
DocumentMergeOptions documentMergeOptions = new DocumentMergeOptions(jsonDataForMerge, OutputFormat.PDF);

// Create a new DocumentMerge Operation instance with the DocumentMerge Options instance
DocumentMergeOperation documentMergeOperation = DocumentMergeOperation.CreateNew(documentMergeOptions);

// Set the operation input document template from a source file.
documentMergeOperation.SetInput(FileRef.CreateFromLocalFile(@"salesOrderTemplate.docx"));

// Execute the operation.
FileRef result = documentMergeOperation.Execute(executionContext);

// Save the result to the specified location
result.SaveAs(Directory.GetCurrentDirectory() + "/output/salesOrderOutput.pdf");
```

#### Java

```java
// Setup input data for the document merge process
String content = new String(Files.readAllBytes(Paths.get("src/main/resources/salesOrder.json")));
JSONObject jsonDataForMerge = new JSONObject(content);

// Create an ExecutionContext using credentials.
ExecutionContext executionContext = ExecutionContext.create(credentials);

//Create a new DocumentMergeOptions instance
DocumentMergeOptions documentMergeOptions = new DocumentMergeOptions(jsonDataForMerge, OutputFormat.PDF);

// Create a new DocumentMergeOperation instance with the DocumentMergeOptions instance
DocumentMergeOperation documentMergeOperation = DocumentMergeOperation.createNew(documentMergeOptions);

// Set the operation input document template from a source file.
FileRef documentTemplate = FileRef.createFromLocalFile("src/main/resources/salesOrderTemplate.docx");
documentMergeOperation.setInput(documentTemplate);

// Execute the operation
FileRef result = documentMergeOperation.execute(executionContext);

// Save the result to the specified location.
result.saveAs("output/salesOrderOutput.pdf");
```