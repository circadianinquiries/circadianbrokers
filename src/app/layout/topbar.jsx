import styles from "@/styles/layout/topbar.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { FbIcon, PinIcon } from "@/src/app/app-constants";
import Link from "next/link";

const TopBar = () => {
    return (
        <section className={styles.topbarSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={10} className="my-auto">
                        <ul className={styles.contactInfo}>
                            <li>
                                <span><PinIcon /></span>
                                <Link href="#">8440 Brentwood Blvd, Ste H Brentwood, CA 94513</Link>
                            </li>
                            <li>
                                <span>Call:</span>
                                <a href="tel:925-417-8500">925-417-8500</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2} className="my-auto">
                        <ul className={styles.socailInfo}>
                            <li>
                                <Link href="#"><FbIcon /></Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default TopBar