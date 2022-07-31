import styles from "../Slider.module.scss";
import {symbols} from "../../../../constants/constants";
import {FC, SetStateAction} from "react";
import {Dispatch} from "react";
import SliderPage from "./SliderPage";


interface SliderPagesProps {
    numberSkill: number;
    setNumberSkill: Dispatch<SetStateAction<number>>;
}

const SliderPages:FC<SliderPagesProps> = ({ numberSkill, setNumberSkill }) => {
    return (
        <>
            {
                symbols.map((symbol, index) => (
                    <SliderPage numberSkill={numberSkill}
                                setNumberSkill={setNumberSkill}
                                index={index}
                                symbol={symbol}
                                key={index}
                    />
                ))
            }
        </>
    )
}

export default SliderPages;