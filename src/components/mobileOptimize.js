import React from "react";
import classNames from "classnames";
import { css } from "@emotion/react";
import AppStore_NoAudio from "../pages/videos/AppStore_NoAudio.mp4";
import PropTypes from "prop-types";
import "@spectrum-css/typography";

const MobileOptimize = ({ className, theme = "dark" }) => {
  return (
    <div>
      <section
        className={classNames(
          className,
          `spectrum--${theme} main secondary-page`
        )}
        css={css`
          background: linear-gradient(#e61305 40%, #f18a72);
        `}
      >
        <div className="content">
          <div>
            <video
              style={{ maxHeight: 375 }}
              muted=""
              preload="auto"
              autoplay
              loop
            >
              <source src={AppStore_NoAudio} type="video/mp4" />
              Your browser does not support HTML5 Video.
              <track src="captions_en.vtt" kind="captions" srclang="en" label="english_captions"/>
            </video>
          </div>
          <div className="right-container">
            <h2>Mobile-optimized PDFs for Liquid Mode</h2>
            <h3>Now available to create in Document Generation API (Beta)</h3>
            <div className="features">
              <div>
                <h4>Revolutionary Mobile Experience</h4>
                <p>
                  Liquid Mode lets users effortlessly read PDFs on mobile devices — no pinching and zooming necessary
                </p>
              </div>
              <div>
                <h4>Easier Navigation</h4>
                <p>Navigate document sections via a new outline view</p>
              </div>
              <div>
                <h4>Improved Readability</h4>
                <p>Easily adjust font sizing and spacing on the fly</p>
              </div>
              <div>
                <h4>Enhanced Accessibility</h4>
                <p>Tagged for improved performance with screen readers</p>
              </div>
            </div>
            <div className="primary-button">
              <a
                href="https://adobe.com/go/dcdocgen_api_demo"
                target="_parent"
                className="dcsdk-button primary"
              >
                Try the demo
              </a>
            </div>
            <p className="primary-button">
              <a
                className="text-link"
                href="https://www.adobe.com/devnet-docs/acrobat/android/en/lmode.html"
                target="_parent"
              >
                Read Beta Documentation
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};



MobileOptimize.propTypes = {
	theme: PropTypes.string,
  };

export { MobileOptimize };
