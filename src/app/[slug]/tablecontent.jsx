"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/blog/tablecontent.module.scss";

const TableOfContents = ({ tableContent }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentIndex = null;
      tableContent.forEach((_, index) => {
        const section = document.getElementById(`Section-${index + 1}`);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 110 && rect.bottom >= 120) {
            currentIndex = index;
          }
        }
      });
      if (currentIndex !== null) {
        setActiveIndex(currentIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tableContent]);

  const handleScroll = (id, index) => {
    setActiveIndex(index);
    const element = document.getElementById(id);
    if (element) {
      const offset = 130;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };




  return (
    <ul className={styles.tableofContent}>
      <h4>Table Of Content</h4>
      {tableContent.map((item, index) => (
        <li key={index}>
          <a
            className={activeIndex === index ? styles.active : ""}
            href={`#Section-${index + 1}`}
            onClick={(e) => {
              e.preventDefault();
              handleScroll(`Section-${index + 1}`, index);
            }}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TableOfContents;
