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
    ).filter(el => el.textContent === "Start free trial");
    let getStartedButtonArr = Array.from(document.querySelectorAll("a")).filter(
      el => el.textContent === "Get started"
    );

    //local
    let navLinksBaseUrl = "";
    let isLocal = true;
    // stage/deploy
    if (window.location.host.indexOf("adobe.com") >= 0 || window.location.host.indexOf("github.io") >= 0)  {
      navLinksBaseUrl = "/document-services";
      isLocal = false;
    }
    // stage
    let baseurl =
      "https://dc.stage.acrobat.com/dc-integration-creation-app-cdn/main.html";

    // production
    if (
      window.location.host.indexOf("developer.adobe.com") >= 0 ||
      window.location.host.indexOf("adobe.io") >= 0
    ) {
      baseurl =
        "https://documentcloud.adobe.com/dc-integration-creation-app-cdn/main.html";
    }

    getCredentialsButton.href = `${baseurl}`;

    let header = document.querySelector("header");
    header.setAttribute("daa-lh", "Gnav");
    header
      .querySelector("a[href='/']")
      ?.setAttribute("daa-ll", "Adobe Developer");
    header
      .querySelector("a[href='/apis/']")
      ?.setAttribute("daa-ll", "Products");
    header
      .querySelector(`a[href='${navLinksBaseUrl}/homepage/']`)
      ?.setAttribute("daa-ll", "Adobe Document Services");
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

    let footer = document.querySelector("footer");
    footer.setAttribute("daa-lh", "Footer");
    footer.querySelectorAll("a").forEach(link => {
      if (link.textContent) {
        link.setAttribute("daa-ll", link.textContent);
      }
    });

    if (window.location.pathname.indexOf("pdf-services") >= 0) {
      getCredentialsButton.href = `${baseurl}?api=pdf-services-api`;

      getStartedButtonArr.map(getStartedButton => {
        getStartedButton.href = `${baseurl}?api=pdf-services-api`;
      });

      startFreeTrialButtonArr.forEach((startFreeTrialButton, index) => {
        startFreeTrialButton.href = `${baseurl}?api=pdf-services-api`;
        if (index === 0) {
        } else if (index === 1) {
        }
      });
    } else if (window.location.pathname.indexOf("doc-generation") >= 0) {
      getCredentialsButton.href = `${baseurl}?api=document-generation-api`;

      getStartedButtonArr.map(getStartedButton => {
        getStartedButton.href = `${baseurl}?api=document-generation-api`;
      });

      startFreeTrialButtonArr.forEach((startFreeTrialButton, index) => {
        startFreeTrialButton.href = `${baseurl}?api=document-generation-api`;
      });
    } else if (window.location.pathname.indexOf("pdf-extract") >= 0) {
      getCredentialsButton.href = `${baseurl}?api=pdf-extract-api`;

      getStartedButtonArr.map(getStartedButton => {
        getStartedButton.href = `${baseurl}?api=pdf-extract-api`;
      });

      startFreeTrialButtonArr.forEach((startFreeTrialButton, index) => {
        startFreeTrialButton.href = `${baseurl}?api=pdf-extract-api`;
      });
    } else if (window.location.pathname.indexOf("pdf-embed") >= 0) {
      getCredentialsButton.href = `${baseurl}?api=pdf-embed-api`;

      getStartedButtonArr.map(getStartedButton => {
        getStartedButton.href = `${baseurl}?api=pdf-embed-api`;
      });

      let getFreecredentialsButtonArr = Array.from(
        document.querySelectorAll("a")
      ).filter(el => el.textContent === "Get free credentials");
      getFreecredentialsButtonArr.forEach((getFreecredentialsButton, index) => {
        getFreecredentialsButton.href = `${baseurl}?api=pdf-embed-api`;
      });
    } else if (
      window.location.pathname.indexOf("pricing") >= 0 &&
      startFreeTrialButtonArr
    ) {
      startFreeTrialButtonArr.map(startFreeTrialButton => {
        startFreeTrialButton.href = `${baseurl}?api=pdf-embed-api`;
      });
      getStartedButtonArr.map(getStartedButton => {
        getStartedButton.href = `${baseurl}?api=pdf-embed-api`;
      });
    } else {
      if (getStartedButtonArr) {
        getStartedButtonArr.map(getStartedButton => {
          getStartedButton.href = `${baseurl}`;
        });
      }
    }

    if (
      window.location.pathname.indexOf("homepage") >= 0 ||
      (window.location.pathname === "/" && isLocal) || (window.location.pathname === `${navLinksBaseUrl}/` && !isLocal)
    ) {
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
      document
        .querySelector(".Use-cases-for-Adobe-Document-Services")
        .setAttribute("daa-lh", "Use cases for Adobe Document Services");
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

      // setTimeout(() => {
      //   const iframe = document.getElementById("iframevideo");
      //   if(iframe){
      //     iframe.setAttribute("daa-lh", "Adobe PDF Services API Overview Video");
      //     var iDocument = iframe.contentWindow.document;
      //     const bodyElement = iDocument.getElementsByTagName("body")[0];
      //     const element = bodyElement.querySelector('a');
      //     element.setAttribute("daa-ll", 'Adobe PDF Services API Overview');

      //     element.addEventListener("click", () => {
      //       setTimeout(() => {
      //         const body1Element = iDocument.getElementsByTagName("body")[0];
      //         body1Element.querySelector('.ytp-large-play-button.ytp-button')
      //         ?.setAttribute("daa-ll", 'Adobe PDF Services API Overview');
      //       }, 1500);
      //     });
      //   }
      // }, 1000);
    } else if (window.location.pathname.indexOf("pdf-extract") >= 0) {
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
        .querySelector(".Key-features-of-Adobe-PDF-Extract-API")
        .closest("section")
        .setAttribute("daa-lh", "Key features of Adobe PDF Extract API");
      document
        .querySelectorAll(".Key-features-of-Adobe-PDF-Extract-API a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".Use-cases-for-Adobe-PDF-Extract-API")
        .setAttribute("daa-lh", "Use cases for Document Generation API");

      document
        .querySelectorAll(".Use-cases-for-Adobe-PDF-Extract-API-card a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.querySelector("h3")?.textContent);
        });

      document
        .querySelectorAll(".Use-cases-for-Adobe-PDF-Extract-API a")
        .forEach(link => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".How-it-works")
        .setAttribute("daa-lh", "How it works");

      document.querySelectorAll(".How-it-works a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Get-started-in-minutes")
        .setAttribute("daa-lh", "Get started in minutes");

      document.querySelectorAll(".Get-started-in-minutes a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Explore-other-Adobe-Document-Services-APIs")
        .setAttribute("daa-lh", "Explore other Adobe Document Services APIs");

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
        .querySelector(".AdobeMsBlade")
        .setAttribute("daa-lh", "Adobe Microsoft Blade");

      document.querySelectorAll(".AdobeMsBlade a").forEach(link => {
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
        .setAttribute("daa-lh", "Explore other Adobe Document Services APIs");

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
        .setAttribute("daa-lh", "Adobe document generation API templates");
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
      document.querySelectorAll(".aws-carousel a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".key-features-code-block")
        .setAttribute("daa-lh", "Key features of adobe PDF services API");
      document.querySelectorAll(".key-features-code-block a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      //codeblock
      document
        .querySelector(".pdf-content-extraction")
        .setAttribute("daa-lh", "PDF content extraction");
      document.querySelectorAll(".pdf-content-extraction a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

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
        .setAttribute("daa-lh", "Use cases for PDF services API");
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
        .setAttribute("daa-lh", "Explore other Adobe Document Services APIs");
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
        .setAttribute("daa-lh", "Explore other Adobe Document Services APIs");
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
    } else if (window.location.pathname.indexOf("pricing") >= 0) {
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
        .querySelector(".pdf-service")
        .setAttribute("daa-lh", "Adobe PDF Services API");
      document.querySelectorAll(".pdf-service a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".pdf-embed")
        .setAttribute("daa-lh", "Adobe PDF Embed API");
      document.querySelectorAll(".pdf-embed a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".why-are-ready-to-help")
        .setAttribute("daa-lh", "We're ready to help");

      document.querySelectorAll(".why-are-ready-to-help a").forEach(link => {
        link.setAttribute("daa-ll", link.textContent);
      });
    } else if (window.location.pathname.indexOf("use-cases") >= 0) {
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
