---
title: PDF search and indexing | Adobe PDF Services API | Adobe Acrobat Services
description: Automate PDF search and indexing with Adobe Acrobat Services. Our PDF Services API helps you create, convert, OCR PDFs and more. Free 6-month trial. Learn more today.
---

## Search and Indexing

### Overview

With document digitization comes the problem of not only archiving accumulated files, but also the issue of unlocking the data in those documents. Many companies have a wealth of archived information stored in paper or scanned document archives—in a variety of formats—and they cannot be searched or indexed properly. Since the process of manually indexing and searching is incredibly labor intensive and not always accurate, the challenge is creating digital archives that are immediately accessible and available for editing or downstream processing.

With Adobe Acrobat Services, a workflow can:

* Convert a variety of files to PDF format for standardization
* Run OCR (optical character recognition) on scanned images to convert to machine-readable text
* Enable easy and fast searching of converted documents

### Relevant APIs

* [Adobe PDF Services API](/src/pages/apis/pdf-services.md)

### Scenario

A firm has thousands of legal contracts that have been scanned and stored as digital files. For compliance purposes, documents with a particular clause or special addendum must be found and then updated. To be successful, the staff must inventory all digital documents, unlock the text, and create a searchable index that can be used to locate critical content.

### Building this Solution

1. Identify a file system for digital document storage on a shared drive or database system
2. Convert files not in PDF, such as scanned images, using Adobe PDF Services API Create PDF operation
3. Send PDF documents to Adobe PDF Services API OCR operation to create fully searchable documents
4. Index and store the searchable documents using a search engine and database
