import Banner from "@/src/app/components/product/banner";
import { BannerData, ProductContentData, TestimonialData, BrokerData, SimpleData } from "@/src/app/auto-insurance/data/data";
import Testimonial from "@/src/app/components/product/testimonial";
import ContenSection from "@/src/app/components/product/contentsection";
import Broker from "@/src/app/components/about/broker";
import SimpleContent from "@/src/app/components/product/simplecontent";


const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Broker data={BrokerData} />
      <SimpleContent data={SimpleData} />
      <Testimonial data={TestimonialData} />
      <ContenSection data={ProductContentData} />
    </>
  );
};

export default Page;
