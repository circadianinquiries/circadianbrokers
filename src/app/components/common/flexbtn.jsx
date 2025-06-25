import styles from "@/styles/components/common/flexbtn.module.scss"
import Link from "next/link"

const FlexBtn = ({ FromLink, txt }) => {
    return (
        <div className={styles.flexbtnSection}>
            <div className={styles.btnCommon}>
                {FromLink ?
                    <Link href="/home-insurance-from">
                        {txt ? txt : "Request a Quote"}
                    </Link>
                    : <Link href="/quotes">
                        {txt ? txt : "Request a Quote"}
                    </Link>
                }

            </div>
            <div className={styles.btnCommon}>
                <a href="tel:925-417-8500">Call Now</a>
            </div>
        </div>
    )
}

export default FlexBtn