import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Template = ({ metaImage }) => {
  const [imagePath, setImagePath] = useState(`/og-image/${metaImage}`);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 630 }); // default fallback

  useEffect(() => {
    if (typeof window !== 'undefined' && metaImage) {
      const domain = window.location.origin;
      const fullPath = `${domain}/og-image/${metaImage}`;
      setImagePath(fullPath);

      const img = new Image();
      img.src = fullPath;

      img.onload = () => {
        setDimensions({
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };
    }
  }, [metaImage]);

  return (
    <Helmet>
      {/* Fallback for scrapers: relative path */}
      <meta property="og:image" content={`/og-image/${metaImage}`} />
      {/* Browser: updated full path and dimensions */}
      <meta property="og:image" content={imagePath} />
      <meta property="og:image:width" content={dimensions.width} />
      <meta property="og:image:height" content={dimensions.height} />
    </Helmet>
  );
};

export default Template;
