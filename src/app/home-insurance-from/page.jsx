"use client";
import { useRouter } from "next/navigation";
import styles from "@/styles/components/common/home-insurance-from.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import toast from "react-hot-toast";

const questions = [
  "Names and date of birth of all persons on the title",
  "Property address",
  "Mailing address, if different",
  "Is this a primary home, seasonal, or rental property",
  "Year built",
  "Square footage of living area",
  "Type of plumbing, i.e., copper, PVC, etc.",
  "Does the electrical system have circuit breakers",
  "Type of roof, and when was it last replaced",
  "Type of flooring and percentage, i.e., carpet 50%, hardwood 50%, etc.",
  "Have you had any property claims in the past 5 years? If so, the year of claim and type",
  "Do you own any dogs? If so, breed and bite history",
  "Is there a swimming pool on premises? If so, does it have a diving board or slide",
  "Current or latest insurance carrier and Current Insurance expiration date or cancellation date",
  "Reason for cancellation",
  "Purchase date",
  "Any business on the premises, i.e., daycare/beautician",
  "Contact phone number",
  "Contact Email Address",
  "How did you hear about us",
];

const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [plumbingOptions, setPlumbingOptions] = useState([]);
  const [otherPlumbing, setOtherPlumbing] = useState("");
  const [referralSourceOther, setReferralSourceOther] = useState("");
  const router = useRouter();

  // Special field indexes
  const propertyTypeIndex = questions.indexOf("Is this a primary home, seasonal, or rental property");
  const yearBuiltIndex = questions.indexOf("Year built");
  const plumbingIndex = questions.indexOf("Type of plumbing, i.e., copper, PVC, etc.");
  const electricalIndex = questions.indexOf("Does the electrical system have circuit breakers");
  const phoneIndex = questions.indexOf("Contact phone number");
  const emailIndex = questions.indexOf("Contact Email Address");
  const referralIndex = questions.indexOf("How did you hear about us");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleChange = (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (answers[currentStep].trim() === "") {
      toast.error("Please fill out this field.");
      return;
    }

    if (currentStep === plumbingIndex && plumbingOptions.length === 0) {
      toast.error("Please select at least one plumbing type.");
      return;
    }

    if (currentStep === referralIndex && answers[referralIndex] === "Other" && referralSourceOther.trim() === "") {
      toast.error("Please provide other referral source.");
      return;
    }

    if (currentStep === emailIndex) {
      if (!emailRegex.test(answers[emailIndex])) {
        toast.error("Please enter a valid email address.");
        return; // do NOT proceed
      }
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };


  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalAnswers = [...answers];

    // Add labeled Other fields
    if (plumbingOptions.includes("Other") && otherPlumbing.trim()) {
      finalAnswers[plumbingIndex] = buildPlumbingAnswer(plumbingOptions, otherPlumbing);
    }

    if (finalAnswers[referralIndex] === "Other" && referralSourceOther.trim()) {
      finalAnswers[referralIndex] = `Other: ${referralSourceOther}`;
    }

    if (finalAnswers.some((ans) => ans.trim() === "")) {
      toast.error("Please answer all questions before submitting.");
      return;
    }
    if (!emailRegex.test(finalAnswers[emailIndex])) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/home-insurance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalAnswers),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Form submitted successfully!");
        router.push("/thank-you");
      } else {
        toast.error(`Submission failed: ${data.message || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }


  };

  const buildPlumbingAnswer = (options, otherText) => {
    const filtered = options.filter((v) => v !== "Other");
    if (options.includes("Other") && otherText.trim()) {
      filtered.push(`Other: ${otherText}`);
    }
    return filtered.join(", ");
  };

  const handlePlumbingCheckbox = (type) => {
    let updated = [...plumbingOptions];
    if (updated.includes(type)) {
      updated = updated.filter((item) => item !== type);
      if (type === "Other") setOtherPlumbing("");
    } else {
      updated.push(type);
    }
    setPlumbingOptions(updated);

    const updatedAnswers = [...answers];
    updatedAnswers[plumbingIndex] = buildPlumbingAnswer(updated, otherPlumbing);
    setAnswers(updatedAnswers);
  };

  const handleOtherPlumbingChange = (e) => {
    const otherText = e.target.value;
    setOtherPlumbing(otherText);

    const updatedAnswers = [...answers];
    updatedAnswers[plumbingIndex] = buildPlumbingAnswer(plumbingOptions, otherText);
    setAnswers(updatedAnswers);
  };

  const handleReferralChange = (e) => {
    const val = e.target.value;
    const updated = [...answers];
    updated[referralIndex] = val;
    setAnswers(updated);

    if (val !== "Other") {
      setReferralSourceOther("");
    }
  };

  return (<>
    <section className={styles.homeSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col md={12} className="my-auto">
            <h2>Home Insurance Form</h2>
            <p>Please answer the questions below one by one to receive your quote.</p>

            <form onSubmit={handleSubmit}>
              <div className={styles.questionSec}>
                <div className={styles.questionTitle}>
                  <span>{currentStep + 1}</span>: {questions[currentStep]}
                </div>

                <div className={styles.questionBox}>
                  {currentStep === propertyTypeIndex ? (
                    <select value={answers[currentStep]} onChange={handleChange} required>
                      <option value="">Select one</option>
                      <option value="Primary">Primary</option>
                      <option value="Seasonal">Seasonal</option>
                      <option value="Rental">Rental</option>
                    </select>
                  ) : currentStep === yearBuiltIndex ? (
                    <input type="number" value={answers[currentStep]} onChange={handleChange} required />
                  ) : currentStep === plumbingIndex ? (
                    <div>
                      {["Copper", "PVC", "Galvanized", "PEX", "Other"].map((type) => (
                        <div key={type}>
                          <label>
                            <input
                              type="checkbox"
                              checked={plumbingOptions.includes(type)}
                              onChange={() => handlePlumbingCheckbox(type)}
                            />{" "}
                            {type}
                          </label>
                        </div>
                      ))}
                      {plumbingOptions.includes("Other") && (
                        <input
                          type="text"
                          placeholder="Specify other"
                          value={otherPlumbing}
                          onChange={handleOtherPlumbingChange}
                          required
                        />
                      )}
                    </div>
                  ) : currentStep === electricalIndex ? (
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="electrical"
                          value="Yes"
                          checked={answers[currentStep] === "Yes"}
                          onChange={handleChange}
                          required
                        />{" "}
                        Yes
                      </label>{" "}
                      <label>
                        <input
                          type="radio"
                          name="electrical"
                          value="No"
                          checked={answers[currentStep] === "No"}
                          onChange={handleChange}
                          required
                        />{" "}
                        No
                      </label>
                    </div>
                  ) : currentStep === phoneIndex ? (
                    <input
                      type="number"
                      placeholder="Enter phone number"
                      value={answers[currentStep]}
                      onChange={handleChange}
                      required
                    />
                  ) : currentStep === emailIndex ? (
                    <input
                      type="email"
                      placeholder="Enter email address"
                      value={answers[currentStep]}
                      onChange={handleChange}
                      required
                    />
                  ) : currentStep === referralIndex ? (
                    <div className={styles.selectCustom}>
                      <select value={answers[currentStep]} onChange={handleReferralChange} required>
                        <option value="">Select source</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Referral">Referral</option>
                        <option value="Online Search">Online Search</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Real Estate Agent">Real Estate Agent</option>
                        <option value="Other">Other</option>
                      </select>
                      {answers[currentStep] === "Other" && (
                        <input
                          type="text"
                          placeholder="Please specify"
                          value={referralSourceOther}
                          onChange={(e) => setReferralSourceOther(e.target.value)}
                          required
                        />
                      )}
                    </div>
                  ) : (
                    <textarea
                      placeholder="Write here..."
                      value={answers[currentStep]}
                      onChange={handleChange}
                      required
                    />
                  )}
                </div>

                <div className={styles.questionBtn}>
                  <button type="button" onClick={handlePrev} disabled={currentStep === 0}>
                    Prev
                  </button>
                  {currentStep === questions.length - 1 ? (
                    <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                  ) : (
                    <button type="button" onClick={handleNext}>
                      Next
                    </button>
                  )}
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "InsuranceAgency",
            "name": "Home Insurance Brroker in California",
            "image": "https://www.circadianbrokers.com/logo.webp",
            "@id": "",
            "url": "https://www.circadianbrokers.com/homeowner-insurance",
            "telephone": "925-417-8500",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "8440 Brentwood Blvd, Ste H Brentwood",
              "addressLocality": "Brentwood",
              "addressRegion": "CA",
              "postalCode": "94513",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 37.9312535,
              "longitude": -121.6948379
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": "https://www.facebook.com/circadianinsurance/"
          }
        ])
      }}
    />
  </>
  );
};

export default Page;
