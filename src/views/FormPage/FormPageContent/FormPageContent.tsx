import styles from "../FormPage.module.scss";
import Animate from "../../../components/Animate/Animate";
import FormPagesFields from "../FormPageFields/FormPagesFields";
import Button from "../../../components/Button/Button";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {ALL_FIELDS, UNAVAILABLE_FUNCTION} from "../../../constants/constants";
import {FC, useEffect} from "react";



const FormPageContent:FC = () => {
    const { register, formState: { errors }, handleSubmit,  reset} = useForm()
    const onSubmit = (data: any) => {
        toast.warn(UNAVAILABLE_FUNCTION)
        reset();
    }
    useEffect(() => {
        if (Object.keys(errors).length !== 0) toast.error(ALL_FIELDS)
    }, [errors])
    return (
        <div className={styles.formPage__content} >
            <Animate animateClasses="animate__animated animate__fadeIn">
                <div className={styles.formPage__title}><h3>Get In Touch</h3></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormPagesFields register={register}/>
                    <div className={styles.formPage__mainButton}><Button>Send</Button></div>
                </form>
            </Animate>
        </div>
    )
}

export default FormPageContent;