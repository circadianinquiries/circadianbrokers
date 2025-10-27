
import Banner from "@/src/app/home/banner";
import { BannerData, ProductListingData, HomeContentData, ProductContentData, ContetnData } from "@/src/app/home/data/data";
import InsuranceFrom from "@/src/app/home/insurancefrom";
import ProductListing from "@/src/app/components/product/productlisting";
import HomeContent from "@/src/app/home/homecontent";
import { TestimonialData } from "@/src/app/products/data/data";
import Testimonial from "@/src/app/components/product/testimonial";
import ContenSection from "@/src/app/components/product/contentsection";
import SimpleContent from "@/src/app/home/simplecontent";

export default function Home() {
  return (
    <>
      <Banner data={BannerData} />
      <InsuranceFrom />
      <ProductListing data={ProductListingData} />
      <HomeContent data={HomeContentData} />
      <Testimonial data={TestimonialData} />
      <ContenSection data={ProductContentData} />
      <SimpleContent data={ContetnData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              "name": "Insurance Agnecy California",
              "image": "https://www.circadianbrokers.com/logo.webp",
              "@id": "",
              "url": "https://www.circadianbrokers.com/",
              "telephone": "925-417-8500",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8440 Brentwood Blvd, Ste H Brentwood",
                "addressLocality": "Brentwood",
                "addressRegion": "CA",
                "postalCode": "94513",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 37.9312535,
                "longitude": -121.6948379
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": "https://www.facebook.com/circadianinsurance/"
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Insurance Agency in California",
              "url": "https://www.circadianbrokers.com/",
              "logo": "https://www.circadianbrokers.com/logo.webp",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "925-417-8500",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "US",
                "availableLanguage": "en"
              },
              "sameAs": [
                "https://www.facebook.com/circadianinsurance/",
                "https://www.circadianbrokers.com/"
              ]
            }
          ])
        }}
      />

    </>
  );
}
