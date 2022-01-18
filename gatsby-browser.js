/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const isBrowser = typeof window !== "undefined";

export const onClientEntry = () => {
  if(isBrowser){
    window.digitalData = window.digitalData || {};
    window.digitalData = {
      page : {
        pageInfo : {
          siteSection : '',
          template : '',
          language: 'en-us',
          geoRegion: '',
          issueDate: '',
          breadCrumbs: []
        }
      }
    }

    window.onload = () => {
      window.digitalData.page.pageInfo.breadCrumbs = [];
      document.querySelectorAll('.spectrum-Breadcrumbs-item').forEach((item) => {
        window.digitalData.page.pageInfo.breadCrumbs.push(item.innerText);
      });
    }
  }

}

export const onRouteUpdate = ({ location, prevLocation }) => {
  if(isBrowser) {
    let siteSection = location.pathname.split('/');
    window.digitalData.page.pageInfo.siteSection = siteSection.pop() || siteSection.pop();

    window.digitalData.page.pageInfo.breadCrumbs = [];
    document.querySelectorAll('.spectrum-Breadcrumbs-item').forEach((item) => {
      window.digitalData.page.pageInfo.breadCrumbs.push(item.innerText);
    });

    let getCredentialsButton = Array.from(document.querySelectorAll('a')).find(el => el.textContent === 'Get credentials');
    let startFreeTrialButtonArr = Array.from(document.querySelectorAll('a')).filter(el => el.textContent === 'Start free trial');
    let getStartedButtonArr = Array.from(document.querySelectorAll('a')).filter(el => el.textContent === 'Get started');

    // stage
    let baseurl = 'https://dc.stage.acrobat.com/dc-integration-creation-app-cdn/main.html';

    // production
    if(window.location.host.indexOf('developer.adobe.com') >= 0 || window.location.host.indexOf('adobe.io') >= 0) {
      baseurl = 'https://documentcloud.adobe.com/dc-integration-creation-app-cdn/main.html';
    }

    getCredentialsButton.href = `${baseurl}`;

    if(window.location.pathname.indexOf('pdf-services') >= 0) {
      getCredentialsButton.href = `${baseurl}?api=pdf-services-api`;
      getCredentialsButton.setAttribute('daa-ll', `API | PDF-Service | Top Nav | Get credentials`);

      getStartedButtonArr.map(getStartedButton =>{
        getStartedButton.href = `${baseurl}?api=pdf-services-api`;
        getStartedButton.setAttribute('daa-ll', `API | PDF-Services | Step 1 | Get Started`);
      })

      startFreeTrialButtonArr.forEach((startFreeTrialButton, index) =>{
        startFreeTrialButton.href = `${baseurl}?api=pdf-services-api`;
        if(index === 0) {
          startFreeTrialButton.setAttribute('daa-ll', `API | PDF-Services | Hero | Start free trial`);
        } else if (index === 1) {
          startFreeTrialButton.setAttribute('daa-ll', `API | PDF-Services | Key Features | Start free trial`);
        } 
      })
    } else if(window.location.pathname.indexOf('doc-generation') >= 0){
      getCredentialsButton.href = `${baseurl}?api=document-generation-api`;
      getCredentialsButton.setAttribute('daa-ll', `API | Doc-Generation | Top Nav | Get credentials`);

      getStartedButtonArr.map(getStartedButton =>{
        getStartedButton.href = `${baseurl}?api=document-generation-api`;;
        getStartedButton.setAttribute('daa-ll', `API | Doc-Generation | Step 1 | Get Started`);
      })

      startFreeTrialButtonArr.forEach((startFreeTrialButton, index) =>{
        startFreeTrialButton.href = `${baseurl}?api=document-generation-api`;
        if(index === 0) {
          startFreeTrialButton.setAttribute('daa-ll', `API | Doc-Generation | Why Doc Gen | Start Free Trial`);
        } else if (index === 1) {
          startFreeTrialButton.setAttribute('daa-ll', `API | Doc-Generation | Key Features | Start Free Trial`);
        }
      })
    } else if(window.location.pathname.indexOf('pdf-extract') >= 0){
      getCredentialsButton.href = `${baseurl}?api=pdf-extract-api`;
      getCredentialsButton.setAttribute('daa-ll', `API | PDF-Extract | Top Nav | Get credentials`);

      getStartedButtonArr.map(getStartedButton =>{
        getStartedButton.href = `${baseurl}?api=pdf-extract-api`; 
        getStartedButton.setAttribute('daa-ll', `API | PDF-Extract | Step 1 | Get Started`);
      }) 
     
      startFreeTrialButtonArr.forEach((startFreeTrialButton, index) =>{
        startFreeTrialButton.href = `${baseurl}?api=pdf-extract-api`;
        if(index === 0){
          startFreeTrialButton.setAttribute('daa-ll', `API | PDF-Extract| Hero | Start Free Trial`);
        } else if(index === 1){
          startFreeTrialButton.setAttribute('daa-ll', `API | PDF-Extract| Key Features | Start Free Trial`);
        }
      })
    } else if(window.location.pathname.indexOf('pdf-embed') >= 0){
      getCredentialsButton.href = `${baseurl}?api=pdf-embed-api`;
      getCredentialsButton.setAttribute('daa-ll', `API | PDF-Embed | Top Nav | Get credentials`);

      getStartedButtonArr.map(getStartedButton =>{
        getStartedButton.href = `${baseurl}?api=pdf-embed-api`;
        getStartedButton.setAttribute('daa-ll', `API | PDF-Embed | Step 1 | Get Started`);
      });  

      let getFreecredentialsButtonArr = Array.from(document.querySelectorAll('a')).filter(el => el.textContent === 'Get free credentials');     
      getFreecredentialsButtonArr.forEach((getFreecredentialsButton, index) =>{
        getFreecredentialsButton.href = `${baseurl}?api=pdf-embed-api`;
        if(index === 0){
          getFreecredentialsButton.setAttribute('daa-ll',`API | PDF-Embed | Why PDF Embed | Get Free Credentials`);
        } else if(index === 1){
          getFreecredentialsButton.setAttribute('daa-ll',`API | PDF-Embed | Key Features | Get Free Credentials`);
        }
      });
    } else if(window.location.pathname.indexOf('pricing') >= 0 && startFreeTrialButtonArr){
      getCredentialsButton.setAttribute('daa-ll', `Pricing | Top Nav | Get credentials`);

      let subscribeNowUsButtonArr = Array.from(document.querySelectorAll('a')).filter(el => el.textContent === 'Subscribe now U.S.');
      subscribeNowUsButtonArr.map(subscribeNowUsButton => {
        subscribeNowUsButton.setAttribute('daa-ll', `Pricing | PAYGO | Subscribe now`);
      })

      startFreeTrialButtonArr.map(startFreeTrialButton =>{
        startFreeTrialButton.href = `${baseurl}?api=pdf-embed-api`;
      })

      getStartedButtonArr.map(getStartedButton =>{
        getStartedButton.href = `${baseurl}?api=pdf-embed-api`;
        getStartedButton.setAttribute('daa-ll', `Pricing | PDF Embed | Get started`);
      });  
    } else if(window.location.pathname.indexOf('use-cases') >= 0) {
      getCredentialsButton.setAttribute('daa-ll', `Use cases | Top Nav | Get credentials`);
    } else if(window.location.pathname.indexOf('resources') >= 0) {
      getCredentialsButton.setAttribute('daa-ll', `Resources | Top Nav | Get credentials`);
    } else {
      if(getCredentialsButton) {
        getCredentialsButton.setAttribute('daa-ll', `Homepage | Top Nav | Get credentials`);
      }

      if(startFreeTrialButtonArr) {
        startFreeTrialButtonArr.forEach((startFreeTrialButton, index) =>{
          startFreeTrialButton.href = `${baseurl}`;
          if(index === 0){
            startFreeTrialButton.setAttribute('daa-ll', `Homepage | Designed for developers | Start free trial`);
          } else if(index === 1) {
            startFreeTrialButton.setAttribute('daa-ll', `Homepage | How to get started | Start free trial`);
          }
        }) 
      }

      if(getStartedButtonArr) {
        getStartedButtonArr.map(getStartedButton =>{
          getStartedButton.href = `${baseurl}`;
          getStartedButton.setAttribute('daa-ll', `Homepage | Hero | Get started`);
        }) 
      }

    }
  }
}
