## Account Management

<Accordion>

<AccordionItem header="How do I see how many API transactions or calls I've used?" slot_id="account-management-how-do-i-see-how-many-api-transactions-or-calls">

For AWS Marketplace customers, you can login to your AWS account and visit billing dashboard to see your usage: <a href="https://us-east-1.console.aws.amazon.com/billing">https://us-east-1.console.aws.amazon.com/billing</a>.

For Adobe Enterprise Terms Licensing Agreement (ETLA) customers, you will receive monthly emails on your usage.

</AccordionItem>

<AccordionItem header="My company has an existing Enterprise Agreement with Adobe. Can I use the same Adobe credentials for PDF Services API?" slot_id="account-management-my-company-has-an-existing-enterprise-agreement-with-adobe-can-i-use-the-same-adobe-credentials">

Your Adobe Admin Console admin may have not provisioned your Enterprise ID to have access to PDF Services APIs. If your organization is a current subscriber to Adobe PDF Services API, contact your administrator.

If you are interested in using Adobe PDF Services API on a trial basis, consider using an Adobe ID (Personal) that is not tied to your enterprise ID.

</AccordionItem>

<AccordionItem header="Why do I have to use a personal account when setting up a trial or account? Why can't I use my company's existing enterprise email/account?" slot_id="account-management-why-do-i-have-to-use-a-personal-account-when-setting-up-a-trial-or-account">

Access to Adobe Acrobat Services APIs or SDKs is only available when it is attached to an Enterprise Term License Agreement (ETLA) and the organization's IT administrator has provisioned that user to have access to APIs. For this reason, if you are working on a trial basis, it may be easier and faster to use a personal email than your existing Adobe ID.

</AccordionItem>

<AccordionItem header="Where do I find my Client ID or API key?" slot_id="account-management-where-do-i-find-my-client-id-or-api-key">

Your Client ID (also known as API key) is unique to your account and provided on the successful trial creation confirmation page. This is the "client_id" key used in the back-end code to make free trial calls against.

</AccordionItem>

<AccordionItem header="How do I use my Adobe Acrobat Services credentials in Power Automate, if I initially created them via AWS Marketplace?" slot_id="account-management-how-do-i-use-my-adobe-document-services-credentials-in-power-automate">

For instructions on how to use your Adobe Acrobat Services credentials that were created in AWS Marketplace for use in Power Automate, please reference this step-by-step guide:<a href=" https://helpx.adobe.com/document-cloud/help/pdf-connector-for-microsoft-power-automate.html#pdf-services-with-aws"> https://helpx.adobe.com/document-cloud/help/pdf-connector-for-microsoft-power-automate.html#pdf-services-with-aws</a>.

</AccordionItem>

<AccordionItem header="If I already have credentials and need new ones, how do I get them?" slot_id ="account-management-if-i-already-have-credentials-and-need-new-ones-how-do-i-get-them">

Both paid and trial customers can create new credentials, as well as edit existing credentials, by going to the Admin Console: <a href="https://developer.adobe.com/console">https://developer.adobe.com/console</a>.

</AccordionItem>

<AccordionItem header='Can I continue using my same trial credentials (i.e. keys) when I have paid for Adobe Acrobat Services?' slot_id="account-management-can-i-continue-using-my-same-trial-credentials">

You should not use your free trial credentials (Credential Key aka API Key) beyond your trial.

When you start your Adobe Acrobat Services pay-as-you-go subscription via AWS Marketplace, you will receive new credentials to use for your paid plan. Note that your first 500 transactions or two weeks on the new AWS credential are complementary--your card will be charged automatically after that. Furthermore, there can only be one active pay-as-you-go credential associated with an account.

In a similar fashion, Enterprise Term Licensing Agreement (ETLA) customers will want to exchange their free trial credentials with the new credentials provided alongside their ETLA plan.

</AccordionItem>

</Accordion>

## Data Security & Privacy

<Accordion>

<AccordionItem header="Is Adobe Acrobat Services (PDF Services API and PDF Embed API) HIPAA compliant?" slot_id="data-security--privacy-is-adobe-document-services--hipaa-compliant">

No, it is not. Customer may process certain sensitive personal information pursuant to the applicable terms enterprise <a href="https://www.adobe.com/legal/terms/enterprise-licensing/overview.html">General Terms</a> or the Developer <a href="https://wwwimages2.adobe.com/content/dam/cc/en/legal/servicetou/Adobe-Developer-Additional-Terms_en-US_20210125.pdf">Terms of Use</a>.
  
</AccordionItem>

