import styles from "./Footer.module.scss";
import Container from "../../components/Container/Container";
import SocialRef from "../../components/SocialRef/SocialRef";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import logo from "../../assets/img/logo.svg";
import {useState} from "react";
import {toast} from "react-toastify";

const Footer = () => {
    const [value, setValue] = useState("");
    const onChangeValue = (e: any) => {
        setValue(e.target.value);
    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        if (value.length === 0) toast.error("Поле обязательно для заполнения!")
        else toast.warn("Данная функция пока недоступна!")
    }
    return  (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer__subscribe}>
                    <div className={styles.footer__subscribe_text}>
                        <h6>Subscribe to our Newsletter & Never miss latest updates</h6>
                    </div>
                    <form className={styles.footer__subscribe_field} onSubmit={onSubmit}>
                        <input type="text" value={value} onChange={onChangeValue} placeholder="Email Address"/>
                        <button>Submit</button>
                    </form>
                </div>
                <div className={styles.footer__info}>
                    <div className={styles.footer__logo}>
                        <img src={logo} alt=""/>
                    </div>
                    <div className={styles.footer__buttons}>
                        <ul className={styles.footer__networks}>
                            <li className={styles.footer__navigate}>
                                <SocialRef href="/" image={navIcon1}/>
                                <SocialRef href="/" image={navIcon2}/>
                                <SocialRef href="/" image={navIcon3}/>
                            </li>
                        </ul>
                        <div className={styles.footer__copyrate}>
                            Copyright 2022. All Rights Reserved
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;