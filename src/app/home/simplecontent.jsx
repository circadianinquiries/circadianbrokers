import styles from "@/styles/home/contentimage.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import FlexBtn from "@/src/app/components/common/flexbtn";

const SimpleContent = ({ data }) => {
    return (
        <section className={`${styles.simpleContentSec} p-100`}>
            <Container>
                <Row>
                    <Col md={6} className="order-md-2 order-2 ">
                        <div className={styles.homeImage}>
                            <Image src={data.img} alt="Image Data" fill />
                        </div>
                    </Col>
                    <Col md={6} className="order-md-2 order-1 ">
                        <div className={styles.contentBox} >
                            <div className={styles.subtitle}>{data.subtitle}</div>
                            <h2>{data.title}</h2>
                            <div>{data.txt}</div>
                            <FlexBtn txt="Request a Quote" LiveChat={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SimpleContent