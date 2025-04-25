---
title: Adobe Developer — PDF Services API  —  Export PDF Form Data
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link linking export-pdf-form-data"/>

### Export PDF Form Data

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/export-pdf-form-data/)

Extract structured data from PDF forms with ease. Retrieve form field data as a JSON file, where field names serve as keys and corresponding inputs as values. Simplify data processing from PDF forms for seamless integration into your workflows.

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Export-PDF-Form-Data) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="2" languages="curl,java" />

#### REST API

```bash
// Please refer our Rest API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Export-PDF-Form-Data

curl --location  --request POST 'https://pdf-services.adobe.io/operation/getformdata' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
}'
```

#### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.exportpdfformdata.ExportPDFFormData

public class ExportPDFFormData {
    
    // Initialize the logger
    private static final Logger LOGGER = LoggerFactory.getLogger(ExportPDFFormData.class);

    public static void main(String[] args) {
        
      try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/exportPdfFormDataInput.pdf").toPath())) {
        // Initial setup, create credentials instance
        Credentials credentials = new ServicePrincipalCredentials(
                System.getenv("PDF_SERVICES_CLIENT_ID"), 
                System.getenv("PDF_SERVICES_CLIENT_SECRET"));
        
        // Creates a PDF Services instance
        PDFServices pdfServices = new PDFServices(credentials);
        
        // Creates an asset(s) from source file(s) and upload
        Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());
        
        // Creates a new job instance
        ExportPDFFormDataJob exportPDFFormDataJob = new ExportPDFFormDataJob(asset);
        
        // Submit the job and gets the job result
        String location = pdfServices.submit(exportPDFFormDataJob);
        PDFServicesResponse<ExportPDFFormDataResult> pdfServicesResponse = pdfServices.getJobResult(location, ExportPDFFormDataResult.class);
        
        // Get content from the resulting asset(s)
        Asset resultAsset = pdfServicesResponse.getResult().getAsset();
        StreamAsset streamAsset = pdfServices.getContent(resultAsset);

        Files.createDirectories(Paths.get("output/"));
        OutputStream outputStream = Files.newOutputStream(new File("output/ExportPDFFormData.pdf").toPath());
        LOGGER.info(String.format("Saving asset at output/ExportPDFFormData.pdf", outputFilePath));
        IOUtils.copy(streamAsset.getInputStream(), outputStream);
        outputStream.close();
      } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
        LOGGER.error("Exception encountered while executing operation", ex);
      }
    }
}
```
