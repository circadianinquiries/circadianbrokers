"use client";
import { useState } from "react";
import styles from "@/styles/quotes/banner.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import IMG from "media/quotes/imageContact.webp"
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Banenr = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

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
                router.push("/thank-you");
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
        <section className={styles.bannerSection}>
            <Container>
                <Row>
                    <Col md={10} className="m-auto text-center mb-md-2 mb-lg-4">
                        <h1>Quotes Made Easy</h1>
                        <p>Getting insurance shouldn’t feel like solving a puzzle. A trusted quote insurance broker will do the comparison shopping for you, allowing you to get the right coverage without the stress.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="my-auto">
                        <form className={styles.formBox} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="website"
                                autoComplete="off"
                                tabIndex="-1"
                                style={{ display: "none" }}
                            />
                            <div className={styles.inputBox}>
                                <label>Name</label>
                                <input type="text" name="name" required placeholder="Type your full name*" />
                            </div>
                            <div className={styles.inputBox}>
                                <label>Email</label>
                                <input type="email" name="email" required placeholder="Type your email*" />
                            </div>
                            <div className={styles.inputBox}>
                                <label>Phone</label>
                                <input type="tel" name="phone" required placeholder="Type your Phone Number*" />
                            </div>
                            <div className={styles.inputBox}>
                                <label>Preferred Contact Method(s) ✶</label>
                                <div className={styles.checkboxGroup}>
                                    <label><input type="checkbox" name="contactMethod" value="Call" /> Call</label>
                                    <label><input type="checkbox" name="contactMethod" value="Email" /> Email</label>
                                    <label><input type="checkbox" name="contactMethod" value="Text" /> Text</label>
                                </div>
                            </div>
                            <div className={styles.inputBox}>
                                <label>Street Address</label>
                                <input type="text" name="address" placeholder="Type your full address*" required />
                            </div>
                            <div className={`${styles.inputBox} ${styles.flex3}`}>
                                <label>City</label>
                                <input type="text" name="city" placeholder="Type your city name*" required />
                            </div>
                            <div className={`${styles.inputBox} ${styles.flex3}`}>
                                <label>State</label>
                                <input type="text" name="state" placeholder="Type your State*" required />
                            </div>
                            <div className={`${styles.inputBox} ${styles.flex3}`}>
                                <label>ZIP</label>
                                <input type="text" name="zip" placeholder="Type your zip code*" required />
                            </div>
                            <div className={styles.inputBox}>
                                <label>Type(s) of Insurance</label>
                                <input type="text" name="insurance" placeholder="Type your full Insurance*" />
                            </div>
                            <div className={styles.inputBox}>
                                <label>Comments</label>
                                <textarea name="msg" rows="4" placeholder="Type your Details*" />
                            </div>
                            <div className={styles.inputCheckbox}>
                                <label>
                                    <input type="checkbox" name="consent" required /> I understand that insurance coverage is not bound or altered until I receive confirmation by an authorized representative of Circadian Insurance Brokers *
                                </label>
                            </div>
                            <div className={styles.inputSubmit}>
                                <button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                            <p>We respect your privacy. Your info will be sent securely and handled with care.<Link href="">View privacy policy.</Link></p>
                        </form>

                    </Col>
                    <Col>
                        <div className={styles.imgBox}>
                            <Image src={IMG.src} alt="ImageContact" fill />
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    );
};

export default Banenr;
