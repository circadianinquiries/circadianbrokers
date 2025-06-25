import Banner from "@/src/app/components/product/banner";
import { BannerData, ProductContentData, TestimonialData, BrokerData, SimpleData, BlueContentData } from "@/src/app/motorcycle-insurance/data/data";
import Testimonial from "@/src/app/components/product/testimonial";
import BlueContentSection from "@/src/app/components/product/bluecontentsection";
import Broker from "@/src/app/components/about/broker";
import SimpleContent from "@/src/app/components/product/simplecontent";


const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Broker data={BrokerData} />
      <SimpleContent data={SimpleData} />
      <BlueContentSection data={BlueContentData} />
      <Testimonial data={TestimonialData} bgColor={true} />
    </>
  );
};

export default Page;
