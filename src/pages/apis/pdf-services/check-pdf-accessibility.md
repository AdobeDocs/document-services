---
title: Adobe Developer — PDF Services API  — CHECKER PDF ACCESSIBILITY
---

<TextBlock slots="heading, buttons, text1, text2" hasCodeBlock theme="dark" className="bgBlue linking accessibility-checker"/>

### Check PDF Accessibility

- [See documentation](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/pdf-accessibility-checker-api/)

Check accessibility of PDF documents to see if they meet the machine-verifiable requirements of PDF/UA and WCAG 2.0. Generate an accessibility report that checks over thirty items across four categories and reports them as ‘passed’, ‘failed’, or ‘needs manual check’. Option to embed the HTML report within the PDF or export it separately as a JSON file and to specify the  pages in a PDF to be checked. The API leverages the same technology as the Accessibility Checker found in Acrobat Pro.

See our public [API Reference](https://developer.adobe.com/document-services/docs/apis/#tag/PDF-Accessibility-Checker) and quickly try our APIs using the Postman collections

<CodeBlock slots="heading, code" repeat="1" languages="curl" />

#### REST API

```bash
curl --location --request POST 'https://pdf-services.adobe.io/operation/accessibilitychecker' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:54cbf87f-d7f5-4918-8e4b-9f1878678e68",
    "pageStart":1,
    "pageEnd":5
}'
```
