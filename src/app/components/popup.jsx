import styles from "@/styles/components/popup.module.scss"
import { Col, Container, Modal, Row } from "react-bootstrap"
import Image from "next/image"
import ContactFrom from "@/src/app/components/contactfrom"
import { ClosedBtn } from "@/src/app/app-constants"


const PopUp = (props) => {
    const { onHide } = props
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        ><section className={styles.popupSection}>
                <div className={styles.closedBtn} onClick={onHide}><ClosedBtn /></div>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col lg={12} md={12}>
                            <div className={styles.fromPopup}>
                                <h3>Let’s start a project
                                    together</h3>
                                <p>We’ll contact you within a couple of hours to schedule a meeting to discuss your goals.</p>
                                <ContactFrom popop={true} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Modal>
    )
}

export default PopUp