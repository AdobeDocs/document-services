/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import React, { forwardRef, useState, useRef, useEffect, useCallback, useContext } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import nextId from 'react-id-generator';
import { GatsbyLink } from '@adobe/gatsby-theme-aio/src/components/GatsbyLink';
import '@spectrum-css/menu';
import { CheckMark, ChevronDown, ChevronRight } from '@adobe/gatsby-theme-aio/src/components/Icons';
import { graphql, useStaticQuery, withPrefix } from "gatsby";
import Context from '@adobe/gatsby-theme-aio/src/components/Context';

import {
  rootFix,
  findSelectedPages,
  normalizePagePath,
} from '@adobe/gatsby-theme-aio/src/utils';
import { TABLET_SCREEN_WIDTH } from '@adobe/gatsby-theme-aio/conf/globals';

const Menu = forwardRef(({ children, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      className="spectrum-Menu"
      role="menu"
      css={css`
        display: block;
      `}
      {...props}>
      {children}
    </ul>
  );
});

const Item = ({ children, isDivider = false, isHighlighted, isSelected, href = '', ...props }) => {
  const Element = href ? GatsbyLink : 'li';

  return isDivider ? (
    <li className="spectrum-Menu-divider" role="separator" />
  ) : (
    <Element
      className={classNames('spectrum-Menu-item', { 'is-open': isHighlighted }, { 'is-selected': isSelected })}
      to={href}
      role="menuitem"
      tabIndex="0"
      css={css`
        text-align: left;
      `}
      {...props}>
      <span className="spectrum-Menu-itemLabel">{children}</span>
      <CheckMark
        className="spectrum-Menu-checkmark spectrum-Menu-itemIcon"
        css={css`
          display: none;
        `}
      />
    </Element>
  );
};

const Section = ({ children, title }) => {
  const id = nextId();

  return (
    <li role="presentation">
      <span className="spectrum-Menu-sectionHeading" id={id} aria-hidden="true">
        {title}
      </span>
      <ul className="spectrum-Menu" role="group" aria-labelledby={id}>
        {children}
      </ul>
    </li>
  );
};

function useDynamicSVGImport(name, options = {}) {
    const ImportedIconRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const { onCompleted, onError } = options;
    useEffect(() => {
      setLoading(true);
      const importIcon = async () => {
        try {
          ImportedIconRef.current =
            await import(`../../../../pages/images/${name}.svg`)

          if (onCompleted) {
            onCompleted(name, ImportedIconRef.current);
          }
        } catch (err) {
          console.log('error',error);
          if (onError) {
            onError(err);
          }
          setError(err);
        } finally {
          setLoading(false);
        }
      };
        importIcon();
    }, [name, onCompleted, onError]);
    return { error, loading, SvgIcon: ImportedIconRef.current?.default };
  }

  const Icon = ({ name, onCompleted, onError, ...rest }) => {
    const { error,  SvgIcon } = useDynamicSVGImport(name, {
      onCompleted,
      onError
    });
    if (error) {
      return error.message;
    }

    if (SvgIcon) {
      return  <img src={SvgIcon} alt="W3Schools.com" style={{width:40, height: 40}}></img>;
    }
    return null;
  };

