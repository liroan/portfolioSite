import styles from "../Banner.module.scss";
import Animate from "../../../components/Animate/Animate";
import bannerImg from "../../../assets/img/header-img.svg";
import {FC} from "react";

const BannerImage:FC = () => {
    return (
        <div className={styles.banner__image}>
            <Animate animateClasses="animate__animated animate__zoomIn" >
                <img src={bannerImg} alt="" />
            </Animate>
        </div>
    )
}

export default BannerImage;