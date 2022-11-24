---
title: 'Acrobat Services API Use Case: Data Analysis for Finance'
---

## Processing employee resumes

### Overview

Businesses face many challenges when accepting uploaded documents for job applications. Resumes may come in varying formats, be unsearchable, or be too large for storage. Organizations need to standardize and ingest data into other systems for processing, so they can find what they need when they need it.

Adobe Acrobat Services allows organizations to:

* Preview PDFs when uploaded in a UI using Adobe PDF Embed API
* Convert from other formats into PDF for consistency
* Make scanned PDFs searchable upon upload (OCR)
* Extract resume data for upload into a third-party system
* Review resumes and supporting documents such as portfolios


### Relevant APIs

* [Adobe PDF Embed API](/src/pages/apis/pdf-embed.md)
* [Adobe PDF Services API](/src/pages/apis/pdf-services.md)
* [Adobe PDF Extract API](/src/pages/apis/pdf-extract.md)

### Scenario

A candidate applies online. The backend system converts their resume into PDF format that the candidate reviews and approves. If a portfolio is submitted, it can be previewed inline on the submission website. Instead of requiring job histories to be entered separately, information can be extracted from the uploaded resume and inserted into online form fields, saving time and improving user experience.


### Building this Solution

In this solution, see how your organization can utilize this process:

1. Create PDF, OCR, and Compress APIs streamline and standardize documents as PDFs
2. PDF Extract API obtains data, entering it into the system
3. PDF Embed API renders the PDFs on the submission page
4. Data from PDF Extract API is used to auto-populate a form of job history items for user approval