import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import "@spectrum-css/typography";
import Digging_out_data from "../pages/images/Digging_out_data.jpg";
import Generate_documents from "../pages/images/generate_documents.jpg";
import Make_PDFs_searchable from "../pages/images/Make_PDFs_searchable.png";
import resourceImage from "../pages/images/resource_hero_img.jpg";

const getImageURl = (url) => {
  let imageURL = url.split("/");
  imageURL = imageURL[imageURL.length - 1];
  imageURL = `https://cdn.experienceleague.adobe.com/thumb/${imageURL}`;
  return imageURL;
};

const getIframeImage = (iframsrc) => {
  let div = document.createElement("div");
  div.innerHTML = iframsrc;
  let firstImage = div.getElementsByTagName("img")[0];
  let rawImgSrc = firstImage ? firstImage.getAttribute("src") : "";
  return rawImgSrc;
};

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
    desc:"Learn how you can generate and send documents in bulk using Adobe Sign, Document Generation API,and Microsoft Power Automate."
  },
  {
    Title: "Digging Out Data with Adobe PDF Extract API",
    URL: "https://medium.com/adobetech/digging-out-data-with-adobe-pdf-extract-api-cf4b1712f05a",
    Thumbnail: Digging_out_data,
    class:"digging_out_data",
    desc:"There is an untold amount of scientific data in the millions of reports and scientific studies over the past few centuries. "
  },
];

const DynamicContentLoader = ({
  api = "",
  content = null,
  theme,
  className,
}) => {
  const [resData, setResData] = useState([]);

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
      {content === "usingAdobePDFService" && resData?.data?.length > 0 && (
        <section className="sdk-rsrc-release">
          <div className="release-container">
            <div className="release-wrapper">
              <div className="release-wrapper-img">
                <a href={resData?.data[0].URL} target="_parent">
                  <iframe
                    src="https://www.youtube.com/embed/GCpSy78IDoE?&autoplay=1"
                    title="YouTube video player"
                    srcdoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/GCpSy78IDoE?&autoplay=1><img src=${resourceImage} alt='Adobe PDF Services API Overview'><span >▶</span></a>`}
                    css={css`
                      border: 0;
                      width: 100%;
                      height: 100%;
                    `}
                  />
                </a>
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
                    rel="noreferrer"
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
                      <a href={data.URL} target="_parent" key={data.Title}>
                        <div className="blog-img-container">
                          <div className={data.class} />
                          <img
                             className="featured-image"
                             src={data.Thumbnail}
                             alt={data.Title}
                          />
                        </div>
                        <p className="blog-title blog-title-height">{data.Title}</p>
                      </a>
                      <p className="blog-text">{data.desc}</p>
                    </div>
                  );
                })}
              </div>
              {/* <div className="featured-wrapper">
                {featuredContent.map((data) => (
                  <a href={data.URL} target="_parent" key={data.Title}>
                    <div className="featured-thumb feat1">
                      <img
                        src={data.Thumbnail}
                        className="featured-img-dimensions"
                        alt={data.Title}
                      />
                    </div>
                    <div className="featured-copy-wrapper">
                      <div className="featured-title">Featured</div>
                      <div className="featured-text">{data.Title}</div>
                    </div>
                  </a>
                ))}
              </div> */}
              </div>
          </section>
            </div>

        </>
      )}
      {content === "tutorial" && resData?.data?.length > 0 && (
        <div className="main secondary-page">
          <section className="sdk-rsrc-tutorial" id="tuts">
            <div className="tutorial-container">
              <div className="header-and-more">
                <h3 className="spectrum-Heading spectrum-Heading--sizeL">
                  Tutorials
                </h3>
                <a
                  href="https://experienceleague.adobe.com/docs/document-services/document-services/overview.html"
                  target="_parent"
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
                Find tutorials from novice to expert to help you expand your
                skills.
              </div>

              <div className="tutorial-wrapper">
                {resData?.data?.map((data) => (
                  <div className="tutorial cardView" key={data.Title}>
                    <a href={data.URL} target="_parent" key={data.Title}>
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
      {content === "blog" && resData.responseData?.feed && (
        <div className="masterblog">
          <section className="sdk-rsrc-blog" id="blog">
            <div className="blog-container">
              <div className="header-and-more">
                <h3 className="spectrum-Heading spectrum-Heading--sizeL">
                  Blog
                </h3>
                <a
                  href="https://medium.com/adobetech/tagged/adobe-document-cloud"
                  target="_parent"
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
                      <a href={data.link} target="_parent">
                        <div className="blog-img-container">
                          <img
                            src={getIframeImage(data.content)}
                            alt="Illustration"
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
    </div>
  );
};

DynamicContentLoader.propTypes = {
  theme: PropTypes.string,
  content: PropTypes.string,
  api: PropTypes.string,
};

export { DynamicContentLoader };
