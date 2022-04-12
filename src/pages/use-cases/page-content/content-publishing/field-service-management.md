---
title: 'Document Services API Use Case: Data Analysis for Finance'
---

## Field service management

### Overview

Many organizations perform services onsite at field locations involving installations, safety certifications, assessments, inspections, job orders, and more. Organizations benefit from streamlined digital document workflows to collect data, send for signature, create records, and archive for audit purposes. Customizing document workflows within different systems and applications can be challenging.

Adobe Document Services allows companies to:

* Integrate customized document processing with existing applications using APIs
* Automate approval and signature workflows to reduce processing errors
* Create dynamic data-driven documents with Microsoft Word templates
* Archive and secure documents of record for auditing

### Relevant APIs

* [Adobe PDF Embed API](/src/pages/apis/pdf-embed.md)
* [Adobe PDF Services API](/src/pages/apis/pdf-services.md)
* [Adobe PDF Extract API](/src/pages/apis/pdf-extract.md)

### Scenario

A company needs to automate the creation and management of daily shift reports from multiple field locations. Shift reports follow a standard template, but some are completed manually and scanned while others are made dynamically using data from databases onsite. Daily reports from each location must be combined into a single report, approved with signature by the field manager, protected with a password, then stored as documents of record for audit purposes.


### Building this solution

In this solution, shift reports in the field are scanned using Adobe Scan or generated in PDF format dynamically. Then they are combined with other reports, sent for approval with signature, password protected, and archived.

1. A shift report is either scanned using Adobe Scan or generated dynamically using templates with form data and Adobe Document Generation API
2. PDF Services API OCR service is used to make scanned PDFs readable and searchable
3. PDF Services API Combine PDF service merges multiple PDFs
4. Adobe Acrobat Sign API sends the final PDF for approval
5. PDF Services API Protect service is used to add a password to the PDF before the document is archived
6. Render the archived document in the application with Adobe PDF Embed API
