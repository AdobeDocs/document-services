import React  from "react";
import "@spectrum-css/typography";
import classNames from "classnames";
import { css } from "@emotion/react";
import AppStore_NoAudio from '../pages/videos/AppStore_NoAudio.mp4'
import msLogo from '../pages/images/ms_power_logo.svg'
import adobeLogo from '../pages/images/adobe_logo_partnership@2x.png'


const MobileOptimize = ({
  className,
  theme='dark'
}) => {
  return (
	  <div>
		<section class="market-place ms-blade slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" role="tabpanel" id="slick-slide10" aria-describedby="slick-slide-control10" style={{width: "100%"}}>
			<div class="market-place-container">
				<div class="market-place-wrapper">
					<div class="market-place-logo-wrapper">
						<div class="mp-adobe-logo">
							<img src={adobeLogo} alt="Adobe logo partnership banner"/>
						</div>
						<div class="mp-plus">×</div>
						<div class="mp-logo ms-power-logo">
							<img src={msLogo} alt="Microsoft Power Platform logo"/>
						</div>
					</div>
					<div class="mp-copy-wrapper">
						<h4>Available on Microsoft Power Automate</h4>
						<div class="mp-copy">
							Automate document generation processes across CRMs, forms, and apps using our PDF Services Connector
						</div>
						<div class="mp-cta-wrapper">
							<a href="http://www.adobe.com/go/powerautomate_help" target="_parent" class="button-link" tabindex="0">
								Learn more
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

    <section
      className={classNames(className, `spectrum--${theme} main secondary-page`)}
      css={css`
        background: linear-gradient(#e61305, #f18a72 65%);
      `}
    >
      <div className="content">
			<div>
			<video  style={{maxHeight: 375}} muted="" preload="auto" autoplay loop>
					<source src={AppStore_NoAudio} type="video/mp4"/>
					Your browser does not support HTML5 Video.
				</video>
			</div>
			 <div className="right-container">
				<h2>Mobile-optimized PDFs for Liquid Mode</h2>
				<h3>Now available to create in Document Generation API (Beta)</h3>
				<div className="features">
					<div>
						<h4>Revolutionary Mobile Experience</h4>
						<p>No more pinch and zoom to read PDFs on mobile. Tap to open images and figures.</p>
					</div>
					<div>
						<h4>Easier Navigation</h4>
						<p>Navigate document sections via a new outline view</p>
					</div>
					<div>
						<h4>Improved Readability</h4>
						<p>Adjust font sizing and spacing to improve readability.</p>
					</div>
					<div>
						<h4>Enhanced Accessibility</h4>
						<p>Tagged for improved performance with screen readers.</p>
					</div>
				</div>
				<div className="primary-button">
					<a href="https://adobe.com/go/dcdocgen_api_demo" target="_parent" className="dcsdk-button primary">
						Try the demo
					</a>
				</div>
				<p className="primary-button"><a className="text-link" href="https://www.adobe.com/devnet-docs/acrobat/android/en/lmode.html" target="_parent">Read Beta Documentation</a></p>
		</div>
	</div>
      </section>
	  </div>
  );
};

export { MobileOptimize };
