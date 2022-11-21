---
title: 'Acrobat Services API Use Case: Digital Content Publishing'
---

## Digital Content Publishing

### Overview

There are more than 2.5 trillion PDFs on the Internet, and one of the main reasons is that the format makes it extremely easy to publish well-designed content on the web and secure it. There is no need to redesign documents using HTML and CSS and lose granularity. With Adobe Acrobat Services, it is now even easier to embed PDF documents inside of web pages, as well as understand exactly how users are consuming documents. Advanced features not found in traditional PDF desktop or web viewers let you:

* Add interactivity to PDF-based experiences
* Provide PDF content for the rest of the brand experience on a website, including navigation, headers, and more
* Support multiple user annotations (using the Adobe Annotations API)
* Enable analytics integration to see how PDFs are viewed, including how long users spend on pages
* Secure PDFs to prevent editing, downloading, annotating, or printing

### Relevant APIs

* [Adobe PDF Embed API](/src/pages/apis/pdf-embed.md)
* [Adobe PDF Services API](/src/pages/apis/pdf-services.md)

### Scenario

A company plans to offer whitepapers on its website to provide details about various apps and services. Marketing needs to understand how users interact with the content, and they want to incorporate it into the rest of the web pages. Some of the PDF content includes prices that change on a regular basis, so the company wants to secure the PDF to prevent users from making changes to it after downloading. Additionally, some of the documents may be restricted or behind a paywall, so the company also wants to add a password to certain PDFs to control who can download and open them.

### Building this Solution

1. Get credentials for PDF Embed API and PDF Services APIs
2. Use PDF Services API to secure the whitepapers by adding editing restrictions and/or a password using the Protect PDF operation
3. Access the Embed API demo to generate sample code
4. Change flags to allow / disallow printing, downloading, and other user actions
5. Enable events so that the viewer can be extended

<!-- In the scenario where there needs to be negotiation between the two parties, the developer will use Document Generation API to provide a document back in Word format, which would allow for redlining in Microsoft Word. Adobe Document Generation Tagger, a Microsoft Word add-in, can be used by the developer or the vendor manager to quickly build a custom branded NDA template for the company to standardize their agreements for accuracy. Using this custom template with dynamic text tags, JSON data can be sent with the template to Document Generation API then immediately sent to Adobe Acrobat Sign for signature and countersignature.

The steps for this use case include:

1. Within the application layer, the developer would query the database to collect relevant data for a custom NDA such as vendor details and contact information and create a JSON data model
2. Within the application layer, the developer would query the database to collect relevant data for a custom NDA such as vendor details and contact information and create a JSON data model The developer would use a custom branded Word document from the vendor manager to create a template with dynamic text tags using Adobe Document Generation Tagger, a Microsoft Word add-in. The JSON data model can be uploaded to the Tagger to automatically generate text tags
3. Data is passed to Adobe Document Generation API about the vendor that the NDA is being conducted with. -->