/*
 * Once Carousel PR will merged with Adobe theme after that we will remove this component
 */

import React from "react";
import { css } from "@emotion/react";
import "@spectrum-css/typography";
import PropTypes from "prop-types";
import {
  TABLET_SCREEN_WIDTH,
  layoutColumns,
  MOBILE_SCREEN_WIDTH,
  DESKTOP_SCREEN_WIDTH,
} from "@adobe/gatsby-theme-aio/src/utils"; 
import {
  HeroButtons,
  HeroImage,
} from "@adobe/gatsby-theme-aio/src/components/Hero";

import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Texts = ({ texts, index }) => {
  const definedTextKeys = texts.slots
    .split(',').map(key=>key.trim())
    .filter((key) => key.startsWith('text'));
  return definedTextKeys.map((data) => texts[`${data}${index}`]);
};


const SwiperContent = ({
  textKeys,
  heading,
  image,
  imageStyle,
  buttons,
  props,
  backgroundColor,
  index,
  slideTheme,
  theme,
}) => {
  return (
    <div
      className={classNames(`spectrum--${slideTheme ? slideTheme : theme}`)}
      css={css`
        display: flex;
        ${backgroundColor}
        flex-direction: row;
        @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
          flex-direction: column;
        }
        margin: var(--spectrum-global-dimension-size-500);
      `}
    >
      {image ? (
        <div
          css={css`
            flex: 1;
            justify-content: center;
            @media screen and (max-width: ${DESKTOP_SCREEN_WIDTH}) {
              margin: auto;
            }
            @media screen and (max-width: ${MOBILE_SCREEN_WIDTH}) {
              margin: 0;
              max-width: calc(${layoutColumns(4)});
              margin-bottom: var(--spectrum-global-dimension-size-200);
            }
            @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
              max-width: calc(${layoutColumns(6)});
              margin: 0;
              margin-bottom: var(--spectrum-global-dimension-size-200);
            }
          `}
        >
          <HeroImage image={image} styles={imageStyle} />
        </div>
      ) : null}
      {textKeys.length > 0 || heading || buttons ? (
        <div
          css={css`
            text-align: left;
            flex: 1;
            padding: var(--spectrum-global-dimension-size-200);
          `}
        >
          {heading && (
            <h3
              className="spectrum-Heading spectrum-Heading--sizeL"
              css={css`
                max-width: calc(${layoutColumns(6)});
                margin-top: 0 !important;
                margin-bottom: var(
                  --spectrum-global-dimension-size-200
                ) !important;
                overflow: hidden;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                @media screen and (max-width: ${MOBILE_SCREEN_WIDTH}) {
                  max-width: calc(${layoutColumns(2)});
                  padding: var(--spectrum-global-dimension-size-200) !important;
                }
              `}
            >
              {heading.props.children}
            </h3>
          )}
          {textKeys.length > 0 ? <Texts texts={props} index={index} /> : null}
          {buttons ? (
            <div
              css={css`
                margin-top: var(--spectrum-global-dimension-size-200);
              `}
            >
              <HeroButtons buttons={buttons} />
            </div>
          ):null}
        </div>
      ) : null}
    </div>
  );
};

const Carousel = ({
  className,
  theme = "dark",
  imageStyle = {},
  swiperSpeed = 600,
  delay = 2500,
  enableNavigation = false,
  slideTheme,
  bulletActiveClass = "swiper-pagination-bullet-active",
  bulletClass = "swiper-pagination-bullet",
  navigationPre= "swiper-button-prev",
  navigationNext = "swiper-button-next" ,
  ...props
}) => {
  const propKeys = Object.keys(props);
  let carouselProps = propKeys.filter((key) => key.startsWith("image"));

  carouselProps = carouselProps.map((data, index) => {
    return {
      image: props[data],
      heading: props[`heading${index}`],
      buttons: props[`buttons${index}`],
    };
  });

  const textKeys = props.slots.split(",").filter((key) => key.trim().startsWith("text"));

  const backgroundColor = `background-color: var(--spectrum-global-color-gray-${
    slideTheme === "light" ? "50" : ""
  });`;
  
  return (
    <section
      className={classNames(className, `spectrum--${theme}`)}
      css={css`
        background: var(--spectrum-global-color-gray-100);
        padding: var(--spectrum-global-dimension-size-600) 0
          var(--spectrum-global-dimension-size-200) 0;
      `}
    >
      <div
        css={css`
        max-width: calc(${layoutColumns(12)});
          margin: auto;
         
          @media screen and (max-width: ${MOBILE_SCREEN_WIDTH}) {
            max-width: calc(${layoutColumns(3)});
          }
          @media screen and (min-width: ${MOBILE_SCREEN_WIDTH})  and (max-width: ${TABLET_SCREEN_WIDTH})  {
            padding-bottom: 0;
            margin-top: 0;
            max-width: calc(${layoutColumns(6)});
          }
        `}
      >
        <Swiper
          speed={swiperSpeed}
          slidesPerView={"auto"}
          autoplay={{
            delay,
          }}
          pagination={{
            bulletActiveClass,
            bulletClass,
            clickable: true,
          }}
          navigation={{
            nextEl: `.${navigationNext}`,
            prevEl: `.${navigationPre}`,
          }}
        >
          {carouselProps.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <SwiperContent
                  textKeys={textKeys}
                  heading={data.heading}
                  image={data.image}
                  imageStyle={imageStyle}
                  buttons={data.buttons}
                  props={props}
                  backgroundColor={backgroundColor}
                  index={index}
                  slideTheme={slideTheme}
                  theme={theme}
                />
                {enableNavigation ? (
                  <>
                    <div className={navigationPre}></div>
                    <div className={navigationNext} ></div>
                  </>
                ) : null}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

Carousel.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark", "lightest"]),
  imageStyle: PropTypes.string,
  swiperSpeed: PropTypes.number,
  delay: PropTypes.number,
  enableNavigation: PropTypes.bool,
  slideTheme: PropTypes.oneOf(["light", "dark"]),
  bulletActiveClass: PropTypes.string,
  bulletClass: PropTypes.string,
  navigationNext:PropTypes.string,
  navigationPre:PropTypes.string
};

export { Carousel };