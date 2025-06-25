import Banner from "@/src/app/components/product/banner";
import { BannerData, ProductContentData, TestimonialData, BrokerData, SimpleData, BlueContentData, SimpleData1, BlueContentData1 } from "@/src/app/business-insurance/data/data";
import Testimonial from "@/src/app/components/product/testimonial";
import ContenSection from "@/src/app/components/product/contentsection";
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
      <BlueContentSection data={BlueContentData1} />
      <Testimonial data={TestimonialData} />
      <ContenSection data={ProductContentData} />
    </>
  );
};

export default Page;
