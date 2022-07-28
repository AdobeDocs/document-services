---
title: Adobe Developer — PDF Embed API  — menu & tool options
---

<TextBlock slots="heading, text, buttons"  theme="dark" hasCodeBlock className='bgBlue code-block-button-padding'/>

##### MENU & TOOL OPTIONS

Programmatically enable or disable the comments pane, toolbars, print, and download options


- [See documentation](/document-services/docs/overview/pdf-embed-api/howtos_ui/#menu-and-tool-options)

<CodeBlock slots="heading, code" repeat="1" languages="JSON, CURL, JSON" />

#### HTML

```html
<div id="adobe-dc-view"></div>
<script src="https://documentcloud.adobe.com/view-sdk/viewer.js"></script>
<script type="text/javascript">
  document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view"});
    adobeDCView.previewFile({
      content:{location: {url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf"}},
      metaData:{fileName: "Bodea Brochure.pdf"}
    }, {"showAnnotationTools": true, "showDownloadPDF": false});
  });
</script>
```

<!--
<TextBlock slots="buttons"  theme="dark" className='bgBlue'/>

- [Get free cretentials](/src/pages/gettingstarted.md) -->