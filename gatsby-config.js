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
    siteTitle:'Adobe Developers',
    author: process.env.AUTHOR || 'Adobe I/O — Adobe Developers',
    creator: process.env.CREATOR || '@adobedevs',
    siteUrl: process.env.SITE_URL || 'https://developer.adobe.com/',
    baseUrl: process.env.BASEURL || '',
    productionDomain: process.env.PRODUCTION_DOMAIN || 'https://www.adobe.io',
    pageImage: process.env.PAGE_IMAGE || 'dcsdk-main.jpg',
    DESKTOP_SCREEN_WIDTH: process.env.GATSBY_DESKTOP_SCREEN_WIDTH || '1280px',
    DESKTOP_FOOTER_SCREEN_WIDTH_MAX: process.env.GATSBY_DESKTOP_FOOTER_SCREEN_WIDTH_MAX || '1280px',
    docs: {
      title: 'Get credentials',
      path: 'https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html'
    },
    pages: [
      {
        title: 'Adobe Acrobat Services',
        path: 'document-services'
      },
      {
        title: 'APIs',
        menu: [
          {
            title: 'PDF Services',
            description: 'Create, combine and export PDFs',
            path: 'apis/pdf-services/'
          },
          {
            title: 'PDF Accessibility Auto-Tag',
            description: 'Auto-tag PDF content to improve accessibility',
            path: 'apis/pdf-accessibility-auto-tag/'
          },
          {
            title: 'PDF Extract',
            description: 'Extract text, tables, images, and document structure',
            path: 'apis/pdf-extract/'
          },
          {
            title: 'Document Generation',
            description: 'Generate PDF and Word documents from custom Word templates',
            path: 'apis/doc-generation/'
          },
          {
            title: 'PDF Embed',
            description: 'Embed high-fidelity PDFs in web apps with analytics',
            path: 'apis/pdf-embed/'
          },
          {
            title: 'Sign API',
            description: 'Integrate e-signatures into your platform or application',
            path: 'apis/sign-api/'
          },
          {
            title: 'Power Automate Connector',
            description: 'Build workflows on Microsoft Power Platform easily',
            path: 'apis/microsoft-pa-integration/'
          }
        ]
      },
      {
        title: 'Use Cases',
        path: 'use-cases/agreements-and-contracts/sales-proposals-and-contracts.md'
      },
      {
        title: 'Pricing',
        path: 'pricing/main'
      },

      {
        title: 'Resources',
        menu: [{
          title: 'Developer Resources',
          path: 'resources/'
        }, {
          title: 'Forum',
          path: 'https://community.adobe.com/t5/document-services-apis/bd-p/Document-Cloud-SDK?page=1&sort=latest_replies&filter=all'
        }, {
          title: 'Licensing',
          path: 'https://developer.adobe.com/document-services/docs/overview/limits/'
        },{
          title: 'Sales FAQ',
          path: 'faq/sales/'
        },{
          title: 'Tech Support FAQ',
          path: 'faq/tech-support/ '
        },{
          title: 'Contact Us',
          path: 'pricing/contact/'
        }]
      },
      {
        title: 'Documentation',
        menu: [
          {
            title: 'Overview',
            path: 'document-services/docs/overview'
          },
          {
            title: 'PDF Services API',
            path: 'document-services/docs/overview/pdf-services-api/index.md'
          },
          {
            title: 'PDF Accessibility Auto-Tag API',
            path: 'document-services/docs/overview/pdf-accessibility-auto-tag-api/index.md'
          },
          {
            title: 'PDF Extract API',
            path: 'document-services/docs/overview/pdf-extract-api/index.md'
          },
          {
            title: 'Document Generation API',
            path: 'document-services/docs/overview/document-generation-api/index.md'
          },
          {
            title: 'PDF Electronic Seal API',
            path: 'document-services/docs/overview/pdf-electronic-seal-api/index.md'
          },
          {
            title: 'PDF Embed API',
            path: 'document-services/docs/overview/pdf-embed-api/index.md'
          },
        ]
      },
      {
        title: "REST APIs",
        path: 'document-services/docs/apis/index.md'
      }
    ],
    techSupportFAQMenus: [
      {
        title: 'Account Management',
        path: '/faq/tech-support/#account-management',
      },
      {
        title: 'Data Security & Privacy',
        path: '/faq/tech-support/#data-security--privacy',
      },
      {
        title: 'Features-PDF Embed API',
        path: '/faq/tech-support/#features---pdf-embed-api',
      },
      {
        title: 'Features-PDF Services API',
        path: '/faq/tech-support/#features---pdf-services-api',
      },
      {
        title: 'Support',
        path: '/faq/tech-support/#support',
      },
    ],
    salesFAQMenus: [
      {
        title: 'Account Management',
        path: '/faq/sales/#account-management',
      },
      {
        title: 'Billing',
        path: '/faq/sales/#billing',
      },
      {
        title: 'Data Security & Privacy',
        path: '/faq/sales/#data-security--privacy',
      },
      {
        title: 'Ordering',
        path: '/faq/sales/#ordering',
      },
      {
        title: 'Support',
        path: '/faq/sales/#support',
      }
    ],
    techSupportFAQMenus: [
      {
        title: 'Account Management',
        path: '/faq/tech-support/#account-management',
      },
      {
        title: 'Data Security & Privacy',
        path: '/faq/tech-support/#data-security--privacy',
      },
      {
        title: 'Features-PDF Embed API',
        path: '/faq/tech-support/#features---pdf-embed-api',
      },
      {
        title: 'Features-PDF Services API',
        path: '/faq/tech-support/#features---pdf-services-api',
      },
      {
        title: 'Support',
        path: '/faq/tech-support/#support',
      },
    ],
    salesFAQMenus: [
      {
        title: 'Account Management',
        path: '/faq/sales/#account-management',
      },
      {
        title: 'Billing',
        path: '/faq/sales/#billing',
      },
      {
        title: 'Data Security & Privacy',
        path: '/faq/sales/#data-security--privacy',
      },
      {
        title: 'Ordering',
        path: '/faq/sales/#ordering',
      },
      {
        title: 'Support',
        path: '/faq/sales/#support',
      }
    ],
    subMenuPages: [
      {
        title: 'Agreements and Contracts',
        path: 'use-cases/agreements-and-contracts',
        icon:'ic-category-agreements',
        pages: [
          {
            title: 'Sales Proposals and Contracts',
            path: 'use-cases/agreements-and-contracts/sales-proposals-and-contracts'
          },
          {
            title: 'Legal Contracts',
            path: 'use-cases/agreements-and-contracts/legal-contracts'
          },
          {
            title: 'NDA Creation',
            path: 'use-cases/agreements-and-contracts/nda-creation'
          },
          {
            title: 'Employee Offer Letters',
            path: 'use-cases/agreements-and-contracts/employee-offer-letters'
          },
          {
            title: 'Legal Letters and Statements',
            path: 'use-cases/agreements-and-contracts/legal-letters-and-statements'
          },
          {
            title: 'Loan Document Workflows',
            path: 'use-cases/agreements-and-contracts/loan-documents-workflows'
          }
        ]
      },
      {
        title: 'Content & Data Extraction',
        path: 'use-cases/content-and-data-extraction',
        icon:'ic-extract-40',
        pages: [
          {
            title: 'Content Based Process Automation',
            path: 'use-cases/content-and-data-extraction/content-based-process-automation'
          },
          {
            title: 'Data Analysis',
            path: 'use-cases/content-and-data-extraction/data-analysis'
          },
          {
            title: 'Republish PDF Content',
            path: 'use-cases/content-and-data-extraction/republish-pdf-content'
          }
        ]
      },
      {
        title: 'Content Publishing',
        path: 'use-cases/content-publishing',
        icon:'ic-category-content-publishing',
        pages: [
          {
            title: 'Digital Content Publishing',
            path: 'use-cases/content-publishing/digital-content-publishing'
          },
          {
            title: 'On-Demand Report Creation',
            path: 'use-cases/content-publishing/on-demand-report-creation'
          },
          {
            title: 'Job Posting',
            path: 'use-cases/content-publishing/job-posting'
          },
          {
            title: 'Employee Onboarding Materials',
            path: 'use-cases/content-publishing/employee-onboarding-materials'
          },
          {
            title: 'Automated Report Generation',
            path: 'use-cases/content-publishing/automated-report-generation'
          },
          {
            title: 'Employee Letters',
            path: 'use-cases/content-publishing/employee-letters'
          },
          {
            title: 'Course and Degree Certificate',
            path: 'use-cases/content-publishing/course-and-degree-certificate'
          },
          {
            title: 'Managing Brand Assets',
            path: 'use-cases/content-publishing/managing-brand-assets'
          },
          {
            title: 'Processing Employee Resumes',
            path: 'use-cases/content-publishing/processing-employee-resumes'
          },
          {
            title: 'Field Service Management',
            path: 'use-cases/content-publishing/field-service-management'
          }
        ]
      },
      {
        title: 'Collaboration',
        path: 'use-cases/collaboration',
        icon:'ic-category-collaboration',
        pages: [
          {
            title: 'Student-Teacher Collaboration',
            path: 'use-cases/collaboration/student-teacher-collaboration'
          },
          {
            title: 'Review and Approval',
            path: 'use-cases/collaboration/review-and-approval'
          }
        ]
      },
      {
        title: 'Financial',
        path: 'use-cases/financial',
        icon:'ic-category-financial',
        pages: [
          {
            title: 'Data Analysis',
            path: 'use-cases/financial/data-analysis-financial'
          },
          {
            title: 'Invoices',
            path: 'use-cases/financial/invoices'
          },
          {
            title: 'Sales Quote',
            path: 'use-cases/financial/sales-quote'
          },
          {
            title: 'Purchase Orders',
            path: 'use-cases/financial/purchase-orders'
          },
          {
            title: 'Streamline Procurement Processes',
            path: 'use-cases/financial/streamline-procurement-processes'
          }
        ]
      },
      {
        title: 'Archiving and Retrieval',
        path: 'use-cases/archiving-and-retrieval',
        icon:'ic-category-archiving',
        pages: [
          {
            title: 'Search and Indexing',
            path: 'use-cases/archiving-and-retrieval/search-and-indexing'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/document-services/'
};
