/*
 * Copyright 2021 Adobe. All rights reserved.
 */

import React from "react";
import { css } from "@emotion/react";
import "@spectrum-css/typography";
import "@spectrum-css/card";
import PropTypes from "prop-types";
import classNames from "classnames";

import { DESKTOP_SCREEN_WIDTH } from '@adobe/gatsby-theme-aio/src/utils';


const WrapperComponent = ({ theme = 'lightest',className,content,background }) => {
const backgroundColor =background?`background:${background}`:'background: var(--spectrum-global-color-gray-100)'
  return (
    <section
      className={classNames(className,`spectrum--${theme}`)}
      css={css`
        ${backgroundColor}
        `}>
          <div
          css={css`
          overflow-x:hidden !important;
          @media only screen and (min-width: ${DESKTOP_SCREEN_WIDTH}) {
            margin:auto;
              width:${DESKTOP_SCREEN_WIDTH}
            }
          `}>
      {content}
      </div>
    </section>
  );
};

WrapperComponent.propTypes = {
  theme: PropTypes.string,
};

export { WrapperComponent };
