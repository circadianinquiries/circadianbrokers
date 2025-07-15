import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/blog/banner.module.scss"

const Banenr = ({ data }) => {
    return (
        <section className={styles.bannerBlogSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={8} className="mx-auto mt-auto text-center">
                        <div className={styles.bannerTxt}>
                            <h1>{data.title}</h1>
                            <p>{data.txt}</p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banenr