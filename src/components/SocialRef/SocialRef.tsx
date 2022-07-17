import styles from "./SocialRef.module.scss";
import {FC} from "react";

interface SocialRefProps {
    href: string,
    image: string,
}

const SocialRef:FC<SocialRefProps> = ({href, image}) => {
    return (
        <a href={href} className={styles.socialRef}>
            <img src={image} alt=""/>
        </a>
    )
}

export default SocialRef;