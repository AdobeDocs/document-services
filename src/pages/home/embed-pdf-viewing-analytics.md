---
title: Adobe Developer — SDK Developer Kit | PDF Library | Embed PDF Viewing Analytics
description: Own the end-to-end customer experience. Our SDK Developer kits are customizable & built to last. Find an innovative solution with our PDF SDK here.
---

<TextBlock slots="heading, buttons, text" theme="dark" className="bgBlue showMobileView"/>

##### Embed PDF for viewing and analytics

- [See documentation](/document-services/docs/overview/)

Embed PDF for viewing and analytics, including static and dynamic HTML; Microsoft Word, PowerPoint, and Excel; as well as text, image, and, Zip


<CodeBlock slots="heading, code" repeat="1" languages="html" />

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