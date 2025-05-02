import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Template = ({ metaImage }) => {

  const [dimensions, setDimensions] = useState({ width: 1200, height: 630 });
  const domain = window.location.origin;
  const imagePath = domain + '/og-image/' + metaImage;

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;

    img.onload = () => {
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    };

  }, [imagePath]);

  return (
    <Helmet>
      <meta property="og:image" content={imagePath} />
      <meta property="og:image:width" content={dimensions.width} />
      <meta property="og:image:height" content={dimensions.height} />
    </Helmet>
  );
};

export default Template;
