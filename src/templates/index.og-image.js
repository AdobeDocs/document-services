import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Template = ({ metaImage }) => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 630 });
  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    // Only runs in the browser
    const domain = window.location.origin;
    const path = domain + '/og-image/' + metaImage;
    setImagePath(path);

    const img = new Image();
    img.src = path;

    img.onload = () => {
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    };
  }, [metaImage]);

  return (
    <Helmet>
      {imagePath && (
        <>
          <meta property="og:image" content={imagePath} />
          <meta property="og:image:width" content={dimensions.width} />
          <meta property="og:image:height" content={dimensions.height} />
        </>
      )}
    </Helmet>
  );
};

export default Template;