<AccordionItem header="Where are the data centers for Adobe Acrobat Services based?" slot_id="data-security--privacy-where-are-the-data-centers-for-adobe-document-services-based">

Data centers for Acrobat Services are hosted in United States and Europe. Customers can access the region of their choosing.

User-generated content that is uploaded to Document Cloud is stored temporarily, if needed, in AWS US-East (Virinia) regional data centers. It is never stored permanently. The geographic location of identity data is on the AWS network; stored in multi-region, load-balanced data centers located in Virginia (US-East), Oregon (US-West), Ireland (EU-West), and Singapore (AP-Southeast). Identity data is replicated across all data centers. Adobe complies with applicable laws regarding cross-border data transfers as outlined in greater detail at <a href="https://www.adobe.com/privacy/eudatatransfers.html.">https://www.adobe.com/privacy/eudatatransfers.html.</a>.

</AccordionItem>

<AccordionItem header="Will the choice to provision data in one data center over the other be irreversible?" slot_id="data-security--privacy-will-the-choice-to-provision-data-in-one-data-center-over-the-other-be-irreversible">

Acrobat Services APIs are transactional, and the selection of region applies to every transaction. Customers can specify the region where their documents will be processed in every transaction. Customers can choose to process some documents in the US data center and others in the EU data center. Additional details can be found <a href="https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/service-region-configuration-for-apis/">here</a>.

</AccordionItem>

<AccordionItem header="Does Adobe collect any data about the PDF being viewed or processed? Where are the server side components hosted?" slot_id="data-security--privacy-does-adobe-collect-any-data-about-the-pdf-being-viewed-or-processed">

The PDF Embed API stores user settings in client-side browser's local storage for things such as color for annotation. As far as analytics is concerned, PDF Embed only gathers standard anonymous usage and data parameters like locations, timezone, pdf file lang, file name, file size, no of pages, etc. It doesn't store any user-generated content in analytics and never shares user-generated content with Adobe servers.

All server-side components of PDF Services API and PDF Embed API are hosted in the data centers of leading cloud hosting providers. Publicly accessible and downloadable components, such as the PDF Services SDKs and the PDF Embed API JavaScript library are hosted on providers relevant to the component, such as library repositories and CDNs.

</AccordionItem>

<AccordionItem header="How are data transfers by Adobe Acrobat Services secured?" slot_id="data-security--privacy-how-are-data-transfers-by-adobe-document-services-secured">

The complete data transfer happens over sure HTTPS channel using TLS encryption.

</AccordionItem>

<AccordionItem header="How does Adobe Acrobat Services use or store file content and identity data?" slot_id="data-security--privacy-how-does-adobe-document-services-use-or-store-file-content">

Documents are only transferred to the cloud for processing. Adobe Acrobat Services cloud infrastructure does not store the document but retains the document for a maximum of 24 hours as part of the processing. Documents are never stored permanently.

</AccordionItem>

<AccordionItem header="What regulatory compliances is Adobe Acrobat Services certified for?" slot_id="data-security--privacy-what-regulatory-compliances-are-adobe-document-services-certified-for">

The current compliance certifications and attestations for PDF Services API are available at <a href="https://www.adobe.com/trust/compliance/compliance-list.html">https://www.adobe.com/trust/compliance/compliance-list.html</a>.

</AccordionItem>

<AccordionItem header="Can I use Adobe Acrobat Services in a web, mobile, or desktop application?" slot_id="data-security--privacy-can-i-use-adobe-document-services-in-a-web-mobile-or-desktop-application">

Embedding API credentials in a client application is insecure and could expose your credentials to malicious use by a 3rd party who could extract them from the source code and use the transactions in their own applications. To mitigate credential exposure in client applications, Acrobat Services API calls should be consumed via a proxy instead of a direct connection to our APIs.

</AccordionItem>

</Accordion>

## Features - PDF Embed API

<Accordion>

<AccordionItem header="Can I use Adobe Acrobat Sign with PDF Embed API?" slot_id="features---pdf-embed-api-can-i-use-adobe-acrobat-sign-with-pdf-embed-api">

Yes, you can publish or share PDFs online with PDF Embed API and have it signed with Acrobat Sign. See how in this article: <a href="https://medium.com/adobetech/how-to-preview-a-pdf-document-in-your-web-application-using-adobe-pdf-embed-api-and-then-sign-it-1b1c772c7760">https://medium.com/adobetech/how-to-preview-a-pdf-document-in-your-web-application-using-adobe-pdf-embed-api-and-then-sign-it-1b1c772c7760</a>.

</AccordionItem>

