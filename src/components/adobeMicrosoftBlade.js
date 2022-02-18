import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import msLogo from "../pages/images/ms_power_logo.svg";
import adobeLogo from "../pages/images/adobe_logo_partnership@2x.png";
import "@spectrum-css/typography";

const AdobeMsBlade = ({className}) => {
  return (
    <div>
      <section
        className={classNames(className, "market-place ms-blade slick-slide slick-current slick-active")}
        data-slick-index="0"
        aria-hidden="false"
        role="tabpanel"
        id="slick-slide10"
        style={{ width: "100%" }}
      >
        <div class="market-place-container">
          <div class="market-place-wrapper">
            <div class="market-place-logo-wrapper">
              <div class="mp-adobe-logo">
                <img src={adobeLogo} alt="Adobe logo partnership banner" />
              </div>
              <div class="mp-plus">×</div>
              <div class="mp-logo ms-power-logo">
                <img src={msLogo} alt="Microsoft Power Platform logo" />
              </div>
            </div>
            <div class="mp-copy-wrapper">
              <h4>Available on Microsoft Power Automate</h4>
              <div class="mp-copy">
                Automate document generation processes across CRMs, forms, and
                apps using our PDF Services Connector
              </div>
              <div class="mp-cta-wrapper">
                <a
                  href="http://www.adobe.com/go/powerautomate_help"
                  target="_parent"
                  class="button-link"
                  tabindex="0"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AdobeMsBlade.propTypes = {
  theme: PropTypes.string,
  className:PropTypes.string,
};


export { AdobeMsBlade };
