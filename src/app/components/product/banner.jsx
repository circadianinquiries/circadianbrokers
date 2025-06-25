import styles from "@/styles/components/product/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import FlexBtn from "@/src/app/components/common/flexbtn";

const Banner = ({ data, FromLink }) => {
    return (
        <section className={styles.bannerSection} style={{ backgroundImage: `url(${data.BannerPoster})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={8} lg={8} xl={8} className="my-auto">
                        <div className={styles.bannerContent}>
                            <h1>{data.title}</h1>
                            <p>{data.desc}</p>
                            <FlexBtn txt="Request a Quote" FromLink={FromLink} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
