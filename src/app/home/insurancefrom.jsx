"use client";
import { useState } from "react";
import styles from "@/styles/home/insurancefrom.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const InsuranceFrom = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter(); // ✅ Init router

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = new FormData(e.target);
        const data = Object.fromEntries(form.entries());

        try {
            const res = await fetch('/api/submit-insurance', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const json = await res.json();

            if (res.ok) {
                toast.success(json.message || "Submitted successfully!");
                e.target.reset();
                router.push("/thank-you"); // ✅ Redirect
            } else {
                toast.error(json.message || "Submission failed.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section className={styles.InsuranceSection}>
            <Container>
                <Row>
                    <Col md={12}>

                        <div className={styles.insuranceFrom}>
                            <div className={styles.headingBox}>
                                <div className={styles.subtitle}>Insurance Made Simple</div>
                                <h2>Request a Quote With Your <span>Insurance Information</span> Request</h2>
                            </div>
                            <form className={styles.formBox} onSubmit={handleSubmit}>
                                <div className={styles.inputBox}>
                                    <div className={styles.checkboxGroup}>
                                        <label>
                                            <input type="radio" name="insurance" value="Auto" />
                                            <span>Auto Insurance</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="insurance" value="Business" />
                                            <span>Business Insurance</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="insurance" value="Home" />
                                            <span>Home Owners</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="insurance" value="Medical" />
                                            <span>Medical Malpractice</span>
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.inputBox}>
                                    <input type="text" name="name" required placeholder="Type your full name*" />
                                </div>
                                <div className={styles.inputBox}>
                                    <input type="email" name="email" required placeholder="Type your email*" />
                                </div>
                                <div className={styles.inputBox}>
                                    <input type="tel" name="phone" required placeholder="Type your Phone Number*" />
                                </div>

                                <div className={styles.inputSubmit}>
                                    <button type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? "Submitting..." : "Submit"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default InsuranceFrom