---
title: Automate Document Generation | Contract Generation
description: Automatically generate custom branded sales proposals, legal contracts, and invoices from Word templates and your dynamic data. Learn more today.
---

import DgDownloadSample from './doc-generation/dg-download-sample'
import DgUseCaseDocServiceAPI from './doc-generation/dg-use-case-doc-service-api'
import DgStartModifyingTitle from './doc-generation/dg-start-modifying-pdf.md'
import DgWhyDocTitle from './doc-generation/dg-why-doc-gen-api.md'
import DgKeyFeatures from './doc-generation/dg-key-features.md'
import DgExploreOtherAdobeDoc from './doc-generation/dg-explore-other-adobe-doc.md'
import AwsUipathCarousel from './doc-generation/aws-uipath-carousel.md'
import {MobileOptimize} from '../../components/mobileOptimize'
import {AdobeMsBlade} from '../../components/adobeMicrosoftBlade'
import '../../styles/doc-generation.css'
import {APIPixelRetargeting} from '../../components/retargetting'
import {NewsLetterBlade} from '../../components/news-letter-blade';


<Hero slots="heading, text, assetsImg, buttons" customLayout variant="fullwidth" className="herobgImage Hero-Banner"/>

# Adobe Document Generation API

Generate PDF and Word documents from Word templates and JSON data.

apiHeroAssetImg doc-gen-invoice

- [Try the demo](https://adobe.com/go/dcdocgen_api_demo)


<!-- Why Document Generation API -->

<WrapperComponent slots="content" repeat="1" theme="lightest" className="Why-Document-Generation-API"/>

<DgWhyDocTitle/>

<TextBlock slots="buttons" isCentered theme="lightest" className="padding-top-zero why-doc-get-started-btn Why-Document-Generation-API" primaryOutline/>

- [Start free trial](https://documentcloud.adobe.com/dc-integration-creation-app-cdn/main.html?api=document-generation-api)

<!-- Key Features of Adobe Document Generation API -->
<WrapperComponent slots="content" repeat="1" theme="light" className="Key-features-of-Adobe-Document-Generation-API"/>

<DgKeyFeatures/>

<TextBlock slots="buttons" isCentered theme="light" className="Key-features-of-Adobe-Document-Generation-API padding-top-zero why-doc-get-started-btn"/>

- [Start free trial](https://documentcloud.adobe.com/dc-integration-creation-app-cdn/main.html?api=document-generation-api)

<AwsUipathCarousel />


<!-- <MobileOptimize/> -->

<!-- Download Sample Templates and Data to Get Started -->

<WrapperComponent slots="content" repeat="1" theme="lightest" className="Download-sample-templates-and-data-to-get-started"/>

<DgDownloadSample/>

<TextBlock slots="buttons" width="100%" theme="lightest"  isCentered variantsTypePrimary='primary' isPrimaryBtn primaryOutline className="padding-5 ms-word-add-in-title Download-sample-templates-and-data-to-get-started"  />

 - [See all templates](./doc-gen-api-template.md)


<!--  Start Modifying PDFs in a few Minutes -->
<WrapperComponent slots="content" theme="light" className="Get-started-in-minutes"/>

<DgStartModifyingTitle/>

<!-- Use case for Document Services API -->
<WrapperComponent slots="content" repeat="1" theme="lightest" className="Use-cases-for-Document-Generation-API"/>

<DgUseCaseDocServiceAPI className="Use-cases-for-Document-Generation-API"/>

<TextBlock slots="buttons" theme="lightest" isCentered className="padding-5 Use-cases-for-Document-Generation-API"/>

- [View all use cases](/src/pages/use-cases/agreements-and-contracts/sales-proposals-and-contracts/)

<!-- Explore other Adobe Document Cloud services -->

<WrapperComponent slots="content" repeat="1" theme="light" className="Explore-other-Adobe-Document-Services-APIs"/>
<DgExploreOtherAdobeDoc/>

<NewsLetterBlade className="news-letter"/>

<!-- Summary Block -->
<SummaryBlock slots="image, heading, text, buttons" theme="lightest" background="white" className="We-are-ready-to-help" />

![summary block bg img](../images/bg-hero.jpeg)

### We're ready to help

Have questions about the Document Services APIs?

- [Go to the Adobe Forum](https://www.adobe.com/go/pdftoolsapi_forum)
- [Contact us](../pricing/contacts.md)

<APIPixelRetargeting/>