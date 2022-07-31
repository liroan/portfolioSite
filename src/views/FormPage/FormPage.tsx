import styles from "./FormPage.module.scss";
import Container from "../../components/Container/Container";
import 'animate.css';
import FormPageContent from "./FormPageContent/FormPageContent";
import FormPageImage from "./FormPageImage/FormPageImage";
import {FC} from "react";

const FormPage:FC = () => {
    return (
        <section className={styles.formPage} >
            <Container>
                <FormPageImage />
                <FormPageContent />
            </Container>
        </section>
    )
}

export default FormPage;