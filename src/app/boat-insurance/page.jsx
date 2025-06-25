import Banner from "@/src/app/components/product/banner";
import { BannerData, TestimonialData, BrokerData, SimpleData, BlueContentData, SimpleData1 } from "@/src/app/boat-insurance/data/data";
import Testimonial from "@/src/app/components/product/testimonial";
import Broker from "@/src/app/components/about/broker";
import SimpleContent from "@/src/app/components/product/simplecontent";
import BlueContentSection from "@/src/app/components/product/bluecontentsection";


const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Broker data={BrokerData} />
      <SimpleContent data={SimpleData} />
      <BlueContentSection data={BlueContentData} />
      <SimpleContent data={SimpleData1} pt={true} />
      <Testimonial data={TestimonialData} bgColor={true} />
    </>
  );
};

export default Page;
