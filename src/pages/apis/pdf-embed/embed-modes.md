---
title: Adobe Developer — PDF Embed API  — Embed modes
---

<TextBlock slots="heading, text, buttons"  theme="dark" hasCodeBlock className='bgBlue code-block-button-padding'/>

##### EMBED MODES



Control how you embed PDFs, with support for full-sized windows, sized containers, in-line display, and lightboxes

- [See documentation](/document-services/docs/overview/pdf-extract-api/)

<CodeBlock slots="heading, code" repeat="1" languages="JSON, CURL, JSON" />

#### HTML

```html
<div id="adobe-dc-view" style="height: 360px; width: 500px;"></div>
<script src="https://documentcloud.adobe.com/view-sdk/main.js"></script>
<script type="text/javascript">
  document.addEventListener("adobe_dc_view_sdk.ready", function(){
    var adobeDCView = new AdobeDC.View({clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view"});
    adobeDCView.previewFile({
      content:{ location:
        { url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf"}},
      metaData:{fileName: "Bodea Brochure.pdf"}
    },
    {
      embedMode: "SIZED_CONTAINER"
    });
  });
</script>
```


<!-- <TextBlock slots="buttons"  theme="dark" className='bgBlue'/>

- [Get free cretentials](/src/pages/gettingstarted.md) -->