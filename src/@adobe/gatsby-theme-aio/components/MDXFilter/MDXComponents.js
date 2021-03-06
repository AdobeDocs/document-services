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

import { AnchorLink } from '@adobe/gatsby-theme-aio/src/components/AnchorLink';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '@adobe/gatsby-theme-aio/src/components/Heading';
import { Paragraph } from '@adobe/gatsby-theme-aio/src/components/Paragraph';
import { List } from '@adobe/gatsby-theme-aio/src/components/List';
import { Code } from '@adobe/gatsby-theme-aio/src/components/Code';
import { InlineCode } from '@adobe/gatsby-theme-aio/src/components/InlineCode';
import { Image } from '@adobe/gatsby-theme-aio/src/components/Image';
import { Table, TBody, Td, Th, THead, Tr } from '@adobe/gatsby-theme-aio/src/components/Table';

export const MDXComponents = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  p: Paragraph,
  ul: List,
  ol: ({ children, ...props }) => (
    <List elementType="ol" {...props}>
      {children}
    </List>
  ),
  code: ({ children, theme, ...props }) => (
    <Code {...props} theme={theme ?? globalTheme.code}>
      {children}
    </Code>
  ),
  inlineCode: InlineCode,
  a: AnchorLink,
  img: Image,
  table: Table,
  tbody: TBody,
  th: Th,
  td: Td,
  thead: THead,
  tr: Tr
};
