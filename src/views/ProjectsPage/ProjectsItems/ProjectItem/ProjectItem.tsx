import styles from "../../ProjectsPage.module.scss";
import {IProject} from "../../../../types/types";
import {FC} from "react";

interface ProjectItemProps {
    project: IProject
}

const ProjectItem:FC<ProjectItemProps> = ({ project }) => {
    return (
        <div className={styles.projects__item}>
            <a href={project.ref} target="_blank" rel="noreferrer">
                <img src={project.img} alt=""/>
                <div className={styles.projects__item_hoverText}>
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                </div>
            </a>
        </div>
    )
}

export default ProjectItem;