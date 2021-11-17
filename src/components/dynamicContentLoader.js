import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import "@spectrum-css/typography";
import { TABLET_SCREEN_WIDTH } from '@adobe/gatsby-theme-aio/conf/globals';
import Digging_out_data from '../pages/images/Digging_out_data.jpg';
import Generate_documents from '../pages/images/generate_documents.jpg';
import Make_PDFs_searchable from '../pages/images/Make_PDFs_searchable.jpg';
import resourceImage from '../pages/images/resource_hero_img.jpg'


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
    Title :'Make PDFs Searchable (OCR)',
    URL : 'https://medium.com/adobetech/make-pdfs-searchable-ocr-after-importing-into-sharepoint-1a8037744841',
    Thumbnail :Make_PDFs_searchable
  },
  {
    Title :'Generate Documents',
    URL :'https://medium.com/adobetech/generate-documents-and-send-in-bulk-for-signature-in-microsoft-power-automate-807838092dcf',
    Thumbnail : Generate_documents
  },
  {
    Title :'Digging Out Data with Adobe PDF Extract API',
    URL:'https://medium.com/adobetech/digging-out-data-with-adobe-pdf-extract-api-cf4b1712f05a',
    Thumbnail : Digging_out_data
  }
]

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
         <section
         className={classNames(className, `spectrum--${theme}`)}
         css={css`
           background-color:var(--spectrum-global-color-gray-100);
           padding :var(--spectrum-global-dimension-size-400);
           `
       }>
         <div 
           css={css`  
             max-width:calc(( var(--spectrum-global-dimension-size-6000) + var(--spectrum-global-dimension-size-5000) - var(--spectrum-global-dimension-size-500) ));
             text-align: center;
             margin: 0 auto;
     
             @media screen (max-width:${TABLET_SCREEN_WIDTH}){
               max-width:calc(( var(--spectrum-global-dimension-size-5000) + var(--spectrum-global-dimension-size-3400) ));
             }
         `}>
           <div 
             css={css`
               overflow: hidden;
               padding-top: 56.25%;
               position: relative;
           `}>
         <iframe
               src="https://www.youtube.com/embed/GCpSy78IDoE?list=PLcVEYUqU7VRc1ipQLtY1kcmpf9wiCgXZ5" 
               title="YouTube video player" 
               frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               srcdoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/GCpSy78IDoE?autoplay=1><img src=${resourceImage} alt='Adobe PDF Services API Overview'><span>▶</span></a>`}
               allowfullscreen={false}
               css={css` 
               position: absolute;
               border: 0;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;`}
             />
           </div>
         </div>
       </section>
      )}
      {content === "feature"  && (
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

          <section className="sdk-rsrc-featured">
            <div className="featured-container">
              <h3>Featured</h3>
              <div className="featured-wrapper">
                {featuredContent.map((data) => (
                  <a href={data.URL} target="_parent" key={data.Title}>
                    <div
                      className="featured-thumb feat1"
                    >
                      <img src={data.Thumbnail}  className="featured-img-dimensions" alt={data.Title}/>
                    </div>
                    <div className="featured-copy-wrapper">
                      <div className="featured-title">Featured</div>
                      <div className="featured-text">{data.Title}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
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
                  <div className="tutorial" key={data.Title}>
                    <a href={data.URL} target="_parent" key={data.Title}>
                      <div
                        className="tut-thumb1"
                        style={`background: url(${getImageURl(
                          data.Thumbnail
                        )})`}
                      ></div>
                      <p>{data.Title}</p>
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
                    <div key={data.link}>
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
