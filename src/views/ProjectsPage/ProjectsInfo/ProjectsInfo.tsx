import styles from "../ProjectsPage.module.scss";
import {FC} from "react";


const ProjectsInfo:FC = () => {
    return (
        <div className={styles.projects__info}>
            <h2 className={styles.projects__title}>Projects</h2>
            <p className={styles.projects__subtitle}>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
    )
}

export default ProjectsInfo;