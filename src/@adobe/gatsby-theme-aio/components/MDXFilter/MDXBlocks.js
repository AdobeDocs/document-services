/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React from "react";
import globalTheme from "@adobe/gatsby-theme-aio/src/theme";

import { DiscoverBlock } from "@adobe/gatsby-theme-aio/src/components/DiscoverBlock";
import { Resources } from "@adobe/gatsby-theme-aio/src/components/Resources";
import { InlineAlert } from "@adobe/gatsby-theme-aio/src/components/InlineAlert";
import { CodeBlock } from "@adobe/gatsby-theme-aio/src/components/CodeBlock";
import { Variant } from "@adobe/gatsby-theme-aio/src/components/Variant";
import { TitleBlock } from "@adobe/gatsby-theme-aio/src/components/TitleBlock";
import { TextBlock } from "@adobe/gatsby-theme-aio/src/components/TextBlock";
import { Divider } from "@adobe/gatsby-theme-aio/src/components/Divider";
import { AnnouncementBlock } from "@adobe/gatsby-theme-aio/src/components/AnnouncementBlock";
import { SummaryBlock } from "@adobe/gatsby-theme-aio/src/components/SummaryBlock";
import { ProductCard } from "@adobe/gatsby-theme-aio/src/components/ProductCard";
import { ResourceCard } from "@adobe/gatsby-theme-aio/src/components/ResourceCard";
import { Media } from "@adobe/gatsby-theme-aio/src/components/Media";
import { JsDocParameters } from "@adobe/gatsby-theme-aio/src/components/JsDocParameters";
import { ProductCardGrid } from "@adobe/gatsby-theme-aio/src/components/ProductCardGrid";
import { Carousel } from "../Carousel";
import { TabsBlock } from "../Tabs";
import { WrapperComponent } from '../WrapperComponent';
import {FormWrapperComponent} from '../FormWrapperComponent';
import {Hero} from '../Hero';
import { MenusBlock } from '../Menu';
import {CustomIframeBlock} from '../CustomIframe';
import { MenuWrapperComponent } from '../MenuWrapperComponent';

export const MDXBlocks = {
  Hero,
  DiscoverBlock,
  Resources,
  InlineAlert,
  CodeBlock: ({ theme, ...props }) => (
    <CodeBlock theme={theme ?? globalTheme.code} {...props} />
  ),
  Variant,
  TitleBlock,
  TextBlock,
  Divider,
  AnnouncementBlock,
  SummaryBlock,
  ProductCard,
  ResourceCard,
  Media,
  JsDocParameters,
  ProductCardGrid,
  Carousel,
  WrapperComponent,
  FormWrapperComponent,
  MenuWrapperComponent,
  MenusBlock,
  CustomIframeBlock,
  TabsBlock: ({ theme, ...props }) => (
    <TabsBlock theme={theme ?? globalTheme.code} {...props} />
  ),
};
