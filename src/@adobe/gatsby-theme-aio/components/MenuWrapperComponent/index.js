import React from "react";
import { css } from "@emotion/react";
import "@spectrum-css/typography";
import "@spectrum-css/card";
import PropTypes from "prop-types";
import classNames from "classnames";

import {  TABLET_SCREEN_WIDTH } from '@adobe/gatsby-theme-aio/src/utils';
import { CustomMenuBlock } from '../CustomMenuBlock';

import {  DESKTOP_SCREEN_WIDTH } from "../../../../utils";


const MenuWrapperComponent = ({ theme = 'lightest',className, menuClassName, contentClassName, content, background }) => {
  const backgroundColor =background?`background:${background}`:'background: var(--spectrum-global-color-gray-100)';
  const mobile_screen_width = '767px';
  const min_mobile_screen_width = '375px';
  return (
    <section
      className={classNames(className,`spectrum--${theme}`)}
      css={css`
        ${backgroundColor}
        margin-left: var(--spectrum-global-dimension-size-300);
        margin-top: var(--spectrum-global-dimension-size-550);

        @media screen and (min-width: ${mobile_screen_width}) {
          margin: 0 var(--spectrum-global-dimension-size-250);
        }
        @media screen and (min-width: ${TABLET_SCREEN_WIDTH}){
          margin-top: var(--spectrum-global-dimension-size-900);
        }
    `}>
      <div
        id="body-content-wrapper"
        css={css`
          margin-left: var(--spectrum-global-dimension-size-300);

          @media screen and (min-width: ${mobile_screen_width}) {
            margin-left: var(--spectrum-global-dimension-size-250);
          }

          @media screen and (min-width: ${min_mobile_screen_width}) {
            margin-left: var(--spectrum-global-dimension-size-0);
          }

           @media screen and (min-width: ${TABLET_SCREEN_WIDTH}){
            display: flex;
           }

          @media only screen and (min-width: ${DESKTOP_SCREEN_WIDTH}) {
            display: flex;
            margin-left: var(--spectrum-global-dimension-size-0);
            margin: var(--spectrum-global-dimension-size-0) auto;
            width:${DESKTOP_SCREEN_WIDTH};
          }
        `}
      >
        <div
          css={css`
            margin-left: var(--spectrum-global-dimension-size-0);
          `}
          className={classNames(menuClassName,`menu-content`)}
        >
          <CustomMenuBlock />
        </div>

        <div
          className={classNames(contentClassName,`page-content`)}
          css={css`
            text-align: initial !important;
            margin-left: var(--spectrum-global-dimension-size-500);

            @media screen and (min-width: ${min_mobile_screen_width}) {
              margin: var(--spectrum-global-dimension-size-100) var(--spectrum-global-dimension-size-400) var(--spectrum-global-dimension-size-500);
            }
          `}>
          {content}
        </div>
      </div>
    </section>
  );
};

MenuWrapperComponent.propTypes = {
  theme: PropTypes.string,
  menuClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  background: PropTypes.string,
  content: PropTypes.object,
};

export { MenuWrapperComponent };
