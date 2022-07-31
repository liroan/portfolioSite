import SliderCard from "./SliderCard/SliderCard";
import styles from "./Slider.module.scss";
import {FC, useState} from "react";
import {skills} from "../../../constants/constants";
import SliderPages from "./SliderPages/SliderPages";


const Slider:FC = () => {
    const [numberSkill, setNumberSkill] = useState(0);
    return (
        <div className={styles.slider}>
            <div className={styles.slider__sliderCards}>
                <div className={styles.slider__sliderCard_margin}>
                    <SliderCard skill={skills[numberSkill]}/>
                </div>
                <div className={styles.slider__sliderCard_margin}>
                    <SliderCard skill={skills[numberSkill + 1]}/>
                </div>
            </div>
            <div className={styles.slider__pages}>
                <SliderPages numberSkill={numberSkill} setNumberSkill={setNumberSkill}/>
            </div>
        </div>
    )
}

export default Slider;