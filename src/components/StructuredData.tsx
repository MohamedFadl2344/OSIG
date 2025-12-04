const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "OSIG",
    "description": "AI Image Generator",
    "url": "https://osig.vercel.app",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Mohamed Fadl"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default StructuredData;