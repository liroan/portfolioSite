import styles from "../Footer.module.scss";
import {FC, useState} from "react";
import {toast} from "react-toastify";
import {ALL_FIELDS, UNAVAILABLE_FUNCTION} from "../../../constants/constants";
import FooterForm from "./FooterForm/FooterForm";


const FooterSubscribe:FC = () => {
    return (
        <div className={styles.footer__subscribe}>
            <div className={styles.footer__subscribe_text}>
                <h6>Subscribe to our Newsletter & Never miss latest updates</h6>
            </div>
            <FooterForm />
        </div>
    )
}

export default FooterSubscribe;