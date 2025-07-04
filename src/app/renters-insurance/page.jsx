import Banner from "@/src/app/components/product/banner";
import { BannerData, SimpleData1, BrokerData, SimpleData, BlueContentData, BlueContentData1, ProductContentData } from "@/src/app/renters-insurance/data/data";
import Testimonial from "@/src/app/components/product/testimonial";
import BlueContentSection from "@/src/app/components/product/bluecontentsection";
import Broker from "@/src/app/components/about/broker";
import SimpleContent from "@/src/app/components/product/simplecontent";
import ContenSection from "@/src/app/components/product/contentsection";
import { TestimonialData } from "@/src/app/products/data/data";

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
