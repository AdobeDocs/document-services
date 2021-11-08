---
title: Adobe Developer — Document Services API Use Cases — Data Analysis
---

## Data Analysis

### Overview

Many PDF documents contain data rich reports such as SEC filings, clinical studies, and government reports. These reports include data in many different forms – text blocks, tables, figures, and charts - which companies want to analyze. However, in their native PDF form, individual reports are optimized for human consumption, not comprehensive analysis. To accelerate the pace of analysis and insight generation, organizations want to extract data from PDF reports programmatically and move it to a more suitable format for analysis. This use case includes both a Basic and an Advanced approach to data analysis.

Basic: Sometimes companies simply want to export data from PDFs into spreadsheet applications so end users can analyze the data. The Adobe PDF Tools API is ideal for these use cases since it converts PDF documents into Microsoft Excel.

Advanced: Other times, there are cases where hundreds or thousands of reports need to be analyzed in aggregate making it impractical to do manually. The Adobe PDF Extract API enables the content published in reports, as well as other rich document types, to be extracted in context and efficiently analyzed by machine learning algorithms to expose new, deeper insights.

### Relevant APIs

* [Adobe PDF Services API](/src/pages/pdf-services.md)
* [Adobe PDF Embed API](/src/pages/pdf-embed.md)
* [Adobe PDF Extract API](/src/pages/pdf-extract.md)

### Basic Scenario

A company has several years of archived financial reports that have been saved in different formats. Some of the files are also paper documents, so data is difficult to use without significant manual intervention. Data analysts want to be able to select reports from a repository, no matter its original format, and analyze and perform calculations on them. After completing their analysis, they want to create new reports to share with executives in PDF format.

### Building this Solution

1. Scan paper documents to PDF format to create a digital repository
2. Create an interface that presents select files for a data analyst to choose from
3. Export selected PDF documents to XLS using Adobe PDF Tools API export operation
4. Perform calculations on multiple XLS files for new insights and store in a database
5. Using Adobe PDF Tools API, recreate charts and data in PDF format as a report or whitepaper
6. Display new documents within the application with Adobe PDF Embed API

### Advanced Scenario

A company wants to extract information from large numbers of financial reports and filings in order to create a database that can be used by venture capitalists, private equity firms, and M&A teams to more effectively identify and assess investment opportunities in targeted markets and industries.

### Building this Solution

1. Pass a PDF to the Adobe PDF Extract API to retrieve tabular information
2. Loop over the tabular data and insert them into a database table
