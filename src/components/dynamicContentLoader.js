/*
 * Copyright 2022 Adobe. All rights reserved.
 */
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import "@spectrum-css/typography";
import Digging_out_data from "../pages/images/Digging_out_data.jpg";
import Generate_documents from "../pages/images/generate_documents.jpg";
import Make_PDFs_searchable from "../pages/images/Make_PDFs_searchable.png";
import resourceImage from "../pages/images/resource_hero_img.jpg";
import K2Nintex from "../pages/images/K2Nintex.png";
import AdobeInDesign from "../pages/images/AdobeInDesign.png";
import CambridgeAssessment from "../pages/images/Cambridge-Assessment.jpeg";
import Evisort from "../pages/images/Evisort.jpeg";
import Waymark from "../pages/images/Waymark.jpg";
import AISingapore from "../pages/images/AISingapore.png";
import K2NintexPDF from "../pages/resources/K2Nintex.pdf";
import AdobeInDesignPDF from "../pages/resources/AdobeInDesign.pdf";
import CambridgeAssessmentPDF from "../pages/resources/Cambridge-Assessment.pdf";
import EvisortPDF from "../pages/resources/Evisort.pdf";
import WaymarkPDF from "../pages/resources/Waymark-Story.pdf";
import AISingaporePDF from "../pages/resources/AI-Singapore-Story.pdf";

//Filter the image url path for loading the image under image tag source.
const getImageURl = (url) => {
  let imageURL = url.split("/");
  imageURL = imageURL[imageURL.length - 1];
  imageURL = `https://cdn.experienceleague.adobe.com/thumb/${imageURL}`;
  return imageURL;
};

//Filter the image url path from the iframe source content for loading the images under image tag source here.
const getIframeImage = (iframsrc) => {
  let div = document.createElement("div");
  div.innerHTML = iframsrc;
  let firstImage = div.getElementsByTagName("img")[0];
  let rawImgSrc = firstImage ? firstImage.getAttribute("src") : "";
  return rawImgSrc;
};

//Construct the feature blade content.
const featuredContent = [
  {
    Title: "Make PDFs Searchable (OCR)",
    URL: "https://medium.com/adobetech/make-pdfs-searchable-ocr-after-importing-into-sharepoint-1a8037744841",
    Thumbnail: Make_PDFs_searchable,
    class:'make-pdfs-searchable',
    desc:"Make PDFs Searchable (OCR) After Importing into SharePoint | by Ben Vanderberg | Adobe Tech Blog | Medium"
  },
  {
    Title: "Generate Documents",
    URL: "https://medium.com/adobetech/generate-documents-and-send-in-bulk-for-signature-in-microsoft-power-automate-807838092dcf",
    Thumbnail: Generate_documents,
    class:"generate_documents",
    desc:"Learn how you can generate and send documents in bulk using Adobe Acrobat Sign, Document Generation API,and Microsoft Power Automate."
  },
  {
    Title: "Digging Out Data with Adobe PDF Extract API",
    URL: "https://medium.com/adobetech/digging-out-data-with-adobe-pdf-extract-api-cf4b1712f05a",
    Thumbnail: Digging_out_data,
    class:"digging_out_data",
    desc:"There is an untold amount of scientific data in the millions of reports and scientific studies over the past few centuries. "
  },
];


