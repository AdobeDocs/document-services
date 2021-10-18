---
title: Adobe Developers — Document Services API Use Cases - Loan Document Workflows
---

## Loan Document Workflows

### Overview

Loan industries are often overwhelmed with tedious administrative tasks, leading to slower transaction times and ultimately unhappy borrowers. This is further complicated by stringent regulations, which can pose high risk with financial penalties despite the labor-intensive verification process. The most pressing pain points around managing loan origination documents include


Adobe Document Services allow companies to:

* Manually processing large volumes of documents in a variety of formats.
* Data entry errors and duplications of sensitive information in a high compliance environment
* Borrowers feeling rushed to review and sign the overwhelming stack of paperwork at closing, and frustrated at the lack of transparency of the entire process
* Borrower’s lack of understanding about the costs and risks from complex forms that are filled with legal and technical acronyms to fulfill federal, state and local government requirements

Adobe Document Services can help these organizations simplify the complex process by:

* Standardizing on a single digital workflow that lets users assemble, manipulate, collaborate on, fill in, and sign documents
* Making scanned PDFs searchable upon upload (OCR)
* Reducing manual data entry by automatically assembling data into documents from various sources of input
* Creating a seamless document viewing experience within the browser
* Adding additional security to the PDF


### Relevant APIs

* [Adobe PDF Embed API](/src/pages/pdf-embed.md)
* [Adobe PDF Services API](/src/pages/pdf-services.md)
* [Adobe PDF Extract API](/src/pages/pdf-extract.md)


###  Scenario

A borrower applies for a loan. When they submit the loan application and supporting documents, the backend system converts uploaded documents to PDF format, compresses the files, and OCRs any scanned PDFs. Data is extracted from the uploaded documents and stored in a database. The borrower is then presented with a preview of the loan package as an embedded PDF and can add comments directly in case there are any questions to resolve with the loan officer. After application review and approval, the final loan documents are sent for signature using Adobe Sign


### Building this Solution

In this solution, we will show how this process can be implemented within your organization to build a frictionless client service interface.

1. Upon upload, the document(s) is passed to Create PDF, OCR, and Compress APIs to streamline and standardize PDFs coming into the service.
2. PDF documents are sent to PDF Extract API to extract data, which can be stored in a database.
3. Create a single loan package with Create PDF API.
4. Render the application using the PDF Embed API in a secure portal so that borrowers can review and add questions / comments through annotation.
5. Send final loan document for signatures with Adobe Sign.