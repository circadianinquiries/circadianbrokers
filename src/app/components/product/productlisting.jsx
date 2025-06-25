import styles from "@/styles/components/product/productlisting.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowIcon } from "@/src/app/app-constants";

const ProductListing = ({ data }) => {
    return (
        <section className={`${styles.listingSection} p-100`}>
            <Container>
                <Row>
                    <Col md={12} className="text-center mb-md-3 mb-lg-4">
                        {data.title ? (
                            <>
                                <h2>{data.title}</h2>
                                <p>{data.txt}</p>
                            </>
                        ) : null}
                    </Col>
                    <Col md={12} className="my-auto">
                        <div className={styles.listingBox}>
                            {data.productlisting.map((item, index) => (
                                <div className={styles.listingItem} key={index}>
                                    <div className={styles.icon}>
                                        {item.icon}
                                    </div>
                                    <div className={styles.content}>
                                        <h4>{item.title}</h4>
                                        <p>{item.txt}</p>
                                    </div>
                                    <Link href={item.link}>Learn More <ArrowIcon /></Link>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProductListing;
