
import styles from "./Skills.module.scss";
import Container from "../../components/Container/Container";
import Slider from "./Slider/Slider";
import image from "../../assets/img/color-sharp.png"
const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.skills__container_outer}>
                <Container >
                    <div className={styles.skills__container_inner}>
                        <h2 className={styles.skills__title}>Skills</h2>
                        <p className={styles.skills__subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text.</p>
                        <div className={styles.skills__slider}>
                            <Slider />
                        </div>
                    </div>
                </Container>
                <img src={image} alt="" className={styles.skills__bgImage}/>
            </div>
        </div>
    )
}

export default Skills;