---
title: PDF Embed API | Embed PDF in HTML | Adobe Acrobat Services
description: Adobe PDF Embed API is a free JavaScript library that allows you to quickly and easily embed PDFs in web applications with only a few lines of code. Learn more now.
---

import EmbedModes from './pdf-embed/embed-modes.md';
import Annotations from './pdf-embed/annotations.md';
import PDFAnalytics from './pdf-embed/pdf-Analytics';
import Collaborative from './pdf-embed/collaborative-settings.md';
import SaveControls from './pdf-embed/save-controls.md';
import MenuTool from './pdf-embed/menu-tool-options';
import UseCase from './pdf-embed/use-case.md';
import StartEmbedding from './pdf-embed/start-embedding.md';
import WhyPdfEmbed from './pdf-embed/why-pdf-embed.md';
import KeyFeatures from './pdf-embed/key-features.md'
import ExploreAdobe from './pdf-embed/explore-adobe.md'
import Integration from './pdf-embed/integration.md'
import {APIPixelRetargeting} from '../../components/retargetting'
import {NewsLetterBlade} from '../../components/news-letter-blade';

<Hero slots="heading, text, assetsImg, buttons" customLayout variant="fullwidth" className="herobgImage Hero-Banner"/>

# Adobe PDF Embed API

Free JavaScript API to embed high-fidelity PDFs, enable collaboration, and see analytics.

apiHeroAssetImg doc-embed-hero

- [Try the demo](https://documentservices.adobe.com/view-sdk-demo/index.html)

<WrapperComponent slots="content" theme="light" className="WhyPdfEmbed"/>

<WhyPdfEmbed />

<SummaryBlock slots="heading, buttons" background="rgb(31, 42, 73)" buttonPositionRight  className="embed-key-features"/>

### Key features of our free PDF Embed API

- [Get free credentials](/document-services/apis/interstitial/?api=pdf-embed-api)

<TabsBlock orientation="vertical" slots="heading, image, content"  repeat="6" theme="dark"  className='bgBlue code-block-0 embed-key-features embed-key-features-code-block' />

### Embed Modes

![EMPTY_ALT](../images/embed.svg)

<EmbedModes />

### Annotation

![EMPTY_ALT](../images/annotations.svg)

<Annotations />

### PDF Analytics

![EMPTY_ALT](../images/analytics-green.svg)

<PDFAnalytics />

### Collaborative Settings

![EMPTY_ALT](../images/collaborative_settings.svg)

<Collaborative />

### Save Controls

![EMPTY_ALT](../images/save_control.svg)

<SaveControls />

### Menu & Tool Options

![EMPTY_ALT](../images/menu_tool_options.svg)

<MenuTool />

<WrapperComponent slots="content" theme="lightest" className="integration-with-adobe"/>

<Integration />

<WrapperComponent slots="content" theme="light" className="start-modifying-pdf"/>

<StartEmbedding/>

<WrapperComponent slots="content" theme="lightest" className="Use-cases-for-PDF-services-API"/>

<UseCase />

<TextBlock slots="buttons" isCentered theme="lightest" className='padding-5 Use-cases-for-PDF-services-API'/>

- [View all use cases](/src/pages/use-cases/agreements-and-contracts/sales-proposals-and-contracts/)

<WrapperComponent slots="content" theme="light" className="other-Adobe-Document-Services-APIs"/>

<ExploreAdobe />

<NewsLetterBlade className="news-letter"/>

<SummaryBlock slots="heading, text, buttons" theme="lightest" background="white" className="How-to-get-started"/>

### We're ready to help

Have questions about the Acrobat Services APIs?

- [Go to the Adobe Forum](https://www.adobe.com/go/pdftoolsapi_forum)
- [Contact us](../pricing/contact.md)

<APIPixelRetargeting/>