<AccordionItem header="Can we use PDF Embed API entirely disconnected from the internet?" slot_id="features---pdf-embed-api-can-we-use-pdf-embed-api-entirely-disconnected-from-the-internet">

No. While the API is entirely client-side JavaScript, the JavaScript library is hosted on Adobe.com and is not available to be hosted locally.

</AccordionItem>

<AccordionItem header="Is there any cost to using the PDF Embed API?" slot_id="features---pdf-embed-api-is-there-any-cost-to-using-the-pdf-embed-api">

No, the current services available in the PDF Embed API are free to use. This includes annotation tools, call back APIs, and events for Analytics.

</AccordionItem>

<AccordionItem header="How can I set up Adobe Analytics with PDF Embed API?" slot_id="features---pdf-embed-api-how-can-i-set-up-adobe-analytics-with-pdf-embed-api">

Yes, please check our documentation which explains how to set up integration with Adobe Analytics: <a href="https://experienceleague.adobe.com/docs/analytics.html">https://experienceleague.adobe.com/docs/analytics.html</a>.

</AccordionItem>

<AccordionItem header="For PDF Embed API, is it possible to map multiple un-related domains to the same client ID? I would like to use the same credentials across all of my domains." slot_id="features---pdf-embed-api-for-pdf-embed-api-is-it-possible-to-map-multiple-un-related-domains-to-the-same-client-id">

A single Client ID can be mapped to only one domain. You will need to generate a separate client ID for each domain.

However, a Client ID can be mapped to a domain, which can be used in different subdomains.

</AccordionItem>

<AccordionItem header="For PDF Embed API, is it possible to map multiple sub-domains to the same client ID?" slot_id="features---pdf-embed-api-for-pdf-embed-api-is-it-possible-to-map-multiple-sub-domains-to-the-same-client-id">

Yes. You can create a single client ID for the parent domain that contains all the sub-domains. However, our recommendation is to create separate credentials for each sub-domain

</AccordionItem>

<AccordionItem header="For PDF Embed API, I have mapped my domain but later realized the entry was incorrect. How can I update the domain from your portal?"
slot_id="features---pdf-embed-api-for-pdf-embed-api-i-have-mapped-my-domain-but-later-realized-the-entry-was-incorrect">

It is not possible to change the domain associated with a client ID. However, as a workaround, you can generate a new set of credentials and map it to the desired domain

</AccordionItem>

<AccordionItem header="For PDF Embed API, how many domains can I map to?" slot_id="features---pdf-embed-api-for-pdf-embed-api-how-many-domains">

You can create up to 20 mappings of client IDs to domains. However, with an Enterprise Terms License Agreement (ETLA), there are no limits.

</AccordionItem>

</Accordion>

## Features - PDF Services API

<Accordion>

<AccordionItem header="If I am currently a paid customer, will I have access to the new services in PDF Services API?" slot_id="features---pdf-services-api-if-i-am-currently-a-paid-customer-will-i-have-access">

Yes, all paid customers will have access to new services as they become available for the duration of your contract.

</AccordionItem>

<AccordionItem header="Can we use the HTML to PDF function without having to zip the HTML files?" slot_id="features---pdf-services-api-can-we-use-the-html-to-pdf-function">

Yes, Adobe PDF Services API supports the ability to generate from HTML to PDF based on a URL.

</AccordionItem>

<AccordionItem header="Does PDF services API support custom fonts?" slot_id="features---pdf-services-api-does-pdf-services-api-support-custom-fonts">

Adobe PDF Services API supports multiple fonts. If a font is not available on the services, then it may substitute the font during rendering.

If creating PDF documents from HTML, custom fonts can be included in the ZIP package and/or referenced in CSS.

Additional support for custom fonts is on the roadmap for conversion from Office file formats.

</AccordionItem>

<AccordionItem header="Can we create PDFs using HTML in multiple languages?" slot_id="features---pdf-services-api-can-we-create-pdfs-using-html">

Yes, it is possible to create a PDF from a HTML page that has multiple languages on there. Please refer to the documentation for a code sample on how to create PDF from a HTML URL: <a href="https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/create-pdf/#create-a-pdf-file-from-html-specified-via-url">https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/create-pdf/#create-a-pdf-file-from-html-specified-via-url</a>

</AccordionItem>

<AccordionItem header="How is PDF Services API different from PDF Library? Or from Acrobat DC SDK?" slot_id="features---pdf-services-api-how-is-pdf-services-api-different-from-pdf-library">

Adobe PDF Services API offers cloud-based APIs, whereas Acrobat DC SDK offers a set of desktop plug-ins that work in conjunction with desktop Acrobat. Each of your users will need a copy of Acrobat installed on their computers. The PDF Library SDK is a subset of the Acrobat DC SDK that can be used without the need for Acrobat.

