<CodeBlock slots="heading, code" repeat="5" languages="curl, js,.net,java, python" />

#### REST API

```bash
curl --location --request POST 'https://cpf-stage-ue1.adobe.io/ops/:create' \
--header 'Accept: application/json, text/plain, /' \
--header 'Authorization: Bearer ' \
--header 'x-api-key: ' \
--form 'contentAnalyzerRequests={
    \"cpf:engine\": {
        \"repo:assetId\": \"urn:aaid:cpf:58af6e2c-1f0c-400d-9188-078000185695\"
    },
    \"cpf:inputs\": {
        \"documentIn\": {
            \"cpf:location\": \"fileInput1\",
            \"dc:format\": \"application/pdf\"
        },
        \"params\": {
            \"cpf:inline\": {
                \"elementsToExtract\": [
                    \"text\", \"tables\"
                ],
                \"renditionsToExtract\": [ \"tables\", \"figures\"]
            }
        }
    },
    \"cpf:outputs\": {
        \"elementsInfo\": {
            \"cpf:location\": \"jsonoutput\",
            \"dc:format\": \"application/json\"
        },
        \"elementsRenditions\": {
            \"cpf:location\": \"fileoutpart\",
            \"dc:format\": \"text/directory\"
        }
    }
}' \
--form 'fileInput1=@""'
```

#### Node js

```js
// Create an ExecutionContext using credentials
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);

// Create a new operation instance.
const extractPDFOperation = PDFServicesSdk.ExtractPDF.Operation.createNew(),
  input = PDFServicesSdk.FileRef.createFromLocalFile(
    'resources/extractPDFInput.pdf',
    PDFServicesSdk.ExtractPDF.SupportedSourceFormat.pdf
  );

// Set operation input from a source file.
extractPDFOperation.setInput(input);

// Build and set extractPDF options
const options = new PDFServicesSdk.ExtractPDF.options.ExtractPdfOptions.Builder()
  .addElementsToExtract(
    PDFServicesSdk.ExtractPDF.options.ExtractElementType.TEXT)
  .addElementsToExtractRenditions(
    PDFServicesSdk.ExtractPDF.options.ExtractRenditionsElementType.FIGURES)
  .addCharInfo(true)
  .build()
extractPDFOperation.setOptions(options);

// Execute the operation and Save the result to the specified location.
extractPDFOperation.execute(executionContext)
  .then(result => result.saveAsFile('output/extractPdf.zip'))
```

#### .Net

```clike
//Create an ExecutionContext using credentials and create a new operation instance.
ExecutionContext executionContext = ExecutionContext.Create(credentials);
ExtractPDFOperation extractPdfOperation = ExtractPDFOperation.CreateNew();

// Set operation input from a source file.
FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"extractPDFInput.pdf");
extractPdfOperation.SetInputFile(sourceFileRef);

// Build ExtractPDF options and set them into the operation
ExtractPDFOptions extractPdfOptions = ExtractPDFOptions.ExtractPdfOptionsBuilder()
    .AddElementsToExtract(new List<ExtractElementType>(new []{ ExtractElementType.TEXT, ExtractElementType.TABLES}))
    .AddElementsToExtractRenditions(new List<ExtractRenditionsElementType> (new []{ExtractRenditionsElementType.FIGURES, ExtractRenditionsElementType.TABLES}))
    .AddAddCharInfo(true)
    .build();
extractPdfOperation.SetOptions(extractPdfOptions);
// Execute the operation.
FileRef result = extractPdfOperation.Execute(executionContext);

// Save the result to the specified location.
result.SaveAs(Directory.GetCurrentDirectory() + "/output/ExtractTextTableInfoWithFiguresTablesRenditionsFromPDF.zip");
```

#### Java

```javascript
// Create an ExecutionContext using credentials and create a new operation instance
ExecutionContext executionContext = ExecutionContext.create(credentials);
ExtractPDFOperation extractPDFOperation = ExtractPDFOperation.createNew();

// Set operation input from a source file
FileRef source = FileRef.createFromLocalFile("src/test/resources/extractPdfInput.pdf");
extractPDFOperation.setInputFile(source);

// Build ExtractPDF options and set them into the operation
ExtractPDFOptions extractPDFOptions = ExtractPDFOptions.extractPdfOptionsBuilder()
  .addElementsToExtract(Arrays.asList(PDFElementType.TEXT, PDFElementType.TABLES))
  .addElementsToExtractRenditions(Arrays.asList(PDFElementType.TABLES, PDFElementType.FIGURES))
  .addCharInfo(Boolean.TRUE)
  .build();
extractPDFOperation.setOptions(extractPDFOptions);

// Execute the operation
FileRef result = extractPDFOperation.execute(executionContext);

// Save the result at the specified location
result.saveAs("output/extractPdf.zip");
```

#### Python

```python
#Create an ExecutionContext using credentials and create a new operation instance.
execution_context = ExecutionContext.create(credentials)
extract_pdf_operation = ExtractPDFOperation.create_new()

#Set operation input from a source file.
source = FileRef.create_from_local_file(base_path + "/resources/extractPdfInput.pdf")
extract_pdf_operation.set_input(source)

# Build ExtractPDF options and set them into the operation
extract_pdf_options: ExtractPDFOptions = ExtractPDFOptions.builder() \
  .with_elements_to_extract([PDFElementType.TEXT, PDFElementType.TABLES]) \
  .with_elements_to_extract_renditions([PDFElementType.TABLES, PDFElementType.FIGURES]) \
  .with_get_char_info(True) \
  .build()
extract_pdf_operation.set_options(extract_pdf_options)

#Execute the operation.
result: FileRef = extract_pdf_operation.execute(execution_context)

# Save the result to the specified location.
result.save_as(base_path + "/output/extractPdf.zip")
```