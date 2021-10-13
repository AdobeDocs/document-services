---
title: Adobe Developer — PDF Embed API  — annotations
---


<TextBlock slots="heading, text, buttons"  theme="dark" className='bgBlue'/>

##### ANNOTATIONS


Full support for import, create, delete, update, exporting of comments, and more; programmatically add, update, and delete annotations with the option to save; events can be triggered based on user actions


- [See documentation](https://www.adobe.io/apis/documentcloud/dcsdk/docs.html?view=view)

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

<TextBlock slots="buttons"  theme="dark" className='bgBlue'/>

- [Get free cretentials](https://www.adobe.io/apis/documentcloud/dcsdk/gettingstarted.html)