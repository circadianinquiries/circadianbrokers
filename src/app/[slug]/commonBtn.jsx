
"use client";
import styles from "@/styles/blog/commonbutton.module.scss"
import PopUp from "@/src/app/components/popup";
import { useState } from "react";

const CommonBtn = ({ txt }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };
    return (
        <>
            <div className={styles.SimpleBtn} onClick={() => handleClick()}>
                <div className={styles.btnStyle}>{txt}</div>
            </div>

        </>
    )
}

export default CommonBtn