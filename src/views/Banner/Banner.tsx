import styles from "./Banner.module.scss"
import Container from "../../components/Container/Container";
import bannerImg from "../../assets/img/header-img.svg";
import arrow from "../../assets/img/arrow2.svg";
const Banner = () => {
    return (
        <section className={styles.banner}>
            <Container>
                <div className={styles.banner__info}>
                    <h3 className={styles.banner__greeting}>
                        <span>Welcome to my Portfolio</span>
                    </h3>
                    <h1 className={styles.banner__developerInfo}>
                        Hi! I'm Denis ...
                    </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className={styles.banner__connect}>
                        <span>Let’s Connect</span>
                        <div className={styles.banner__connect_circle}>
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={styles.banner__image}>
                    <img src={bannerImg} alt=""/>
                </div>
            </Container>
        </section>
    )
}

export default Banner;