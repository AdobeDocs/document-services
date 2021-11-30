---
title: Adobe Developer — PDF Embed API  — pdf analytics
---



<TextBlock slots="heading, text, buttons"  theme="dark" hasCodeBlock className='bgBlue code-block-button-padding'/>

##### PDF ANALYTICS


Easily integrate Adobe Analytics with only a few steps, or leverage the user events to push data to other analytics tools


- [See documentation](/document-services/docs/overview/pdf-embed-api/howtodata/)

<CodeBlock slots="heading, code" repeat="1" languages="JSON, CURL, JSON" />

#### JavaScript


```js
adobeDCView.registerCallback(
  /* Type of call back */
  AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
  /* call back function */
  function(event) {
    console.log(event);
  },
  { enablePDFAnalytics: true }
);
```


<!-- <TextBlock slots="buttons"  theme="dark" className='bgBlue'/>

- [Get free cretentials](/src/pages/gettingstarted.md) -->