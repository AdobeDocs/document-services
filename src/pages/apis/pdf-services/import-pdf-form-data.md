---
title: Adobe Developer — PDF Services API  —  Import PDF Form Data
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link linking import-pdf-form-data"/>

### Import PDF Form Data

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/import-pdf-form-data/)

Effortlessly populate PDF forms using the Import PDF Form Data API. Provide form data in JSON format, where field names act as keys and corresponding values are used to fill the appropriate fields. Generate a completed PDF with integrated data for streamlined document processing.

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Import-PDF-Form-Data) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="3" languages="curl,.NET,java" />

#### REST API

```bash
// Please refer to our Rest API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Import-PDF-Form-Data

curl --location --request POST 'https://pdf-services.adobe.io/operation/setformdata' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2c4d-46d6-87f2-087832fca718",
    "jsonFormFieldsData": {
        "dob": "10/10/1989",
        "billTo": {
           "zip": "12401",
           "address": {
              "line": {
                 "1": "132",
                 "2": "My Street"
              }
           },
           "city": "Kingston",
           "state": "New York"
        },
        "name": {
            "middle": "",
            "last": "Smith",
            "first": "John"
        }
    },
}'
```

#### .Net

```clike
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd ImportPDFFormData/
// dotnet run ImportPDFFormData.csproj

namespace ImportPDFFormData
{
    class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));

        static void Main()
        {
            //Configure the logging
            ConfigureLogging();
            try
            {
                // Initial setup, create credentials instance
                ICredentials credentials = new ServicePrincipalCredentials(
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_ID"),
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_SECRET"));

                // Creates a PDF Services instance
                PDFServices pdfServices = new PDFServices(credentials);

                // Creates an asset(s) from source file(s) and upload
                using Stream inputStream = File.OpenRead(@"importPdfFormDataInput.pdf");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());

                // Create parameters for the job
                var formData = new JObject(
                    new JProperty("option_two", "Yes"),
                    new JProperty("option_one", "Yes"),
                    new JProperty("name", "sufia"),
                    new JProperty("option_three", "Off"),
                    new JProperty("age", "25"),
                    new JProperty("favorite_movie", "Star Wars Again")
                );

                ImportPDFFormDataParams importParams = ImportPDFFormDataParams.ImportPDFFormDataParamsBuilder()
                    .WithJsonFormFieldsData(formData)
                    .Build();

                // Creates a new job instance
                ImportPDFFormDataJob importPDFFormDataJob = new ImportPDFFormDataJob(asset);
                importPDFFormDataJob.SetParams(importParams);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(importPDFFormDataJob);
                PDFServicesResponse<ImportPDFFormDataResult> pdfServicesResponse =
                    pdfServices.GetJobResult<ImportPDFFormDataResult>(location, typeof(ImportPDFFormDataResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/ImportPDFFormData.pdf";
                new FileInfo(Directory.GetCurrentDirectory() + outputFilePath).Directory.Create();
                Stream outputStream = File.OpenWrite(Directory.GetCurrentDirectory() + outputFilePath);
                streamAsset.Stream.CopyTo(outputStream);
                outputStream.Close();
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
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.importpdfformdata.ImportPDFFormData

public class ImportPDFFormData {
    
    // Initialize the logger
    private static final Logger LOGGER = LoggerFactory.getLogger(ImportPDFFormData.class);

    public static void main(String[] args) {
      try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/importPdfFormDataInput.pdf").toPath())) {
        // Initial setup, create credentials instance
        Credentials credentials = new ServicePrincipalCredentials(
                System.getenv("PDF_SERVICES_CLIENT_ID"), 
                System.getenv("PDF_SERVICES_CLIENT_SECRET"));
        
        // Creates a PDF Services instance
        PDFServices pdfServices = new PDFServices(credentials);
        
        // Creates an asset(s) from source file(s) and upload
        Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());
        
        // Create parameters for the job
        ImportPDFFormDataParams importPDFFormDataParams = ImportPDFFormDataParams.importPdfFormDataParamsBuilder()
                .withJsonFormFieldsData(new JSONObject("{\n" +
                    "  \"dob\": \"10/10/1989\",\n" +
                    "  \"billTo\": {\n" +
                    "    \"zip\": \"12401\",\n" +
                    "    \"address\": {\n" +
                    "      \"line\": {\n" +
                    "        \"1\": \"132\",\n" +
                    "        \"2\": \"My Street\"\n" +
                    "      }\n" +
                    "    },\n" +
                    "    \"city\": \"Kingston\",\n" +
                    "    \"state\": \"New York\"\n" +
                    "  },\n" +
                    "  \"name\": {\n" +
                    "    \"middle\": \"\",\n" +
                    "    \"last\": \"Smith\",\n" +
                    "    \"first\": \"John\"\n" +
                    "  }\n" +
                    "}"))
                .build();
        
        // Creates a new job instance
        ImportPDFFormDataJob importPDFFormDataJob = new ImportPDFFormDataJob(asset);
        importPDFFormDataJob.setParams(importPDFFormDataParams);
        
        // Submit the job and gets the job result
        String location = pdfServices.submit(importPDFFormDataJob);
        PDFServicesResponse<ImportPDFFormDataResult> pdfServicesResponse = pdfServices.getJobResult(location, ImportPDFFormDataResult.class);
        
        // Get content from the resulting asset(s)
        Asset resultAsset = pdfServicesResponse.getResult().getAsset();
        StreamAsset streamAsset = pdfServices.getContent(resultAsset);
        
        // Creates an output stream and copy stream asset's content to it
        Files.createDirectories(Paths.get("output/"));
        OutputStream outputStream = Files.newOutputStream(new File("output/ImportPDFFormData.pdf").toPath());
        LOGGER.info("Saving asset at output/ImportPDFFormData.pdf");
        IOUtils.copy(streamAsset.getInputStream(), outputStream);
        outputStream.close();
      } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
        LOGGER.error("Exception encountered while executing operation", ex);
      }
    }
}
```
