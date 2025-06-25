import styles from "@/styles/layout/footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Form, Row } from "react-bootstrap";
import MainLogo from "media/layout/footerLogo.webp"
import { EmailIcon, FooterArrow, PhoneIcon, PinIcon } from "@/src/app/app-constants";

const data = [
    {
        title: "Auto Insurance",
        link: "/auto-insurance"
    },
    {
        title: "Homeowner Insurance",
        link: "/homeowner-insurance"
    },
    {
        title: "Wildfire Home Insurance",
        link: "/wildfire-home-insurance"
    },
    {
        title: "Renters Insurance",
        link: "/renters-insurance"
    },
    {
        title: "Business Insurance",
        link: "/business-insurance"
    },
    {
        title: "Commercial Auto Insurance",
        link: "/commercial-auto-insurance"
    },
    {
        title: "Medical Malpractice Insurance",
        link: "/medical-malpractice-insurance"
    },
    {
        title: "Earthquake Insurance",
        link: "/earthquake-insurance"
    }
    ,
    {
        title: "Flood Insurance",
        link: "/flood-insurance"
    },
    {
        title: "Life Insurance",
        link: "/life-insurance"
    },
    {
        title: "Umbrella Insurance",
        link: "/umbrella-insurance"
    },
    {
        title: "Boat & Watercraft Insurance",
        link: "/boat-insurance"
    },
    {
        title: "Condo Insurance",
        link: "/condo-insurance"
    },
    {
        title: "Contractor Insurance",
        link: "/contractor-insurance"
    }
    ,
    {
        title: "Motorcycle Insurance",
        link: "/motorcycle-insurance"
    }
]


const Footer = () => {
    return (
        <>
            <section className={styles.footerSection}>
                <Container>
                    <Row>
                        <Col md={12} lg={3}>
                            <Link href="#" className={styles.footerLogo}>
                                <Image src={MainLogo.src} alt="WebSite Logo" width={305} height={249} />
                            </Link>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className={styles.footerLinks}>
                                <h6>Products Links</h6>
                                <ul>
                                    {data.map((item, index) => (
                                        <li key={index}><Link href={item.link}>{item.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col md={12} lg={3}>
                            <div className={styles.footerLinks}>
                                <h6>Contact Info</h6>
                                <ul className={styles.infoContact}>
                                    <li>
                                        <span><PhoneIcon /></span>
                                        <a href="tel:9254178500">925-417-8500</a>
                                    </li>
                                    <li>
                                        <span><PhoneIcon /></span>
                                        <a href="tel:8774177171">877-417-7171</a>
                                    </li>
                                    <li>
                                        <span><PinIcon /></span>
                                        <Link href="#">8440 Brentwood Blvd, Ste H Brentwood, CA 94513 Licensed in California (0F79348)</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.copyRightSection}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col md={12} className="text-center my-auto">
                            <p>© 2025 circadianinsurancebrokers. All Right Reserved</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Footer;
