---
title: Adobe Developer — Document Services API Use Cases — Digital Content Publishing
---

## Digital Content Publishing

### Overview

There are more than 2.5 trillion PDFs on the Internet, and one of the main reasons is that the format makes it extremely easy to publish well-designed content on the web. There is no need to redesign documents using HTML and CSS and lose granularity. With Adobe Document Services, it is now even easier to embed PDF documents inside of web pages, as well as understand exactly how users are consuming documents. Advanced features not found in traditional PDF desktop or web viewers let you:

* Add interactivity to PDF-based experiences
* Provide PDF content for the rest of the brand experience on a website, including navigation, headers, and more
* Support multiple user annotations (using the Adobe Annotations API)
* Enable analytics integration to see how PDFs are viewed, including how long users spend on pages
* Include security and other controls to prevent downloading, annotating, or printing

### Relevant APIs

* [Adobe PDF Embed API](/src/pages/pdf-embed.md)
* [Adobe PDF Services API](/src/pages/pdf-services.md)

### Scenario

A company plans to offer whitepapers on its website to help customers use various apps and services. Marketing needs to understand how users interact with the content, and they want to incorporate it into the rest of the web pages. Since some of the documents may be restricted or behind a paywall, the company also wants to control who can download particular PDFs.

### Building this Solution

1. Get an integration key
2. Begin the Embed API demo
3. Change flags to allow / disallow printing, downloading, and other user actions
4. Enable events so that the viewer can be extended

<!-- In the scenario where there needs to be negotiation between the two parties, the developer will use Document Generation API to provide a document back in Word format, which would allow for redlining in Microsoft Word. Adobe Document Generation Tagger, a Microsoft Word add-in, can be used by the developer or the vendor manager to quickly build a custom branded NDA template for the company to standardize their agreements for accuracy. Using this custom template with dynamic text tags, JSON data can be sent with the template to Document Generation API then immediately sent to Adobe Sign for signature and countersignature.

The steps for this use case include:

1. Within the application layer, the developer would query the database to collect relevant data for a custom NDA such as vendor details and contact information and create a JSON data model
2. Within the application layer, the developer would query the database to collect relevant data for a custom NDA such as vendor details and contact information and create a JSON data model The developer would use a custom branded Word document from the vendor manager to create a template with dynamic text tags using Adobe Document Generation Tagger, a Microsoft Word add-in. The JSON data model can be uploaded to the Tagger to automatically generate text tags
3. Data is passed to Adobe Document Generation API about the vendor that the NDA is being conducted with. -->