const MenusBlock = ({
  className,
  ...props
}) => {

  const mobile_screen_width = '767px';
  const data = useStaticQuery(
    graphql`
      query MyQuery {
      site(children: {}) {
        id
        siteMetadata {
          title
          subMenuPages {
            path
            title
            icon
            pages {
              title
              path
            }
          }
        }
      }
    }
    `
  );

  const {subMenuPages } = data.site.siteMetadata;
  const { location } =  useContext(Context);

  const normalizeSubPages = (page) => {
    normalizePagePath(page);

    if (page.pages) {
      page.pages.forEach((subPage) => {
        normalizeSubPages(subPage);
      });
    }
  };

  if (subMenuPages) {
    subMenuPages.forEach((subMenu) => {
      normalizeSubPages(subMenu);
    });
  }

  const handleOnCompleted = useCallback(
    (iconName) => console.log(`${iconName} successfully loaded`),
    []
  );

  const handleIconError = useCallback((err) => console.error(err.message), []);

  const pathWithRootFix = rootFix(location.pathname);
  const selectedMenus = findSelectedPages(pathWithRootFix, subMenuPages);

  const [expandedMenus, setExpandedMenus] = useState([]);

  const renderSubMenuItem = (menus, level) => {
    return(menus
    .filter((menu) => menu.title && menu.path)
    .map((menu, index) => {
      const isSelected = selectedMenus.find((selectedItem) => selectedItem === menu);
      const isExpanded = menu.header || expandedMenus.includes(menu.href);
      const id = nextId();

      if (isSelected && !expandedMenus.includes(menu.href)) {
        setExpandedMenus((menus) => [...menus, menu.href]);
      }
      const menuHref = withPrefix(menu.href);

      return(
        <li
          key={index}
          css={css`
            display: contents;
            &:not(.is-open) .spectrum-Menu {
              display: none;
            }
          }
        `}
          className={classNames([
            'spectrum-Menu-item',
            { 'is-open':  isExpanded},
            { 'is-selected': selectedMenus[selectedMenus.length - 1] === menu && isSelected }
          ])}
        >
          <GatsbyLink
            css={
              css`
                color: var(--spectrum-sidenav-item-text-color, var(--spectrum-alias-text-color));
                position: relative;
                display: inline-flex;
                align-items: center;
                justify-content: left;
                box-sizing: border-box;
                inline-size: 100%;
                text-decoration: none;
                padding: var(--spectrum-global-dimension-size-100) var(--spectrum-global-dimension-size-100) var(--spectrum-global-dimension-size-100) var(--spectrum-global-dimension-size-200);

                .spectrum-Menu-itemIcon {
                  flex-shrink: 0;
                  margin-inline-end: var(--spectrum-sidenav-icon-gap);
                }
              `
            }
            onClick={(event) => {
              if (menu?.pages?.length && !menu.header && menu.pages.find((subPage) => subPage.href === menu.href)) {
                event.preventDefault();
                if (expandedMenus.includes(menu.href)) {
                  setExpandedMenus((menus) => menus.filter((href) => href !== menu.href));
                } else {
                  setExpandedMenus([...expandedMenus, menu.href]);
                }
              }
            }}
            to={menuHref}
            className={classNames([
              'spectrum-Menu-item',
              { 'is-open':  selectedMenus[selectedMenus.length - 1] === menu && isSelected},
            ])}
            role="menuitem"
            aria-level={level}>
              { level === 1 ?
                <>
                  {<div>
                    {isExpanded ?
                      <ChevronDown className="spectrum-Menu-itemIcon"/>
                      :
                      <ChevronRight className="spectrum-Menu-itemIcon"/>
                    }
                  </div>}
                  <div>
                    {menu.icon&&
                      <>
                      <Icon
                        name={menu.icon}
                        fill="gray"
                        onCompleted={handleOnCompleted}
                        onError={handleIconError}
                      /></>
                    }
                  </div>
                </>
              :
                null
              }
              <div
                css={css`
                  font-size: var(--spectrum-global-dimension-size-200);
                  padding-left: var(--spectrum-global-dimension-size-100);
                  white-space: nowrap;
                  color: var(--spectrum-listitem-m-text-color-hover, var(--spectrum-alias-text-color));
                `}
                className="spectrum-Menu-itemLabel"
              >
                {menu.title}  { level === 1 ? `(${menu.pages?.length})` : '' }
              </div>
          </GatsbyLink>

          {menu.pages && (
            <ul
              className="spectrum-Menu spectrum-SubMenu"
              css={css`
                margin-left: var(--spectrum-global-dimension-size-600);
                ${level > 1
                  ? `
                  & > li > a {
                    padding-left: calc(${level + 1} * var(--spectrum-global-dimension-size-150)) !important;
                  }
                `
                : ''}
              `}
              {...(menu.heading ? { 'aria-labelledby': id } : {})}>
              {renderSubMenuItem(menu.pages, level + 1)}
            </ul>
          )}
      </li>)
    }))
  }



  return (<section
    css={css`
      text-align: left;
      width: calc(var(--spectrum-global-dimension-size-1000) + var(--spectrum-global-dimension-size-3000));
      margin: auto;

      @media only screen and (max-width: ${mobile_screen_width}) {
        width: var(--spectrum-global-dimension-size-3000) !important;
        margin-left: 0;
      }

      @media only screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
        margin-left: 0;
      }
    `}
  >
    <Menu
      css={css`
        list-style: none;
        margin: var(--spectrum-global-dimension-size-0) var(--spectrum-global-dimension-size-450) var(--spectrum-global-dimension-size-0) var(--spectrum-global-dimension-size-0);
        padding-left: var(--spectrum-global-dimension-size-0);
        &:not(.spectrum-SubMenu) {
          & > li > a {
            background: none;
            font-weight: bold;
          }
        }
      `}
    >
      {renderSubMenuItem(subMenuPages, 1)}

   </Menu>
  </section>)
};


Item.propTypes = {
  isHighlighted: PropTypes.bool,
  isSelected: PropTypes.bool,
  isDivider: PropTypes.bool,
  href: PropTypes.string
};

Section.propTypes = {
  title: PropTypes.string
};

MenusBlock.propTypes = {
  className: PropTypes.string
};

export { Menu, Item, Section, MenusBlock };
