import Banner from "@/src/app/components/product/banner";
import ProductListing from "@/src/app/components/product/productlisting";
import { BannerData, ProductContentData, ProductListingData, TestimonialData } from "@/src/app/products/data/data";
import Testimonial from "@/src/app/components/product/testimonial";
import ContenSection from "@/src/app/components/product/contentsection";

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <ProductListing data={ProductListingData} />
      <Testimonial data={TestimonialData} />
      <ContenSection data={ProductContentData} />
    </>
  );
};

export default Page;
