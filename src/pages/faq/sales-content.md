## Account Management

<Accordion>

<AccordionItem header="How do I see how many API transactions or calls I've used?" slot_id="account-management-how-do-i-see-how-many-api-transactions-or-calls-used">

For AWS Marketplace customers, you can login to your AWS account and visit billing dashboard to see your usage: <a href="<https://us-east-1.console.aws.amazon.com/billing>">https://us-east-1.console.aws.amazon.com/billing</a>
For Adobe Enterprise Terms Licensing Agreement (ETLA) customers, you will receive monthly emails on your usage.

</AccordionItem>

<AccordionItem header="My company has an existing Enterprise Agreement with Adobe. Can I use the same Adobe credentials for PDF Services API?" slot_id="account-managment-my-company-has-an-existing-enterprise-agreement-with-adobe">

Your Adobe Admin Console admin may have not provisioned your Enterprise ID to have access to PDF Services APIs. If your organization is a current subscriber to Adobe PDF Services API, contact your administrator.

If you are interested in using Adobe PDF Services API on a trial basis, consider using an Adobe ID (Personal) that is not tied to your enterprise ID.

</AccordionItem>

<AccordionItem header="Why do I have to use a personal account when setting up a trial or account? Why can't I use my company's existing enterprise email/account?" slot_id="account-management-why-i-do-have-to-use-a-personal-account-when-setting-up-a-trial-or-account">

Access to Adobe Acrobat Services APIs or SDKs is only available when it is attached to an Enterprise Term License Agreement (ETLA) and the organization's IT administrator has provisioned that user to have access to APIs. For this reason, if you are working on a trial basis, it may be easier and faster to use a personal email than your existing Adobe ID.

</AccordionItem>

<AccordionItem header="Where do I find my Client ID or API key?" slot_id="account-managment-where-do-i-find-my-client-id-or-api-key">

Your Client ID (also known as API key) is unique to your account and provided on the successful trial creation confirmation page. This is the "client_id" key used in the back-end code to make free trial calls against. You can always access your Client ID from your Adobe Developer Console: <a href="<https://console.adobe.io>">https://console.adobe.io</a>

</AccordionItem>

<AccordionItem header="How do I use my Adobe Acrobat Services credentials in Microsoft Power Automate, if I initially created them via AWS Marketplace?" slot_id="account-managment-how-do-i-use-my-adobe-acrobate-services-credentials-in-microsoft-power-automate">

For instructions on how to use your Adobe Acrobat Services credentials that were created in AWS Marketplace for use in Power Automate, please reference this step-by-step guide: <a href="<https://helpx.adobe.com/document-cloud/help/pdf-connector-for-microsoft-power-automate.html#pdf-services-with-aws>">https://helpx.adobe.com/document-cloud/help/pdf-connector-for-microsoft-power-automate.html#pdf-services-with-aws</a>

</AccordionItem>

<AccordionItem header="If I already have credentials and need new ones, how do I get them?" slot_id="account-managment-if-i-already-have-credentials-and-need-new-ones">

Both paid and trial customers can create new credentials, as well as edit existing credentials, by going to the Admin Console: <a href="<https://developer.adobe.com/console>">https://developer.adobe.com/console</a>

</AccordionItem>

<AccordionItem header="Can I continue using my same trial credentials (i.e. keys) when I have paid for Adobe Acrobat Services?" slot_id="account-managment-can-continue-using-my-same-trial-credentials">

You should not use your free trial credentials (Credential Key aka API Key) beyond your free trial.

When you start your Adobe Acrobat Services pay-as-you-go subscription via AWS Marketplace, you will receive new credentials to use for your paid plan. Note that your first 500 transactions or two weeks on the new AWS credential are complimentary--your card will be charged automatically after that. Furthermore, there can only be one active pay-as-you-go credential associated with an account.

In a similar fashion, Enterprise Term Licensing Agreement (ETLA) customers will want to exchange their free trial credentials with the new credentials provided alongside their ETLA plan.

</AccordionItem>

</Accordion>

## Billing

<Accordion>

<AccordionItem header="My company has an existing Enterprise Agreement with Adobe. Can I add PDF Services API to that existing agreement?" slot_id="billing-my-company-has-an-existing-emterprise-agreement-with-adobe">

Please contact your account representative to discuss your requirement. There is minimum threshold needs to be met for the Enterprise Agreement with Adobe PDF Services API.

</AccordionItem>

<AccordionItem header="How will I be billed through AWS?" slot_id="billing-how-will-i-billed-through-aws">

