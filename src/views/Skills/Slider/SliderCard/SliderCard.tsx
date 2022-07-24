import meter from "../../../../assets/img/meter1.svg"
import styles from "./SliderCard.module.scss"

const SliderCard = ( {skill }: any ) => {
    return (
        <div className={styles.sliderCard}>
            <div className={styles.sliderCard__progress}>
                <div className={styles.sliderCard__percent}>
                    {skill.percent}%
                </div>
            </div>
            <h4>{skill.name}</h4>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" style={ {  strokeDashoffset: 0 } }/>
            </svg>
        </div>
    )
}

export default SliderCard;