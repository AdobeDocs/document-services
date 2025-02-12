---
title: Adobe Developer — PDF Services API  —  Create PDF
---

<TextBlock slots="heading, buttons, text, text1" theme="dark" hasCodeBlock className="bgBlue link linking create-pdf"/>

### Adobe PDF Import Form Data

- [See documentation](/document-services/docs/overview/pdf-services-api/howtos/import-pdf-form-data/)

Effortlessly populate PDF forms using the Import PDF Form Data API. Provide form data in JSON format, where field names act as keys and corresponding values are used to fill the appropriate fields. Generate a completed PDF with integrated data for streamlined document processing.

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/Import-PDF-Form-Data) and quickly try
our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="1" languages="curl, js,.net,java,python" />

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
