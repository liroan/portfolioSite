import styles from "../ProjectsPage.module.scss";
import notFound from "../../../assets/img/not-found.png";


const ProjectsError = () => {
    return (
        <div className={styles.projects__error}>
            <div>
                <img src={notFound} alt=""/>
            </div>
        </div>
    )
}

export default ProjectsError;