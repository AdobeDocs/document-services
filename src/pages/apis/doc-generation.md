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
import {MobileOptimize} from '../../components/mobileOptimize'
import {AdobeMsBlade} from '../../components/adobeMicrosoftBlade'
import '../../styles/doc-generation.css'

<Hero slots="heading, text, assetsImg, buttons" customLayout variant="fullwidth" className="herobgImage"/>

# Adobe Document Generation API

Generate PDF and Word documents from Word templates and JSON data.

apiHeroAssetImg doc-gen-invoice

- [Try the demo](https://adobe.com/go/dcdocgen_api_demo)


<!-- Why Document Generation API -->

<WrapperComponent slots="content" repeat="1" theme="lightest"/>

<DgWhyDocTitle/>

<TextBlock slots="buttons" isCentered theme="lightest padding-top-zero why-doc-get-started-btn" primaryOutline/>

- [Start free trial](https://dc.stage.acrobat.com/dc-integration-creation-app-cdn/index.html?api=document-generation-api)

<!-- Key Features of Adobe Document Generation API -->
<WrapperComponent slots="content" repeat="1" theme="light"/>

<DgKeyFeatures/>

<TextBlock slots="buttons" isCentered theme="light padding-top-zero why-doc-get-started-btn"/>

- [Start free trial](https://dc.stage.acrobat.com/dc-integration-creation-app-cdn/index.html?api=document-generation-api)

<AdobeMsBlade/>

<!-- Use case for Document Services API -->
<WrapperComponent slots="content" repeat="1" theme="lightest"/>

<DgUseCaseDocServiceAPI/>

<TextBlock slots="buttons" theme="lightest" isCentered className="padding-5"/>

- [View all use cases](/src/pages/use-cases/agreements-and-contracts/sales-proposals-and-contracts/)

<MobileOptimize/>

<!-- Download Sample Templates and Data to Get Started -->

<WrapperComponent slots="content" repeat="1" theme="light"/>

<DgDownloadSample/>

<TextBlock slots="buttons" theme="light" isCentered className='ms-word-add-in-title'/>

- [See all templates](./doc-gen-api-template.md)


<!--  Start Modifying PDFs in a few Minutes -->
<WrapperComponent slots="content" theme="lightest"/>

<DgStartModifyingTitle/>


<!-- Explore other Adobe Document Cloud services -->

<WrapperComponent slots="content" repeat="1" theme="light"/>
<DgExploreOtherAdobeDoc/>

<!-- Summary Block -->
<SummaryBlock slots="image, heading, text, buttons" theme="lightest" background="white"/>

![summary block bg img](../images/bg-hero.jpeg)

### We're ready to help

Have questions about the Document Services APIs?

- [Go to the Adobe Forum](https://www.adobe.com/go/pdftoolsapi_forum)
- [Contact us](../pricing/contact.md)
