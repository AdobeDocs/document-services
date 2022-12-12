---
title: 'Acrobat Services API Use Case: Data Analysis for Finance'
---

## Managing brand assets

### Overview

Marketing teams need to update documents regularly with new product information, messaging, and branding. It’s challenging to make updates broadly when rebranding occurs or when certain text strings need to be updated.

Adobe Acrobat Services allows organizations to:

* Create searchable PDF documents using OCR
* Preview PDFs in a UI using PDF Embed API
* Merge Microsoft Word templates with dynamic data fields that can be updated with new branding and messaging

### Relevant APIs

* [Adobe PDF Embed API](/src/pages/apis/pdf-embed.md)
* [Adobe PDF Services API](/src/pages/apis/pdf-services.md)
* [Adobe Document Generation API](/src/pages/apis/doc-generation)

### Scenario

A marketing team struggles to manage and update their many documents due to a recent branding change. They need an easy way to maintain internal- and external-facing marketing materials, search for terms, display documents, and edit dynamic fields to refresh and republish content.

### Building this Solution

In this solution, see how your organization can utilize this process:

1. Use PDF Services API Create PDF, OCR, and Compress services to streamline and standardize documents as PDFs

2. Adobe Document Generation API can be used to create templates for branded documents that need to be updated frequently. Dynamic data is pulled from various systems to inject into the templates and generate PDF or Word documents with updated images and text.

3. The search engine provides links to documents that use PDF Embed API to provide a consistent visual experience to the user
