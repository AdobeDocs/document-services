## Account Management

<Accordion>

<AccordionItem header="How do I see how many API transactions or calls I've used?" slot_id="account-management-how-do-i-see-how-many-api-transactions-or-calls-used">

For Adobe Enterprise Terms Licensing Agreement (ETLA) customers, you will receive monthly emails on your usage.

</AccordionItem>

<AccordionItem header="My company has an existing Enterprise Agreement with Adobe. Can I use the same Adobe credentials for PDF Services API?" slot_id="account-managment-my-company-has-an-existing-enterprise-agreement-with-adobe">

Your Adobe Admin Console admin may have not provisioned your Enterprise ID to have access to PDF Services APIs. If your organization is a current subscriber to Adobe PDF Services API, contact your administrator.

If you are interested in using Adobe PDF Services API on a trial basis, consider using an Adobe ID (Personal) that is not tied to your enterprise ID.

</AccordionItem>

<AccordionItem header="Why do I have to use a personal account when setting up a Free Tier or account? Why can't I use my company's existing enterprise email/account?" slot_id="account-management-why-i-do-have-to-use-a-personal-account-when-setting-up-a-free-tier-or-account">

Access to Adobe Acrobat Services APIs or SDKs is only available when it is attached to an Enterprise Term License Agreement (ETLA) and the organization's IT administrator has provisioned that user to have access to APIs. For this reason, if you are using the Free Tier, it may be easier and faster to use a personal email than your existing Adobe ID.

</AccordionItem>

<AccordionItem header="Where do I find my Client ID or API key?" slot_id="account-managment-where-do-i-find-my-client-id-or-api-key">

Your Client ID (also known as API key) is unique to your account and provided on the successful trial creation confirmation page. This is the "client_id" key used in the back-end code to make free tier calls against. You can always access your Client ID from your Adobe Developer Console: <a href="<https://console.adobe.io>">https://console.adobe.io</a>

</AccordionItem>

<AccordionItem header="If I already have credentials and need new ones, how do I get them?" slot_id="account-managment-if-i-already-have-credentials-and-need-new-ones">

Both paid and trial customers can create new credentials, as well as edit existing credentials, by going to the Admin Console: <a href="<https://developer.adobe.com/console>">https://developer.adobe.com/console</a>

</AccordionItem>

<AccordionItem header='Can I continue using my same Free Tier credentials when I pay for Adobe Acrobat Services?' slot_id="account-management-can-i-continue-using-my-same-free-tier-credentials">

You should not use your Free Tier credentials (Credential Key aka API Key) outside the Free Tier.

When you start your Enterprise Term Licensing Agreement (ETLA), you will receive & create new credentials under your ETLA ORG–you will want to exchange your free tier credentials with those new ETLA credentials.

</AccordionItem>

</Accordion>

## Billing

<Accordion>

<AccordionItem header="My company has an existing Enterprise Agreement with Adobe. Can I add PDF Services API to that existing agreement?" slot_id="billing-my-company-has-an-existing-emterprise-agreement-with-adobe">

Please contact your account representative to discuss your requirement. There is minimum threshold needs to be met for the Enterprise Agreement with Adobe PDF Services API.

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

<AccordionItem header="What payment plans does Adobe offer? Which payment plan is right for me?" slot_id="which_payment_plan_is_right_for_me">

At this moment, an Enterprise Term License Agreement (ETLA) is the only way to purchase our APIs. Please fill out our  <a href="https://developer.adobe.com/document-services/pricing/contact/sales/">contact us form</a> and connect with our expert sales team to get a quote.

See additional information here: <a href="<https://developer.adobe.com/document-services/pricing/>">https://developer.adobe.com/document-services/pricing/</a>

</AccordionItem>

<AccordionItem header="Can I buy PDF Services API via a reseller?" slot_id="ordering-can-i-buy-pdf-services-api-via-a-reseller">

No. The only way you can buy PDF Services API is via an Adobe Enterprise Term License Agreement (ETLA)

For more details, see our pricing page: <a href="<https://developer.adobe.com/document-services/pricing/>">https://developer.adobe.com/document-services/pricing/</a>

</AccordionItem>

<AccordionItem header="Can I buy PDF Services API transactions via the Microsoft PowerAutomate connectors?" slot_id="ordering-can-i-buy-pdf-services-api-transactions-via-the-microsoft-power-automate-connectors">

You can try PDF Services API via Microsoft PowerAutomate connector. However, at this time to buy you would choose volume pricing via an enterprise agreement directly with Adobe.

</AccordionItem>

</Accordion>

## Pricing

<Accordion>

<AccordionItem header="How much does PDF Services API cost?" slot_id="pricing-how-much-does-pdf-services-api-cost">

Please contact our sales team for a quote at: <a href="https://developer.adobe.com/document-services/pricing/contact/sales">https://developer.adobe.com/document-services/pricing/contact/sales</a>.

For details and examples on how to calculate the document transactions required, please see: <a href="https://developer.adobe.com/document-services/docs/overview/pdf-services-api/dcserviceslicensing/">https://developer.adobe.com/document-services/docs/overview/pdf-services-api/dcserviceslicensing/</a>.

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

</Accordion>

<!-- Todo change https://www.google.co.in/ change that link -->
