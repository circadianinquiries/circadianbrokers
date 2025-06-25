"use client"
import styles from "@/styles/components/testimonialslider.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import { GoogleIcon, StarIcon } from "../app-constants"
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";


export function TestimonialCarousel({ data }) {
    const autoplay = useRef(
        Autoplay({ delay: 13000 }) // delay in ms
    );
    const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current])

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                {data.map((item, index) => (
                    <div className={styles.embla__slide} key={index}>
                        <div className={styles.testimonialItem}>

                            <div className={styles.topLayout}>
                                <div className={styles.Img}>
                                    {item.title?.charAt(0)}
                                </div>
                                <div className={styles.title}> {item.title}
                                    <div className={styles.star}>
                                        {Array.from({ length: item.star }, (_, i) => (
                                            <StarIcon key={i} />
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.logo}>
                                    <GoogleIcon />
                                </div>
                            </div>
                            <div className={styles.bottomLayout}>
                                <p>{item.txt}</p>
                            </div>

                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}
