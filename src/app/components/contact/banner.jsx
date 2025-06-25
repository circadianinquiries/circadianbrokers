"use client";
import { useState } from "react";
import styles from "@/styles/contact/banner.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import {
    BoxIcon,
    FlageIcon,
    OpningIcon,
    PhoneIcon,
    PinIcon,
} from "@/src/app/app-constants";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Banner = () => {
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
                    <Col md={6} className="m-auto text-center mb-md-2 mb-lg-3 mb-xl-4">
                        <h1>Contact Us</h1>
                        <p>
                            Have questions or ready to Request a Quote? Reach out to us today, and our team of experts will guide you to the best coverage for your needs!
                        </p>
                    </Col>
                </Row>
                <Row className="flex">
                    <Col md={6} lg={7}>
                        <form className={styles.formBox} onSubmit={handleSubmit}>
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
                                    <label><input type="radio" name="contact" value="Call" /> Call</label>
                                    <label><input type="radio" name="contact" value="Email" /> Email</label>
                                    <label><input type="radio" name="contact" value="Text" /> Text</label>
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
                            <p>
                                We respect your privacy. Your info will be sent securely and handled with care. {" "}
                                <Link href="#">View privacy policy.</Link>
                            </p>
                        </form>
                    </Col>

                    <Col md={6} lg={5}>
                        <div className={styles.addressBox}>
                            <h4>Information</h4>
                            <ul className={styles.addList}>
                                <li>
                                    <div className={styles.icon}><PinIcon /></div>
                                    <div className={styles.value}>
                                        <h6>Location</h6>
                                        <p>8440 Brentwood Blvd, Ste H Brentwood, CA 94513</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.icon}><BoxIcon /></div>
                                    <div className={styles.value}>
                                        <h6>P.O. Box</h6>
                                        <p>P.O. Box 580 Brentwood, CA 94513</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.icon}><PhoneIcon /></div>
                                    <div className={styles.value}>
                                        <h6>Phone Number</h6>
                                        <p>
                                            <a href="tel:9254178500">925-417-8500</a>
                                        </p>
                                        <h6>Toll Free</h6>
                                        <p>
                                            <a href="tel:8774177171">877-417-7171</a>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.icon}><OpningIcon /></div>
                                    <div className={styles.value}>
                                        <h6>Opening Hours</h6>
                                        <ul className={styles.hours}>
                                            <li><span>Monday</span> 9:00 AM – 5:00 PM</li>
                                            <li><span>Tuesday </span>9:00 AM – 5:00 PM</li>
                                            <li><span>Wednesday </span>9:00 AM – 5:00 PM</li>
                                            <li><span>Thursday </span>9:00 AM – 5:00 PM</li>
                                            <li><span>Friday </span>9:00/AM – 5:00 PM</li>
                                            <li><span>Saturday </span>Closed</li>
                                            <li><span>Sunday </span>Closed</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.icon}><FlageIcon /></div>
                                    <div className={styles.value}>
                                        <p>After hours appointments available</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="m-auto text-center mt-md-4 mt-lg-5 mt-xl-5">
                    <Col md={12} className="m-auto text-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1573.4764022422683!2d-121.694484!3d37.931533!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808ffe95b853088f%3A0x5a1f4986ef91a64c!2s8440%20Brentwood%20Blvd%20suite%20h%2C%20Brentwood%2C%20CA%2094513!5e0!3m2!1sen!2sus!4v1750076694436!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;