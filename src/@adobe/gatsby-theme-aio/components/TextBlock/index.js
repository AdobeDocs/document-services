import React, { cloneElement, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { HeroButtons } from "@adobe/gatsby-theme-aio/src/components/Hero";
import { Media } from "@adobe/gatsby-theme-aio/src/components/Media";
import PropTypes from "prop-types";
import {
  layoutColumns,
  TABLET_SCREEN_WIDTH
} from "@adobe/gatsby-theme-aio/src/utils";
import classNames from "classnames";
import "@spectrum-css/typography";
import {  DESKTOP_SCREEN_WIDTH } from "../../../../utils";

const counter = {
  2: 0,
  3: 0,
  4: 0,
};
const alignMapping = ["margin-left: 0;", "margin-right: 0;"];

const mediaCSS = css`
  & {
    display: inline;
    width: ${layoutColumns(6)};
    box-sizing: border-box;
    padding: var(--spectrum-global-dimension-size-200);

    @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
      display: block;
      width: 100%;
    }
  }
`;

const Icons = ({ icons, isCentered }) =>
  icons
    ? cloneElement(icons, {
        css: css`
          list-style: none;
          padding: 0;
          margin-bottom: var(--spectrum-global-dimension-size-400) !important;
          display: flex;
          justify-content: ${isCentered ? "center" : "flex-start"};

          & li {
            display: flex;
            border-right: 1px solid var(--spectrum-global-color-gray-300);
            height: var(--spectrum-global-dimension-size-600);
            margin-right: var(--spectrum-global-dimension-size-150);
          }

          & li:last-of-type {
            padding-right: 0;
            border-right: none;
          }

          .gatsby-resp-image-wrapper {
            position: relative;
            width: var(--spectrum-global-dimension-size-800) !important;
          }

          .gatsby-resp-image-image {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            object-fit: contain;
          }
        `,
      })
    : null;

const Texts = ({ texts }) => {
  const textKeys = Object.keys(texts).filter((key) => key.startsWith("text"));
  return textKeys.map((textKey) => texts[textKey]);
};

const Links = ({ links, isCentered }) =>
  links
    ? cloneElement(links, {
        css: css`
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: ${isCentered ? "center" : "flex-start"};
          margin-top: ${isCentered
            ? "var(--spectrum-global-dimension-size-200) !important;"
            : "var(--spectrum-global-dimension-size-600) !important;"};

          & li {
            display: flex;
            align-items: center;
            height: var(--spectrum-global-dimension-size-400);
          }

          & li a {
            white-space: nowrap;
            margin-right: var(--spectrum-global-dimension-size-600);
          }

          & li:last-of-type a {
            margin-right: 0;
          }

          .gatsby-resp-image-wrapper {
            max-width: none !important;
            width: 100% !important;
            height: 100% !important;
          }

          .gatsby-resp-image-wrapper {
            width: var(--spectrum-global-dimension-size-400) !important;
            margin-left: 0 !important;
            margin-right: var(--spectrum-global-dimension-size-150) !important;
          }

          .gatsby-resp-image-image {
            object-fit: contain;
          }

          @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
            flex-direction: column;
            align-items: ${isCentered ? "center" : "left"};

            li {
              margin-top: var(--spectrum-global-dimension-size-100);
            }

            li a {
              margin-right: 0;
            }
          }
        `,
      })
    : null;

const TextBlock = ({
  className,
  heading,
  subHeading,
  links,
  buttons,
  icons,
  image,
  assetImg,
  video,
  theme = "lightest",
  width = "100%",
  isCentered = false,
  primaryOutline = false,
  headerElementType = "h3",
  imageOnly = false,
  imgWidth = "50%",
  isPrimaryBtn=false,
  variantsTypePrimary='cta',
  variantsTypeSecondary='primary',
  hasCodeBlock = false,
  ...props
}) => {
  const Element = headerElementType;

  let initColumns = 100 / parseFloat(width);

  if (width === "33%") {
    width = `${(100 / 3).toFixed(2)}%`;
    initColumns = 3;
  }

  const [columns] = useState(initColumns);

  useEffect(() => {
    return () => {
      if (typeof counter[columns] !== "undefined") {
        counter[columns]--;
      }
    };
  }, [columns]);

  if (width !== "100%") {
    isCentered = true;
  }

  if (isCentered) {
    let blockWidth = "";
    let extraMargin = "";

    if (typeof counter[columns] !== "undefined") {
      counter[columns]++;
    }

    if (columns === 1) {
      blockWidth = `max-width: ${layoutColumns(6)};`;
    } else if (columns > 3) {
      blockWidth = "max-width: var(--spectrum-global-dimension-size-3600);";
    } else {
      blockWidth = "max-width: var(--spectrum-global-dimension-size-4600);";
      extraMargin = alignMapping[counter[columns] % columns];
    }

    return (
      <>
        <section
          className={classNames(className, `spectrum--${theme}`)}
          css={css`
            display: table-cell;
            width: ${width.replace("%", "vw")};
            background: var(--spectrum-global-color-gray-100);
            padding: var(--spectrum-global-dimension-size-1000) 0;

            @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
              display: block;
              width: 100%;
            }
          `}
        >
          <div
            css={css`
              ${blockWidth}
              padding: 0 var(--spectrum-global-dimension-size-400);
              margin: auto;
              ${extraMargin}

              @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
                max-width: none;
                margin: auto;
              }
            `}
          >
            <Icons icons={icons} isCentered={isCentered} />

            {image &&
              cloneElement(image, {
                css: css`
                  height: var(--spectrum-global-dimension-size-1000);
                  margin-top: 0;
                  margin-bottom: var(--spectrum-global-dimension-size-300);

                  .gatsby-resp-image-wrapper {
                    position: relative;
                    max-width: none !important;
                    width: 100% !important;
                    height: 100% !important;
                  }

                  .gatsby-resp-image-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    object-fit: contain;
                  }
                `,
              })}
            {assetImg &&
                <div className={assetImg?.props?.children}/>}

            {heading && (
              <Element
                className="spectrum-Heading spectrum-Heading--sizeM"
                css={css`
                  margin-bottom: var(
                    --spectrum-global-dimension-size-200
                  ) !important;

                  & ~ p {
                    margin-top: 0;
                    margin-bottom: 0 !important;
                  }
                `}
              >
                {heading.props.children}
              </Element>
            )}
            {subHeading && (
              <h3
              className="spectrum-Heading spectrum-Heading--sizeM"
                css={css`
                  font-size: var(
                    --spectrum-global-dimension-size-225
                  ) !important;
                  margin-bottom: var(
                    --spectrum-global-dimension-size-200
                  ) !important;

                  & ~ p {
                    margin-top: 0;
                    margin-bottom: 0 !important;
                  }
                `}
              >
                {subHeading.props.children}
              </h3>
            )}

            <Texts texts={props} />

            <HeroButtons
              buttons={buttons}
              quiets={[!isPrimaryBtn, !primaryOutline]}
              variants={[variantsTypePrimary,variantsTypeSecondary]}
              css={css`
                margin-top: var(--spectrum-global-dimension-size-150);
                margin-bottom: var(--spectrum-global-dimension-size-150);
                justify-content: center;
              `}
            />

            <Links links={links} isCentered={isCentered} />

            <Media css={mediaCSS} video={video} />
          </div>
        </section>
        {width === "100%" ||
        (typeof counter[columns] !== "undefined" &&
          counter[columns] % columns === 0) ? (
          <div aria-hidden="true" />
        ) : null}
      </>
    );
  } else {
    const isReversed =
      props.slots.endsWith("image") || props.slots.endsWith("video");

    return (
      <section
        className={classNames(className, `spectrum--${theme}`)}
        css={css`
          width: 100%;
          background: var(--spectrum-global-color-gray-100);
        `}
      >
        <div
          css={css`
            width: ${DESKTOP_SCREEN_WIDTH};
            box-sizing: border-box;
            margin: auto;
            padding: var(--spectrum-global-dimension-size-1000) 0;

            @media screen and (max-width: ${DESKTOP_SCREEN_WIDTH}) {
              width: 100%;

              & > div {
                flex-direction: column !important;
              }
            }
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              flex-direction: ${imageOnly
                ? "column"
                : isReversed
                ? "row-reverse"
                : "row"};

              @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
                flex-direction: column;
              }
            `}
          >
            {image &&
              cloneElement(image, {
                css: css`
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: ${imgWidth};
                  height: calc(
                    var(--spectrum-global-dimension-size-4600) -
                      var(--spectrum-global-dimension-size-225)
                  );
                  box-sizing: border-box;
                  padding: var(--spectrum-global-dimension-size-200);
                  margin-top: 0;

                  .gatsby-resp-image-wrapper {
                    max-width: none !important;
                    width: 100% !important;
                    height: 100% !important;
                  }

                  .gatsby-resp-image-image {
                    object-fit: contain;
                  }

                  @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
                    height: auto;
                    width: 100%;
                  }
                `,
              })}
             {assetImg &&
                <div className={assetImg?.props?.children}/>}

            <Media css={mediaCSS} video={video} />
            {!imageOnly && <div
              css={css`
                ${hasCodeBlock ?`width: 70%;` : `width: 50%;`}
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: left;
                box-sizing: border-box;
                padding: 0 var(--spectrum-global-dimension-size-400);

                @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
                  width: 100%;
                  margin: var(--spectrum-global-dimension-size-400) 0;
                }
              `}
            >
              <Icons icons={icons} isCentered={isCentered} />

              {heading && (
                <Element
                  className="spectrum-Heading spectrum-Heading--sizeM"
                  css={css`
                    margin-top: 0 !important;
                    margin-bottom: var(
                      --spectrum-global-dimension-size-200
                    ) !important;

                    & + p {
                      margin-top: 0 !important;
                    }
                  `}
                >
                  {heading.props.children}
                </Element>
              )}
              {subHeading && (
              <h3
              className="spectrum-Heading spectrum-Heading--sizeM"
                css={css`
                font-size: var(
                  --spectrum-global-dimension-size-225
                ) !important;
                  margin-bottom: var(
                    --spectrum-global-dimension-size-200
                  ) !important;

                  & ~ p {
                    margin-top: 0;
                    margin-bottom: 0 !important;
                  }
                `}
              >
                {subHeading.props.children}
              </h3>
            )}

              <Texts texts={props} />

              <HeroButtons
                buttons={buttons}
                quiets={[!isPrimaryBtn, !primaryOutline]}
                variants={[variantsTypePrimary,variantsTypeSecondary]}
                css={css`
                  margin-top: var(--spectrum-global-dimension-size-200);
                `}
              />

              <Links links={links} isCentered={isCentered} />
            </div> }
          </div>
        </div>
      </section>
    );
  }
};

TextBlock.propTypes = {
  heading: PropTypes.element,
  links: PropTypes.element,
  icons: PropTypes.element,
  buttons: PropTypes.element,
  image: PropTypes.element,
  video: PropTypes.element,
  theme: PropTypes.string,
  width: PropTypes.oneOf(["100%", "50%", "33%", "25%"]),
  isCentered: PropTypes.bool,
  headerElementType: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  imageOnly: PropTypes.bool,
  primaryOutline: PropTypes.bool,
  hasCodeBlock: PropTypes.bool,
  imgWidth: PropTypes.string,
};

export { TextBlock };
