import styles from "@/styles/components/thanks.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

const ThankYouPage = () => {
  return (
    <section className={styles.thanksSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col md={6} className="m-auto text-center">
            <div className={styles.boxTitle}>
              <h1>Thank You!</h1>
              <p>Our team is reviewing your information and will contact you with a personalized insurance quote.</p>
              <Link href="/">Back To Home</Link>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default ThankYouPage;
