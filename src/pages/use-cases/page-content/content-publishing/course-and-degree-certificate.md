---
title: 'Document Services API Use Case: Course and Degree Certificate'
---

## Course and Degree Certificate

### Overview

Institutions offering degrees and certifications need to create many certificates of completion for their students. These certificates often include details about the student's performance and specific completed courses, which is tedious to create manually. Automation helps institutions create complex and personalized certificates quickly.

Adobe Document Services allows institutions to:

* Create standard branded templates for certificates
* Merge student-specific data and course information automatically into templates
* Protect documents from editing and sending
* Sign certificates automatically before sharing with students

### Relevant APIs

* [Adobe PDF Services API](/src/pages/apis/pdf-services.md)
* [Adobe Document Generation API](/src/pages/apis/doc-generation.md)
* [Adobe Sign API](https://www.adobe.io/apis/documentcloud/sign.html)

### Scenario

An executive education institution needs to create, sign, and send certificates to students upon completion of a program. Certificates include student information and course details that exist in their learning management system (LMS). Automating this process ensures accurate information is sent to the correct students quickly.

### Building this Solution

1. Create a simple data capture form using Microsoft Form (or another form builder)
2. Design the course certificate template using Microsoft Word
3. Use Adobe Document Generation Tagger in Word to place fields into the template based on the data model from the form
4. Run the Adobe Document Generation API to merge data from the form into the template, creating a certificate in PDF
5. Send to Adobe Sign for the instructors’ signatures
6. Send the final signed PDF to the student