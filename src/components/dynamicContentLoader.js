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
        <section class="sdk-rsrc-release">
          <div class="release-container">
            <div class="release-wrapper">
              <div class="release-wrapper-img">
                <a href={resData?.data[0].URL} target="_parent">
                  <img
                    src={getImageURl(resData?.data[0].Thumbnail)}
                    alt="Illustration"
                  />
                </a>
              </div>
              <div class="release-copy-wrapper">

                <h3 className="spectrum-Heading spectrum-Heading--sizeL">{resData.data[0].Title}</h3>
                <p>{resData.data[0].Description}</p>
                <div class="release-cta">
                  <a
                    href={resData?.data[0].URL}
                    target="_parent"
                    class="button-link"
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
          <section class="sdk-rsrc-anchor">
            <div class="anchor-container">
              <div class="anchor-wrapper">
                <div class="anchor">
                  <span>
                    <a href="#tuts" class="quiet-btn">
                      Tutorials
                    </a>
                  </span>
                  <span>
                    <a href="#blog" class="quiet-btn">
                      Blog
                    </a>
                  </span>
                  <span>
                    <a href="#customer" class="quiet-btn">
                      Customer stories
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section class="sdk-rsrc-featured">
            <div class="featured-container">
              <h3>Featured</h3>
              <div class="featured-wrapper">
                {resData?.data?.map((data, index) => (
                  <a href={data.URL} target="_parent">
                    <div
                      class="featured-thumb feat1"
                      style={`background: url(${getImageURl(data.Thumbnail)})`}
                    ></div>
                    <div class="featured-copy-wrapper">
                      <div class="featured-title">Tutorial</div>
                      <div class="featured-text">{data.Title}</div>
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
        <section class="sdk-rsrc-tutorial" id="tuts" >
          <div class="tutorial-container">
            <div class="header-and-more">
              <h3 className="spectrum-Heading spectrum-Heading--sizeL">
                Tutorials
              </h3>
              <a
                href="https://experienceleague.adobe.com/docs/document-services/document-services/overview.html"
                target="_parent"
                css={css`text-decoration:none;`}
              >
                <div class="more-items">
                  <span>All tutorials</span>
                  <div class="more-arrow1">
                    <div class="arrow1 right"></div>
                  </div>
                </div>
              </a>
            </div>

            <div
            css={css`text-align:left;`}>
                Find tutorials from novice to expert to help you expand your
                skills.
            </div>

            <div class="tutorial-wrapper">
              {resData?.data?.map((data, index) => (
                <div class="tutorial">
                  <a href={data.URL} target="_parent">
                    <div
                      class="tut-thumb1"
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
      {content === "blog" && (
        <div class="masterblog">
        <section class="sdk-rsrc-blog" id="blog" >
          <div class="blog-container">
            <div class="header-and-more">
              <h3 className="spectrum-Heading spectrum-Heading--sizeL">
                Blog
              </h3>
              <a
                href="https://medium.com/adobetech/tagged/adobe-document-cloud"
                target="_parent"
                css={css`text-decoration:none;`}
              >
                <div class="more-items">
                  <span>More Blogs</span>
                  <div class="more-arrow1">
                    <div class="arrow1 right"></div>
                  </div>
                </div>
              </a>
            </div>

            <div class="blog-wrapper"  
            >
              {resData.responseData?.feed?.entries.map((data, index) => {
                 return (
                   <>{
                  <div>
                    <a href={data.link} target="_parent">
                      <div class="blog-img-container">
                        <img
                          src={getIframeImage(data.content)}
                          alt="Illustration"
                        />
                      </div>
                      <p class="blog-title">{data.title}</p>
                    </a>
                    <p class="blog-text">{data.contentSnippet}</p>
                  </div>}
                  </>
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
