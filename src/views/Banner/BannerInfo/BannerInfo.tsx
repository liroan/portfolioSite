import styles from "../Banner.module.scss";
import Animate from "../../../components/Animate/Animate";
import DeveloperInfo from "../DeveloperInfo/DeveloperInfo";
import arrow from "../../../assets/img/arrow2.svg";
import {FC} from "react";


const BannerInfo:FC = () => {
    return (
        <div className={styles.banner__info}>
            <Animate animateClasses="animate__animated animate__fadeIn">
                <h3 className={styles.banner__greeting}><span>Welcome to my Portfolio</span></h3>
                <DeveloperInfo />
                <p>
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
            </Animate>
        </div>
    )
}

export default BannerInfo;