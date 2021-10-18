---
title: Adobe Developer — Document Services API Use Cases – Legal Letters and Statements
---

## Legal Letters and Statements

### Overview

Legal firms and teams produce countless legal letters and statements for their clients. Drafting, client review, and signing take time — especially when done manually. The current process requires personally customizing templates with specific client information and then sending for review and signature. It’s repetitive and time consuming, and automation frees up valuable time. Adobe Document Services allows legal firms to:

* Create standard legal letter templates readily
* Merge specific client data from any business system in a few clicks
* Automatically send letters for client review and signature

### Relevant APIs

* [Adobe PDF Services API](/src/pages/pdf-services.md)
* [Adobe Document Generation API](/src/pages/doc-generation.md)
* [Adobe Sign API](https://www.adobe.io/apis/documentcloud/sign.html)

### Scenario

A legal team creates affidavits of identity frequently for clients, often on tight deadlines. The team needs to quickly generate letters based on the client's personal data stored in their system, and automation ensures accuracy, helps the team meet deadlines, and gives the team back valuable time.

### Building this Solution

1. Create a simple data capture form using Microsoft Form (or another form builder)
2. Design the legal letter template using Microsoft Word
3. Use Adobe Document Generation Tagger in Word to place fields into the template based on the data model from the form
4. Run the Adobe Document Generation API to merge data from the form into the template, creating a final legal letter in PDF
5. Send to Adobe Sign if signatures are required, and if not, email directly
