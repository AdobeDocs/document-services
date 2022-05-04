<TextBlock slots="heading, buttons, text" theme="dark" hasCodeBlock className="bgBlue showMobileView"/>

##### Extract PDF Content & Structure

- [See documentation](/document-services/docs/overview/pdf-extract-api/)

Extract content from scanned and native PDFs to use for database insertion, content republishing, RPA, and more

<CodeBlock slots="heading, code" repeat="5" languages="curl, js,.net,java, python" />

#### REST API

```bash
// Please refer our Rest API docs for more information 
// https://developer.adobe.com/document-services/docs/apis/#tag/Extract-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/extractpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "renditionsToExtract": [
        "tables",
        "figures"
    ], 
    "elementsToExtract": [
        "text", 
        "tables"
    ]
}'

// Legacy API can be found here 
// https://documentcloud.adobe.com/document-services/index.html#post-extractPDF
```

#### Node js

```js
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/extractpdf/extract-text-table-info-with-figures-tables-renditions-from-pdf.js

const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');
try {
    // Initial setup, create credentials instance.
    const credentials =  PDFServicesSdk.Credentials
        .serviceAccountCredentialsBuilder()
        .fromFile("pdfservices-api-credentials.json")
        .build();

    // Create an ExecutionContext using credentials
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);

    // Build extractPDF options
    const options = new PDFServicesSdk.ExtractPDF.options.ExtractPdfOptions.Builder()
        .addElementsToExtract(PDFServicesSdk.ExtractPDF.options.ExtractElementType.TEXT, PDFServicesSdk.ExtractPDF.options.ExtractElementType.TABLES)
        .addElementsToExtractRenditions(PDFServicesSdk.ExtractPDF.options.ExtractRenditionsElementType.FIGURES, PDFServicesSdk.ExtractPDF.options.ExtractRenditionsElementType.TABLES)
        .build();

    // Create a new operation instance.
    const extractPDFOperation = PDFServicesSdk.ExtractPDF.Operation.createNew(),
        input = PDFServicesSdk.FileRef.createFromLocalFile(
            'resources/extractPDFInput.pdf',
            PDFServicesSdk.ExtractPDF.SupportedSourceFormat.pdf
        );

    // Set operation input from a source file
    extractPDFOperation.setInput(input);

    // Set options
    extractPDFOperation.setOptions(options);

    extractPDFOperation.execute(executionContext)
        .then(result => result.saveAsFile('output/ExtractTextTableWithFigureTableRendition.zip'))
        .catch(err => {
            if(err instanceof PDFServicesSdk.Error.ServiceApiError
                || err instanceof PDFServicesSdk.Error.ServiceUsageError) {
                console.log('Exception encountered while executing operation', err);
            } else {
                console.log('Exception encountered while executing operation', err);
            }
        });
} catch (err) {
    console.log('Exception encountered while executing operation', err);
}   
```

#### .Net

```clike
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd ExtractTextTableInfoWithFiguresTablesRenditionsFromPDF/
// dotnet run ExtractTextTableInfoWithFiguresTablesRenditionsFromPDF.csproj

namespace ExtractTextTableInfoWithFiguresTablesRenditionsFromPDF
{
    class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));
        static void Main()
        {
            // Configure the logging.
            ConfigureLogging();
            try
            {
                // Initial setup, create credentials instance.
                Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()
                    .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")
                    .Build();
    
                // Create an ExecutionContext using credentials and create a new operation instance.
                ExecutionContext executionContext = ExecutionContext.Create(credentials);
                ExtractPDFOperation extractPdfOperation = ExtractPDFOperation.CreateNew();

                // Set operation input from a source file.
                FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"extractPDFInput.pdf");
                extractPdfOperation.SetInputFile(sourceFileRef);
    
                // Build ExtractPDF options and set them into the operation.
                ExtractPDFOptions extractPdfOptions = ExtractPDFOptions.ExtractPDFOptionsBuilder()
                    .AddElementsToExtract(new List<ExtractElementType>(new []{ ExtractElementType.TEXT, ExtractElementType.TABLES}))
                    .AddElementsToExtractRenditions(new List<ExtractRenditionsElementType> (new []{ExtractRenditionsElementType.FIGURES, ExtractRenditionsElementType.TABLES}))
                    .Build();
    
                extractPdfOperation.SetOptions(extractPdfOptions);
                
                // Execute the operation.
                FileRef result = extractPdfOperation.Execute(executionContext);

                // Save the result to the specified location.
                result.SaveAs(Directory.GetCurrentDirectory() + "/output/ExtractTextTableInfoWithFiguresTablesRenditionsFromPDF.zip");
            }
            catch (ServiceUsageException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (ServiceApiException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (SDKException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (IOException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (Exception ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
        }

        static void ConfigureLogging()
        {
            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());
            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));
        }
    }
}
```

#### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.extractpdf.ExtractTextTableInfoWithRenditionsFromPDF
 
public class ExtractTextTableInfoWithFiguresTablesRenditionsFromPDF {

      private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(ExtractTextTableInfoWithFiguresTablesRenditionsFromPDF.class);

      public static void main(String[] args) {

          try {

              // Initial setup, create credentials instance.
              Credentials credentials = Credentials.serviceAccountCredentialsBuilder()
                      .fromFile("pdfservices-api-credentials.json")
                      .build();

              // Create an ExecutionContext using credentials.
              ExecutionContext executionContext = ExecutionContext.create(credentials);

              ExtractPDFOperation extractPDFOperation = ExtractPDFOperation.createNew();

              // Provide an input FileRef for the operation
              FileRef source = FileRef.createFromLocalFile("src/main/resources/extractPdfInput.pdf");
              extractPDFOperation.setInputFile(source);

              // Build ExtractPDF options and set them into the operation
              ExtractPDFOptions extractPDFOptions = ExtractPDFOptions.extractPdfOptionsBuilder()
                      .addElementsToExtract(Arrays.asList(ExtractElementType.TEXT, ExtractElementType.TABLES))
                      .addElementsToExtractRenditions(Arrays.asList(ExtractRenditionsElementType.TABLES, ExtractRenditionsElementType.FIGURES))
                      .build();
              extractPDFOperation.setOptions(extractPDFOptions);

              // Execute the operation
              FileRef result = extractPDFOperation.execute(executionContext);

              // Save the result at the specified location
              result.saveAs("output/ExtractTextTableInfoWithFiguresTablesRenditionsFromPDF.zip");

          } catch (ServiceApiException | IOException | SdkException | ServiceUsageException e) {
              LOGGER.error("Exception encountered while executing operation", e);
          }
      }
  }

```

#### Python

```python
# Get the samples from http://www.adobe.com/go/pdftoolsapi_python_sample
# Run the sample:
# python src/extractpdf/extract_txt_table_info_with_figure_tables_rendition_from_pdf.py
  logging.basicConfig(level=os.environ.get("LOGLEVEL", "INFO"))
  try:
      #get base path.
      base_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
      #Initial setup, create credentials instance.
      credentials = Credentials.service_account_credentials_builder() \
          .from_file(base_path + "/pdfservices-api-credentials.json") \
          .build()
      #Create an ExecutionContext using credentials and create a new operation instance.
      execution_context = ExecutionContext.create(credentials)
      extract_pdf_operation = ExtractPDFOperation.create_new()
      #Set operation input from a source file.
      source = FileRef.create_from_local_file(base_path + "/resources/extractPdfInput.pdf")
      extract_pdf_operation.set_input(source)
      #Build ExtractPDF options and set them into the operation
      extract_pdf_options: ExtractPDFOptions = ExtractPDFOptions.builder() \
          .with_elements_to_extract([ExtractElementType.TEXT, ExtractElementType.TABLES]) \
          .with_element_to_extract_renditions(ExtractRenditionsElementType.TABLES,ExtractRenditionsElementType.FIGURES]) \
          .build()
      extract_pdf_operation.set_options(extract_pdf_options)
      #Execute the operation.
      result: FileRef = extract_pdf_operation.execute(execution_context)
      #Save the result to the specified location.
      result.save_as(base_path + "/output/ExtractTextTableWithTableRendition.zip")
  except (ServiceApiException, ServiceUsageException, SdkException):
      logging.exception("Exception encountered while executing operation")
```
