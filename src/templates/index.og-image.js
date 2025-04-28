import React from 'react';
import { Helmet } from 'react-helmet';

const Template = ({metaImage}) => {

  const domain = window.location.origin;

  return (
    <Helmet>
      <meta property="og:image" content={domain + '/og-image/' + metaImage} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:width" content="50" />
    </Helmet>
  );
};

export default Template;
