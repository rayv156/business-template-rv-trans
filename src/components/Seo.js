import React from 'react';
import appleTouch from '../images/apple-touch-icon.png';
import favicon32 from '../images/favicon-32x32.png';
import favicon16 from '../images/favicon-16x16.png';

function Seo({ title, description }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    </>
  );
}

export default Seo;
