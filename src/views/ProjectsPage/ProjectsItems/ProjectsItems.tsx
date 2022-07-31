import styles from "../ProjectsPage.module.scss";
import {IProject} from "../../../types/types";
import ProjectsError from "../ProjectsError/ProjectsError";
import ProjectsLoader from "../ProjectsLoader/ProjectsLoader";
import {FC} from "react";
import ProjectItem from "./ProjectItem/ProjectItem";

interface ProjectsItemsProps {
    isLoading: boolean,
    error: string;
    projects: IProject[];
}

const ProjectsItems:FC<ProjectsItemsProps> = ({ isLoading,  error, projects}) => {
    const errorComponent = !isLoading && error && <ProjectsError />;
    const loadingComponent = isLoading && <ProjectsLoader />;
    return (
        <div className={styles.projects__items}>
            {errorComponent || loadingComponent || (projects && projects.map((project: IProject) => <ProjectItem project={project} key={project.id} />))}
        </div>
    )
}

export default ProjectsItems;