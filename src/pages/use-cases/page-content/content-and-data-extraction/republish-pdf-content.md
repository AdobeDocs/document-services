---
title: 'Document Services API Use Case: Republish PDF Content'
---

## Republish PDF Content

### Overview

Content originally published in PDF documents can be repurposed to extend its reach and impact, as well as the content owner’s ability to monetize it. Making content available in new, alternative media or translating it to one or more different languages are just two examples of how PDF content might be republished. When republishing PDF documents, it is essential that key contextual attributes of the original content are captured and carried forward in order to preserve and retain the document’s original true meaning. Document structure, reading order, fonts and text styling, text semantics (i.e., tagging a block of text as a paragraph, heading, or list), and the associated images that reinforce meaning are all critical to the republishing process. Adobe PDF Extract API empowers content owners to republish PDF documents to any number of alternative formats and media to extend its value.

### Relevant APIs

* [Adobe PDF Extract API](/src/pages/apis/pdf-extract.md)

### Scenario

A company wants to make a certain type of information normally published in PDF available in audio format using text-to-speech technology. Making written documents available in audio form creates a flexible and convenient way for people to consume information and can also enable interactive experiences for consuming tables, figures, and images.

### Building this solution

1. Pass a PDF to Adobe PDF Extract API to retrieve text content
2. Extract headings and paragraph text from the JSON parsed content
3. Use a Text to Speech API (TTS) to create an audio version of the text including a heading index for voice navigation
