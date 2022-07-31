import styles from "./FormPage.module.scss";
import img from "../../assets/img/contact-img.svg";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {useEffect} from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
const FormPage = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = (data: any) => {
        toast.warn("Данная функция пока недоступна!")
        reset();
    }
    useEffect(() => {
        if (Object.keys(errors).length !== 0) toast.error("Заполните все поля!")
    }, [errors])
    return (
        <form className={styles.formPage} onSubmit={handleSubmit(onSubmit)}>
            <Container>
                <div className={styles.formPage__image}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                                <img src={img} alt="" className={(isVisible ? "animate__animated animate__zoomIn" : "")}/>
                        }
                    </TrackVisibility>
                </div>
                <div className={styles.formPage__content}>
                    <TrackVisibility>
                        {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <div className={styles.formPage__title}>
                                    <h3>Get In Touch</h3>
                                </div>
                                <div className={styles.formPage__fields}>
                                    <div className={styles.formPage__field}>
                                        <input type="text"
                                               placeholder="First Name"
                                               {...register("firstName", {
                                                   required: true
                                               })} />
                                    </div>
                                    <div className={styles.formPage__field}>
                                        <input type="text"
                                               placeholder="Last Name"
                                               {...register("lastName", {
                                                   required: true
                                               })} />
                                    </div>
                                    <div className={styles.formPage__field}>
                                        <input type="email"
                                               placeholder="Email Address"
                                               {...register("emailAddress", {
                                                   required: true
                                               })} />
                                    </div>
                                    <div className={styles.formPage__field}>
                                        <input type="text"
                                               placeholder="Phone No"
                                               {...register("phoneNo", {
                                                   required: true
                                               })} />
                                    </div>
                                    <div className={styles.formPage__field}>
                                        <textarea placeholder="Message"
                                                  {...register("message", {
                                                      required: true
                                                  })} />
                                    </div>
                                </div>
                                <div className={styles.formPage__mainButton}><Button>Send</Button></div>
                            </div>
                        }
                    </TrackVisibility>
                </div>
            </Container>
        </form>
    )
}

export default FormPage;