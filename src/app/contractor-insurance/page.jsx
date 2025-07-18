import Banner from "@/src/app/components/product/banner";
import { BannerData, BrokerData, SimpleData } from "@/src/app/contractor-insurance/data/data";
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
    </>
  );
};

export default Page;
