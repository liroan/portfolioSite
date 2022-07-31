import logo from "../../assets/img/logo.svg"
import navIcon1 from "../../assets/img/nav-icon1.svg"
import navIcon2 from "../../assets/img/nav-icon2.svg"
import navIcon3 from "../../assets/img/nav-icon3.svg"
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import SocialRef from "../SocialRef/SocialRef";
import Button from "../Button/Button";
import {useEffect, useState} from "react";
const Header = () => {
    const [isScroll, setIsScroll] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            console.log(window.scrollY, isScroll)
            if (window.scrollY > 50 && !isScroll) setIsScroll(true);
            else if (window.scrollY <= 50 && isScroll) setIsScroll(false);
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll)
    }, [isScroll])

    return (
        <header className={styles.header + " " + (isScroll ? styles.header_scroll : "")}>
            <Container>
                <div className={styles.header__logo}>
                    <img src={logo} alt=""/>
                </div>
                <nav className={styles.header__navigate + " " + (isOpenMenu && isScroll ? styles.header_scroll : "") + " " + (isOpenMenu ? styles.header__menu_open : styles.header__menu_close) + " " + styles.header__menu_normal}>
                    <ul className={styles.header__refs}>
                        <li className={styles.header__navigate_opacity}><a href="#home">Home</a></li>
                        <li className={styles.header__navigate_opacity}><a href="#skills">Skills</a></li>
                        <li className={styles.header__navigate_opacity}><a href="#projects">Projects</a></li>
                        <li className={styles.header__navigate_big}>
                            <SocialRef href="/" image={navIcon1}/>
                            <SocialRef href="/" image={navIcon2}/>
                            <SocialRef href="/" image={navIcon3}/>
                        </li>
                        <li className={styles.header__mainButton}><Button>Let`s connect</Button></li>
                    </ul>
                </nav>
                <div className={styles.header__burgerBlock} onClick={() => setIsOpenMenu(prevState => !prevState)}>
                    <div className={styles.header__burger} />
                </div>
            </Container>
        </header>
    )
}

export default Header;