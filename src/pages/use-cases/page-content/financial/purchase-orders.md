---
title: Adobe Developer — Document Services API Use Cases — Purchase Orders
---

## Purchase Orders

### Overview

Many businesses need to generate a high volume of purchase orders (POs) in PDF format for services and source products. The data required for compliant POs is often tracked in several systems, and it becomes tedious for teams to manually include the correct details for different suppliers, products, regions, etc. Automating the generation of these documents saves time and boosts efficiency for these teams.

Adobe Document Services allows organizations to:

* Create standard branded templates for purchase orders
* Merge purchase order data automatically into template documents
* Gather comments and feedback on documents
* Protect documents from editing with a password

### Relevant APIs

* [Adobe Document Generation API](/src/pages/doc-generation.md)
* [Adobe PDF Services API](/src/pages/pdf-services.md)

### Scenario

The procurement team in a large manufacturing company is looking to efficiently generate customized purchase orders. Their procurement system has most of the information they need. In addition, they want to include specific terms and conditions, notes, and disclaimers in the document depending on the products, vendors, and regions used — all without creating a more time-consuming process.

### Building this Solution

1. Create a simple data capture form using Microsoft Form (or another form builder)
2. Design the purchase order template using Microsoft Word
3. Use Adobe Document Generation Tagger in Word to place fields into the template based on the data model from the form
4. Run the Adobe Document Generation API to merge data from the form into the template, creating a final sales quote in PDF
5. Use Adobe PDF Services API to protect the document from editing