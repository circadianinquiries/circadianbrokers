
import styles from "@/styles/components/product/bluecontentsection.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";



const BlueContentSection = ({ data }) => {
    return (
        <section className={`${styles.blueSection} p-100`}>
            <Container >
                <Row >

                    <Col md={6} lg={6} >
                        <div className={styles.imgBox}>
                            <Image src={data.img} alt="Images" fill />
                        </div>
                    </Col>
                    <Col md={6} className="my-auto">
                        <h2>{data.title}</h2>
                        <div className="divContent whiteColor">
                            {data.txt}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BlueContentSection