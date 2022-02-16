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
  if (isBrowser) {
    let siteSection = location.pathname.split("/");
    window.digitalData.page.pageInfo.siteSection =
      siteSection.pop() || siteSection.pop();

    window.digitalData.page.pageInfo.breadCrumbs = [];
    document.querySelectorAll(".spectrum-Breadcrumbs-item").forEach((item) => {
      window.digitalData.page.pageInfo.breadCrumbs.push(item.innerText);
    });

    if (window._satellite) {
      window._satellite.track("state", {
        digitalData: window.digitalData._snapshot(),
      });
    }

    let getCredentialsButton = Array.from(document.querySelectorAll("a")).find(
      (el) => el.textContent === "Get credentials"
    );
    let startFreeTrialButtonArr = Array.from(
      document.querySelectorAll("a")
    ).filter((el) => el.textContent === "Start free trial");
    let getStartedButtonArr = Array.from(document.querySelectorAll("a")).filter(
      (el) => el.textContent === "Get started"
    );

    //local
    let navLinksBaseUrl = "";
    let isLocal = true;
    // stage/deploy
    if (window.location.host.indexOf("adobe.com") >= 0) {
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
        `a[href='/use-cases/agreements-and-contracts/sales-proposals-and-contracts/']`
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
    footer.querySelectorAll("a").forEach((link) => {
      if (link.textContent) {
        link.setAttribute("daa-ll", link.textContent);
      }
    });

    if (window.location.pathname.indexOf("pdf-services") >= 0) {
      getCredentialsButton.href = `${baseurl}?api=pdf-services-api`;

      getStartedButtonArr.map((getStartedButton) => {
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

      getStartedButtonArr.map((getStartedButton) => {
        getStartedButton.href = `${baseurl}?api=document-generation-api`;
      });

      startFreeTrialButtonArr.forEach((startFreeTrialButton, index) => {
        startFreeTrialButton.href = `${baseurl}?api=document-generation-api`;
      });
    } else if (window.location.pathname.indexOf("pdf-extract") >= 0) {
      getCredentialsButton.href = `${baseurl}?api=pdf-extract-api`;

      getStartedButtonArr.map((getStartedButton) => {
        getStartedButton.href = `${baseurl}?api=pdf-extract-api`;
      });

      startFreeTrialButtonArr.forEach((startFreeTrialButton, index) => {
        startFreeTrialButton.href = `${baseurl}?api=pdf-extract-api`;
      });
    } else if (window.location.pathname.indexOf("pdf-embed") >= 0) {
      getCredentialsButton.href = `${baseurl}?api=pdf-embed-api`;

      getStartedButtonArr.map((getStartedButton) => {
        getStartedButton.href = `${baseurl}?api=pdf-embed-api`;
      });

      let getFreecredentialsButtonArr = Array.from(
        document.querySelectorAll("a")
      ).filter((el) => el.textContent === "Get free credentials");
      getFreecredentialsButtonArr.forEach((getFreecredentialsButton, index) => {
        getFreecredentialsButton.href = `${baseurl}?api=pdf-embed-api`;
      });
    } else if (
      window.location.pathname.indexOf("pricing") >= 0 &&
      startFreeTrialButtonArr
    ) {
      startFreeTrialButtonArr.map((startFreeTrialButton) => {
        startFreeTrialButton.href = `${baseurl}?api=pdf-embed-api`;
      });
      getStartedButtonArr.map((getStartedButton) => {
        getStartedButton.href = `${baseurl}?api=pdf-embed-api`;
      });
    } else {
      if (getStartedButtonArr) {
        getStartedButtonArr.map((getStartedButton) => {
          getStartedButton.href = `${baseurl}`;
        });
      }
    }

    if (
      window.location.pathname.indexOf("homepage") >= 0 ||
      (window.location.pathname === "/" && isLocal)
    ) {
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
        .querySelector(".Adobe-PDF-Services-API")
        .setAttribute("daa-lh", "Adobe PDF Services API");
      document.querySelectorAll(".Adobe-PDF-Services-API a").forEach((link) => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Adobe-PDF-Extract-API")
        .setAttribute("daa-lh", "Adobe PDF Extract API");
      document.querySelectorAll(".Adobe-PDF-Extract-API a").forEach((link) => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Adobe-Document-Generation-API")
        .setAttribute("daa-lh", "Adobe Document Generation API");
      document
        .querySelectorAll(".Adobe-Document-Generation-API a")
        .forEach((link) => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".Adobe-PDF-Embed-API")
        .setAttribute("daa-lh", "Adobe PDF Embed API");
      document.querySelectorAll(".Adobe-PDF-Embed-API a").forEach((link) => {
        link.setAttribute("daa-ll", link.textContent);
      });

      document
        .querySelector(".Designed-for-developers")
        .setAttribute("daa-lh", "Designed for developers");
      document
        .querySelectorAll(".Designed-for-developers a")
        .forEach((link) => {
          link.setAttribute("daa-ll", link.textContent);
        });

      document
        .querySelector(".Use-cases-for-Adobe-Document-Services")
        .setAttribute("daa-lh", "Use cases for Adobe Document Services");
      document
        .querySelectorAll(".Use-cases-for-Adobe-Document-Services a")
        .forEach((link) => {
          link.setAttribute("daa-ll", link.querySelector("h3")?.textContent);
        });

      document
        .querySelector(".Customer-Stories")
        .setAttribute("daa-lh", "Customer Stories");
      document.querySelectorAll(".Customer-Stories a").forEach((link) => {
        link.setAttribute("daa-ll", link.querySelector("h3")?.textContent);
      });

      document
        .querySelector(".How-to-get-started")
        .setAttribute("daa-lh", "How to get started?");
      document.querySelectorAll(".How-to-get-started a").forEach((link) => {
        link.setAttribute("daa-ll", link.textContent);
      });
    }
  }
};
