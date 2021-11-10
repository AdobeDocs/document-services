---
title: Adobe Developer — Document Services API Use Cases — NDA Creation
---

## NDA Creation

### Overview

In business, it is often necessary for a company to create and then have another organization sign a non-disclosure agreement (NDA). The specific information required to customize the document is most likely already in a database or might be submitted in a web app. In addition, other items, such as logos, need to be applied. For many, the current method of creating these customized NDAs and then sending them out to be signed is a manual, slow process.

With Adobe Document Services, companies can:

* Develop a standard, branded NDA template
* Merge data from a specific company with the template to create a customized NDA
* Send the NDA out for signatures

### Relevant APIs

* [Adobe Document Generation API](/src/pages/apis/doc-generation.md)
* [Adobe Sign API](https://www.adobe.io/apis/documentcloud/sign.html)

### Scenario

A company has a standard NDA template that they regularly use for vendor agreements. They populate the NDA with data that is referenced in their CRM to customize the document, including contact name, company location, agreement scope, and dates. Once the document is generated with custom data, they need to send it out for signatures and archive it.

### Building this Solution

1. Within the application layer, query the database to collect relevant data for a custom NDA and create a JSON data model
2. Design a branded NDA in Microsoft Word
3. Send the template and data to Adobe Document Generation API to output a merged PDF which can be sent using [Adobe Sign API](https://www.adobe.io/apis/documentcloud/sign.html)
4. Track engagement and understand learning needs by using analytics events tracked in embedded PDF documents

### Building in Power Automate

A solution to this use-case can also be implemented in Power Automate by using the following Adobe connectors:

* Adobe PDF Services Connector (includes Document Generation)
* Adobe Sign Connector
