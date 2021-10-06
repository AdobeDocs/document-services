---
title: Adobe Developer — PDF Embed API  — Collaborative settings
---

<TextBlock slots="heading, text, buttons"  theme="dark" className='bgBlue'/>

##### COLLABORATIVE SETTINGS



For multi-user document collaboration, identify reviewers by name or email address and save annotation settings through custom callbacks (default settings display GUEST as the reviewer name for all comments)




- [See documentation](https://www.adobe.io/apis/documentcloud/dcsdk/docs.html?view=view)

<CodeBlock slots="heading, code" repeat="1" languages="JSON, CURL, JSON" />

#### JavaScript


```js
const profile = {
  userProfile: {
    name: '',
    firstName: '',
    lastName: '',
    email: ''
  }
};

adobeDCView.registerCallback(
  AdobeDC.View.Enum.CallbackType.GET_USER_PROFILE_API,
  function() {
    return new Promise((resolve, reject) => {
      resolve({
        code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
        data: profile
    });
  });
  }
);
```

<TextBlock slots="buttons"  theme="dark" className='bgBlue'/>

- [Get free cretentials](https://www.adobe.io/apis/documentcloud/dcsdk/gettingstarted.html)