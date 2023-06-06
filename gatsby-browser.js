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
export const onRouteUpdate = ({ location, prevLocation }) => {

  const openPdf = (pdfUrl) =>{
    var adobeDCView;
    if (location.host.endsWith('github.io')) {
      adobeDCView = new window.AdobeDC.View({clientId: "ad86d0e392b14db5a9ace2af19c54b5a", divId: "adobe-dc-view"});
    } else {
      adobeDCView = new window.AdobeDC.View({clientId: "c65dd91c079940069a932b7200857864", divId: "adobe-dc-view"});
    }
    var pdfName = pdfUrl.split('/');
      pdfName = pdfName[pdfName.length-1];
      adobeDCView.previewFile(
        {
          content: {
            location: {
              url: pdfUrl
            }
          },
          metaData: {fileName: pdfName },
        },
        { embedMode: "LIGHT_BOX" }
      );
  };

  const reTargetingFun=()=>{

      let isAvailable = document.body.querySelector('.retargeting')

      var img = document.createElement("img");
      img.setAttribute("src", "https://insight.adsrvr.org/track/pxl/?adv=eazb7fe&ct=0:ygnni67&fmt=3");
      img.setAttribute("height", "1");
      img.setAttribute("width", "1");
      img.setAttribute("class", "retargeting");
      img.setAttribute("style", "border-style:none;");
      img.setAttribute("alt", "");

      if(isAvailable) {
        isAvailable.remove();
      }
      document.body.append(img);
  }

  if (isBrowser) {
    let siteSection = location.pathname.split("/");
    try {
      if (
        window.digitalData &&
        window.digitalData.page &&
        window.digitalData.page.pageInfo
      ) {
        window.digitalData.page.pageInfo.siteSection =
          siteSection.pop() || siteSection.pop();

        window.digitalData.page.pageInfo.breadCrumbs = [];
        document
          .querySelectorAll(".spectrum-Breadcrumbs-item")
          .forEach((item) => {
            window.digitalData.page.pageInfo.breadCrumbs.push(item.innerText);
          });
      }
    } catch (err) {
      console.error("Unable to set site section", err);
    }

    try
    {
      if (window._satellite && window.digitalData) {
        window._satellite.track("state", {
          digitalData: window.digitalData._snapshot()
        });
      }
    } catch (err) {
      console.error("Unable to set state", err);
    }

    let getCredentialsButton = Array.from(document.querySelectorAll("a")).find(
      el => el.textContent === "Get credentials"
    );
    let startFreeTrialButtonArr = Array.from(
      document.querySelectorAll("a")
    ).filter(el => el.textContent === "Start for free");
    let getStartedButtonArr = Array.from(document.querySelectorAll("a")).filter(
      el => el.textContent === "Get started"
    );

    //local
    let isLocal = true;
    let navLinksBaseUrl = "";
    // let baseurl = "/apis/interstitial/";
    let baseurl = "https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html"

    let referenceBaseUrl = "https://developer-stage.adobe.com/document-services/docs/apis/"
    // stage/deploy
    if (window.location.host.indexOf("adobe.com") >= 0 || window.location.host.indexOf("github.io") >= 0)  {
      isLocal = false;
      navLinksBaseUrl = "/document-services";
      baseurl = "https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html"
    }
    // production
    if (
      window.location.host.indexOf("developer.adobe.com") >= 0 ||
      window.location.host.indexOf("adobe.io") >= 0
    ) {
      referenceBaseUrl = "https://developer.adobe.com/document-services/docs/apis/"
    }

    let header = document.querySelector("header");
    header
      .querySelector("a[href='/']")
      ?.setAttribute("daa-ll", "Adobe Developer");
    header
      .querySelector("a[href='/apis/']")
      ?.setAttribute("daa-ll", "Products");
    header
      .querySelector(`a[href='${navLinksBaseUrl}/homepage/']`)
      ?.setAttribute("daa-ll", "Adobe Acrobat Services");
    header
      .querySelector(`a[href='${navLinksBaseUrl}/apis/pdf-services/']`)
      ?.setAttribute("daa-ll", "PDF Services");
    header
      .querySelector(`a[href='${navLinksBaseUrl}/apis/pdf-extract/']`)
      ?.setAttribute("daa-ll", "PDF Extract");
    header
      .querySelector(`a[href='${navLinksBaseUrl}/apis/doc-generation/']`)
      ?.setAttribute("daa-ll", "Document Generation");
    header
      .querySelector(`a[href='${navLinksBaseUrl}/apis/pdf-embed/']`)
      ?.setAttribute("daa-ll", "PDF Embed");
    header
      .querySelector(
        `a[href='${navLinksBaseUrl}/use-cases/agreements-and-contracts/sales-proposals-and-contracts/']`
      )
      ?.setAttribute("daa-ll", "Use Cases");
    header
      .querySelector(`a[href='${navLinksBaseUrl}/pricing/main/']`)
      ?.setAttribute("daa-ll", "Pricing");
    header
      .querySelector(`a[href='${navLinksBaseUrl}/resources/']`)
      ?.setAttribute("daa-ll", "Developer Resources");
    header
      .querySelector(
        "a[href='https://community.adobe.com/t5/document-services-apis/bd-p/Document-Cloud-SDK?page=1&sort=latest_replies&filter=all']"
      )
      ?.setAttribute("daa-ll", "Forum");
    header
      .querySelector(
        `a[href='${navLinksBaseUrl}/docs/overview/pdf-services-api/dcserviceslicensing/']`
      )
      ?.setAttribute("daa-ll", "Licensing");
    header
      .querySelector(`a[href='${navLinksBaseUrl}/docs/overview/']`)
      ?.setAttribute("daa-ll", "Documenation Overview");
    header
      .querySelector(
        `a[href='${navLinksBaseUrl}/docs/overview/pdf-services-api/']`
      )
      ?.setAttribute("daa-ll", "Documenation PDF Services API");
    header
      .querySelector(
        `a[href='${navLinksBaseUrl}/docs/overview/pdf-extract-api/']`
      )
      ?.setAttribute("daa-ll", "Documenation PDF Extract API");
    header
      .querySelector(
        `a[href='${navLinksBaseUrl}/docs/overview/document-generation-api/']`
      )
      ?.setAttribute("daa-ll", "Documenation Document Generation API");
    header
      .querySelector(
        `a[href='${navLinksBaseUrl}/docs/overview/pdf-embed-api/']`
      )
      ?.setAttribute("daa-ll", "Documenation PDF Embed API");
    header
      .querySelector(`a[href='${baseurl}']`)
      ?.setAttribute("daa-ll", "Get credentials");
    header
      .querySelector("a[href='/console']")
      ?.setAttribute("daa-ll", "Console");
      document.querySelectorAll('img[alt="EMPTY_ALT"]').forEach(link => {
        link.setAttribute("alt", '');
        link.setAttribute("title", '');
      });

    let footer = document.querySelector("footer");
    footer?.setAttribute("daa-lh", "Footer");
    footer?.querySelectorAll("a").forEach(link => {
      if (link.textContent) {
        link.setAttribute("daa-ll", link.textContent);
      }
    });

    if (window.location.pathname.indexOf("pdf-services") >= 0) {
      getCredentialsButton.href = `${baseurl}?api=pdf-services-api`;
      getCredentialsButton.addEventListener("click",()=>reTargetingFun())

      getStartedButtonArr.map(getStartedButton => {
        getStartedButton.href = `${baseurl}?api=pdf-services-api`;
      });

      startFreeTrialButtonArr.forEach((startFreeTrialButton, index) => {
        startFreeTrialButton.href = `${baseurl}?api=pdf-services-api`;
        startFreeTrialButton.addEventListener("click",()=>reTargetingFun());
      });
    } else if (window.location.pathname.indexOf("doc-generation") >= 0) {
      getCredentialsButton.href = `${baseurl}?api=document-generation-api`;
      getCredentialsButton.addEventListener("click",()=>reTargetingFun())

      getStartedButtonArr.map(getStartedButton => {
        getStartedButton.href = `${baseurl}?api=document-generation-api`;
      });

      startFreeTrialButtonArr.forEach((startFreeTrialButton, index) => {
        startFreeTrialButton.href = `${baseurl}?api=document-generation-api`;
        startFreeTrialButton.addEventListener("click",()=>reTargetingFun());

      });
    }  else if (window.location.pathname.indexOf("pdf-extract") >= 0) {
      getCredentialsButton.href = `${baseurl}?api=pdf-extract-api`;
      getCredentialsButton.addEventListener("click",()=>reTargetingFun())

      getStartedButtonArr.map(getStartedButton => {
        getStartedButton.href = `${baseurl}?api=pdf-extract-api`;
      });

      startFreeTrialButtonArr.forEach((startFreeTrialButton, index) => {
        startFreeTrialButton.href = `${baseurl}?api=pdf-extract-api`;
        startFreeTrialButton.addEventListener("click",()=>reTargetingFun());
      });
    } else if (window.location.pathname.indexOf("pdf-embed") >= 0) {
      getCredentialsButton.href = `${baseurl}?api=pdf-embed-api`;
      getCredentialsButton.addEventListener("click",()=>reTargetingFun())

      getStartedButtonArr.map(getStartedButton => {
        getStartedButton.href = `${baseurl}?api=pdf-embed-api`;
      });

      let getFreecredentialsButtonArr = Array.from(
        document.querySelectorAll("a")
      ).filter(el => el.textContent === "Get free credentials");
      getFreecredentialsButtonArr.forEach((getFreecredentialsButton, index) => {
        getFreecredentialsButton.href = `${baseurl}?api=pdf-embed-api`;
        getFreecredentialsButton.addEventListener("click",()=>reTargetingFun())
      });
    } else if (
      window.location.pathname.indexOf("pricing") >= 0 &&
      startFreeTrialButtonArr
    ) {
      startFreeTrialButtonArr.map(startFreeTrialButton => {
        startFreeTrialButton.href = `${baseurl}?api=pdf-services-api`;
        startFreeTrialButton.addEventListener("click",()=>reTargetingFun());
      });
      getStartedButtonArr.map(getStartedButton => {
        getStartedButton.href = `${baseurl}?api=pdf-embed-api`;
      });
    } else if (window.location.pathname.indexOf("sign-api") >= 0 || window.location.pathname.indexOf("microsoft-pa-integration") >= 0) {
      getCredentialsButton.href = baseurl;
      getCredentialsButton.addEventListener("click", () => reTargetingFun())
    }else {
      if (getStartedButtonArr) {
        getStartedButtonArr.map(getStartedButton => {
          getStartedButton.href = baseurl;
        });
      }
      getCredentialsButton.href = baseurl;
      getCredentialsButton.addEventListener("click", () => reTargetingFun())
    }

    if (
      window.location.pathname.indexOf("homepage") >= 0 ||
      (window.location.pathname === "/" && isLocal) || (window.location.pathname === `${navLinksBaseUrl}/` && !isLocal)
    ) {
      startFreeTrialButtonArr.map(startFreeTrialButton => {
        startFreeTrialButton.addEventListener("click",()=>reTargetingFun());
      });

      document
        .querySelector(".Hero-Banner")
        .closest("main")
        .setAttribute("daa-lh", "Body");

      document
        .querySelector(".Hero-Banner")
        .setAttribute("daa-lh", "Hero Banner");
      document.querySelectorAll(".Hero-Banner a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document
        .querySelector(".Adobe-PDF-Accessibility")
        .setAttribute("daa-lh", "Adobe PDF Extract API");
      document.querySelectorAll(".Adobe-PDF-Accessibility a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document
        .querySelector(".e-seal-api")
        .setAttribute("daa-lh", "Adobe PDF Electronic Seal API");
      document.querySelectorAll(".e-seal-api a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document
        .querySelector(".Adobe-PDF-Services-API")
        .setAttribute("daa-lh", "Adobe PDF Services API");
      document.querySelectorAll(".Adobe-PDF-Services-API a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Adobe-PDF-Extract-API")
        .setAttribute("daa-lh", "Adobe PDF Extract API");
      document.querySelectorAll(".Adobe-PDF-Extract-API a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Adobe-Document-Generation-API")
        .setAttribute("daa-lh", "Adobe Document Generation API");
      document
        .querySelectorAll(".Adobe-Document-Generation-API a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".Adobe-PDF-Embed-API")
        .setAttribute("daa-lh", "Adobe PDF Embed API");
      document.querySelectorAll(".Adobe-PDF-Embed-API a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Designed-for-developers")
        .setAttribute("daa-lh", "Designed for developers");
      document.querySelectorAll(".Designed-for-developers a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document.querySelectorAll(".home-code-block div.tabItem").forEach(link=>{
        link.setAttribute("daa-ll", link.title);
      })
      document.querySelectorAll('.home-code-block a').forEach(link=>{
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}`;
        }
      })
      document
        .querySelector(".Use-cases-for-Adobe-Document-Services")
        .setAttribute("daa-lh", "Use cases for Adobe Acrobat Services");
      document
        .querySelectorAll(".Use-cases-for-Adobe-Document-Services a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.querySelector("h3")?.textContent);
        });

      document
        .querySelector(".Customer-Stories")
        .setAttribute("daa-lh", "Customer Stories");
      document.querySelectorAll(".Customer-Stories a").forEach(link => {
        link.setAttribute("daa-ll", link.querySelector("h3")?.textContent);

        link.addEventListener("click", () => {
          openPdf(link.href)
          link.removeAttribute("href");
        })

      });

      document
        .querySelector(".How-to-get-started")
        .setAttribute("daa-lh", "How to get started?");
      document.querySelectorAll(".How-to-get-started a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
    } else if (window.location.pathname.indexOf("enterprise") >= 0) {
      document
      .querySelector(".Hero-Banner")
      .closest("main")
      .setAttribute("daa-lh", "Body");

      document
      .querySelector(".Hero-Banner")
      .setAttribute("daa-lh", "ABM Campaign");
      document.querySelectorAll(".Hero-Banner a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
        if (link.textContent === 'Start for free'){
          link.addEventListener("click",()=>reTargetingFun());
          link.href = `${baseurl}`;
          // link.href = `${baseurl}?sdid=2NVQC73G&mv=display`;
        }
      });

      document
      .querySelector(".why-Adobe-document-services")
      .setAttribute("daa-lh", "Why Adobe Acrobat Services?")

      document
      .querySelector(".simple-integration")
      .setAttribute("daa-lh", "Seamless and simple integration with your existing apps.")

      document
      .querySelector(".reimagine")
      .setAttribute("daa-lh", "Reimagine your document experiences today.")

      document.querySelectorAll(".reimagine a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
        if (link.textContent === 'Start for free'){
          link.addEventListener("click",()=>reTargetingFun());
          link.href = `${baseurl}`;
          // link.href = `${baseurl}?sdid=2K4PCBTH&mv=display`;
        }
      });

      document
      .querySelector(".sales-process")
      .setAttribute("daa-lh", "Speed up your sales process.");
      document.querySelectorAll(".sales-process a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
      .querySelector(".employee-paperwork")
      .setAttribute("daa-lh", "Simplify employee paperwork.");
      document.querySelectorAll(".employee-paperwork a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
      .querySelector(".legal-workflows")
      .setAttribute("daa-lh", "Automate legal workflows.");
      document.querySelectorAll(".legal-workflows a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
      .querySelector(".customer_stories")
      .setAttribute("daa-lh", "Customer stories.");
      document.querySelectorAll(".customer_story_wrapper a").forEach(link => {
        const hrefArr = link.href.split("/");
        const textContent = hrefArr[hrefArr.length - 1].replace('.pdf','');
        link.setAttribute("daa-ll", `${textContent} ${link.textContent}`);
        link.addEventListener("click", () => {
          openPdf(link.href)
          link.removeAttribute("href");
        })
      });


      document
      .querySelector(".get-started-today")
      .setAttribute("daa-lh", "Get started today.");
      document.querySelectorAll(".get-started-today a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
        if (link.textContent === 'Start for free'){
          link.addEventListener("click",()=>reTargetingFun());
          link.href = `${baseurl}`;
        }
      });


    }else if (window.location.pathname.indexOf("microsoft-pa-integration") >= 0) {

      document
      .querySelector(".Hero-Banner")
      .closest("main")
      .setAttribute("daa-lh", "Body");

      document
      .querySelector(".Hero-Banner")
      .setAttribute("daa-lh", "Microsoft Power Automate");
      document.querySelectorAll(".Hero-Banner a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === 'Try for free'){
          link.href = `${baseurl}?api=pdf-services-api&source=pa&sdid=6S3T74M5&mv=affiliate`;
          link.addEventListener("click",()=>reTargetingFun());
        }
      });

      document.querySelector(".ms-zigzag-cont-title")
      .setAttribute("daa-lh", "Uplevel your document workflows easily with Adobe Acrobat Services and Adobe Acrobat Sign on Microsoft Power Platform.")

      document.querySelector(".ms-zigzag-cta-one")
      .setAttribute("daa-lh", "Low-code document automations.")
      document.querySelectorAll(".ms-zigzag-cta-one a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
      })
      document.querySelector(".ms-zigzag-cta-two")
      .setAttribute("daa-lh", "End-to-end workflows, complete with a signature.")
      document.querySelectorAll(".ms-zigzag-cta-two a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
      })
      document.querySelector(".ms-zigzag-cta-three")
      .setAttribute("daa-lh", "Simplify workflows with templates.")
      document.querySelectorAll(".ms-zigzag-cta-three a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
      })
      document.querySelector(".ms-zigzag-cta-four")
      .setAttribute("daa-lh", "Easily incorporate forms through AEM.")
      document.querySelectorAll(".ms-zigzag-cta-four a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
      })
      document.querySelector(".ms-zigzag-cta-five")
      .setAttribute("daa-lh", "Build automations with extensibility.")
      document.querySelectorAll(".ms-zigzag-cta-five a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
      })

      document.querySelector(".How-to-get-started")
      .setAttribute("daa-lh", "Start your trial today and get 1,000 free document transactions.")
      document.querySelectorAll(".How-to-get-started a").forEach(link =>{
        link.setAttribute("daa-ll",link.textContent)
      })

      document.querySelector(".benefitsForEnterprises")
      .setAttribute("daa-lh", "Benets for enterprises across the board.")

      document.querySelector(".Benefits-one")
      .setAttribute("daa-lh", "Efficiency and productivity.")
      document.querySelector(".Benefits-two")
      .setAttribute("daa-lh", "Cost savings.")
      document.querySelector(".Benefits-three")
      .setAttribute("daa-lh", "The latest AI technology.")
      document.querySelector(".Benefits-four")
      .setAttribute("daa-lh", "Security, reliability, scalability")

      document.querySelector(".use-case")
      .setAttribute("daa-lh", "Explore use cases.")

      document.querySelector(".ms-useCase-one")
      .setAttribute("daa-lh", "Agreements and contracts.")
      document.querySelectorAll(".ms-useCase-one a").forEach(link=>{
        link.setAttribute("daa-ll",link.querySelector("h3")?.textContent.trim() || link.textContent.trim())
      })

      document.querySelector(".ms-useCase-two")
      .setAttribute("daa-lh", "Data analysis and retrieval.")
      document.querySelectorAll(".ms-useCase-two a").forEach(link=>{
        link.setAttribute("daa-ll",link.textContent)
      })

      document.querySelector(".ms-useCase-three")
      .setAttribute("daa-lh", "Content publishing.")

      document.querySelectorAll(".ms-useCase-three a").forEach(link=>{
        link.setAttribute("daa-ll",link.textContent)
      })

      document.querySelector(".ms-useCase-four")
      .setAttribute("daa-lh", "Onboarding and enrollment.")
      document.querySelectorAll(".ms-useCase-four a").forEach(link=>{
        link.setAttribute("daa-ll",link.textContent)
      })

      document.querySelector(".getting-started-title")
      .setAttribute("daa-lh", "Getting started is easy.")

      document.querySelector(".ms-step-one")
      .setAttribute("daa-lh", "Step 1")
      document.querySelectorAll(".ms-step-one a").forEach(link=>{
        link.setAttribute("daa-ll",link.textContent)
      })

      document.querySelector(".ms-step-two")
      .setAttribute("daa-lh", "Step 2")
      document.querySelectorAll(".ms-step-two a").forEach(link=>{
        link.setAttribute("daa-ll",link.textContent)
      })

      document.querySelector(".ms-step-three")
      .setAttribute("daa-lh", "Step 3")
      document.querySelectorAll(".ms-step-three a").forEach(link=>{
        link.setAttribute("daa-ll",link.textContent)
      })

      document.querySelector(".additional-resources-title")
      .setAttribute("daa-lh", "Learn more with these additional resources.")

      document.querySelector(".ms-resource-card-one")
      .setAttribute("daa-lh", "Build your first workflow.")
      document.querySelectorAll(".ms-resource-card-one a").forEach(link=>{
        link.setAttribute("daa-ll",link.textContent)
      })

      document.querySelector(".ms-resource-card-two")
      .setAttribute("daa-lh", "Create a document workflow.")
      document.querySelectorAll(".ms-resource-card-two a").forEach(link=>{
        link.setAttribute("daa-ll",link.textContent)
      })

      document.querySelector(".ms-resource-card-three")
      .setAttribute("daa-lh", "Getting started with PDF Services.")
      document.querySelectorAll(".ms-resource-card-three a").forEach(link=>{
        link.setAttribute("daa-ll",link.textContent)
      })

      document.querySelector(".ms-resource-card-four")
      .setAttribute("daa-lh", "Transform digital process.")
      document.querySelectorAll(".ms-resource-card-four a").forEach(link=>{
        link.setAttribute("daa-ll",link.textContent)
      })

      document.querySelector(".ms-btm-right-cont")
      .setAttribute("daa-lh", "Have questions?")
      document.querySelectorAll(".ms-btm-right-cont a").forEach(link=>{
        link.setAttribute("daa-ll",link.textContent)
      })

      document.querySelector(".ms-left-cont")
      .setAttribute("daa-lh", "Get help.")
      document.querySelectorAll(".ms-left-cont a").forEach(link=>{
        link.setAttribute("daa-ll",link.textContent)
      })

    document
      .querySelectorAll(".Use-cases-for-Adobe-Document-Services a")
      .forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

    document
      .querySelector(".ms-announcement-blade").setAttribute("daa-lh", "Try Adobe Acrobat Sign Workflow Automation integrated with Microsoft Power Automate.")
    document.querySelectorAll(".ms-announcement-blade a").forEach(link =>{
      link.setAttribute("daa-ll", link.textContent);
    })

      document
      .querySelector(".news-letter")
      .setAttribute("daa-lh", "Newsletter");

    document.querySelectorAll(".news-letter a").forEach(link => {
      link.setAttribute("daa-ll", link.textContent);
    });

    } else if (window.location.pathname.indexOf("pdf-accessibility-auto-tag") >= 0) {

      document
        .querySelector(".Hero-Banner")
        .closest("main")
        .setAttribute("daa-lh", "Body");

      document
        .querySelector(".Hero-Banner")
        .setAttribute("daa-lh", "Hero Banner");

      document.querySelectorAll(".Hero-Banner a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document.querySelector(".accessibility-key-feature-title")
        .setAttribute("daa-lh", "Key features of Adobe PDF Accessibility Auto-Tag API")

      document.querySelector(".Benefits-one")
        .setAttribute("daa-lh", "Highly accurate content tagging")
      document.querySelector(".Benefits-two")
        .setAttribute("daa-lh", "Reading order identification")
      document.querySelector(".Benefits-three")
        .setAttribute("daa-lh", "Wide range of doc types, at scale")
      document.querySelector(".Benefits-four")
        .setAttribute("daa-lh", "Tailored tagging report")

      document.querySelector(".zig-zag-title")
        .setAttribute("daa-lh", "Benefits of PDF Accessibility Auto-Tag API")
      document.querySelector(".zig-zag-cont-one")
        .setAttribute("daa-lh", "Improve PDF accessibility for all users")
      document.querySelector(".zig-zag-cont-two")
        .setAttribute("daa-lh", "Remediate easily at scale")
      document.querySelector(".zig-zag-cont-three")
        .setAttribute("daa-lh", "Move toward compliance with greater ease")

      document.querySelectorAll(".tag-structure h2").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      })
      document.querySelectorAll(".tag-structure a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      })

      document.querySelector(".technical-case-title")
        .setAttribute("daa-lh", "Technical use cases")

      document.querySelector(".technical-case-one")
        .setAttribute("daa-lh", "Improve accessibility of PDF backlogs")
      document.querySelector(".technical-case-two")
        .setAttribute("daa-lh", "Accelerate accessibility workflows")

      document.querySelector(".industry-usecase-title")
        .setAttribute("daa-lh", "For use across industries")

      document.querySelectorAll(".useCaseCard-doc-gen a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      })

      document.querySelector(".accessibility-summary-two")
        .setAttribute("daa-lh", "We're ready to help")
      document.querySelectorAll(".accessibility-summary-two a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      })

      document.querySelector(".accessibility-title")
        .setAttribute("daa-lh", "Learn more about PDF accessibility")

      document.querySelectorAll(".useCaseCard-doc-gen a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      })
      document
        .querySelector(".Explore-other-Adobe-Document-Services-APIs")
        .setAttribute("daa-lh", "Explore other Adobe Document Services APIs");

      document
        .querySelectorAll(".Explore-other-Adobe-Document-Services-APIs a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".news-letter")
        .setAttribute("daa-lh", "Newsletter");

      document.querySelectorAll(".news-letter a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document
        .querySelector(".accessbility-stepper")
        .setAttribute("daa-lh", "Start embedding PDFs in a few minutes");
      document.querySelectorAll(".accessbility-stepper a").forEach(link => {
        if (link.textContent == "Get started"){
          link.href = `${baseurl}?api=pdf-accessibility-auto-tag-api`
        }
        link.setAttribute("daa-ll", link.textContent);
      });


    } else if (window.location.pathname.indexOf("sign-api") >= 0) {

      document
        .querySelector(".Hero-Banner")
        .closest("main")
        .setAttribute("daa-lh", "Body");

      document
        .querySelector(".Hero-Banner")
        .setAttribute("daa-lh", "Hero Banner");

      document.querySelectorAll(".Hero-Banner a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".hero-below-compo")
        .setAttribute("daa-lh", "Let's work together to build incredible digital experience.")

      document.querySelectorAll(".hero-below-compo a").forEach(link =>{
        link.setAttribute("daa-ll", link.textContent);
      })


      document.querySelector(".take-your-project-cta").setAttribute("daa-lh", "Take your project to the next level.")
      document.querySelector(".easy-to-implement-cta").setAttribute("daa-lh", "Easy to implement.")

      document.querySelectorAll(".easy-to-implement-cta a").forEach(link =>{
        link.setAttribute("daa-ll", link.textContent);
        link.setAttribute("aria-label", "Learn more about rest APIs")
      })

      document.querySelector(".secure-compliant-cta").setAttribute("daa-lh", "Secure and compliant.")
      document.querySelectorAll(".secure-compliant-cta a").forEach(link =>{
        link.setAttribute("daa-ll", link.textContent);
        link.setAttribute("aria-label", "Learn more about Adobe Acrobat Sign security")
      })

      document.querySelector(".scalable-cta").setAttribute("daa-lh", "Scalable.")
      document.querySelectorAll(".scalable-cta a").forEach(link =>{
        link.setAttribute("daa-ll", link.textContent);
        link.setAttribute("aria-label", "Learn more about our data centers")
      })

      document.querySelector(".choose-partnership-title-cta").setAttribute("daa-lh", "Choose a partnership type to get access to the specific tools you need.")
      document.querySelector(".embedded-partner-cta").setAttribute("daa-lh", "OEM/Embedded Partner.")
      document.querySelectorAll(".embedded-partner-cta a").forEach(link =>{
        link.setAttribute("daa-ll", link.textContent);
      })

        document.querySelector(".integration-partners-cta").setAttribute("daa-lh", "Integration Only Partner.")
        document.querySelectorAll(".integration-partners-cta a").forEach(link =>{
          link.setAttribute("daa-ll", link.textContent);
        })

      document.querySelector(".zigzag-cta-one").setAttribute("daa-lh", "Merge data from your application.")
      document.querySelectorAll(".zigzag-cta-one a").forEach(link =>{
        link.setAttribute("daa-ll", link.textContent);
      })

      document.querySelector(".zigzag-cta-two").setAttribute("daa-lh", "Store documents in your own repository.")
      document.querySelectorAll(".zigzag-cta-two a").forEach(link =>{
        link.setAttribute("daa-ll", link.textContent);
      })

      document.querySelector(".zigzag-cta-three").setAttribute("daa-lh", "OEM implementation made easy.")
      document.querySelectorAll(".zigzag-cta-three a").forEach(link =>{
        link.setAttribute("daa-ll", link.textContent);
      })

      document.querySelector(".explore-usecase-cta").setAttribute("daa-lh", "Explore use cases.")

      document.querySelector(".sales-cta").setAttribute("daa-lh", "Sales and procurement contracts.")
      document.querySelectorAll(".sales-cta a").forEach(link =>{
        link.setAttribute("daa-ll", link.textContent);
      })

      document.querySelector(".rental-cta").setAttribute("daa-lh", "Rental and leasing agreements.")
      document.querySelectorAll(".rental-cta a").forEach(link =>{
        link.setAttribute("daa-ll", link.textContent);
      })
      document.querySelector(".new-hire-cta").setAttribute("daa-lh", "New hire onboarding.")
      document.querySelectorAll(".new-hire-cta a").forEach(link =>{
        link.setAttribute("daa-ll", link.textContent);
      })
      document.querySelector(".financial-cta ").setAttribute("daa-lh", "Financial and tax document workflows.")
      document.querySelectorAll(".financial-cta a").forEach(link =>{
        link.setAttribute("daa-ll", link.textContent);
      })

      document.querySelectorAll(".view-all-cta a").forEach(link =>{
        link.setAttribute("daa-ll", link.textContent);
      })

      document.querySelector(".partner-with-us-cta ").setAttribute("daa-lh", "Partner with us.")
      document.querySelectorAll(".partner-with-us-cta a").forEach(link =>{
        link.setAttribute("daa-ll", link.textContent);
      })
      document.querySelectorAll('img[title="EMPTY_TITLE"]').forEach(link => {
                link.setAttribute("title", '');
              });
      document
      .querySelector(".news-letter")
      .setAttribute("daa-lh", "Newsletter");

    document.querySelectorAll(".news-letter a").forEach(link => {
      link.setAttribute("daa-ll", link.textContent);
    });

    } else if (window.location.pathname.indexOf("interstitial") >= 0) {
      document
        .querySelector(".interstitialHeading")
        .setAttribute("daa-lh", "Which of the following best describes what you are here for?");

      document
        .querySelectorAll('.interstitialBox').forEach(text =>{
          text.setAttribute("daa-ll", text.textContent)
        })

      document
        .querySelector('.dcsdk-button')
        .setAttribute("daa-ll",'Sign in to get started')
      document
        .querySelector('.secondary-dcsdk-button')
        .setAttribute("daa-ll",'Skip')

    } else if (window.location.pathname.indexOf("customer-stories") >= 0){

      document.querySelectorAll(".Customer-Stories a").forEach(link => {
        link.setAttribute("daa-ll", link.querySelector("h3")?.textContent);
        link.addEventListener("click", () => {
          openPdf(link.href)
          link.removeAttribute("href");
        })
      })

    } else if (window.location.pathname.indexOf("resources") >= 0) {
      document
        .querySelector(".resource-banner")
        .closest("main")
        .setAttribute("daa-lh", "Body");

      document
        .querySelector(".resource-banner")
        .setAttribute("daa-lh", "Developer Resources");

      document
        .querySelector(".Adobe-PDF-Services-API-Overview")
        ?.setAttribute("daa-lh", "Adobe PDF Services API Overview");
      document
        .querySelectorAll(".Adobe-PDF-Services-API-Overview a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".feature-content")
        .setAttribute("daa-lh", "Featured");

      document.querySelectorAll(".feature-content a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document.querySelector(".blog-content").setAttribute("daa-lh", "Blog");
      document.querySelectorAll(".blog-content a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
        // link.setAttribute("daa-ll", link.querySelector("p")?.textContent);
      });

      document
        .querySelector(".tutorial-content")
        .setAttribute("daa-lh", "Tutorials");
      document.querySelectorAll(".tutorial-content a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Customer-Stories")
        .setAttribute("daa-lh", "Customer Stories");
      document.querySelectorAll(".Customer-Stories a").forEach(link => {
        const textContentData = link.nextElementSibling
          ? link.nextElementSibling.innerHTML
          : link.previousElementSibling.innerHTML;
        link.setAttribute("daa-ll", textContentData);

           link.addEventListener("click", () => {
          openPdf(link.href)
          link.removeAttribute("href");
        })
      });

      document
        .querySelector(".we-ready-to-help")
        .setAttribute("daa-lh", "We're ready to help");
      document.querySelectorAll(".we-ready-to-help a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
      .querySelector(".news-letter")
      .setAttribute("daa-lh", "Newsletter");

    document.querySelectorAll(".news-letter a").forEach(link => {
      link.setAttribute("daa-ll", link.textContent);
    });

    } else if (window.location.pathname.indexOf("pdf-extract") >= 0) {

      // document
      //   .querySelector(".Hero-Banner")
      //   .closest("main")
      //   .setAttribute("daa-lh", "Body");

      // document
      //   .querySelector(".Hero-Banner")
      //   .setAttribute("daa-lh", "Hero Banner");
      // document.querySelectorAll(".Hero-Banner a").forEach(link => {
      //   link.setAttribute("daa-ll", link.textContent);
      // });

      // document
      //   .querySelector(".Key-features-of-Adobe-PDF-Extract-API")
      //   .closest("section")
      //   .setAttribute("daa-lh", "Key features of Adobe PDF Extract API");
      // document
      //   .querySelectorAll(".Key-features-of-Adobe-PDF-Extract-API a")
      //   .forEach(link => {
      //     link.setAttribute("daa-ll", link.textContent);
      //   });

      // document
      //   .querySelector(".Use-cases-for-Adobe-PDF-Extract-API")
      //   .setAttribute("daa-lh", "Use cases for Document Generation API");

      // document
      //   .querySelectorAll(".Use-cases-for-Adobe-PDF-Extract-API-card a")
      //   .forEach(link => {
      //     link.setAttribute("daa-ll", link.querySelector("h3")?.textContent);
      //   });

      // document
      //   .querySelectorAll(".Use-cases-for-Adobe-PDF-Extract-API a")
      //   .forEach(link => {
      //     link.setAttribute("daa-ll", link.textContent);
      //   });

      // document
      //   .querySelector(".How-it-works")
      //   .setAttribute("daa-lh", "How it works");

      // document.querySelectorAll(".How-it-works a").forEach(link => {
      //   link.setAttribute("daa-ll", link.textContent);
      // });

      // document
      //   .querySelector(".Get-started-in-minutes")
      //   .setAttribute("daa-lh", "Get started in minutes");

      // document.querySelectorAll(".Get-started-in-minutes a").forEach(link => {
      //   link.setAttribute("daa-ll", link.textContent);
      // });

      // document
      //   .querySelector(".Explore-other-Adobe-Document-Services-APIs")
      //   .setAttribute("daa-lh", "Explore other Adobe Acrobat Services APIs");

      // document
      //   .querySelectorAll(".Explore-other-Adobe-Document-Services-APIs a")
      //   .forEach(link => {
      //     link.setAttribute("daa-ll", link.textContent);
      //   });

      // document
      //   .querySelector(".We-are-ready-to-help")
      //   .setAttribute("daa-lh", "We're ready to help");

      // document.querySelectorAll(".We-are-ready-to-help a").forEach(link => {
      //   link.setAttribute("daa-ll", link.textContent);
      // });
      document
      .querySelector(".Hero-Banner")
      .closest("main")
      .setAttribute("daa-lh", "Body");

      document
      .querySelector(".Hero-Banner")
      .setAttribute("daa-lh", "Adobe PDF Extract API");
      document
        .querySelectorAll(".Hero-Banner a").forEach(link =>{
          link.setAttribute("daa-ll", link.textContent);
        })

      document
      .querySelector(".Key-features-of-Adobe-PDF-Extract-API")
      .closest("section")
      .setAttribute("daa-lh", "Key features of Adobe PDF Extract API");

    document
      .querySelectorAll(".Key-features-of-Adobe-PDF-Extract-API a")
      .forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
        if (link.textContent === 'Start for free'){
          link.href = `${baseurl}?api=pdf-extract-api`;
        }
      });

    document.querySelectorAll(".extract-stepper-api-reference a").forEach(link=>{
      if(link.textContent === 'View API Reference'){
        link.href = `${referenceBaseUrl}#tag/Extract-PDF`;
      }
    })

    document
    .querySelector(".see-how-it-works")
    .setAttribute("daa-lh", "See how it works.");
    document
    .querySelectorAll('.see-how-it-works a').forEach(link =>{
      link.setAttribute("daa-ll", link.textContent);
    })

    document
    .querySelector(".rich-text-data")
    .setAttribute("daa-lh", "Turn your PDF into rich data.");

    document
    .querySelectorAll(".sec-overview a").forEach(link=>{
      link.setAttribute("daa-ll", link.textContent);
    })

    document
    .querySelector(".video-conetnt")
    .setAttribute("daa-lh", "Get the document structure, not just the characters.");

    document
    .querySelector(".Get-started-in-minutes")
    .setAttribute("daa-lh", "Get started in minutes");

    document.querySelectorAll(".Get-started-in-minutes a").forEach(link => {
      link.setAttribute("daa-ll", link.textContent);
    });

    document
    .querySelector(".Explore-other-Adobe-Document-Services-APIs")
    .setAttribute("daa-lh", "Explore other Adobe Acrobat Services APIs");

  document
    .querySelectorAll(".Explore-other-Adobe-Document-Services-APIs a")
    .forEach(link => {
      link.setAttribute("daa-ll", link.textContent);
    });

    document
      .querySelector(".We-are-ready-to-help")
      .setAttribute("daa-lh", "We're ready to help");

      document.querySelectorAll(".We-are-ready-to-help a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
      .querySelector(".news-letter")
      .setAttribute("daa-lh", "Newsletter");

    document.querySelectorAll(".news-letter a").forEach(link => {
      link.setAttribute("daa-ll", link.textContent);
    });

    } else if (window.location.pathname.indexOf("doc-generation") >= 0) {
      document
        .querySelector(".Hero-Banner")
        .closest("main")
        .setAttribute("daa-lh", "Body");

      document
        .querySelector(".Hero-Banner")
        .setAttribute("daa-lh", "Hero Banner");
      document.querySelectorAll(".Hero-Banner a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Why-Document-Generation-API")
        .setAttribute("daa-lh", "Why Document Generation API?");

      document
        .querySelectorAll(".Why-Document-Generation-API a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".Key-features-of-Adobe-Document-Generation-API")
        .setAttribute(
          "daa-lh",
          "Key features of Adobe Document Generation API"
        );

      document
        .querySelectorAll(".Key-features-of-Adobe-Document-Generation-API a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });
      document
        .querySelector(".Download-sample-templates-and-data-to-get-started")
        .setAttribute(
          "daa-lh",
          "Download sample templates and data to get started"
        );

      document
        .querySelectorAll(
          ".Download-sample-templates-and-data-to-get-started a"
        )
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".Get-started-in-minutes")
        .setAttribute("daa-lh", "Get started in minutes");

      document.querySelectorAll(".Get-started-in-minutes a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Use-cases-for-Document-Generation-API")
        .setAttribute("daa-lh", "Use cases for Document Generation API");

      document
        .querySelectorAll(".Use-cases-for-Document-Generation-API a")
        .forEach(link => {
          link.setAttribute(
            "daa-ll",
            link.querySelector("h3")?.textContent || link.textContent
          );
        });

      document
        .querySelector(".Explore-other-Adobe-Document-Services-APIs")
        .setAttribute("daa-lh", "Explore other Adobe Acrobat Services APIs");

      document
        .querySelectorAll(".Explore-other-Adobe-Document-Services-APIs a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".We-are-ready-to-help")
        .setAttribute("daa-lh", "We're ready to help");

      document.querySelectorAll(".We-are-ready-to-help a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
      .querySelector(".aws-carousel")
      .setAttribute("daa-lh", "AWS + UiPath");
      document.querySelectorAll(".aws-carousel a.spectrum-Button").forEach(link => {
        if(link.href.indexOf("go/powerautomate_help") >= 0) {
          link.setAttribute("daa-ll", `${link.textContent} | Body | Microsoft`);
        } else {
          link.setAttribute("daa-ll", `${link.textContent} | Body | UiPath`);
        }
      });

      document
      .querySelector(".news-letter")
      .setAttribute("daa-lh", "Newsletter");

      document.querySelectorAll(".news-letter a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document.querySelectorAll(".extract-stepper-api-reference a").forEach(link=>{
        if(link.textContent === 'View API Reference'){
          link.href = `${referenceBaseUrl}#tag/Document-Generation`;
        }
      })

    } else if (window.location.pathname.indexOf("doc-gen-api-template") >= 0) {
      document
      .querySelector(".Hero-Banner")
      .closest("main")
      .setAttribute("daa-lh", "Body");

    document
      .querySelector(".Hero-Banner")
      .setAttribute("daa-lh", "Hero Banner");
    document.querySelectorAll(".Hero-Banner a").forEach(link => {
      link.setAttribute("daa-ll", link.textContent);
    });

      document
        .querySelector(".Download-sample-templates")
        .setAttribute("daa-lh", "Adobe Document Generation API templates");
      document
        .querySelectorAll(".Download-sample-templates a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelectorAll(".Download-sample-templates label")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });
      document
        .querySelector(".We-are-ready-to-help")
        .setAttribute("daa-lh", "We're ready to help");

      document.querySelectorAll(".We-are-ready-to-help a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
    } else if (window.location.pathname.indexOf("pdf-services") >= 0) {
      document
        .querySelector(".Hero-Banner")
        .closest("main")
        .setAttribute("daa-lh", "Body");

      document
        .querySelector(".Hero-Banner")
        .setAttribute("daa-lh", "Hero Banner");

      document.querySelectorAll(".Hero-Banner a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Why-PDF-Services-API")
        .setAttribute("daa-lh", "Why PDF Services API?");
      document.querySelectorAll(".Why-PDF-Services-API a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
      .querySelector(".aws-carousel")
      .setAttribute("daa-lh", "AWS + Microsoft");
      document.querySelectorAll(".aws-carousel a.spectrum-Button").forEach(link => {
        if(link.href.indexOf("/pricing/#AWS") >= 0) {
          link.setAttribute("daa-ll", `${link.textContent} | Body | AWS`);
        } else if(link.href.indexOf("adobe-pdf-services") >= 0) {
          link.setAttribute("daa-ll", `${link.textContent} | Body | UiPath`);
        } else{
          link.setAttribute("daa-ll", `${link.textContent} | Body | Microsoft`);
        }
      });



      document
        .querySelector(".key-features-code-block")
        .setAttribute("daa-lh", "Key features of adobe PDF services API");
      document.querySelectorAll(".key-features-code-block a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document.querySelectorAll(".services-step-three a").forEach(link => {
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}`;
        }
      });
      //codeblock
      document
        .querySelector(".pdf-content-extraction")
        .setAttribute("daa-lh", "PDF content extraction");
      document.querySelectorAll(".pdf-content-extraction a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/Extract-PDF`;
        }
      });
      document.querySelectorAll(".create-pdf a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/Create-PDF`;
        }
      })
      document.querySelectorAll(".create-pdf-html a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/Html-To-PDF`;
        }
      })
      document.querySelectorAll(".pdf-word-doc-gen a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/Document-Generation`;
        }
      })
      document.querySelectorAll(".convert-pdf a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/Export-PDF`;
        }
      })
      document.querySelectorAll(".ocr-pdf-file a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/OCR`;
        }
      })
      document.querySelectorAll(".secure-PDF-file a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/Protect-PDF`;
        }
      })
      document.querySelectorAll(".remove-pwd a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/Remove-Protection`;
        }
      })
      document.querySelectorAll(".get-properties a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/PDF-Properties`;
        }
      })
      document.querySelectorAll(".split-pdf a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/Split-PDF`;
        }
      })
      document.querySelectorAll(".combine-pdf a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/Combine-PDF`;
        }
      })
      document.querySelectorAll(".compress-pdf a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/Compress-PDF`;
        }
      })
      document.querySelectorAll(".reorder-pages a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/Combine-PDF`;
        }
      })
      document.querySelectorAll(".linerarize-pdf a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/Linearize-PDF`;
        }
      })
      document.querySelectorAll(".insert-page a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/Combine-PDF`;
        }
      })
      document.querySelectorAll(".replace-page a").forEach(link=>{
        link.setAttribute("daa-ll", link.textContent);
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/Combine-PDF`;
        }
      })
      document.querySelectorAll(".delete-page a").forEach(link=>{
        link.setAttribute("daa-ll",link.textContent)
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/Page-Manipulation`;
        }
      })
      document.querySelectorAll(".rotate-page a").forEach(link=>{
        link.setAttribute("daa-ll",link.textContent)
        if(link.textContent === "API Reference"){
          link.href = `${referenceBaseUrl}#tag/Page-Manipulation`;
        }
      })
      document.querySelectorAll(".auto-tag a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent)
        if (link.textContent === "API Reference") {
          link.href = `${referenceBaseUrl}#tag/Auto-Tag`;
        }
      })

      document
        .querySelector(".AdobePDFExtractAPI")
        .setAttribute("daa-lh", "Adobe PDF Extract API");
      document.querySelectorAll("AdobePDFExtractAPI a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document
        .querySelector(".start-modifying-pdf")
        .setAttribute("daa-lh", "Start modifying PDFs in a few minutes");
      document.querySelectorAll(".start-modifying-pdf a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document
        .querySelector(".Use-cases-for-PDF-services-API")
        .setAttribute("daa-lh", "Use cases for PDF Services API");
      document
        .querySelectorAll(".Use-cases-for-PDF-services-API a")
        .forEach(link => {
          link.setAttribute(
            "daa-ll",
            link.querySelector("h3")?.textContent || link.textContent
          );
        });
      document
        .querySelector(".other-Adobe-Document-Services-APIs")
        .setAttribute("daa-lh", "Explore other Adobe Acrobat Services APIs");
      document
        .querySelectorAll(".other-Adobe-Document-Services-APIs a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });
      document
        .querySelector(".How-to-get-started")
        .setAttribute("daa-lh", "How to get started?");
      document.querySelectorAll(".How-to-get-started a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
        document.querySelectorAll(".service-code-block div.tabItem").forEach(link=>{
          link.setAttribute("daa-ll", link.title);
        })

        document
        .querySelector(".news-letter")
        .setAttribute("daa-lh", "Newsletter");

      document.querySelectorAll(".news-letter a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

    } else if (window.location.pathname.indexOf("pdf-embed") >= 0) {
      document
        .querySelector(".Hero-Banner")
        .closest("main")
        .setAttribute("daa-lh", "Body");

      document
        .querySelector(".Hero-Banner")
        .setAttribute("daa-lh", "Hero Banner");

      document.querySelectorAll(".Hero-Banner a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document
        .querySelector(".WhyPdfEmbed")
        .setAttribute("daa-lh", "Why PDF Embed API?");
      document.querySelectorAll(".WhyPdfEmbed a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document
        .querySelector(".embed-key-features")
        .setAttribute("daa-lh", "Key features of our free PDF Embed API");
      document.querySelectorAll(".embed-key-features a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document.querySelectorAll(".embed-key-features-code-block div.tabItem").forEach(link=>{
        link.setAttribute("daa-ll", link.title);
      })
      document
        .querySelector(".integration-with-adobe")
        .setAttribute("daa-lh", "Adobe Integration Carosul");
      document.querySelectorAll(".integration-with-adobe a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".start-modifying-pdf")
        .setAttribute("daa-lh", "Start embedding PDFs in a few minutes");
      document.querySelectorAll(".start-modifying-pdf a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document
        .querySelector(".Use-cases-for-PDF-services-API")
        .setAttribute("daa-lh", "Use cases for PDF Embed API");
      document
        .querySelectorAll(".Use-cases-for-PDF-services-API a")
        .forEach(link => {
          link.setAttribute(
            "daa-ll",
            link.querySelector("h3")?.textContent || link.textContent
          );
        });
      document
        .querySelector(".other-Adobe-Document-Services-APIs")
        .setAttribute("daa-lh", "Explore other Adobe Acrobat Services APIs");
      document
        .querySelectorAll(".other-Adobe-Document-Services-APIs a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });
      document
        .querySelector(".How-to-get-started")
        .setAttribute("daa-lh", "How to get started?");
      document.querySelectorAll(".How-to-get-started a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document
      .querySelector(".news-letter")
      .setAttribute("daa-lh", "Newsletter");

    document.querySelectorAll(".news-letter a").forEach(link => {
      link.setAttribute("daa-ll", link.textContent);
    });
    } else if (window.location.pathname.indexOf("pricing") >= 0) {
      // make sure to differentiate between pricing/contact and regular pricing pages
      if(window.location.pathname.indexOf("contact/sales/confirmation")>= 0) {
        document
        .querySelector(".sale-confirmation")
        .closest("main")
        .setAttribute("daa-lh", "Body");
        document.querySelectorAll('.explore-content a').forEach((link)=>{
          link.setAttribute("daa-ll", link.textContent)
        })
        document.querySelectorAll(".explore-content-two a").forEach((link)=>{
          link.setAttribute("daa-ll", link.textContent)
          if (link.textContent === 'Start for free'){
            link.href = `${baseurl}`;
          }
        })
      } else if(window.location.pathname.indexOf("contact/sales") >= 0) {
        document
          .querySelector(".Sales-ContactUs")
          .closest("main")
          .setAttribute("daa-lh", "Body");

        document
          .querySelector(".Hero-Banner")
          .setAttribute("daa-lh", "Hero Banner");

        document.querySelectorAll(".Hero-Banner a").forEach((link) => {
          link.setAttribute("daa-ll", link.textContent);
        });

        document
          .querySelector(".Sales-Form")
          .setAttribute("daa-lh", "Sales Form");

        document.querySelectorAll(".Sales-Form a").forEach((link) => {
          link.setAttribute("daa-ll", `Sales | ${link.textContent}`);
        });
      } else if(window.location.pathname.indexOf("contact/support/confirmation") >= 0 ){
        document
        .querySelector(".support-confirmation")
        .closest("main")
        .setAttribute("daa-lh", "Body");

        document.querySelectorAll(".support-explore-content a").forEach((link)=>{
          console.log('support-explore-content',link);
          link.setAttribute("daa-ll", link.textContent);
        })

        document.querySelectorAll(".support-explore-content-two a").forEach((link)=>{
          link.setAttribute("daa-ll", link.textContent);
        })
      } else if(window.location.pathname.indexOf("contact/support") >= 0) {
        document
          .querySelector(".Tech-Support-ContactUs")
          .closest("main")
          .setAttribute("daa-lh", "Body");

        document
          .querySelector(".Tech-Support-Form")
          .setAttribute("daa-lh", "Sales Form");

        document.querySelectorAll(".Tech-Support-Form a").forEach((link) => {
          link.setAttribute("daa-ll", `Tech-Support | ${link.textContent}`);
        });

        document
          .querySelector(".Hero-Banner")
          .setAttribute("daa-lh", "Hero Banner");

        document.querySelectorAll(".Hero-Banner a").forEach((link) => {
          link.setAttribute("daa-ll", link.textContent);
        });

      }else if(window.location.pathname.indexOf("contacts")>= 0){

      } else if(window.location.pathname.indexOf("contact/sales/seal")>= 0){

      } else if(window.location.pathname.indexOf("contact") >= 0) {
        document
          .querySelector(".Contact-Home")
          .closest("main")
          .setAttribute("daa-lh", "Body");

        document
          .querySelector(".Contact-Home-Wrapper")
          .setAttribute("daa-lh", "Contact Home Wrapper");

        document.querySelectorAll(".Contact-Home-Wrapper a").forEach((link) => {
          link.setAttribute("daa-ll", link.textContent);
        });

        document
          .querySelector(".Hero-Banner")
          .setAttribute("daa-lh", "Hero Banner");

        document.querySelectorAll(".Hero-Banner a").forEach((link) => {
          link.setAttribute("daa-ll", link.textContent);
        });

      }else {
        document
          .querySelector(".Hero-Banner")
          .closest("main")
          .setAttribute("daa-lh", "Body");

        document
          .querySelector(".Hero-Banner")
          .setAttribute("daa-lh", "Hero Banner");

        document.querySelectorAll(".Hero-Banner a").forEach((link) => {
          link.setAttribute("daa-ll", link.textContent);
        });

        document
          .querySelector(".pdf-service")
          .setAttribute("daa-lh", "Adobe PDF Services API");
        document.querySelectorAll(".pdf-service a").forEach((link) => {
          link.setAttribute("daa-ll", link.textContent);
        });

        document
          .querySelector(".pdf-embed")
          .setAttribute("daa-lh", "Adobe PDF Embed API");
        document.querySelectorAll(".pdf-embed a").forEach((link) => {
          link.setAttribute("daa-ll", link.textContent);
        });

        document
          .querySelector(".why-are-ready-to-help")
          .setAttribute("daa-lh", "We're ready to help");

        document
          .querySelectorAll(".why-are-ready-to-help a")
          .forEach((link) => {
            link.setAttribute("daa-ll", link.textContent);
          });
      }

    }else if(window.location.pathname.indexOf('faq/tech-support/ETLA-onboarding-steps')>=0){
      document.querySelectorAll('.useCaseCard a').forEach(link=>{
        openPdf(link.href)
      })
    }
     else if (window.location.pathname.indexOf("use-cases") >= 0) {
      document
        .querySelector(".Hero-Banner")
        .closest("main")
        .setAttribute("daa-lh", "Body");
      document
        .querySelector(".Hero-Banner")
        .setAttribute("daa-lh", "Hero Banner");

      document
        .querySelector(".Sales-Proposals-and-Contracts")
        ?.setAttribute("daa-lh", "Sales Proposals and Contracts");

      document
        .querySelectorAll(".Sales-Proposals-and-Contracts a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".Legal-Contracts")
        ?.setAttribute("daa-lh", "Legal Contracts");

      document.querySelectorAll(".Legal-Contracts a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".NDA-Creation")
        ?.setAttribute("daa-lh", "NDA Creation");

      document.querySelectorAll(".NDA-Creation a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Employee-Offer-Letters")
        ?.setAttribute("daa-lh", "Employee Offer Letters");

      document.querySelectorAll(".Employee-Offer-Letters a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Legal-Letters-and-Statements")
        ?.setAttribute("daa-lh", "Legal Letters and Statements");

      document
        .querySelectorAll(".Legal-Letters-and-Statements a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".Loan-Document-Workflows")
        ?.setAttribute("daa-lh", "Loan Document Workflows");

      document.querySelectorAll(".Loan-Document-Workflows a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Search-and-Indexing")
        ?.setAttribute("daa-lh", "Search and Indexing");

      document.querySelectorAll(".Search-and-Indexing a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Review-and-Approval")
        ?.setAttribute("daa-lh", "Review and Approva");

      document.querySelectorAll(".Review-and-Approval a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document
        .querySelector(".Student-Teacher-Collaboration")
        ?.setAttribute("daa-lh", "Student Teacher Collaboration");

      document
        .querySelectorAll(".Student-Teacher-Collaboration a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".Content-Based-Process-Automation")
        ?.setAttribute("daa-lh", "Content Based Process Automation");

      document
        .querySelectorAll(".Content-Based-Process-Automation a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".Data-Analysis")
        ?.setAttribute("daa-lh", "Data Analysis");

      document.querySelectorAll(".Data-Analysis a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Republish-PDF-Content")
        ?.setAttribute("daa-lh", "Republish PDF Content");

      document.querySelectorAll(".Republish-PDF-Content a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Data-Analysis-for-Finance")
        ?.setAttribute("daa-lh", "Data Analysis for Finance");

      document
        .querySelectorAll(".Data-Analysis-for-Finance a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document.querySelector(".Invoices")?.setAttribute("daa-lh", "Invoices");

      document.querySelectorAll(".Invoices a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document
        .querySelector(".Purchase-Orders")
        ?.setAttribute("daa-lh", "Purchase Orders");

      document.querySelectorAll(".Purchase-Orders a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
      document
        .querySelector(".Sales-Quote")
        ?.setAttribute("daa-lh", "Sales Quote");

      document.querySelectorAll(".Sales-Quote a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Streamline-procurement-processes")
        ?.setAttribute("daa-lh", "Streamline procurement processes");

      document
        .querySelectorAll(".Streamline-procurement-processes a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".Digital-Content-Publishing")
        ?.setAttribute("daa-lh", "Digital Content Publishing");

      document
        .querySelectorAll(".Digital-Content-Publishing a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".Automated-Report-Generation")
        ?.setAttribute("daa-lh", "Automated Report Generation");

      document
        .querySelectorAll(".Automated-Report-Generation a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".Course-and-Degree-Certificate")
        ?.setAttribute("daa-lh", "Course and Degree Certificate");

      document
        .querySelectorAll(".Course-and-Degree-Certificate a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".Employee-Letters")
        ?.setAttribute("daa-lh", "Employee Letters");

      document.querySelectorAll(".Employee-Letters a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Employee-Onboarding-Materials")
        ?.setAttribute("daa-lh", "Employee Onboarding Materials");

      document
        .querySelectorAll(".Employee-Onboarding-Materials a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".Field-service-management")
        ?.setAttribute("daa-lh", "Field service management");

      document.querySelectorAll(".Field-service-management a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Job-Posting")
        ?.setAttribute("daa-lh", "Job Posting");

      document.querySelectorAll(".Job-Posting a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Managing-brand-assets")
        ?.setAttribute("daa-lh", "Managing brand assets");

      document.querySelectorAll(".Managing-brand-assets a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".On-Demand-Report-Creation")
        ?.setAttribute("daa-lh", "On-Demand Report Creation");

      document
        .querySelectorAll(".On-Demand-Report-Creation a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".Processing-employee-resumes")
        ?.setAttribute("daa-lh", "Processing employee resumes");

      document
        .querySelectorAll(".Processing-employee-resumes a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });
    }
  }
};