Customers are billed monthly by AWS in arrears for the number of Document Transactions (as defined here: <a href="<https://www.adobe.com/go/aws-docsvs-eula>">https://www.adobe.com/go/aws-docsvs-eula</a>) that have been used in that billing cycle. Specific form of payment can be determined in the AWS console. The number of Document Transactions depends on API calls plus document length for some actions as defined here in our licensing metrics page.

</AccordionItem>

<AccordionItem header="Is there a way to put a limit on my AWS Pay-As-You-Go usage. How can I ensure that some runaway process (or compromised credentials) are not running up the bill?" slot_id="billing-its-there-a-way-to-put-a-limit-on-my-aws-pay-as-you-go-usage">

Although there isn't a way to place limits for usage, there is an option to set up billing alerts through AWS. See: <a href="<https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html>">https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html</a>

</AccordionItem>

<AccordionItem header="When is payment due for an Adobe Enterprise Term License Agreement (ETLA)?" slot_id="billing-when-is-payment-due-for-an-adobe-enterprise-term-license-agreement">

Adobe ETLAs have a net 30-day payment term.

</AccordionItem>

<AccordionItem header="If an API action fails, does this count towards our quota?" slot_id="billing-id-an-api-action-fails-does-this-count-towards-our-quota">

No, it will not.

</AccordionItem>

</Accordion>

## Data Security & Privacy

<Accordion>

<AccordionItem header="What is Adobe doing to comply with GDPR?" slot_id="data-security-privacy-what-is-adobe-doing-to-comply-with-gdpr">

See what Adobe has done to prepare for GDPR: <a href="<https://business.adobe.com/privacy/general-data-protection-regulation.html>">https://business.adobe.com/privacy/general-data-protection-regulation.html</a>

Adobe complies with applicable laws regarding cross-border data transfers as outlined in greater detail at <a href="<https://www.adobe.com/privacy/eudatatransfers.html>">https://www.adobe.com/privacy/eudatatransfers.html</a>.

</AccordionItem>

<AccordionItem header="Can I use PDF Services API  for Sensitive Personal Data or PHI (Personal Health Information) data?" slot_id="data-security-privacy-can-i-use-pdf-services-for-sensitive-personal-data">

Currently, we do not support use of Document Cloud Services SDK to collect, process, or store sensitive personal data such as protected health information under HIPAA, children’s personal information under COPPA, and other similar information as described in our General Terms (<a href="<https://www.adobe.com/legal/terms/enterprise-licensing/overview.html>">https://www.adobe.com/legal/terms/enterprise-licensing/overview.html</a>) and and Developer Terms of Use (<a href="<https://wwwimages2.adobe.com/content/dam/cc/en/legal/servicetou/Adobe-Developer-Additional-Terms_en-US_20210125.pdf>">https://wwwimages2.adobe.com/content/dam/cc/en/legal/servicetou/Adobe-Developer-Additional-Terms_en-US_20210125.pdf</a>).

However, support for sensitive personal data is coming soon.

</AccordionItem>

<AccordionItem header="How does Adobe Acrobat Services use or store file content?" slot_id="data-security-privacy-how-does-acrobat-services-use-or-store-file-content">

Documents are only transferred to the cloud for processing. Adobe Acrobat Services cloud infrastructure does not store the document but retains the document for a maximum of 24 hours as part of the processing. Documents are never stored permanently.

</AccordionItem>

<AccordionItem header="How does Adobe Acrobat Services manage content and identity data?" slot_id="data-security-privacy-how-does-adobe-acrobate-services-manage-content-identity-data">

The geographic location of identity data is on the AWS network; stored in multi-region, load-balanced data centers located in Virginia (US-East). Identity data is replicated across all data centers.

Adobe complies with applicable laws regarding cross-border data transfers as outlined in greater detail at <a href="<https://www.adobe.com/privacy/eudatatransfers.html>">https://www.adobe.com/privacy/eudatatransfers.html</a>

You can also check out the Adobe Acrobat Services Security Overview: <a href="<https://www.adobe.com/content/dam/cc/en/security/pdfs/AdobeDocumentServices_SecurityOverview.pdf>">https://www.adobe.com/content/dam/cc/en/security/pdfs/AdobeDocumentServices_SecurityOverview.pdf</a>

</AccordionItem>

<AccordionItem header="Can you host my data in a specific region (e.g. the EU)?" slot_id="data-security-privacy-can-you-host-my-data-in-specific-region">

Currently, our data centers are in the United States. Adding data centers in EU is on our roadmap.

Adobe complies with applicable laws regarding cross-border data transfers as outlined in greater detail at <a href="<https://www.adobe.com/privacy/eudatatransfers.html>">https://www.adobe.com/privacy/eudatatransfers.html</a>.

</AccordionItem>

<AccordionItem header="What regulatory compliances does Adobe Acrobat Services provide?" slot_id="data-security-privacy-what-regulatory-compliances-does-adobe-acrobate-services-provide">

The current regulations and compliance for Adobe Acrobat Services include:

- SOC 2. This is a set of security principles that define leading practice controls relevant to security, confidentiality, and privacy. Adobe Document Cloud services are SOC 2 Type
 2 (security and availability) compliant.
- ISO 27001. This is a set of globally adopted standards that outline stringent security requirements and provide a systematic approach to managing the confidentiality, integrity, and availability of customer information. Adobe Document Cloud services are compliant with ISO 27001:2013.
- Full details are available at <a href="<https://www.adobe.com/trust/compliance/compliance-list.html>">https://www.adobe.com/trust/compliance/compliance-list.html</a>

Ultimately, customers are responsible for ensuring compliance with their legal obligations, and making sure that our solutions meet their compliance needs and are secured in an appropriate way.

</AccordionItem>

<AccordionItem header="How do I get a copy of Adobe's DPA?" slot_id="data-security-privacy-how-do-i-get-acopy-of-adobe-DBA">

To request a copy of our DPA, please contact our sales team for assistance at: <a href="<https://www.google.co.in/>">https://www.google.co.in/</a>

</AccordionItem>

<AccordionItem header="How can I stay updated on Adobe's Privacy Policy?" slot_id="data-security-privacy-how-can-i-stay-updated-on-adobe-privacy-policy">

See our latest privacy policy information at the Adobe Privacy Center: <a href="<https://www.adobe.com/privacy.html>">https://www.adobe.com/privacy.html</a>

</AccordionItem>

<AccordionItem header="Who can I contact with questions regarding Adobe's Privacy Policy?" slot_id="data-security-privacy-who-can-i-contact-with-questions-regarding-adobe">

If you have privacy questions related to Adobe Acrobat Services, please contact our sales team for assistance at: <a href="<https://developer.adobe.com/document-services/pricing/contact/sales>">https://developer.adobe.com/document-services/pricing/contact/sales</a>

</AccordionItem>

<AccordionItem header="We need to have an NDA in place before we can further discuss our plans to use Adobe PDF Service API. How can I get an NDA executed?" slot_id="data-security-privacy-how-can-i-get-an-nda-executed">

If you'd like to request an NDA, please contact our sales team for assistance at: <a href="<https://developer.adobe.com/document-services/pricing/contact/sales>">https://developer.adobe.com/document-services/pricing/contact/sales</a>

</AccordionItem>

<AccordionItem header="Where can I learn more about Adobe PDF Services API's security policies?" slot_id="data-security-privacy-where-can-i-learn-more-about-adobe-pdf-services-api-security-policies">

See the Adobe Trust Center (<a href="<https://www.adobe.com/trust.html>">https://www.adobe.com/trust.html</a>) and the Adobe Acrobat Services Security Overview (<a href="<https://www.adobe.com/content/dam/cc/en/security/pdfs/AdobeDocumentServices_SecurityOverview.pdf>">https://www.adobe.com/content/dam/cc/en/security/pdfs/AdobeDocumentServices_SecurityOverview.pdf</a>).

</AccordionItem>

</Accordion>

## Ordering

<Accordion>

<AccordionItem header="What payment plans does Adobe offer? Which payment plan is right for me?" slot_id="ordering-what-payment-plans-does-adobe-offer">

If you are just starting and have lower volume, or are unsure of what your annual volume will be, pay-as-you-go via AWS Marketplace is a great option, with a 5 cents/document transaction flat fee.

If you have a large annual volume, at least 500,000 document transactions, an Enterprise Term License Agreement will likely be the better plan for you. Please fill out our contact us form <a href="<https://developer.adobe.com/document-services/pricing/contact/sales>">https://developer.adobe.com/document-services/pricing/contact/sales</a> and connect with our expert sales team to get a quote.

See additional information here: <a href="<https://developer.adobe.com/document-services/pricing/>">https://developer.adobe.com/document-services/pricing/</a>

</AccordionItem>

<AccordionItem header="How do I buy Adobe Acrobat Services?" slot_id="ordering-how-do-i-buy-adobe-acrobat-services">

There are two ways you can buy Adobe Acrobat Services:

(1) U.S. listing: <a href="<https://aws.amazon.com/marketplace/pp/prodview-wzykfz2grnbdk> ">https://aws.amazon.com/marketplace/pp/prodview-wzykfz2grnbdk</a>

(2) International listing: <a href="<https://aws.amazon.com/marketplace/pp/prodview-g2ikxe6zxsi64>">https://aws.amazon.com/marketplace/pp/prodview-g2ikxe6zxsi64</a> and
<a href="<https://developer.adobe.com/document-services/pricing/contact/sales>">https://developer.adobe.com/document-services/pricing/contact/sales</a>

</AccordionItem>

<AccordionItem header="I started my Adobe Acrobat Services trial via Power Automate. Can I buy Adobe Acrobat Services on Power Automate too?" slot_id="ordering-i-started-my-adobe-acrobat-services-trial-via-power-automate">

At this time, you can only buy Adobe Acrobat Services via:
(1) U.S. listing: <a href="<https://aws.amazon.com/marketplace/pp/prodview-wzykfz2grnbdk>">https://aws.amazon.com/marketplace/pp/prodview-wzykfz2grnbdk</a>

(2) International listing : <a href="<https://aws.amazon.com/marketplace/pp/prodview-g2ikxe6zxsi64>">https://aws.amazon.com/marketplace/pp/prodview-g2ikxe6zxsi64</a> and <a href="<https://developer.adobe.com/document-services/pricing/contact/sales>">https://developer.adobe.com/document-services/pricing/contact/sales</a>

</AccordionItem>

<AccordionItem header="I'm currently on a AWS pay-as-you-go plan, but would like to switch to ETLA. How do I that?" slot_id="ordering-im-currently-on-a-aws-pay-as-you-go-plan">

Contact our sales representative by filling out our contact us form: <a href="<https://developer.adobe.com/document-services/pricing/contact/sales>">https://developer.adobe.com/document-services/pricing/contact/sales</a>

</AccordionItem>

<AccordionItem header="What countries can I buy PDF Services API pay-as-you-go on AWS Marketplace?" slot_id="ordering-what-countries-can-i-buy-pdf-services-api-pay-as-you-go-on-aws-marketplace">

India, Indonesia, Canada, Malaysia, South Africa, Japan, Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Isle of Man, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, and UK.

For the latest list, see: <a href="<https://developer.adobe.com/document-services/docs/overview/pdf-services-api/awsmarketplace/>">https://developer.adobe.com/document-services/docs/overview/pdf-services-api/awsmarketplace/</a>

</AccordionItem>

<AccordionItem header="Can I buy PDF Services API via a reseller?" slot_id="ordering-can-i-buy-pdf-services-api-via-a-reseller">

No. The two ways you can buy PDF Services API are via:
(1) Pay-as-you-go via AWS Marketplace
(2) Volume pricing via an Adobe Enterprise Term License Agreement (ETLA)

For more details, see our pricing page: <a href="<https://developer.adobe.com/document-services/pricing/>">https://developer.adobe.com/document-services/pricing/</a>

</AccordionItem>

<AccordionItem header="Can I buy PDF Services API transactions via the Microsoft PowerAutomate connectors?" slot_id="ordering-can-i-buy-pdf-services-api-transactions-via-the-microsoft-power-automate-connectors">

You can try PDF Services API via Microsoft PowerAutomate connector. However, at this time to buy you would choose between pay-as-you-go (via AWS Marketplace) or volume pricing (via an enterprise agreement directly with Adobe).

</AccordionItem>

</Accordion>

## Pricing

<Accordion>

<AccordionItem header="How much does PDF Services API cost?" slot_id="pricing-how-much-does-pdf-services-api-cost">

That standard pricing for our API service is US$0.05 (that's 5 cents) per Document Transaction, which is based on the initial endpoint request (i.e., API call) and the digital output.

For more details and examples of how to calculate document transactions, please see: <a href="<https://developer.adobe.com/document-services/docs/overview/pdf-services-api/dcserviceslicensing/>">https://developer.adobe.com/document-services/docs/overview/pdf-services-api/dcserviceslicensing/</a>

Volume pricing is available. You may contact our sales team for a quote at: <a href="<https://developer.adobe.com/document-services/pricing/contact/sales>">https://developer.adobe.com/document-services/pricing/contact/sales</a>

</AccordionItem>

<AccordionItem header="Does Adobe offer any discounts for PDF Services API?" slot_id="pricing-does-adobe-offer-any-discussion-for-pdf-services-api">

Volume pricing is available for annual usage exceeding 500,000 Document Transactions. See how document transactions are calculated here: <a href="<https://developer.adobe.com/document-services/docs/overview/pdf-services-api/dcserviceslicensing/>">https://developer.adobe.com/document-services/docs/overview/pdf-services-api/dcserviceslicensing/</a>

For a quote, you can contact our sales team at: <a href="<https://developer.adobe.com/document-services/pricing/contact/sales>">https://developer.adobe.com/document-services/pricing/contact/sales</a>

</AccordionItem>

<AccordionItem header="Do non-profits receive special pricing?" slot_id="pricing-do-non-profits-recevie-special-pricing">

Volume pricing is available for annual usage exceeding 500,000 Document Transactions. See how document transactions are calculated here: <a href="<https://developer.adobe.com/document-services/docs/overview/pdf-services-api/dcserviceslicensing/>">https://developer.adobe.com/document-services/docs/overview/pdf-services-api/dcserviceslicensing/</a>

For a quote, you can contact our sales team at: <a href="<https://developer.adobe.com/document-services/pricing/contact/sales>">https://developer.adobe.com/document-services/pricing/contact/sales</a>

</AccordionItem>

<AccordionItem header="Do academic institutions receive special pricing?" slot_id="pricing-do-acadamic-institutions-receive-special-pricing">

Volume pricing is available for annual usage exceeding 500,000 Document Transactions. See how document transactions are calculated here: <a href="<https://developer.adobe.com/document-services/docs/overview/pdf-services-api/dcserviceslicensing/>">https://developer.adobe.com/document-services/docs/overview/pdf-services-api/dcserviceslicensing/</a>

For a quote, you can contact our sales team at: <a href="<https://developer.adobe.com/document-services/pricing/contact/sales>">https://developer.adobe.com/document-services/pricing/contact/sales</a>

</AccordionItem>

<AccordionItem header="Do government institutions receive special pricing?" slot_id="pricing-do-government-institutions-receive-special-pricing">

Volume pricing is available for annual usage exceeding 500,000 Document Transactions. See how document transactions are calculated here: <a href="<https://developer.adobe.com/document-services/docs/overview/pdf-services-api/dcserviceslicensing/>">https://developer.adobe.com/document-services/docs/overview/pdf-services-api/dcserviceslicensing/</a>

For a quote, you can contact our sales team at: <a href="<https://developer.adobe.com/document-services/pricing/contact/sales>">https://developer.adobe.com/document-services/pricing/contact/sales</a>

</AccordionItem>

</Accordion>

## Support

<Accordion>

<AccordionItem header="What support comes with an ETLA subscription of PDF Services API?" slot_id="pricing-what-support-comes-with-an-ETLA-subscription-of-pdf-services-API">

Customers with an Adobe Enterprise Term License Agreement (ETLA) receive enterprise support and can submit support tickets via the Support Tab in the Admin Console: <a href="<https://helpx.adobe.com/enterprise/using/support-and-expert-services.html>">https://helpx.adobe.com/enterprise/using/support-and-expert-services.html</a>

</AccordionItem>

<AccordionItem header="What support comes with AWS PAYG subscription of PDF Services API?" slot_id="pricing-what-support-comes-with-aws-payg-subscriptions-of-pdf-services-api">

Customers with a Pay-As-You-Go subscription via AWS Marketplace can leverage the online community forum for support: <a href="<https://community.adobe.com/t5/document-services-apis/ct-p/ct-Document-Cloud-SDK>">https://community.adobe.com/t5/document-services-apis/ct-p/ct-Document-Cloud-SDK</a>

</AccordionItem>

</Accordion>

## Trials

<Accordion>

<AccordionItem header="What trial does Adobe offer for PDF Services API?" slot_id="trials-what-trial-does-adobe-offer-for-pdf-services-api">

The free trial program for the Adobe PDF Services API provides credentials that enable the processing of 1,000 Document Transactions or use of the service for six months, whichever is earlier, so that you can test and validate the features included in the API.

</AccordionItem>

<AccordionItem header="Can I extend my trial of PDF Services API?" slot_id="trials-can-i-extend-my-trial-of-pdf-services-api">

Trial extensions can be granted at Adobe's discretion. If you'd like to request a trial extension, fill out the contact us form: <a href="<https://developer.adobe.com/document-services/pricing/contact/sales>">https://developer.adobe.com/document-services/pricing/contact/sales</a>

</AccordionItem>

<AccordionItem header="What happens after I use up my free trial quota?" slot_id="trials-what-happens-after-i-use-up-my-free-trial-quota">

You will be notified before you reach the limits of the free trial quota. But at any point during the trial, you can meet with an Adobe representative who can answer questions about the trial and how to convert to a commercial agreement using paid credentials. You can also directly subscribe for a pay-as-you-go plan via AWS Marketplace.

</AccordionItem>

</Accordion>

<!-- Todo change https://www.google.co.in/ change that link -->
