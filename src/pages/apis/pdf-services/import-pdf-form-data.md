---
title: Adobe Developer — PDF Services API  —  Import PDF Form Data
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link linking import-pdf-form-data"/>

### Import PDF Form Data

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/import-pdf-form-data/)

Import PDF Form Data API will take the form data provided as a JSON, insert it into the PDF form, and generate the resulting PDF document.

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Import-PDF-Form-Data) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="2" languages="curl,java" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Import-PDF-Form-Data

curl --location --request POST 'https://pdf-services.adobe.io/operation/importpdfformdata' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "jsonFormFieldsData": {
        "option_two": "Yes",
        "option_one": "Yes",
        "name": "sufia",
        "option_three": "Off",
        "age": "25",
        "favorite_movie": "Star Wars Again"
    }
}'

// Legacy API can be found here
// https://documentcloud.adobe.com/document-services/index.html#post-importPDFFormData
```

#### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.ImportPdfFormData

public class ImportPdfFormData {
    // Initialize the logger
    private static final Logger LOGGER = LoggerFactory.getLogger(ImportPdfFormData.class);

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
                    "  \"option_two\": \"Yes\",\n" +
                    "  \"option_one\": \"Yes\",\n" +
                    "  \"name\": \"sufia\",\n" +
                    "  \"option_three\": \"Off\",\n" +
                    "  \"age\": \"25\",\n" +
                    "  \"favorite_movie\": \"Star Wars Again\"\n" +
                    "}\n"))
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
            LOGGER.info(String.format("Saving asset at output/ImportPDFFormData.pdf", outputFilePath));
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
        } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
            LOGGER.error("Exception encountered while executing operation", ex);
        }
    }
}
```
