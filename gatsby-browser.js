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
    let getStartedButton = Array.from(document.querySelectorAll('a')).find(el => el.textContent === 'Get started');
    let StartedFreeTrialButton = Array.from(document.querySelectorAll('a')).find(el => el.textContent === 'Start free trial');
    let getFreeCredentialsButton = Array.from(document.querySelectorAll('a')).find(el => el.textContent === 'Get free credentials');

    // stage
    let baseurl =  'https://dc.stage.acrobat.com/dc-integration-creation-app-cdn/index.html';

    // production
    if(window.location.host.indexOf('developer.adobe.com') >= 0) {
      baseurl =  'https://documentcloud.adobe.com/dc-integration-creation-app-cdn/index.html';
    }

    getCredentialsButton.href = `${baseurl}`;
    getStartedButton.href = `${baseurl}`;
    StartedFreeTrialButton.href = `${baseurl}`;
    getFreeCredentialsButton.href = `${baseurl}`;

    if(window.location.pathname.indexOf('pdf-services') >= 0) {
      getCredentialsButton.href = `${baseurl}?api=pdf-services-api`;
      getStartedButton.href = `${baseurl}?api=pdf-services-api`;
      StartedFreeTrialButton.href = `${baseurl}?api=pdf-services-api`;
      getFreeCredentialsButton.href = `${baseurl}?api=pdf-services-api`;
    } else if(window.location.pathname.indexOf('doc-generation') >= 0){
      getCredentialsButton.href = `${baseurl}?api=document-generation-api`;
      getStartedButton.href = `${baseurl}?api=document-generation-api`;
      StartedFreeTrialButton.href = `${baseurl}?api=document-generation-api`;
      getFreeCredentialsButton.href = `${baseurl}?api=document-generation-api`;
    } else if(window.location.pathname.indexOf('pdf-extract') >= 0){
      getCredentialsButton.href = `${baseurl}?api=pdf-extract-api`;
      getStartedButton.href = `${baseurl}?api=pdf-extract-api`;
      StartedFreeTrialButton.href = `${baseurl}?api=pdf-extract-api`;
      getFreeCredentialsButton.href = `${baseurl}?api=pdf-extract-api`;
    } else if(window.location.pathname.indexOf('pdf-embed') >= 0){
      getCredentialsButton.href = `${baseurl}?api=pdf-embed-api`;
      getStartedButton.href = `${baseurl}?api=pdf-embed-api`;
      StartedFreeTrialButton.href = `${baseurl}?api=pdf-embed-api`;
      getFreeCredentialsButton.href = `${baseurl}?api=pdf-embed-api`;
    }
  }
}