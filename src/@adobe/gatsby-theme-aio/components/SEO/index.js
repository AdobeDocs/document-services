import React, {useContext} from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Context from "@adobe/gatsby-theme-aio/src/components/Context";

const SEO = ({ title, description, keywords }) => {
  const this_page_image = 'dcsdk-main.jpg';
  const production_domain = 'https://www.adobe.io';
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  const this_date = `${yyyy}-${mm}-${dd}`;
  const { location } = useContext(Context);
  const siteURL = location.origin || 'https://developer-stage.adobe.com';
  const pageURL = location.pathname;
  const baseurl = "";
  console.log('shaedow location', location);

  return(
    <Helmet>
      <html lang="en" />
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      <meta name="robots" content="noodp"/>
      <link rel="canonical" href= {`${production_domain}${pageURL}`}/>

      {/*  primary  */}
      <title>{ title }</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}

      {/* props */}
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={`${production_domain}/gh-assets/img/page-thumbnails/${this_page_image}`}/>
      <meta property="article:author" content="Adobe I/O — Adobe Developers" />
      <meta property="article:published_time" content={this_date} />

      {/* open graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteURL}${baseurl}${pageURL}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${production_domain}/gh-assets/img/page-thumbnails/${this_page_image}`}/>
      <meta property="og:publish_date"  content={this_date} />

      {/* twitter */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="@adobedevs" />
      <meta property="twitter:url" content={`${siteURL}${baseurl}${pageURL}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:creator" content="@adobedevs" />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image:src" content={`${production_domain}/gh-assets/img/page-thumbnails/${this_page_image}`}/>


      <link rel="icon" href="https://www.adobe.com/favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" href="https://www.adobe.com/favicon.ico" type="image/x-icon" />
      {process.env.GATSBY_ADOBE_LAUNCH_SRC && <script src={process.env.GATSBY_ADOBE_LAUNCH_SRC} async />}

    </Helmet>
  )
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.array
};

export { SEO };