</AccordionItem>

<AccordionItem header="What programming languages are supported?" slot_id="features---pdf-services-api-what-programming-languages-are-supported">

The PDF Services API is REST based so any language that supports HTTP is supported. SDKs are also available for Java, .NET, Node.js, and Python.

</AccordionItem>

<AccordionItem header="Can I run these Acrobat Services on-premise?" slot_id="features---pdf-services-api-can-i-run-these-document-services-on-premise">

Given that our service is cloud-based, processing will always happen in Adobe's cloud infrastructure. If an on-premise solution is required, please fill our our contact us form to discuss your options: <a href="https://developer.adobe.com/document-services/pricing/contact/sales">https://developer.adobe.com/document-services/pricing/contact/sales</a>

</AccordionItem>

<AccordionItem header="What file formats can I create a PDF?" slot_id="features---pdf-services-api-what-file-formats-can-i-create-a-pdf">

With PDF Services API, you can create a PDF from Microsoft Office 365 documents, as well as HTML pages and image files.

For more details, see Create PDF documentation: <a href="https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/create-pdf/">https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/create-pdf/</a>

</AccordionItem>

<AccordionItem header="Tracked changes and comment support. What happens to any tracked changes and comments in the DOC or DOCX files that are converted to PDF? Are they rendered in the finalized document, or are tracked changes first accepted/rejected, and are comments removed from the output?"
slot_id="features---pdf-services-api-tracked-changes-and-comment-support-what-happens-to-any-tracked-changes-and-comments-in-the-doc-or-docx-files">

The PDF will render to what is set in the Word file. For example, if the Word document is set up to show red lines, the converted PDF will show those red lines. Our APIs do not support executing reject/accept of changes.

</AccordionItem>

<AccordionItem header="Where can we learn more about your Power Automate connector?" slot_id="features---pdf-services-api-where-can-we-learn-more-about-your-power-automate-connector">

To learn more about using PDF Services API and Power Automate together, see this how to get started article: <a href="https://helpx.adobe.com/document-cloud/help/pdf-connector-for-microsoft-power-automate.html"> https://helpx.adobe.com/document-cloud/help/pdf-connector-for-microsoft-power-automate.html</a>
You can also watch this YouTube video: <a href="https://www.youtube.com/watch?v=H8Txc7Sa8Ts">https://www.youtube.com/watch?v=H8Txc7Sa8Ts</a>

</AccordionItem>

<AccordionItem header="Are there usage limitations associted with PDF Services API?" slot_id="features---pdf-services-api-are-there-usage-limitations-associted-with-pdf-services-api">

Yes. See usage limits in PDF Services API documentation: <a href="https://developer.adobe.com/document-services/docs/overview/pdf-services-api/dcserviceslicensing/#usage-limits">https://developer.adobe.com/document-services/docs/overview/pdf-services-api/dcserviceslicensing/#usage-limits</a>

There are also specific usage limitations for Document Generation API (<a href="https://developer.adobe.com/document-services/docs/overview/document-generation-api/quickstarts/#api-limitations">https://developer.adobe.com/document-services/docs/overview/document-generation-api/quickstarts/#api-limitations</a>) and for PDF Extract API (<a href="https://developer.adobe.com/document-services/docs/overview/pdf-extract-api/dcserviceslicensing/#usage-limits">https://developer.adobe.com/document-services/docs/overview/pdf-extract-api/dcserviceslicensing/#usage-limits</a>).

</AccordionItem>

</Accordion>

## Support

<Accordion>

<AccordionItem header="Can we continue to use older versions of the API?" slot_id="support-can-we-continue-to-use-older-versions-of-the-api">

See our policy on version support: <a href="https://opensource.adobe.com/pdftools-sdk-docs/release/latest/policies.html">https://opensource.adobe.com/pdftools-sdk-docs/release/latest/policies.html</a>

</AccordionItem>

<AccordionItem header="How do I get support for technical issues?" slot_id="support-how-do-i-get-support-for-technical-issues">

Customers with an Adobe Enterprise Term License Agreement (ETLA) have enterprise support and can file tickets via the Admin Console.

All other customers and trialists can leverage the Adobe Acrobat Services Community Forum: <a href="https://community.adobe.com/t5/document-services-apis/ct-p/ct-Document-Cloud-SDK">https://community.adobe.com/t5/document-services-apis/ct-p/ct-Document-Cloud-SDK</a>

</AccordionItem>

</Accordion>
