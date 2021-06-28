---
title: Adobe Developer — Document Services API Use Cases — Job Posting
---

# Automated Report Generation

## Overview

Many businesses create reports on project progress or the status of certain accounts for clients or stakeholders. This process is cumbersome and often uses data already in the company's customer relationship management (CRM) system. Automating report generation gives teams time back and ensures reports are as up-to-date as possible

Adobe Document Services allows businesses to:

* Create report templates for various purposes
* Automatically merge data from business systems (e.g. CRM)
* Limit edits by protecting the resulting PDF file

## Relevant APIs

* [Adobe PDF Services API](/src/pages/pdf-services.md)
* [Adobe Document Generation API](/src/pages/doc-generation.md)

## Scenario

A sales organization repeatedly needs to create reports on the status of a sales account with data stored in their CRM system. This data is then shared with internal stakeholders or the client directly and data requests sometimes happen spontaneously. To ensure that the team always has the required materials, managers in the organization need to quickly generate reports that include the latest accurate data.

## Building this Solution

1. Create a simple data capture form using Microsoft Form (or another form builder)
2. Design the report template using Microsoft Word
3. Use Adobe Document Generation Tagger in Word to place fields into the template based on the data model from the form
4. Run the Adobe Document Generation API to merge data from the form into the template, creating a final report in PDF
5. Use Adobe PDF Services API to protect the document from editing