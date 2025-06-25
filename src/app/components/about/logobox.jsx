import styles from "@/styles/about/logobox.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const LogoBox = ({ data }) => {
    return (
        <section className={`${styles.LogoBoxSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} className="my-auto">
                        <div className={styles.logoMainBox}>
                            {data.map((item, index) => (
                                <div className={styles.imgBox} key={index}>
                                    <Image src={item.img} alt={`Logo ${index + 1}`} fill />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default LogoBox;
