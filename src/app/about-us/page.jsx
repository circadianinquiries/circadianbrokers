import Banner from "@/src/app/components/product/banner";
import { BannerData, BrokerData, InsuranceData, ProductContentData, LogoImageData } from "@/src/app/about-us/data/data";
import Broker from "@/src/app/components/about/broker";
import ContentAbt from "@/src/app/components/about/content";
import { TestimonialData } from "@/src/app/products/data/data";
import Testimonial from "@/src/app/components/product/testimonial";
import ContenSection from "@/src/app/components/product/contentsection";
import LogoBox from "@/src/app/components/about/logobox";


const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Broker data={BrokerData} />
      <ContentAbt data={InsuranceData} />
      <LogoBox data={LogoImageData} />
      <Testimonial data={TestimonialData} />
      <ContenSection data={ProductContentData} />

    </>
  );
};

export default Page;
