---
title: Adobe Developer — Document Services API Use Cases — Content Based Process Automation
---

## Content Based Process Automation

### Overview

Analysis of the content contained in PDF documents is often required to enable business-critical work processes and decision-making. However, manual analysis of documents is expensive, time consuming, and error prone. Accurate extraction of content and context from PDF documents so it can be analyzed by intelligent bots or Robotic Process Automation technology allows processes to be automated, creating new efficiencies, enabling deeper insights, and empowering better decision-making. For example, analysis of long form documents such as sales contracts can be automated to identify which contain non-standard clauses or to ensure the contracts are adhering to certain regulatory or compliance standards.

### APIs Used

* [Adobe PDF Extract API](/src/pages/apis/pdf-extract.md)
* [Adobe PDF Embed API](/src/pages/apis/pdf-embed.md)

### Scenario

A large software company wants to extract content from its marketing literature to enable an automated chat bot on its web site to help prospective customers learn about its offerings. In this scenario, it’s important to capture the richness of the marketing material so the chatbot experience can deliver maximum impact.

### Building this solution

1. Pass a PDF to Adobe PDF Extract API to retrieve text content
2. Extract headings and paragraph text from the JSON parsed content
3. Take user input as a search to return response candidates
4. Rank results to select top response(s)
5. Display PDF using PDF Embed API with integrated chatbot using callback functions
