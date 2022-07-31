import styles from "./Banner.module.scss"
import Container from "../../components/Container/Container";
import bannerImg from "../../assets/img/header-img.svg";
import arrow from "../../assets/img/arrow2.svg";
import DeveloperInfo from "./DeveloperInfo/DeveloperInfo";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {Fragment} from "react";
const Banner = () => {
    return (
        <section className={styles.banner} id="home">
            <Container>
                <div className={styles.banner__info}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}><h3 className={styles.banner__greeting}>
                                <span>Welcome to my Portfolio</span>
                            </h3><DeveloperInfo/><p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer
                                took a galley of type and scrambled it to make a type specimen book.
                            </p>
                                <div className={styles.banner__connect}>
                                    <span>Let’s Connect</span>
                                    <div className={styles.banner__connect_circle}>
                                        <img src={arrow} alt=""/>
                                    </div>
                                </div>
                            </div> }
                    </TrackVisibility>
                </div>
                <div className={styles.banner__image}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                             <img src={bannerImg} alt="" className={isVisible ? "animate__animated animate__zoomIn" : ""}/>
                        }
                    </TrackVisibility>
                </div>
            </Container>
        </section>
    )
}

export default Banner;