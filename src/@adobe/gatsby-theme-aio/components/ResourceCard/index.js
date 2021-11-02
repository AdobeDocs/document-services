
import React, { cloneElement, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { GatsbyLink } from '@adobe/gatsby-theme-aio/src/components/GatsbyLink';
import {
  getElementChild,
  layoutColumns,
  getExternalLinkProps,
  DESKTOP_SCREEN_WIDTH
} from '@adobe/gatsby-theme-aio/src/utils';
import '@spectrum-css/typography';
import '@spectrum-css/card';
import PropTypes from 'prop-types';

const counter = {
  2: 0,
  3: 0
};
const alignMapping = ['margin-left: 0;', 'margin-right: 0;'];

const ResourceCard = ({ theme = 'lightest', width = '100%', link, heading, text, image }) => {
  let initColumns = 100 / parseFloat(width);

  if (width === '33%') {
    width = `${(100 / 3).toFixed(2)}%`;
    initColumns = 3;
  }

  const [columns] = useState(initColumns);

  useEffect(() => {
    return () => {
      if (typeof counter[columns] !== 'undefined') {
        counter[columns]--;
      }
    };
  }, [columns]);

  if (typeof counter[columns] !== 'undefined') {
    counter[columns]++;
  }

  const href = getElementChild(link).props.href;
  let extraMargin = '';

  if (columns === 2) {
    extraMargin = alignMapping[counter[columns] % columns];
  } else if (columns === 3) {
    const align = counter[columns] % columns;
    if (align === 0 || align === 1) {
      extraMargin = alignMapping[align];
    }
  }

  const MIN_MOBILE_SCREEN_WIDTH = '1024px';

  const MAX_MOBILE_SCREEN_WIDTH = '1280px';

  return (
    <>
      <section
        className={`spectrum--${theme}`}
        css={css`
          display: ${width === '100%' ? 'block' : 'table-cell'};
          width: ${width.replace('%', 'vw')};
          background: var(--spectrum-global-color-gray-100);
          padding: var(--spectrum-global-dimension-size-300) var(--spectrum-global-dimension-size-200);
          box-sizing: border-box;

          @media screen and (max-width: ${DESKTOP_SCREEN_WIDTH}) {
            display: block;
            width: 100%;
          }

          @media screen and (min-width: ${MIN_MOBILE_SCREEN_WIDTH}) and (max-width: ${MAX_MOBILE_SCREEN_WIDTH}) {
            display: inline-flex !important;
            width: 50%;
            }
        `}>
        <GatsbyLink
          className={`spectrum-Card spectrum-Card--vertical`}
          to={href}
          {...getExternalLinkProps(href)}
          css={css`
            display: block;
            margin: auto;
            max-width: ${layoutColumns(4)};
            ${extraMargin}

            @media screen and (max-width: ${DESKTOP_SCREEN_WIDTH}) {
              width: 100%;
              min-width: 0;
              margin: auto;
            }
          `}>
          <div
            className="spectrum-Card-preview"
            css={css`
              height: var(--spectrum-global-dimension-size-3000);
              width: 100%;
              padding: 0 !important;
            `}>
            {image &&
              cloneElement(image, {
                css: css`
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 100%;
                  width: 100%;
                  margin-bottom: 0 !important;
                  margin-top: 0;

                  .gatsby-resp-image-wrapper {
                    max-width: none !important;
                    width: 100% !important;
                    height: 100% !important;
                  }

                  .gatsby-resp-image-image {
                    object-fit: cover;
                  }
                `
              })}
          </div>
          <div
            className="spectrum-Card-body"
            css={css`
              flex: 1;
              padding: var(--spectrum-global-dimension-size-300) !important;
              justify-content: flex-start !important;
              overflow: hidden;
            `}>
            <div
              className="spectrum-Card-header"
              css={css`
                height: auto;
                width: 100%;
              `}>
              <div
                className="spectrum-Card-title"
                css={css`
                  white-space: normal;
                  text-align: left;
                `}>
                <h3
                  className="spectrum-Heading spectrum-Heading--sizeM"
                  css={css`
                    margin-top: 0 !important;
                    margin-bottom: 0 !important;
                  `}>
                  {heading && heading.props.children}
                </h3>
              </div>
            </div>
            <div
              className="spectrum-Card-content"
              css={css`
                height: auto;
              `}>
              <div className="spectrum-Card-subtitle">
                <p
                  className="spectrum-Body spectrum-Body-S"
                  css={css`
                    text-align: left;
                    color: var(--spectrum-global-color-gray-700);
                    margin-top: 0;
                  `}>
                  {text && text.props.children}
                </p>
              </div>
            </div>
          </div>
        </GatsbyLink>
      </section>
      {typeof counter[columns] !== 'undefined' && counter[columns] % columns === 0 ? <div aria-hidden="true" /> : null}
    </>
  );
};

ResourceCard.propTypes = {
  theme: PropTypes.string,
  width: PropTypes.oneOf(['100%', '50%', '33%','25%']),
  link: PropTypes.element,
  heading: PropTypes.element,
  text: PropTypes.element,
  image: PropTypes.element
};

export { ResourceCard };
