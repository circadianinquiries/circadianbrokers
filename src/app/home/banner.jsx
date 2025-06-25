import styles from "@/styles/home/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import FlexBtn from "@/src/app/components/common/flexbtn";
import Image from "next/image";


const Banner = ({ data }) => {
    return (
        <section className={styles.bannerSection} style={{ backgroundImage: `url(${data.BannerPoster})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col sm={8} md={7} lg={7} xl={6} >
                        <div className={styles.bannerTxt}>
                            <h1>{data.title}</h1>
                            <p>{data.desc}</p>
                            <FlexBtn txt="Request a Quote" LiveChat={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner