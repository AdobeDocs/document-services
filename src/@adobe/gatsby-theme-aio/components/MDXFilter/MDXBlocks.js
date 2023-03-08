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

import React from 'react';
import globalTheme from '@adobe/gatsby-theme-aio/src/theme';

import { Hero } from '@adobe/gatsby-theme-aio/src/components/Hero';
import { DiscoverBlock } from '@adobe/gatsby-theme-aio/src/components/DiscoverBlock';
import { Resources } from '@adobe/gatsby-theme-aio/src/components/Resources';
import { InlineAlert } from '@adobe/gatsby-theme-aio/src/components/InlineAlert';
import { InlineNestedAlert } from '@adobe/gatsby-theme-aio/src/components/InlineNestedAlert';
import { CodeBlock } from '@adobe/gatsby-theme-aio/src/components/CodeBlock';
import { Variant } from '@adobe/gatsby-theme-aio/src/components/Variant';
import { TitleBlock } from '@adobe/gatsby-theme-aio/src/components/TitleBlock';
import { TextBlock } from '@adobe/gatsby-theme-aio/src/components/TextBlock';
import { Divider } from '@adobe/gatsby-theme-aio/src/components/Divider';
import { Carousel } from "@adobe/gatsby-theme-aio/src/components/Carousel";
import { TabsBlock } from "@adobe/gatsby-theme-aio/src/components/Tabs";
import { WrapperComponent } from '@adobe/gatsby-theme-aio/src/components/WrapperComponent';
import { FormWrapperComponent } from '@adobe/gatsby-theme-aio/src/components/FormWrapperComponent';
import { CustomMenuBlock } from '@adobe/gatsby-theme-aio/src/components/CustomMenuBlock';
import { CustomIframeBlock } from '@adobe/gatsby-theme-aio/src/components/CustomIframe';
import { CustomCard } from '@adobe/gatsby-theme-aio/src/components/CustomCard';
import { MenuWrapperComponent } from '@adobe/gatsby-theme-aio/src/components/MenuWrapperComponent';
import { Accordion, AccordionItem } from '../Accordion';
import { AnnouncementBlock } from '@adobe/gatsby-theme-aio/src/components/AnnouncementBlock';
import { SummaryBlock } from '@adobe/gatsby-theme-aio/src/components/SummaryBlock';
import { ProductCard } from '@adobe/gatsby-theme-aio/src/components/ProductCard';
import { ResourceCard } from '@adobe/gatsby-theme-aio/src/components/ResourceCard';
import { Media } from '@adobe/gatsby-theme-aio/src/components/Media';
import { JsDocParameters } from '@adobe/gatsby-theme-aio/src/components/JsDocParameters';
import { ProductCardGrid } from '@adobe/gatsby-theme-aio/src/components/ProductCardGrid';
import { OldProductCardGrid } from '@adobe/gatsby-theme-aio/src/components/OldProductCardGrid';
import { AnchorButtonGroup } from '@adobe/gatsby-theme-aio/src/components/AnchorButtonGroup';
import { DCSummaryBlock } from '@adobe/gatsby-theme-aio/src/components/DCSummaryBlock';

export const MDXBlocks = {
  Hero,
  DiscoverBlock,
  Resources,
  InlineAlert,
  InlineNestedAlert,
  CodeBlock: ({ theme, ...props }) => <CodeBlock theme={theme ?? globalTheme.code} {...props} />,
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
  OldProductCardGrid,
  WrapperComponent,
  FormWrapperComponent,
  MenuWrapperComponent,
  CustomMenuBlock,
  CustomIframeBlock,
  CustomCard,
  Accordion,
  AccordionItem,
  TabsBlock: ({ theme, ...props }) => (
    <TabsBlock theme={theme ?? globalTheme.code} {...props} />
  ),
  Carousel,
  AnchorButtonGroup,
  DCSummaryBlock
};
