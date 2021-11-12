---
title: Adobe Developer — DC Platform SDK Resources
---
import '../styles/developer-resource.css'

import CustomerStory from './resources/storyies.md'
import {DynamicContentLoader} from '../components/dynamicContentLoader'

<Hero slots="heading, text" variant="fullwidth" theme="lightest" customLayout/>

# Developer Resources

Start integrating our APIs into your solutions

<DynamicContentLoader theme="lightest" content='usingAdobePDFService' />


<DynamicContentLoader theme="lightest" content='feature' api="https://experienceleague.adobe.com/api/articles?Solution=Document%20Services&Tags=Featured&page_size=3"/>

<DynamicContentLoader theme="lightest" content='tutorial' api="https://experienceleague.adobe.com/api/articles?Solution=Document%20Services&Tags=Tutorial&page_size=8"/>

<DynamicContentLoader theme="lightest" content='blog' api="https://www.feedrapp.info/?support=false&version=1.3.0&q=https%3A%2F%2Fmedium.com%2Ffeed%2Fadobetech%2Ftagged%2Fadobe-document-cloud&num=3"/>


<WrapperComponent slots="content" theme="lightest" enableMaxWidth/>

<CustomerStory/>

<SummaryBlock slots=" heading, text, buttons"  theme='lightest' className="vertical-padding" enableMaxWidth/>

### We're ready to help

Have questions about the Document Services APIs?

* [Go to the Adobe Forum](https://www.adobe.com/go/pdftoolsapi_forum)
* [Contact us](./contact-us.md)
