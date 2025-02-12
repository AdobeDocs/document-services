---
title: Adobe Developer — PDF Services API  —  Create PDF
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link linking create-pdf"/>

### Adobe PDF Export Form Data

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/export-pdf-form-data/)

Extract structured data from PDF forms with ease. Retrieve form field data as a JSON file, where field names serve as keys and corresponding inputs as values. Simplify data processing from PDF forms for seamless integration into your workflows.

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Export-PDF-Form-Data) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="1" languages="curl" />

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
