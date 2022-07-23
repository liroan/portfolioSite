import styles from "./FormPage.module.scss";
import img from "../../assets/img/contact-img.svg";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

const FormPage = () => {
    return (
        <section className={styles.formPage}>
            <Container>
                <div className={styles.formPage__image}>
                    <img src={img} alt=""/>
                </div>
                <div className={styles.formPage__content}>
                    <div className={styles.formPage__title}>
                        <h3>Get In Touch</h3>
                    </div>
                    <div className={styles.formPage__fields}>
                        <div className={styles.formPage__field}>
                            <input type="text" placeholder="First Name"/>
                        </div>
                        <div className={styles.formPage__field}>
                            <input type="text"/>
                        </div>
                        <div className={styles.formPage__field}>
                            <input type="text"/>
                        </div>
                        <div className={styles.formPage__field}>
                            <input type="text"/>
                        </div>
                        <div className={styles.formPage__field}>
                            <textarea/>
                        </div>
                    </div>
                    <div className={styles.formPage__mainButton}><Button>Send</Button></div>
                </div>
            </Container>
        </section>
    )
}

export default FormPage;