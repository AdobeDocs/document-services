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
    let subscribeNowUsButtonArr = Array.from(document.querySelectorAll('a')).filter(el => el.textContent === 'Subscribe now U.S.');

    // stage
    let baseurl = 'https://dc.stage.acrobat.com/dc-integration-creation-app-cdn/main.html';

    // production
    if(window.location.host.indexOf('developer.adobe.com') >= 0) {
      baseurl = 'https://documentcloud.adobe.com/dc-integration-creation-app-cdn/main.html';
    }

    getCredentialsButton.href = `${baseurl}`;

    if(getCredentialsButton) {
      getCredentialsButton.setAttribute('daa-ll', getCredentialsButton.href);
    }

    if(startFreeTrialButtonArr) {
      startFreeTrialButtonArr.map(startFreeTrialButton =>{
        startFreeTrialButton.href = `${baseurl}`;
        startFreeTrialButton.setAttribute('daa-ll', startFreeTrialButton.href);
      }) 
    }

    if(getStartedButtonArr) {
      getStartedButtonArr.map(getStartedButton =>{
        getStartedButton.href = `${baseurl}`;
        getStartedButton.setAttribute('daa-ll', getStartedButton.href);
      }) 
    }

    if(subscribeNowUsButtonArr) {
      subscribeNowUsButtonArr.map(subscribeNowUsButton =>{
        subscribeNowUsButton.setAttribute('daa-ll', subscribeNowUsButton.href);
      }) 
    }

    if(window.location.pathname.indexOf('pdf-services') >= 0) {
      getCredentialsButton.href = `${baseurl}?api=pdf-services-api`;
      getCredentialsButton.setAttribute('daa-ll', getCredentialsButton.href);

      getStartedButtonArr.map(getStartedButton =>{
        getStartedButton.href = `${baseurl}?api=pdf-services-api`;
        getStartedButton.setAttribute('daa-ll', getStartedButton.href);
      })
      startFreeTrialButtonArr.map(startFreeTrialButton =>{
        startFreeTrialButton.href = `${baseurl}?api=pdf-services-api`;
        startFreeTrialButton.setAttribute('daa-ll', startFreeTrialButton.href);
      })     
    } else if(window.location.pathname.indexOf('doc-generation') >= 0){
      getCredentialsButton.href = `${baseurl}?api=document-generation-api`;
      getCredentialsButton.setAttribute('daa-ll', getCredentialsButton.href);

      getStartedButtonArr.map(getStartedButton =>{
        getStartedButton.href = `${baseurl}?api=document-generation-api`;;
        getStartedButton.setAttribute('daa-ll', getStartedButton.href);
      })
      startFreeTrialButtonArr.map(startFreeTrialButton =>{
        startFreeTrialButton.href = `${baseurl}?api=document-generation-api`;
        startFreeTrialButton.setAttribute('daa-ll', startFreeTrialButton.href);
      })      
    } else if(window.location.pathname.indexOf('pdf-extract') >= 0){
      getCredentialsButton.href = `${baseurl}?api=pdf-extract-api`;
      getCredentialsButton.setAttribute('daa-ll', getCredentialsButton.href);

      getStartedButtonArr.map(getStartedButton =>{
        getStartedButton.href = `${baseurl}?api=pdf-extract-api`; 
        getStartedButton.setAttribute('daa-ll', getStartedButton.href);
      }) 
     
      startFreeTrialButtonArr.map(startFreeTrialButton =>{
        startFreeTrialButton.href = `${baseurl}?api=pdf-extract-api`;
        startFreeTrialButton.setAttribute('daa-ll', startFreeTrialButton.href);
      })
    } else if(window.location.pathname.indexOf('pdf-embed') >= 0){
      getCredentialsButton.href = `${baseurl}?api=pdf-embed-api`;
      getCredentialsButton.setAttribute('daa-ll', getCredentialsButton.href);

      getStartedButtonArr.map(getStartedButton =>{
        getStartedButton.href = `${baseurl}?api=pdf-embed-api`;
        getStartedButton.setAttribute('daa-ll', getStartedButton.href);
      });  
      let getFreecredentialsButtonArr = Array.from(document.querySelectorAll('a')).filter(el => el.textContent === 'Get free credentials');     
      getFreecredentialsButtonArr.map(getFreecredentialsButton =>{
        getFreecredentialsButton.href = `${baseurl}?api=pdf-embed-api`;
        getFreecredentialsButton.setAttribute('daa-ll', getFreecredentialsButton.href);
      });    
    } else if(window.location.pathname.indexOf('pricing') >= 0 && startFreeTrialButtonArr){
      startFreeTrialButtonArr.map(startFreeTrialButton =>{
        startFreeTrialButton.href = `${baseurl}?api=pdf-embed-api`;
        startFreeTrialButton.setAttribute('daa-ll', startFreeTrialButton.href);
      })
    }
  }
}