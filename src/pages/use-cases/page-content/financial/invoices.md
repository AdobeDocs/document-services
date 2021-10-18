---
title: Adobe Developer — Document Services API Use Cases — Invoices
---

## Invoices

### Overview

Billing customers is a critical business activity, but creating invoices is tedious and time consuming. While accuracy is paramount, invoice data often comes from several systems and changes regularly, so the process can be prone to error. Finance and accounting teams at start-ups and enterprises alike need invoicing solutions that are accurate, reliable, and can scale as the business grows.

Adobe Document Services can help businesses create invoices. After pulling relevant data from the various systems (CRM, ERP, PIM, etc.) into a JSON file, users can:

* Design invoice templates in Microsoft Word and add text tags for merging JSON data
* Create invoices on demand using an automation tool, such as Microsoft Power Automate
* Add password protection to prevent the editing of PDFs

### Relevant APIs

* [Adobe Document Generation API](/src/pages/doc-generation.md)
* [Adobe PDF Services API](/src/pages/pdf-services.md)

### Scenario

At the end of every month, a member of the accounting department at a medical supply company needs to send out customer invoices. Information is pulled from different systems and PDF invoices are generated programmatically. With differing billing periods, generating invoices, whether in batches or one at a time, must be quick and accurate.

### Building this Solution

1. Design an invoice template in Microsoft Word
2. Import JSON file and use the Adobe Document Generation Tagger, a Microsoft Word Add-In, to auto generate text tags
3. Apply any necessary logic and conditions using the Adobe Document Generation Tagger
4. Use the Adobe Document Generation API to merge data from the JSON into the template to create PDF invoices
5. Add password protection to prevent editing using the Adobe PDF Services API

### Building in Power Automate

* Adobe PDF Services Connector (includes Document Generation and Protect)
