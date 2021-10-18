---
title: Adobe Developer — Document Services API Use Cases — Report Creation and Editing
---

## On-Demand Report Creation

### Overview

Creating reports is a common requirement for many applications and web experiences. Often, the displayed data and content is generated in HTML. However, many users want to download, share, review offline, or modify these reports, but the native format makes this difficult.

Adobe Document Services allows developers to:

* Download an HTML report in a PDF format to share or review offline

### Relevant APIs

* [Adobe PDF Services API](/src/pages/pdf-services.md)
* [Adobe PDF Embed API](/src/pages/pdf-embed.md)

### Scenario

A social media marketing agency has a web application that customers access to see results of different campaigns they are running. Results are formatted and displayed on a password protected part of the site. Clients want to download single reports in PDF format, as well as select multiple reports and combine them into a more comprehensive PDF document that they can share with their management team.

### Building this Solution

1. Campaign results are made available in a variety of formats, such as Excel tables, HTML pages, and PDF documents
2. Clients review the web page and select desired datasets for their report
3. The application uses PDF Create and PDF Combine operations to assemble the report
4. Clients select "Download Report"

### Enhancements

Users may want to add comments to a report, with insights and action steps. To do this, the application would provide a menu option ("View Report") and use Adobe PDF Embed API to display the report directly within the web page. In addition, annotations, including comments and markup, can also be enabled.