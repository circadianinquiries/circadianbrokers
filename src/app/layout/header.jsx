"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/layout/header.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import MainLogo from "media/layout/mainLogo.webp";
import Image from "next/image";
import { ClosedIcon, NavIcon } from "@/src/app/app-constants";
import { usePathname } from "next/navigation";
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const customQuotePaths = [
        // "/homeowner-insurance",
        // "/wildfire-home-insurance",
        // "/condo-insurance",
        "/home-insurance-quote-antioch-ca",
        "/home-insurance-quote-byron-ca",
        "/home-insurance-quote-clayton-ca",
        "/home-insurance-quote-discovery-bay-ca",
        "/home-insurance-quote-livermore-ca",
        "/home-insurance-quote-oakley-ca",
        "/home-insurance-quote-pittsburg-ca",
        "/home-insurance-quote-pleasanton-ca",
        "/wildfire-home-insurance-quote-antioch-ca",
        "/wildfire-home-insurance-quote-byron-ca",
        "/wildfire-home-insurance-quote-clayton-ca",
        "/wildfire-home-insurance-quote-discovery-bay-ca",
        "/wildfire-home-insurance-quote-livermore-ca",
        "/wildfire-home-insurance-quote-oakley-ca",
        "/wildfire-home-insurance-quote-pleasanton-ca",
    ];


    const quoteLink = customQuotePaths.includes(pathname)
        ? "/home-insurance-from"
        : "/quotes";
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 575) {
                setIsActive(false);
                document.body.classList.remove("active");
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = () => {
        if (window.innerWidth < 575) {
            const newState = !isActive;
            setIsActive(newState);
            document.body.classList.toggle("active", newState);
        }
    };

    return (
        <section className={`${styles.headerSection} ${scrolled ? styles.active : ""}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs={6} sm={2} md={2} className="my-auto">
                        <Link href="/" className={styles.mainLogo}>
                            <Image src={MainLogo.src} alt="WebSite Logo" width={132} height={107} />
                        </Link>
                    </Col>
                    <Col xs={6} sm={10} md={10} className="ml-xs-auto my-auto">
                        <div
                            onClick={handleClick}
                            className={`${isActive ? "navIcon active" : "navIcon"}`}
                        >
                            {isActive ? <ClosedIcon /> : <NavIcon />}
                        </div>
                        <ul className={`${styles.mainNavigation} ${isActive ? styles.active : ""}`}>
                            <li><Link href="/" onClick={handleClick}>Home</Link></li>
                            <li><Link href="/products" onClick={handleClick}>Products</Link></li>
                            <li><Link href="/quotes" onClick={handleClick}>Quotes</Link></li>
                            <li><Link href="/about-us" onClick={handleClick}>About</Link></li>
                            <li><Link href="/blogs" onClick={handleClick}>Blogs</Link></li>
                            <li><Link href="/contact-us" onClick={handleClick}>Contact Us</Link></li>
                            <li><Link href={quoteLink} onClick={handleClick}>Request a Quote</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Header;
