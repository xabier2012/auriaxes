import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaSEO = ({ title, description, keywords, canonical, ogImage }) => {
  const defaultOgImage = ogImage || 'https://auriaxes.com/assets/images/auriaxes-asesores.jpg';
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      <meta name="geo.region" content="ES-GA" />
      <meta name="geo.placename" content="Ourense" />
      <meta name="geo.position" content="42.340008;-7.863761" />
      <meta name="ICBM" content="42.340008, -7.863761" />
      
      <meta name="language" content="Spanish" />
      <meta name="author" content="Auriaxes Asesores" />
      <meta name="revisit-after" content="7 days" />
      
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="es_ES" />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content="Auriaxes Asesores" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultOgImage} />
      
      <html lang="es" />
    </Helmet>
  );
};

export default MetaSEO;
