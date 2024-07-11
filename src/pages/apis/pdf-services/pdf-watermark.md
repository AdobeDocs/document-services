---
title: Adobe Developer — PDF Services API  — PDF Watermark
---

<TextBlock slots="heading, buttons, text1, text2" hasCodeBlock theme="dark" className="bgBlue linking get-properties"/>

### Add a watermark to a PDF document

- [See documentation](https://developer-stage.adobe.com/document-services/docs/overview/pdf-services-api/howtos/pdf-watermark-api/)

Add a watermark to a PDF document using a source watermark PDF. Specify the pages to which the watermark is to be applied. This is interoperable with the Acrobat Watermark tool. Watermarks are typically added to indicate the status, classification, or branding of a document.

See our public [API Reference](https://developer-stage.adobe.com/document-services/docs/apis/#tag/PDF-Watermark) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="1" languages="curl" />

#### REST API

```bash
curl --location --request POST 'https://pdf-services.adobe.io/operation/addwatermark' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "inputDocumentAssetID": "urn:aaid:AS:UE1:54cbf87f-d7f5-4918-8e4b-9f68",
    "watermarkDocumentAssetID": "urn:aaid:AS:UE1:54cbf87f-d7f5-4918-8e4b-9f1878678e68",
    "pageRanges": [
        {
            "start": 2,
            "end": 5
        },
        {
            "start": 8,
            "end": 10
        }
    ],
    "appearance": {
        "opacity": 50,
        "appearOnForeground": true
    }
}'
```
