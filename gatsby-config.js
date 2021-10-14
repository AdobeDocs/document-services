/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    docs: {
      title: 'Get credentials',
      path: 'coming-soon.md'
    },
    pages: [
      {
        title: 'Adobe Document Services',
        path: 'index.md'
      },
      {
        title: 'APIs',
        menu: [{
          title: 'PDF Services',
          path: 'pdf-services.md'
        },{
          title: 'PDF Extract',
          path: 'pdf-extract.md'
        },{
          title: 'Document Generation',
          path: 'doc-generation.md'
        },{
          title: 'PDF Embed',
          path: 'pdf-embed.md'
        }]
      },
      {
        title: 'Use Cases',
        path: 'use-cases'
      },
      {
        title: 'Pricing',
        path: 'pdf-pricing.md'
      },
      {
        title: 'Documentaion',
        menu: [{
          title: 'Overview',
          path: 'coming-soon.md'
        },{
          title: 'PDF Services',
          path: 'coming-soon.md'
        },{
          title: 'PDF Extract',
          path: 'coming-soon.md'
        },{
          title: 'Document Generation',
          path: 'coming-soon.md'
        },{
          title: 'PDF Embed',
          path: 'coming-soon.md'
        }]
      },
      {
        title: 'Resources',
        menu: [{
          title: 'Developer Resources',
          path: 'pdf-resources.md'
        }, {
          title: 'Forum',
          path: 'https://community.adobe.com/t5/document-services-apis/bd-p/Document-Cloud-SDK?page=1&sort=latest_replies&filter=all'
        }, {
          title: 'Use Cases',
          path: 'sales-proposals-and-contracts.md'
        }, {
          title: 'Licensing',
          path: 'coming-soon.md'
        }]
      }
    ],
    subPages: [
      {
        title: 'Agreements and Contracts',
        path: 'use-cases',
        pages: [
          {
            title: 'Sales Proposals and Contracts',
            path: 'use-cases/index.md'
          },
          {
            title: 'Legal Contracts',
            path: 'use-cases/agreements-and-contracts/legal-contracts.md'
          },
          {
            title: 'NDA Creation',
            path: 'use-cases/agreements-and-contracts/nda-creation.md'
          },
          {
            title: 'Employee Offer Letters',
            path: 'use-cases/agreements-and-contracts/employee-offer-letters.md'
          },
          {
            title: 'Legal Letters and Statements',
            path: 'use-cases/agreements-and-contracts/legal-letters-and-statements.md'
          }
        ]
      },
      {
        title: 'Content & Data Extraction',
        path: 'use-cases/content-and-data-extraction',
        pages: [
          {
            title: 'Content Based Process Automation',
            path: 'use-cases/content-and-data-extraction/index.md'
          },
          {
            title: 'Data Analysis',
            path: 'use-cases/content-and-data-extraction/data-analysis.md'
          },
          {
            title: 'Republish PDF Content',
            path: 'use-cases/content-and-data-extraction/republish-pdf-content.md'
          }
        ]
      },
      {
        title: 'Content Publishing',
        path: 'use-cases/content-publishing',
        pages: [
          {
            title: 'Digital Content Publishing',
            path: 'use-cases/content-publishing/index.md'
          },
          {
            title: 'On-Demand Report Creation',
            path: 'use-cases/content-publishing/on-demand-report-creation.md'
          },
          {
            title: 'Job Posting',
            path: 'use-cases/content-publishing/job-posting.md'
          },
          {
            title: 'Employee Onboarding Materials',
            path: 'use-cases/content-publishing/employee-onboarding-materials.md'
          },
          {
            title: 'Automated Report Generation',
            path: 'use-cases/content-publishing/automated-report-generation.md'
          },
          {
            title: 'Employee Letters',
            path: 'use-cases/content-publishing/employee-letters.md'
          },
          {
            title: 'Course and Degree Certificate',
            path: 'use-cases/content-publishing/course-and-degree-certificate.md'
          }
        ]
      },
      {
        title: 'Collaboration',
        path: 'use-cases/collaboration',
        pages: [
          {
            title: 'Student-Teacher Collaboration',
            path: 'use-cases/collaboration/index.md'
          },
          {
            title: 'Review and Approval',
            path: 'use-cases/collaboration/review-and-approval.md'
          }
        ]
      },
      {
        title: 'Financial',
        path: 'use-cases/financial',
        pages: [
          {
            title: 'Data Analysis',
            path: 'use-cases/financial/index.md'
          },
          {
            title: 'Invoices',
            path: 'use-cases/financial/invoices.md'
          },
          {
            title: 'Sales Quote',
            path: 'use-cases/financial/sales-quote.md'
          },
          {
            title: 'Purchase Orders',
            path: 'use-cases/financial/purchase-orders.md'
          }
        ]
      },
      {
        title: 'Archiving and Retrieval',
        path: 'use-cases/archiving-and-retrieval',
        pages: [
          {
            title: 'Search and Indexing',
            path: 'use-cases/archiving-and-retrieval/index.md'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/document-services/'
};
