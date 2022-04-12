---
title: 'Document Services API Use Case: Job Posting'
---

## Sales Quote

### Overview

Sales teams create many sales quotes for customers, and quotes need to be polished and accurate. Quotes include complex product pricing configurations and payment conditions, and they usually include information from the team’s CPQ software system. For many teams, this manual process takes away valuable time. Automating the process ensures information is accurate and delivered quickly.

Adobe Document Services allows sales teams to:

* Create standard branded templates for sales quotes
* Merge complex quote data automatically into templates
* Add or exclude any standard document sections based on quote data

### Relevant APIs

* [Adobe PDF Services API](/src/pages/apis/pdf-services.md)
* [Adobe Document Generation API](/src/pages/apis/doc-generation.md)
* [Adobe Acrobat Sign API](https://www.adobe.io/apis/documentcloud/sign.html)

### Scenario

A B2B sales team needs to generate polished quotes for their consulting services from the data in their CPQ system. In addition, they want to include terms and conditions if certain products are included in the quote. Automating this process means the sales team will create the appropriate quote in just a few clicks.

### Building this Solution

1. Create a simple data capture form using Microsoft Form (or another form builder)
2. Design the sales quote template using Microsoft Word
3. Use Adobe Document Generation Tagger in Word to place fields into the template based on the data model from the form
4. Run the Adobe Document Generation API to merge data from the form into the template, creating a final sales quote in PDF
5. Send to Adobe Acrobat Sign if signatures are required, and if not, email directly
