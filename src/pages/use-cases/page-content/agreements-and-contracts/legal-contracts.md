---
title: 'Document Services API Use Case: Legal Contracts'
---

## Legal Contracts

### Overview

Most organizations today have a variety of legal contracts that need to be created, edited, approved, and signed on a regular basis. In addition, many of these contracts require customization and branding to be applied. And no matter what, accurate document generation is crucial. The challenge is to automate what is now a manual process of including custom data elements to templates.

Adobe Document Services will let organizations:

* Create templates with dynamic fields that can be automatically merged with data
* Customize inputs and logic, for example adding clauses that only apply to specific geographies
* Build a workflow that allows for review, approval, and electronic signatures

### Relevant APIs

* [Adobe Document Generation API](/src/pages/apis/doc-generation.md)
* [Adobe PDF Embed API](/src/pages/apis/pdf-embed.md)
* [Adobe Sign API](https://www.adobe.io/apis/documentcloud/sign.html)

### Scenario

A technology company is drafting a legal contract. To do so, it needs inputs from agents, legal resources, and business managers. The contract requires company branding and to include some standard legal copy. Data from various sources, such as the correct terms, conditions, and clauses, must also be added. Once all of the content is collected, the final contract needs to be shared for feedback and final approval. When finished, it will be sent to customers for digital signatures.

### Building this Solution

1. Create a basic data model in JSON that helps determine document generation, such as customer profile information from a CRM
2. Design contract templates in Microsoft Word
3. Set conditional sections in the contract template, repeating elements, as well as place fields for Adobe Sign
4. Send both the Word template and JSON data input file to Adobe Document Generation API and receive a PDF file
5. Embed the PDF file in the application for review and approval with Adobe PDF Embed API
6. Once approved, send the agreement out for signature using Adobe Sign API

### Building in Power Automate

A solution to this use-case can also be implemented in Power Automate by using the following Adobe connectors:

* Adobe PDF Services Connector (includes Document Generation)
* Adobe Sign Connector
