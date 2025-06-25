import styles from "@/styles/components/product/testimonial.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { TestimonialCarousel } from "@/src/app/components/testimonailslider";
import bgCurve from "media/product/bgCurve.webp"

const Testimonial = ({ data, bgColor }) => {
    return (
        <section className={`${styles.testimonialSection} p-100`} style={
            bgColor
                ? { backgroundColor: "#EDEDED", height: "auto" }
                : { backgroundImage: `url(${bgCurve.src})` }
        }>
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <h2
                            style={
                                bgColor
                                    ? { color: "#000" }
                                    : {}
                            }
                        >What Our <span>Customers</span> Say?
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <TestimonialCarousel data={data} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonial;
