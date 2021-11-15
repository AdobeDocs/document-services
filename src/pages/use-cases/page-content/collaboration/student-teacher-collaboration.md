---
title: 'Document Services API Use Case: Student-Teacher Collaboration'
---

## Student-Teacher Collaboration

### Overview

The most effective and rewarding learning environments allow for seamless collaboration between teachers and students. The sudden rise in virtual learning environments has made this goal difficult to achieve, as different file formats, user platforms, and diverse learning levels make it much harder for students to maximize their learning.

Adobe Document Services enables students to:

* View learning materials in a seamless web experience despite multiple document formats
* Collaborate easily with teachers and peers to benefit from the full classroom environment

### Relevant APIs

* [Adobe PDF Services API](/src/pages/apis/pdf-services.md)
* [Adobe PDF Embed API](/src/pages/apis/pdf-embed.md)

### Scenario

A teacher needs to share classroom material, but it is in a variety of formats, and not all students have the same apps and devices. Documents in Microsoft Word, Excel, PowerPoint, and HTML are converted to PDFs and embedded in course websites. Students annotate the documents, collaborate virtually with each other, and teachers see which students are engaged with certain material.

### Building this Solution

1. Create learning material in PDF programmatically by converting and combining documents in multiple formats using Adobe PDF Services API
2. Provide the learning material in a high-fidelity PDF viewing experience
3. Enable annotations for multiple students on embedded PDF documents
4. Create supplemental learning material by archiving annotations on embedded PDF documents
5. Track engagement and understand learning needs by using analytics events tracked in embedded PDF documents
