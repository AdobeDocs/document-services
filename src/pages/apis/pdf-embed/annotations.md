---
title: Adobe Developer — PDF Embed API  — annotations
---


<TextBlock slots="heading, text, buttons"  theme="dark" className='bgBlue code-block-button-padding'/>

##### ANNOTATIONS


Full support for import, create, delete, update, exporting of comments, and more; programmatically add, update, and delete annotations with the option to save; events can be triggered based on user actions


- [See documentation](/document-services/docs/overview/pdf-extract-api/)

<CodeBlock slots="heading, code" repeat="1" languages="JSON, CURL, JSON" />

#### JavaScript


```js
document.addEventListener("adobe_dc_view_sdk.ready", function() {
  var adobeDCView = new AdobeDC.View({clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view"});
  adobeDCView.previewFile({
    content: {location: {url: "(path to your PDF)/yourfilename.pdf"}},
    metaData: {fileName: "yourfilename.pdf"}
  },
  {showAnnotationTools: true});
});
```

<!-- <TextBlock slots="buttons"  theme="dark" className='bgBlue'/>

- [Get free cretentials](/src/pages/gettingstarted.md) -->