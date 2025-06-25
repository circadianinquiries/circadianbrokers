import Banner from "@/src/app/components/product/banner";
import { BannerData, TestimonialData, BrokerData, SimpleData, BlueContentData, SimpleData1, ProductContentData } from "@/src/app/homeowner-insurance/data/data";
import Testimonial from "@/src/app/components/product/testimonial";
import Broker from "@/src/app/components/about/broker";
import SimpleContent from "@/src/app/components/product/simplecontent";
import BlueContentSection from "@/src/app/components/product/bluecontentsection";
import ContenSection from "@/src/app/components/product/contentsection";
const Page = () => {
  return (
    <>
      <Banner data={BannerData} FromLink={true} />
      <Broker data={BrokerData} FromLink={true} />
      <SimpleContent data={SimpleData} />
      <BlueContentSection data={BlueContentData} />
      <SimpleContent data={SimpleData1} pt={true} />
      <Testimonial data={TestimonialData} />
      <ContenSection data={ProductContentData} FromLink={true} />
    </>
  );
};

export default Page;
