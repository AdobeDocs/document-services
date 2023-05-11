/*
 * Copyright 2022 Adobe. All rights reserved.
 */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import autoTagVisual  from "../pages/images/PDF_tag_Structure_Visual.png";
import { css } from "@emotion/react";


import "@spectrum-css/typography";

const AutoTag =({})=>{

  return(
    <div className="autoMain">
      <div className="autoTagContainer">
        <div className="headerContent tag-structure">
         <h2
              className="spectrum-Heading spectrum-Heading--sizeL"
              css={css`
                margin-top: 0 !important;
                margin-bottom: var(
                  --spectrum-global-dimension-size-200
                ) !important;
                color: #fff !important;
              `}
            >
             What is PDF tag structure?
            </h2>
            <p  className= "spectrum-Body spectrum-Body--sizeL"
            css={css`
              margin-bottom: var(
                --spectrum-global-dimension-size-300
              ) !important;
              color: var(--spectrum-global-color-gray-900);
              margin-top: 0;
              color: #fff !important;
              font-weight: lighter;
            `}>
               To read a document's text and accurately format it for assistive technologies like screen readers and other
               text-to-speech tools, a PDF must have document structure tags that define the reading order. Identifying headings,
               paragraphs, sections, tables, and other page elements is necessary to achieve accessible, readable PDFs.
            </p>
            <div class="mp-cta-wrapper">
                <a
                  href="https://developer.adobe.com/document-services/docs/overview/pdf-accessibility-auto-tag-api/"
                  target="_parent"
                  class="button-link"
                  tabindex="0"
                >
                  Learn more
                </a>
              </div>
        </div>
        <div className="img-alignment">
          <img src={autoTagVisual} alt="" className="autoTagVisual" />
        </div>
        <div className="autoTagBtm">
          <p className= "spectrum-Body spectrum-Body--sizeL"
            css={css`
              margin-bottom: var(
                --spectrum-global-dimension-size-300
              ) !important;
              color: var(--spectrum-global-color-gray-900);
              margin-top: 0;
              color: #fff !important;
              font-weight: lighter;
            `}>
              The API tags untagged PDFs, tags partially tagged PDFs from scratch while maintaining any existing Alt-text, and
              offers a tagging report for both.
          </p>
        </div>
      </div>
    </div>
  )
}

export {AutoTag}