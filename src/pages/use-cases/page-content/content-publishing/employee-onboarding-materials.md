---
title: 'Document Services API Use Case: Employee Onboarding Materials'
---

## Employee Onboarding Materials

### Overview

Onboarding new customers into a company or new role takes time and resources. Human Resources often needs to share items like welcome packets, employee handbooks, and resource guides. Customizing onboarding documents for specific employees, roles, seniority levels, and regions improves the employee experience but can be very time consuming for HR teams when done manually.

Adobe Document Services allows organizations to:

* Create standard templates for employee onboarding documents
* Merge specific employee data automatically (start date, onboarding task deadlines, etc.)
* Include or exclude document sections automatically based on employee data

### Relevant APIs

* [Adobe PDF Services API](/src/pages/apis/pdf-services.md)
* [Adobe Document Generation API](/src/pages/apis/doc-generation.md)

### Scenario

An HR team in a growing company is struggling to generate onboarding materials for its many new hires. The team currently assembles and customizes welcome packets in Microsoft Word, while manually referencing data in their HR system. The new hires have various responsibilities and seniority levels. Automating templates would make welcome packet creation quick and smooth, and would give HR time back.

### Building this Solution

1. Create a simple data capture form using Microsoft Form (or another form builder)
2. Design onboarding templates using Microsoft Word
3. Use Adobe Document Generation Tagger in Word to place fields into the templates based on the data model from the form
4. Run the Adobe Document Generation API to merge data from the form into the appropriate templates, creating a final legal letter in PDF
5. Send PDFs to the employee
