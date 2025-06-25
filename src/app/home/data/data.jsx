//Banner
import BannerPoster from "media/home/bannerImage.webp"
import { BoatIcon, BusinessIcon, CondoIcon, HomeIcon, MedicalIcon, MotorcycleIcon, AutoIcon, WildfireIcon } from "../../app-constants"


export const BannerData = {
    title: (<>
        Insurance Broker <span>in California</span>
    </>),
    desc: "Trust our insurance brokers in California to find the perfect policy that works for you.",
    BannerPoster: BannerPoster.src
}

export const ProductListingData = {
    title: (<>Comprehensive <span>insurance services</span></>),
    txt: "Request your free policy review today",
    productlisting: [
        {
            icon: <HomeIcon />,
            title: "Homeowner Insurance",
            txt: "Your home is more than a house; it's where memories are made. Protect it with our homeowner insurance, which covers property damage and liability for your safety, both inside and outside.",
            link: "/homeowner-insurance"
        },
        {
            icon: <WildfireIcon />,
            title: "Wildfire Home Insurance",
            txt: "In California, wildfires pose a significant threat. Our wildfire home insurance protects your home and belongings in case of disaster. Secure your property with the right coverage.",
            link: "/wildfire-home-insurance"
        },
        {
            icon: <AutoIcon />,
            title: "Auto Insurance",
            txt: "Hit the road with confidence. Our auto insurance provides comprehensive coverage for your vehicle, protecting you from accidents and theft. Enjoy peace of mind with affordable options.",
            link: "/auto-insurance"
        },
        {
            icon: <BoatIcon />,
            title: "Boat & Watercraft Insurance",
            txt: "Stay protected on the water with our boat and watercraft insurance. We cover your vessel, gear, and liability to ensure your adventures are safe and enjoyable, whether on a lake or the ocean.",
            link: "/boat-insurance"
        },
        {
            icon: <MotorcycleIcon />,
            title: "Motorcycle Insurance",
            txt: "Feel the freedom of the road with motorcycle insurance that keeps you safe. Our coverage protects against accidents, theft, and injury, so you’re covered wherever you ride.",
            link: "/motorcycle-insurance"
        },
        {
            icon: <CondoIcon />,
            title: "Condo Insurance",
            txt: "Your condo is unique, and so are your insurance needs. Our condo insurance provides coverage for personal property, liability, and additional benefits. Protect your unit from unexpected events.",
            link: "/condo-insurance"
        },
        {
            icon: <BusinessIcon />,
            title: "Business Insurance",
            txt: "Protect your business with tailored insurance covering liability, property, workers’ compensation, and more. Secure your company’s future with reliable coverage tailored to your needs.",
            link: "/business-insurance"
        },
        {
            icon: <MedicalIcon />,
            title: "Medical Malpractice Insurance",
            txt: "Your practice relies on trust. Medical malpractice insurance safeguards your , allowing  focus on patient care with confidence.",
            link: "/medical-malpractice-insurance"
        }


    ]
}
import HomeCar from "media/home/HomeCar.webp"
export const HomeContentData = {
    subtitle: "About Circadian Insurance Brokers",
    title: (<>
        Why Choose <span>Circadian Insurance Brokers?</span>
    </>
    ),
    txt: (<>
        <p>Looking for an insurance broker who gets you? At Circadian Insurance Brokers, we’re not here to just sell you a policy — we’re here to give you the coverage that fits your life. As your insurance broker, we cut through the clutter to bring you the best deals, fast and simple.</p>
        <p>We’ve been helping Californians like you find the right insurance since 2000. Whether you’re after home, auto, or business insurance, our insurance brokers work with top carriers to get you the perfect coverage at the best price.</p>
        <p>With over 30 years of combined experience, we focus on building relationships, not just policies. So, when you're ready to make sure you're covered without the headache, we’re here to help make it quick, easy, and stress-free.</p>
    </>),
    img: HomeCar.src
}

import BgImage from "media/product/ProductContentImg.webp"
export const ProductContentData = {
    title: (<>
        Top Insurance <span>Broker in California</span> is Here for You!
    </>),
    desc: (<>
        <p>Looking for an insurance broker in California who genuinely cares? At Circadian Insurance Brokers, we’re all about finding you the best coverage, no matter your needs. We know California’s unique insurance landscape and will guide you every step of the way.</p>
        <p>We don't just find policies; we build relationships. We aim to understand your lifestyle, budget, and goals to offer the perfect plan. As your insurance broker in California, we’ll ensure you have coverage that perfectly matches your needs.</p>
        <p>Ready for the real deal? Don’t settle for anything less than the best. Reach out today, and let's get you a quote that's simple, affordable, and tailored just for you.</p>
    </>),
    img: BgImage.src
}


import ContentImage from "media/home/ContentImage.webp"
export const ContetnData = {
    title: (<>
        Why Trust Us as <span>Your Broker?</span>
    </>),
    txt: (<>
        <p>Choosing the right insurance broker in California is a big deal, so we’re here to make it easy for you. At Circadian Insurance Brokers, we’re all about YOU. Forget the cookie-cutter solutions — we craft personalized, top-tier insurance plans that match your needs and budget. Our team doesn’t just provide insurance; we build trust and deliver results.</p>
        <p>Why settle for less when you can work with the best? As your dedicated insurance broker in California, we work with leading insurance providers, offering unbeatable coverage options at competitive rates. We’re local, experienced, and here to give you the peace of mind you deserve. Ready to experience the difference?</p>
    </>),
    img: ContentImage.src
}