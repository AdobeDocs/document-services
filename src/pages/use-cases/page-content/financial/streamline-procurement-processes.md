---
title: 'Document Services API Use Case: Data Analysis for Finance'
---

## Streamline procurement processes

### Overview

Procurement departments have many document types that need to be shared with suppliers as PDFs. These include Purchase Orders, Requests for Proposal, Requests for Quote, and different agreement types. Creating, processing, and reviewing documents can be very time consuming.

With Adobe Document Services, companies save time by automating the following steps:

* Generate POs, RFPs, RFQs, or agreement documents in PDF from data in procurement management systems using Document Generation API
* Combine, secure from editing, and view documents before sharing with suppliers using PDF Services API
* View PDFs in procurement system for review using PDF Embed API
* Send agreements for signature using Adobe Sign API

### Relevant APIs

* [Adobe Document Generation API](/src/pages/apis/doc-generation.md)
* [Adobe PDF Embed API](/src/pages/apis/pdf-embed.md)
* [Adobe PDF Services API](/src/pages/apis/pdf-services.md)
* [Adobe PDF Extract API](/src/pages/apis/pdf-extract.md)
* [Adobe Sign](https://www.adobe.io/apis/documentcloud/sign.html)

### Scenario

A procurement team needs to send signed purchase orders frequently to suppliers, and they track all information about suppliers and processes in their procurement system. Currently, sending a PO involves manually copying information from the system to a Microsoft Word document, converting to PDF, uploading for internal review, manually sending for signature, and then sharing with the supplier. Fully automating this process would give team members time back.


### Building this solution

Follow the steps below to automate PDF generation to streamline procurement processes:

1. Identify the JSON data model used to export data from the procurement system
2. Tag a Purchase Order template (Word) by uploading the JSON model to the Adobe Document Generation Tagger Microsoft Word add-in, and adding tags where data should be filled automatically
3. Insert Adobe Sign text tags in the PO template to make it ready to be used by Adobe Sign
4. Use Adobe Document Generation API to automatically merge procurement system data and the Word template to generate a PDF
5. Use PDF Services API to combine PO with additional documents
6. Adobe PDF Embed API embeds the PDF in the application for review and approval
7. Use Adobe Sign API to send the document out for signature once approved