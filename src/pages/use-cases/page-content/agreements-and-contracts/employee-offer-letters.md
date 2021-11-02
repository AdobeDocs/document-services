---
title: Adobe Developer — Document Services API Use Cases — Employee Offer Letters
---

## Employee Offer Letters

### Overview

Employee offer letters are one of the first experiences new hires have with an organization, so these documents should be on-brand, professional, and uniform. However, creating documents in Microsoft Word from scratch wastes valuable resources and results in inconsistent experiences. Adobe Document Services helps streamline the process of generating and delivering offer letters in a variety of ways, letting you:

* Create templates in Word and generate PDFs based on a simple data set using the Adobe Document Generation API
* Merge data and HTML templates into a PDF letter using the Adobe PDF Services API
* Route offer letters to candidates and hiring managers, track consumption in real-time, verify user identities, and capture electronic signatures by leveraging [Adobe Sign](https://acrobat.adobe.com/us/en/sign.html)

### Relevant APIs

* [Adobe PDF Services API](/src/pages/pdf-services.md)
* [Adobe Sign API](https://www.adobe.io/apis/documentcloud/sign.html)
* [Adobe Document Generation API](/src/pages/doc-generation.md)

### Scenario

An organization needs to ramp up seasonal hiring of employees across multiple locations. Candidates use an online application that captures their information. Later, this data is used to populate an offer letter that includes the ability to sign the document electronically.

### Building this Solution

1. Build a JSON-based data model of values to be incorporated into the offer letter documents
2. Create an offer letter template using Word or HTML
3. Use Adobe Document Generation Tagger in the [Microsoft Word Add-in](https://appsource.microsoft.com/en-us/product/office/WA104380526?tab=Overview) to tag text fields in the template based on the data model
4. Generate the offer letter PDF using Adobe Document Generation API
5. Upload the document to Adobe Sign and send Offer Letter as an agreement using [Adobe Sign](https://acrobat.adobe.com/us/en/sign.html) or [Adobe Sign API](https://www.adobe.io/apis/documentcloud/sign/docs.html)

### Building in Power Automate

A solution to this use-case can also be implemented in Power Automate by using the following Adobe connectors:

* Adobe PDF Services Connector (includes Document Generation)
* Adobe Sign Connector
