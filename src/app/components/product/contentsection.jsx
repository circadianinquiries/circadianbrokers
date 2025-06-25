import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/components/product/contensection.module.scss";
import FlexBtn from "@/src/app/components/common/flexbtn";


const ContenSection = ({ data, FromLink }) => {
    return (
        <section className={styles.contentSection} style={{ backgroundImage: `url(${data.img})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={7} className="my-auto">
                        <div className={styles.contentbox}>
                            <h2>{data.title}</h2>
                            <div className={styles.para}>
                                {data.desc}
                            </div>
                            <FlexBtn txt="Request a Quote" FromLink={FromLink} />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default ContenSection