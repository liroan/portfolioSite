import styles from "./Button.module.scss";
import React, {FC} from "react";

interface ButtonProps {
    children: React.ReactNode;
}

const Button:FC<ButtonProps> = ({children}) => {
    return (
        <div className={styles.mainButton}>
            <button><span>{children}</span></button>
        </div>
    )
}

export default Button;