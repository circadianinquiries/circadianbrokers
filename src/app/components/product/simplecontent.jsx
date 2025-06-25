import styles from "@/styles/components/product/simplecontent.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const SimpleContent = ({ data, pt }) => {
    return (
        <section className={`${styles.simpleSection} ${pt ? styles.paddingBottom : ""}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} className="my-auto">
                        {data.title ? (
                            <h2>{data.title}</h2>
                        ) : ""
                        }

                        <div className="divContent">
                            {data.txt}
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default SimpleContent