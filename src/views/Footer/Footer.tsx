import styles from "./Footer.module.scss";
import Container from "../../components/Container/Container";
import FooterSubscribe from "./FooterSubscribe/FooterSubscribe";
import FooterInfo from "./FooterInfo/FooterInfo";

const Footer = () => {
    return  (
        <footer className={styles.footer}>
            <Container>
                <FooterSubscribe />
                <FooterInfo />
            </Container>
        </footer>
    )
}

export default Footer;