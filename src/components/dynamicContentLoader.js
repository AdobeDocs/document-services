import React, { useState, useEffect } from "react";
import "@spectrum-css/typography";
import classNames from "classnames";
import { css } from "@emotion/react";

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
      className={classNames(className, `spectrum--${theme} main secondary-page`)}
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
                  <img
                    src={getImageURl(resData?.data[0].Thumbnail)}
                    alt="Illustration"
                  />
                </a>
              </div>
              <div className="release-copy-wrapper">

                <h3 className="spectrum-Heading spectrum-Heading--sizeL">{resData.data[0].Title}</h3>
                <p>{resData.data[0].Description}</p>
                <div className="release-cta">
                  <a
                    href={resData?.data[0].URL}
                    target="_parent"
                    className="button-link"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {content === "feature" && resData?.data?.length > 0 && (
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
                {resData?.data?.map((data, index) => (
                  <a href={data.URL} target="_parent" key={data.Title}>
                    <div
                      className="featured-thumb feat1"
                      style={`background: url(${getImageURl(data.Thumbnail)})`}
                    ></div>
                    <div className="featured-copy-wrapper">
                      <div className="featured-title">Tutorial</div>
                      <div className="featured-text">{data.Title}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      {content === "tutorial"  && resData?.data?.length > 0 && (
        <div className="main secondary-page">
        <section className="sdk-rsrc-tutorial" id="tuts" >
          <div className="tutorial-container">
             <div className="header-and-more">
              <h3 className="spectrum-Heading spectrum-Heading--sizeL">
              Tutorials
              </h3>
              <a
               href="https://experienceleague.adobe.com/docs/document-services/document-services/overview.html"
                target="_parent"
                css={css`text-decoration:none;`}
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
            css={css`text-align:left;`}>
                Find tutorials from novice to expert to help you expand your
                skills.
            </div>

            <div className="tutorial-wrapper">
              {resData?.data?.map((data, index) => (
                <div className="tutorial">
                  <a href={data.URL} target="_parent" key={data.Title}>
                    <div
                      className="tut-thumb1"
                      style={`background: url(${getImageURl(data.Thumbnail)})`}
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
      {content === "blog" &&resData.responseData?.feed&& (
        <div className="masterblog">
        <section className="sdk-rsrc-blog" id="blog" >
          <div className="blog-container">
            <div className="header-and-more">
              <h3 className="spectrum-Heading spectrum-Heading--sizeL">
                Blog
              </h3>
              <a
                href="https://medium.com/adobetech/tagged/adobe-document-cloud"
                target="_parent"
                css={css`text-decoration:none;`}
              >
                <div className="more-items">
                  <span>More Blogs</span>
                  <div className="more-arrow1">
                    <div className="arrow1 right"></div>
                  </div>
                </div>
              </a>
            </div>

            <div className="blog-wrapper"  
            >
              {resData.responseData?.feed?.entries.map((data, index) => {
                 return (
                  <div>
                    <a href={data.link} target="_parent" >
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

export { DynamicContentLoader };
