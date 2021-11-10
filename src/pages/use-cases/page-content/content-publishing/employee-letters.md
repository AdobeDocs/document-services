---
title: Adobe Developer — Document Services API Use Cases — Employee Letters
---

## Employee Letters

### Overview

Businesses generate employee letters for various formal communications, like compensation changes, awards letters, and performance reviews. Many of these letters need to include data stored in the HR system. For large organizations, creating custom letters manually for every employee becomes a time-consuming task.

Adobe Document Services allows organizations to:

* Create standard branded templates for employee letters
* Merge employee data automatically into templates
* Protect documents from editing with a password

### Relevant APIs

* [Adobe Document Generation API](/src/pages/apis/doc-generation.md)
* [Adobe PDF Services API](/src/pages/apis/pdf-services.md)

### Scenario

The HR team in charge of employee compensation needs to send letters formally communicating changes to the employee awards policy. Each letter should outline the individual impact for each employee. Data on each employee’s awards is stored in their HR system, and over one thousand letters need to be generated for employees before the next pay period.

### Building this Solution

1. Create a simple data capture form using Microsoft Form (or another form builder)
2. Design the letter template using Microsoft Word
3. Use Adobe Document Generation Tagger in Word to place fields into the template based on the data model from the form
4. Run the Adobe Document Generation API to merge data from the form into the template, creating a final letter in PDF
5. Use Adobe PDF Services API to protect the document from editing