//Construct the custom stories blade content.
const StoriesContent = [
  {
    Title: "K2 Nintex",
    URL: K2NintexPDF,
    Thumbnail: K2Nintex,
    desc:"Nintex transforms K2 Cloud workflows with Adobe Acrobat Services APIs."
  },
  {
    Title: "Adobe InDesign",
    URL: AdobeInDesignPDF,
    Thumbnail: AdobeInDesign,
    desc:"Adobe InDesign brings its new share for review features to life with Adobe Acrobat Services APIs."
  },
  {
    Title: "Cambridge Assessment",
    URL: CambridgeAssessmentPDF,
    Thumbnail: CambridgeAssessment,
    desc:"Cambridge Assessment intends to digitize more than 100 years of test material with Adobe PDF Extract API."
  },
  {
    Title: "Evisort",
    URL: EvisortPDF,
    Thumbnail: Evisort,
    desc:"Evisort uses Adobe PDF Extract API to bring visibility and intelligence to contracts."
  },
  {
    Title: "Waymark",
    URL: WaymarkPDF,
    Thumbnail: Waymark,
    desc:"Waymark Tech enables rapid impact assessments and compliance workflows with Adobe PDF Extract API."
  },
  {
    Title: "AI Singapore (AISG)",
    URL: AISingaporePDF,
    Thumbnail: AISingapore,
    desc:"AI Singapore accelerates deep learning models with Adobe PDF Extract API."
  },
];

