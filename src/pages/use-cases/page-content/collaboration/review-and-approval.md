---
title: Adobe Developers — Document Services API Use Cases — Review and Approval
---

## Review and Approval

### Overview

With the COVID-19 pandemic came the immediate challenge to support remote workers. Teams and cross-functional groups need ways to share ideas and information, collaborate, and review digital documents. These end-user workflows often require an approval process to create final assets. However, not all users have access to the applications needed to view the various file formats. Additionally, teams often exchange feedback via manual methods, such as email and live meetings.

Adobe Document Services lets teams:

* Standardize document files into a common format (PDF)
* Enable annotation, commenting, markup and more
* Create end-to-end workflows, from providing feedback on drafts to approving final content

### Relevant APIs

* [Adobe PDF Embed API](/src/pages/apis/pdf-embed.md)
* [Adobe PDF Services API](/src/pages/apis/pdf-services.md)

### Scenario

A company is trying to launch a new product, but teams are distributed across the globe and there are documents in many formats, including Microsoft Word docs, JPEG files, and InDesign and Illustrator files. The project lead wants to gather feedback from a number of people, and then key stakeholders need to approve the content. With the launch just weeks away, the process needs to be as automated as possible to ensure broad feedback but also to meet tight deadlines.

### Building this Solution

1. Using Adobe PDF Services API, create PDFs from multiple file formats (Word, JPEG, InDesign, and Illustrator)
2. Display the PDF document with a custom viewing mode using the free Adobe PDF Embed API
3. Enable annotations and commenting with callbacks in Adobe PDF Embed API
4. Setup identification of users by name using custom callbacks in Adobe PDF Embed API
5. Optionally implement controls to save ongoing edits to local or external storage for multi-user workflows
6. After a draft is approved, Adobe PDF Services API Create PDF operation can be used to generate the final asset
