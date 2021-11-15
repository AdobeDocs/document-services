---
title: 'Document Services API Use Case: Sales Proposals and Contracts'
---

## Sales Proposals and Contracts

### Overview

Sales proposals set the tone for customer relationships. As they are often one of the first touchpoints a company has with a prospect, information included must be accurate, complete, and presented in a polished, brand-consistent manner. However, creating a sales proposal is a tedious and cumbersome process of mixing standard and deal-specific custom content, all of which takes valuable time away from actually selling.

Using Adobe Document Services, sales teams can:

* Design sales proposal and contract templates in Microsoft Word and merge data from CRM and other data systems
* Create custom, on-brand PDF proposals and contracts
* Include the ability for customers to electronically sign documents


### Relevant APIs

* [Adobe Document Generation API](/src/pages/apis/doc-generation.md)
* [Adobe Sign API](https://www.adobe.io/apis/documentcloud/sign.html)
* [Adobe PDF Services API](/src/pages/apis/pdf-services.md)

### Scenario

A business development team meets frequently with prospects. Shortly after, they follow up with sales proposals. While much proposal content is reusable—firm capabilities, team profiles, SOW terms, etc.—important deal specifics, such as customer information, project scope, and pricing needs to be added. Manually finding and replacing content, as well as highlighting signature fields, is time consuming and monotonous. Automation is needed to ensure accuracy and to deliver proposals quickly.

### Building this Solution

1. Create a simple data capture form using Microsoft Form (or another form builder)
2. Design the sales proposal and contract template using Microsoft Word
3. Use Adobe Document Generation Tagger in Word to place fields into the template based on the data model from the form
4. Run the Adobe Document Generation API to merge data from the form into the template, creating a final proposal and contract in PDF
5. Send to Adobe Sign if signatures are required, and if not, to email directly

### Enhancements

The Adobe PDF Services API can programmatically compress and add password protection to a PDF before sending.

### Building in Power Automate

A solution to this use-case can also be implemented in Power Automate by using the following Adobe connectors:

* Adobe PDF Services Connector (includes Document Generation)
* Adobe Sign Connector