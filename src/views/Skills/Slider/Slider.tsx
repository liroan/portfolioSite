import SliderCard from "./SliderCard/SliderCard";
import styles from "./Slider.module.scss";
import arrow1 from "../../../assets/img/arrow1.svg";
import arrow2 from "../../../assets/img/arrow2.svg";
const Slider = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.slider__arrow + " " + styles.slider__arrow_left}>
                <img src={arrow1} alt=""/>
            </div>
            <div className={styles.slider__sliderCards}>
                <div className={styles.slider__sliderCard_margin}>
                    <SliderCard />
                </div>
                <div className={styles.slider__sliderCard_margin}>
                    <SliderCard />
                </div>
                <div className={styles.slider__sliderCard_margin}>
                    <SliderCard />
                </div>
            </div>
            <div className={styles.slider__arrow + " " + styles.slider__arrow_right}>
                <img src={arrow2} alt=""/>
            </div>
        </div>
    )
}

export default Slider;