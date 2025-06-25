import styles from "@/styles/about/broker.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import FlexBtn from "@/src/app/components/common/flexbtn";
const Broker = ({ data, FromLink }) => {
    return (
        <section className={`${styles.brokerSection} pt-100`}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>{data.title}</h2>
                        <div className="divContent">
                            {data.desc}
                        </div>
                        <FlexBtn txt="Request a Quote" FromLink={FromLink} />
                    </Col>
                    <Col md={6}>
                        <div className={styles.imgBox}>
                            <Image src={data.img} alt="About Circadian Insurance Brokers" fill />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Broker