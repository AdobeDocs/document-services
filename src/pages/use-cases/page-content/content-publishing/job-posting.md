---
title: 'Acrobat Services API Use Case: Job Posting'
---

## Job Posting

### Overview

Job postings are usually limited to text-based content, but often additional supporting documents, such as PDF brochures, can better communicate the opportunity or the company.

Adobe Acrobat Services allows job sites to:

* Show and render high-resolution supporting documents
* Access analytics to understand what documents candidates are most interested in

In addition, Adobe Acrobat Services allows for documents uploaded in different formats, such as Microsoft Word, to be normalized into the PDF format.

### Relevant APIs

* [Adobe PDF Embed API](/src/pages/apis/pdf-embed.md)
* [Adobe PDF Services API](/src/pages/apis/pdf-services.md)

### Scenario

An HR manager logs into a job posting site. After entering information about an available position, the manager uploads supporting documents, such as documents about the department, the company, and the solutions involved. The website then renders the job posting and the documents inline.

### Building this Solution

1. Create a PDF document from multiple file types using Adobe PDF Services API Create PDF operation
2. Process the document with PDF Services API OCR and Compress operations to streamline and normalize
3. Pass the document to Extract API to extract data and send on through the system
4. Use Adobe PDF Embed API to render the PDF on the submission page, inline

