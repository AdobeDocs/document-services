/*
 * Copyright 2022 Adobe. All rights reserved.
*/
import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '@spectrum-css/typography';
import { TABLET_SCREEN_WIDTH } from '@adobe/gatsby-theme-aio/conf/globals';

const VisualizerCustomIframeBlock = ({
  className,
  theme = 'lightest',
  source=""
}) => (
  <div
      className={classNames(
        className,
        `spectrum--${theme} main secondary-page`
      )}
      css={css`
        background: var(--spectrum-global-color-gray-100);
      `}
    >

<section className="sdk-rsrc-release-how-it-work Adobe-PDF-Services-API-Overview">
          <div className="release-container-how-it-work">
            <div className="release-wrapper-how-it-work">
              <div className="release-copy-wrapper-how-it-work">
                <h3 className="align-right-heading spectrum-Heading get-document-video-content-fonts">
                  Get the document structure, not just the characters.
                </h3>
                <p>
                Adobe PDF Extract API is powered by Adobe Sensei, an industry-leading Artificial Intelligence (AI) and Machine Learning (ML) network. This enables a rich understanding of document structure, including the identification of elements, position, connections relative to other elements, and the reading order.
                </p>
              </div>
              <div className="release-wrapper-img-how-it-work">
                  <iframe
                    id="iframevideo"
                    src="https://video.tv.adobe.com/v/333506"
                    title="YouTube video player"
                    css={css`
                      border: 0;
                      width: 100%;
                      height: 100%;
                    `}
                  />
              </div>
            </div>
          </div>
        </section>
    </div>
);

VisualizerCustomIframeBlock.propTypes = {
  theme: PropTypes.string,
  source:PropTypes.string,
};

export { VisualizerCustomIframeBlock };

