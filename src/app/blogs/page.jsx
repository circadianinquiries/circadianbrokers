import Banner from '@/src/app/blogs/banner'
import { BannerData, BlgosData, QuoteData } from '@/src/app/blogs/data/data'
import Blogs from "@/src/app/blogs/blogs";

const Page = () => {
    return (
        <>
            <Blogs data={BlgosData} blogPage={true} />

        </>
    )
}

export default Page