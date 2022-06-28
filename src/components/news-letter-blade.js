/*
 * Copyright 2022 Adobe. All rights reserved.
 */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import msLogo from "../pages/images/ms_power_logo.svg";
import adobeLogo from "../pages/images/adobe_logo_partnership@2x.png";

import "@spectrum-css/typography";

const NewsLetterBlade = ({className}) => {
  return (
    <div>
      <section
        className={classNames(className, "news-letter news-letter-blade slick-slide slick-current slick-active")}
        data-slick-index="0"
        aria-hidden="false"
        role="tabpanel"
        id="slick-slide10"
        style={{ width: "100%" }}
      >
 
        <div class="news-letter-container">
          <div class="news-letter-wrapper">
            {/* <div class="market-place-logo-wrapper">
              <div class="mp-adobe-logo">
                <img src={adobeLogo} alt="Adobe logo partnership banner" />
              </div>
              <div class="mp-plus">×</div>
              <div class="mp-logo ms-power-logo">
                <img src={msLogo} alt="Microsoft Power Platform logo" />
              </div>
            </div> */}
            <div class="mp-copy-wrapper">
              <h4>Subscribe to the Document Cloud Developer NewsLetter</h4>
              <div class="mp-copy">
                Get exclusive access to insider tips, guidelines, developer events,
                industry news, product updates, and more.
              </div>
              <div class="mp-cta-wrapper">
                <a
                  href="https://www.adobe.com/subscription/document-services-developer-newsletter.html"
                  target="_parent"
                  class="button-link"
                  tabindex="0"
                >
                  Sign up now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

NewsLetterBlade.propTypes = {
  theme: PropTypes.string,
  className:PropTypes.string,
};


export { NewsLetterBlade };
