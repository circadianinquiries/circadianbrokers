
import Banner from "@/src/app/home/banner";
import { BannerData, ProductListingData, HomeContentData, ProductContentData, ContetnData } from "@/src/app/home/data/data";
import InsuranceFrom from "@/src/app/home/insurancefrom";
import ProductListing from "@/src/app/components/product/productlisting";
import HomeContent from "@/src/app/home/homecontent";
import { TestimonialData } from "@/src/app/products/data/data";
import Testimonial from "@/src/app/components/product/testimonial";
import ContenSection from "@/src/app/components/product/contentsection";
import SimpleContent from "@/src/app/home/simplecontent";

export default function Home() {
  return (
    <>
      <Banner data={BannerData} />
      <InsuranceFrom />
      <ProductListing data={ProductListingData} />
      <HomeContent data={HomeContentData} />
      <Testimonial data={TestimonialData} />
      <ContenSection data={ProductContentData} />
      <SimpleContent data={ContetnData} />
    </>
  );
}
