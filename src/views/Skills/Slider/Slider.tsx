import SliderCard from "./SliderCard/SliderCard";
import styles from "./Slider.module.scss";
import {useState} from "react";


const skills = [
    { name: "Html/Css/Js", percent: 90},
    { name: "React/Redux/Ts", percent: 80},
    { name: "Ответственность", percent: 99},
    { name: "Умение работать в команде", percent: 85},
    { name: "Git", percent: 100},
    { name: "Знание основных алгоритмов", percent: 80},
]

const Slider = () => {
    const [numberSkill, setNumberSkill] = useState(0);
    const symbols = ["A", "B", "C"];
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
                {
                    symbols.map((symbol, i) => {
                        return (
                            <div className={styles.slider__page_margin}>
                                <div className={styles.slider__percent + " " + (i * 2 === numberSkill ? styles.slider__percent_active : "")} onClick={() => setNumberSkill(i * 2)}>
                                    {symbol}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slider;