const DynamicContentLoader = ({
  api = "",
  content = null,
  theme,
  className,
}) => {
  const [resData, setResData] = useState([]);
  //Fetch the content from the external API for Blog section.
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((res) => setResData(res))
      .catch((err) => setResData([]));
  }, [api]);

  return (
    <div
      className={classNames(
        className,
        `spectrum--${theme} main secondary-page`
      )}
      css={css`
        background: var(--spectrum-global-color-gray-100);
      `}
    >
      {content === "usingAdobePDFService" && (
        <section className="sdk-rsrc-release Adobe-PDF-Services-API-Overview">
          <div className="release-container">
            <div className="release-wrapper">
              <div className="release-wrapper-img">
                  <iframe
                    id="iframevideo"
                    src="https://www.youtube.com/embed/GCpSy78IDoE?&autoplay=1"
                    title="YouTube video player"
                    srcdoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/GCpSy78IDoE?&autoplay=1 daa-ll="Adobe PDF Services API Overview"><img src=${resourceImage} alt=""><span >▶</span></a>`}
                    css={css`
                      border: 0;
                      width: 100%;
                      height: 100%;
                    `}
                  />
              </div>
              <div className="release-copy-wrapper">
                <h3 className="spectrum-Heading spectrum-Heading--sizeL">
                  Adobe PDF Services API Overview
                </h3>
                <p>
                  Video overview of how Adobe Document Generation API, Adobe
                  Sign API, PDF Services API, PDF Embed API, and PDF Extract API
                  can help you automate document processes within your apps.
                </p>
                <div className="release-cta">
                  <a
                    href={
                      "https://www.youtube.com/watch?v=GCpSy78IDoE&list=PLcVEYUqU7VRc1ipQLtY1kcmpf9wiCgXZ5"
                    }
                    target="_blank"
                    
                    className="button-link"
                  >
                    Watch the video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {content === "feature" && (
        <>
          <section className="sdk-rsrc-anchor">
            <div className="anchor-container">
              <div className="anchor-wrapper">
                <div className="anchor">
                  <span>
                    <a href="#tuts" className="quiet-btn">
                      Tutorials
                    </a>
                  </span>
                  <span>
                    <a href="#blog" className="quiet-btn">
                      Blog
                    </a>
                  </span>
                  <span>
                    <a href="#customer" className="quiet-btn">
                      Customer stories
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </section>

          <div className="masterblog">
            <section className="sdk-rsrc-blog">
              <div className="blog-container">
                <div className="header-and-more">
                  <h3 className="spectrum-Heading spectrum-Heading--sizeL">Featured</h3></div>
                  <div className="blog-wrapper">
                    {featuredContent.map((data) => {
                      return (
                        <div key={data.link} className='cardView'>
                          <a href={data.URL} target="_blank" rel="noreferrer" key={data.Title}>
                            <div className="blog-img-container">
                              <div className={data.class} />
                              <img
                                className="featured-image"
                                src={data.Thumbnail}
                                alt={""}
                              />
                            </div>
                            <p className="blog-title blog-title-height">{data.Title}</p>
                          </a>
                          <p className="blog-text">{data.desc}</p>
                        </div>
                      );
                    })}
                  </div>              
                </div>
            </section>
          </div>

        </>
      )}
      {/* Load the tutorial blade content */}
      {content === "tutorial" && (
        <div className="main secondary-page">
          <section className="sdk-rsrc-tutorial" id="tuts">
            <div className="tutorial-container">
              <div className="header-and-more">
                <h3 className="spectrum-Heading spectrum-Heading--sizeL">
                  Tutorials
                </h3>
                <a
                  href="https://experienceleague.adobe.com/docs/document-services/document-services/overview.html"
                  target="_blank"
                  rel="noreferrer"
                  css={css`
                    text-decoration: none;
                  `}
                >
                  <div className="more-items">
                    <span>All tutorials</span>
                    <div className="more-arrow1">
                      <div className="arrow1 right"></div>
                    </div>
                  </div>
                </a>
              </div>

              <div
                className={"spectrum-Body spectrum-Body--sizeL"}
                css={css`
                  text-align: left;
                `}
              >
                Find tutorials from novice to expert to help you expand your skills.
              </div>

              <div className="tutorial-wrapper">
                {resData?.data?.map((data) => (
                  <div className="tutorial cardView" key={data.Title}>
                    <a href={data.URL} target="_blank" rel="noreferrer" key={data.Title} daa-ll={data.Title}>
                      <div
                        className="tut-thumb1"
                        style={`background: url(${getImageURl(
                          data.Thumbnail
                        )})`}
                      ></div>
                      <p className='tutorial-title'>{data.Title}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
      {/* Load the blog blade content */}
      {content === "blog" && (
        <div className="masterblog">
          <section className="sdk-rsrc-blog" id="blog">
            <div className="blog-container">
              <div className="header-and-more">
                <h3 className="spectrum-Heading spectrum-Heading--sizeL">
                  Blog
                </h3>
                <a
                  href="https://medium.com/adobetech/tagged/adobe-document-cloud"
                  target="_blank"
                  rel="noreferrer"
                  css={css`
                    text-decoration: none;
                  `}
                >
                  <div className="more-items">
                    <span>More Blogs</span>
                    <div className="more-arrow1">
                      <div className="arrow1 right"></div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="blog-wrapper">
                {resData.responseData?.feed?.entries.map((data) => {
                  return (
                    <div key={data.link} className='cardView'>
                      <a href={data.link} target="_blank" rel="noreferrer" daa-ll={data.title}>
                        <div className="blog-img-container">
                          <img
                            src={getIframeImage(data.content)}
                            alt={""}
                          />
                        </div>
                        <p className="blog-title">{data.title}</p>
                      </a>
                      <p className="blog-text">{data.contentSnippet}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Load the Custom Stories blade content */}
      {content === "CustomerStories" && (
        <div className="masterStories">
          <section class="sdk-rsrc-stories" id="customer">
            <div class="stories-container">
              <div className="header-and-more">
                <h3 className="spectrum-Heading spectrum-Heading--sizeL">
                Customer stories
                </h3>
              </div>              
              <div class="headliner spectrum-Body--sizeL">
                See how our customers are building great experiences and succeeding with Adobe
              </div>
              <div className="stories-wrapper">
                {StoriesContent.map((data) => {
                  return (
                    <div className="customer cardView">
                      <a href={data.URL}>
                        <img
                          className="logo"
                          src={data.Thumbnail}
                          alt={""}
                        />
                      </a>
                      <div className="industry">{data.Title}</div>
                      <a href={data.URL}>
                        <div className="profile">{data.desc}</div>
                      </a>
                    </div>                    
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

DynamicContentLoader.propTypes = {
  theme: PropTypes.string,
  content: PropTypes.string,
  api: PropTypes.string,
};

export { DynamicContentLoader };
