import React, { cloneElement } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { layoutColumns, TABLET_SCREEN_WIDTH } from '@adobe/gatsby-theme-aio/src/utils';
import classNames from 'classnames';
import '@spectrum-css/typography';

const TitleBlock = ({ className, heading, text, theme = 'lightest',id }) => (
  <section
    className={classNames(className, `spectrum--${theme}`)}
    css={css`
      background: var(--spectrum-global-color-gray-100);
      padding: var(--spectrum-global-dimension-size-600) 0 var(--spectrum-global-dimension-size-200) 0;
      text-align: center;

      @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
        padding: var(--spectrum-global-dimension-size-400);
      }
    `}>
    <div
      css={css`
        margin: auto;
        max-width: calc(
          ${layoutColumns(12, [
            'var(--spectrum-global-dimension-size-4600)',
            'var(--spectrum-global-dimension-size-150)'
          ])}
        );
      `}>
      {heading && (
        <h2
          className="spectrum-Heading spectrum-Heading--sizeL"
          id={id}
          css={css`
            margin-bottom: var(--spectrum-global-dimension-size-200) !important;

            & + p {
              margin-top: 0;
            }
          `}>
          {heading.props.children}
        </h2>
      )}

      {text &&
        cloneElement(text, {
          className: 'spectrum-Body spectrum-Body--sizeL'
        })}
    </div>
  </section>
);

TitleBlock.propTypes = {
  heading: PropTypes.element,
  text: PropTypes.element,
  theme: PropTypes.string,
  id: PropTypes.string,
};

export { TitleBlock };
