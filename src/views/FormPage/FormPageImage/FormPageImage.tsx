import styles from "../FormPage.module.scss";
import Animate from "../../../components/Animate/Animate";
import img from "../../../assets/img/contact-img.svg";
import {FC} from "react";


const FormPageImage:FC = () => {
    return (
        <div className={styles.formPage__image}>
            <Animate animateClasses="animate__animated animate__zoomIn">
                <img src={img} alt="" />
            </Animate>
        </div>
    )
}

export default FormPageImage;