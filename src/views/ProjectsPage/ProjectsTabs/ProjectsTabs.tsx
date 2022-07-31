import styles from "../ProjectsPage.module.scss";
import {tabs} from "../../../constants/constants";
import {Dispatch, FC, SetStateAction} from "react";

interface ProjectsTabsProps {
    currentCategory: number,
    setCurrentCategory: Dispatch<SetStateAction<number>>;
}

const ProjectsTabs:FC<ProjectsTabsProps> = ({ currentCategory, setCurrentCategory }) => {
    return (
        <div className={styles.projects__tabs}>
            {tabs.map((tab, index) => {
                return (
                    <div
                        className={styles.projects__tab + " " + (index === currentCategory ? styles.projects__tab_active : "")}
                        onClick={() => setCurrentCategory(index)}>
                        <div>{tab}</div>
                    </div>
                );
            })}
        </div>
    )
}

export default ProjectsTabs