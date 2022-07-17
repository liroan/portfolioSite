import meter from "../../../../assets/img/meter1.svg"
import styles from "./SliderCard.module.scss"

const SliderCard = () => {
    return (
        <div className={styles.sliderCard}>
            <div className={styles.sliderCard__image}>
                <img src={meter} alt=""/>
            </div>
            <h4>Web Development</h4>
        </div>
    )
}

export default SliderCard;