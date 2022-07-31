import styles from "../Slider.module.scss";
import {Dispatch, FC, SetStateAction} from "react";
import classNames from "classnames";

interface SliderPageProps {
    symbol: string;
    numberSkill: number;
    setNumberSkill: Dispatch<SetStateAction<number>>;
    index: number
}

const SliderPage:FC<SliderPageProps>  = ({ symbol, numberSkill, setNumberSkill, index }) => {
    const setNumberSkillPage = () => setNumberSkill(index * 2);
    return (
        <div className={styles.slider__page_margin}>
            <div className={classNames(styles.slider__percent, { [styles.slider__percent_active]: index * 2 === numberSkill })} onClick={setNumberSkillPage}>
                { symbol }
            </div>
        </div>
    )
}

export default SliderPage;