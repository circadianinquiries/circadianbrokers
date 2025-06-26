import Banner from "@/src/app/components/product/banner";
import { BannerData, BrokerData, SimpleData, BlueContentData } from "@/src/app/wildfire-home-insurance/data/data";
import Testimonial from "@/src/app/components/product/testimonial";
import BlueContentSection from "@/src/app/components/product/bluecontentsection";
import Broker from "@/src/app/components/about/broker";
import SimpleContent from "@/src/app/components/product/simplecontent";
import { TestimonialData } from "@/src/app/products/data/data";


const Page = () => {
  return (
    <>
      <Banner data={BannerData} FromLink={true} />
      <Broker data={BrokerData} FromLink={true} />
      <SimpleContent data={SimpleData} />
      <BlueContentSection data={BlueContentData} />
      <Testimonial data={TestimonialData} bgColor={true} />
    </>
  );
};

export default Page;
