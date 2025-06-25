import styles from "@/styles/home/homecontent.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const HomeContent = ({ data }) => {
    return (
        <section className={`${styles.homecContentSec} p-100`}>
            <Container>
                <Row>
                    <Col md={6} >
                        <div className={styles.contentBox}>
                            <div className={styles.subtitle}>{data.subtitle}</div>
                            <h2>{data.title}</h2>
                            <div>{data.txt}</div>
                        </div>
                    </Col>
                    <Col md={6} >
                        <div className={styles.homeImage}>
                            <Image src={data.img} alt="Image Data" fill />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeContent