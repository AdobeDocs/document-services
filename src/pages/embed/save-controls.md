---
title: Adobe Developer — PDF Embed API  — save controls
---

<TextBlock slots="heading, text, buttons"  theme="dark" className='bgBlue'/>

##### SAVE CONTROLS


Support auto-save to local drives or external storage, with options for frequency and polling, along with success/fail events capture; use file modification and status polling events for multi-user workflows


- [See documentation](https://www.adobe.io/apis/documentcloud/dcsdk/docs.html?view=view)

<CodeBlock slots="heading, code" repeat="1" languages="JSON, CURL, JSON" />

#### JavaScript


```js
const saveOptions = {
  autoSaveFrequency: <Number, default=0>,
  enableFocusPolling: <Boolean, default=false>,
  showSaveButton: <Boolean, default=true>
}

adobeDCView.registerCallback(
  AdobeDC.View.Enum.CallbackType.SAVE_API,
  function(metadata, content, options) {
    return new Promise((resolve, reject) => {
      resolve({
        code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
        data: {
          metaData: <File MetaData>
        }
      });
    });
  }, 
saveOptions);
```


<TextBlock slots="buttons"  theme="dark" className='bgBlue'/>

- [Get free cretentials](https://www.adobe.io/apis/documentcloud/dcsdk/gettingstarted.html)