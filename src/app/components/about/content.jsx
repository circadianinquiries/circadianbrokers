import styles from "@/styles/about/contentabt.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import FlexBtn from "@/src/app/components/common/flexbtn";


const ContentAbt = ({ data }) => {
    return (
        <section className={styles.contentAbtSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} className="my-auto ">
                        <div className={styles.imgBox}>
                            <Image src={data.img} alt="About Circadian Insurance Brokers" width={830} height={646} />
                        </div>
                    </Col>
                    <Col md={5} className="my-auto offset-lg-1">
                        <div className={styles.contentBox}>
                            <h2>About <span>Circadian Insurance</span> Brokers</h2>
                            <p>We’re Circadian Insurance Brokers, a team of real people helping real Californians protect what matters. Since 2000, we’ve been doing insurance differently. No hard sells, no confusing terms. Just honest advice, smart coverage options, and a crew that actually listens. As an independent insurance broker in California, we work for you. That means better options, better rates, and a better experience from start to finish.</p>
                            <FlexBtn txt="Request a Quote" LiveChat={true} />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default ContentAbt;
