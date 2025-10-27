import Banner from "@/src/app/components/product/banner";
import { BannerData, BrokerData, SimpleData } from "@/src/app/earthquake-insurance/data/data";
import Testimonial from "@/src/app/components/product/testimonial";
import Broker from "@/src/app/components/about/broker";
import SimpleContent from "@/src/app/components/product/simplecontent";
import { TestimonialData } from "@/src/app/products/data/data";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Broker data={BrokerData} />
      <SimpleContent data={SimpleData} />
      <Testimonial data={TestimonialData} bgColor={true} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              "name": "Earthquake Insurance Brroker in California",
              "image": "https://www.circadianbrokers.com/logo.webp",
              "@id": "",
              "url": "https://www.circadianbrokers.com/earthquake-insurance",
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
            }
          ])
        }}
      />
    </>
  );
};

export default Page;
