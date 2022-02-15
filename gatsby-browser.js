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

      getStartedButtonArr.map(getStartedButton =>{
        getStartedButton.href = `${baseurl}?api=pdf-services-api`;
      })

      startFreeTrialButtonArr.forEach((startFreeTrialButton, index) =>{
        startFreeTrialButton.href = `${baseurl}?api=pdf-services-api`;
        if(index === 0) {
        } else if (index === 1) {
        } 
      })
    } else if(window.location.pathname.indexOf('doc-generation') >= 0){
      getCredentialsButton.href = `${baseurl}?api=document-generation-api`;

      getStartedButtonArr.map(getStartedButton =>{
        getStartedButton.href = `${baseurl}?api=document-generation-api`;;
      })

      startFreeTrialButtonArr.forEach((startFreeTrialButton, index) =>{
        startFreeTrialButton.href = `${baseurl}?api=document-generation-api`;
      })

    } else if(window.location.pathname.indexOf('pdf-extract') >= 0){
      getCredentialsButton.href = `${baseurl}?api=pdf-extract-api`;

      getStartedButtonArr.map(getStartedButton =>{
        getStartedButton.href = `${baseurl}?api=pdf-extract-api`; 
      }) 
     
      startFreeTrialButtonArr.forEach((startFreeTrialButton, index) =>{
        startFreeTrialButton.href = `${baseurl}?api=pdf-extract-api`;
      })
    } else if(window.location.pathname.indexOf('pdf-embed') >= 0){
      getCredentialsButton.href = `${baseurl}?api=pdf-embed-api`;

      getStartedButtonArr.map(getStartedButton =>{
        getStartedButton.href = `${baseurl}?api=pdf-embed-api`;
      });  

      let getFreecredentialsButtonArr = Array.from(document.querySelectorAll('a')).filter(el => el.textContent === 'Get free credentials');     
      getFreecredentialsButtonArr.forEach((getFreecredentialsButton, index) =>{
        getFreecredentialsButton.href = `${baseurl}?api=pdf-embed-api`;
      });
    } else if(window.location.pathname.indexOf('pricing') >= 0 && startFreeTrialButtonArr){
      startFreeTrialButtonArr.map(startFreeTrialButton =>{
        startFreeTrialButton.href = `${baseurl}?api=pdf-embed-api`;
      })
      getStartedButtonArr.map(getStartedButton =>{
        getStartedButton.href = `${baseurl}?api=pdf-embed-api`;
      });  
    } else {
      if(getStartedButtonArr) {
        getStartedButtonArr.map(getStartedButton =>{
          getStartedButton.href = `${baseurl}`;
        }) 
      }
    }

    // set page data attribute hierarchy
    // classes:
    // Hero-Banner
    // Adobe-PDF-Services-API
    // Adobe-PDF-Extract-API
    // Adobe-Document-Generation-API
    // Adobe-PDF-Embed-API
    // Designed-for-developers
    // Use-cases-for-Adobe-Document-Services
    // Customer-Stories
    // How-to-get-started
    document.querySelector('.Hero-Banner').setAttribute('daa-lh', 'Hero Banner');
    document.querySelectorAll('.Hero-Banner a').forEach(link => {
      link.setAttribute('daa-ll', link.textContent);
    });

    document.querySelector('.Adobe-PDF-Services-API').setAttribute('daa-lh', 'Adobe PDF Services API');
    document.querySelectorAll('.Adobe-PDF-Services-API a').forEach(link => {
      link.setAttribute('daa-ll', link.textContent);
    });

    document.querySelector('.Adobe-PDF-Extract-API').setAttribute('daa-lh', 'Adobe PDF Extract API');
    document.querySelectorAll('.Adobe-PDF-Extract-API a').forEach(link => {
      link.setAttribute('daa-ll', link.textContent);
    });

    document.querySelector('.Adobe-Document-Generation-API').setAttribute('daa-lh', 'Adobe Document Generation API');
    document.querySelectorAll('.Adobe-Document-Generation-API a').forEach(link => {
      link.setAttribute('daa-ll', link.textContent);
    });

    document.querySelector('.Adobe-PDF-Embed-API').setAttribute('daa-lh', 'Adobe PDF Embed API');
    document.querySelectorAll('.Adobe-PDF-Embed-API a').forEach(link => {
      link.setAttribute('daa-ll', link.textContent);
    });

    document.querySelector('.Designed-for-developers').setAttribute('daa-lh', 'Designed for developers');
    document.querySelectorAll('.Designed-for-developers a').forEach(link => {
      link.setAttribute('daa-ll', link.textContent);
    });

    document.querySelector('.Use-cases-for-Adobe-Document-Services').setAttribute('daa-lh', 'Use cases for Adobe Document Services');
    document.querySelectorAll('.Use-cases-for-Adobe-Document-Services a').forEach(link => {
      link.setAttribute('daa-ll', link.querySelector('h3')?.textContent);
    });

    document.querySelector('.Customer-Stories').setAttribute('daa-lh', 'Customer Stories');
    document.querySelectorAll('.Customer-Stories a').forEach(link => {
      link.setAttribute('daa-ll', link.querySelector('h3')?.textContent);
    });

    document.querySelector('.How-to-get-started').setAttribute('daa-lh', 'How to get started?');
    document.querySelectorAll('.How-to-get-started a').forEach(link => {
      link.setAttribute('daa-ll', link.textContent);
    });
  }
}
