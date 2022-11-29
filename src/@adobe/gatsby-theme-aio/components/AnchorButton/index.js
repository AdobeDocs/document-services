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
import { GatsbyLink } from '@adobe/gatsby-theme-aio/src/components/GatsbyLink';
import PropTypes from 'prop-types';
import { Button } from '@adobe/gatsby-theme-aio/src/components/Button';
import '@spectrum-css/button';
import classNames from 'classnames';

const AnchorButton = ({ className, href, variant, isQuiet, ...props }) => {
  // href = String(href).replace('#', '');
  let isExternal = true;

  try {
    new URL(href);
  } catch (e) {
    isExternal = false;
  }

  if (isExternal && new URL(href).searchParams.has('aio_internal')) {
    isExternal = false;
  }
  if (href.indexOf('interstitial') >= 0 || href == null) {
    isExternal = true;
  }

  if (isExternal) {
    return (
      <Button
        className={className}
        elementType="a"
        variant={variant}
        isQuiet={isQuiet}
        href={href}
        target='_blank'
        rel='noopener noreferrer nofollow'
        {...props}
      />
    );
  }

  return (
    <GatsbyLink
      role="button"
      className={classNames(className, 'spectrum-Button', 'spectrum-Button--sizeM', `spectrum-Button--${variant}`, {
        'spectrum-Button--quiet': isQuiet
      })}
      to={href}
      {...props}
    />
  );
};

AnchorButton.propTypes = {
  href: PropTypes.string,
  variant: PropTypes.oneOf(['cta', 'overBackground', 'primary', 'secondary', 'negative']),
  isQuiet: PropTypes.bool
};

export { AnchorButton };