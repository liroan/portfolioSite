import styles from "../Banner.module.scss";
import {useEffect, useState} from "react";

const phrases = [" junior Frontend developer", " the best Frontend developer"];

const DeveloperInfo = () => {
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [spend, setSpend] = useState(200);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            const phrase = phrases[currentPhrase % phrases.length];
            const newText = isDeleting ? phrase.substring(0, currentText.length - 1) : phrase.substring(0, currentText.length + 1)
            setCurrentText(newText);
            if (isDeleting) setSpend(prevState => prevState / 1.5)
            if (currentText.length === phrase.length && !isDeleting) {
                setIsDeleting(true);
                setSpend(1000)
            } else if (currentText.length === 0 && isDeleting) {
                setIsDeleting(false);
                setSpend(200)
                setCurrentPhrase(prevState => prevState + 1);
            }
        }, spend);
        return () => clearTimeout(id);
    }, [spend, currentPhrase, currentText, isDeleting])
    return (
        <h1 className={styles.banner__developerInfo}>
            Hi! I'm Denis <span>{currentText}</span>
        </h1>
    )
}


export default DeveloperInfo;