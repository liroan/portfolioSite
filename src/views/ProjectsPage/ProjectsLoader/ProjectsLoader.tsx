import {FC} from "react";
import ProjectLoader from "./ProjectLoader/ProjectLoader";


const ProjectsLoader:FC = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ProjectLoader />
            <ProjectLoader />
            <ProjectLoader />
        </div>
    )
}

export default ProjectsLoader