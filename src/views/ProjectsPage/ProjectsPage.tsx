
import styles from "./ProjectsPage.module.scss"
import Container from "../../components/Container/Container";
import {useEffect, useState} from "react";
import {getProjects} from "../../store/projectReducer";
import {useDispatch, useSelector} from "react-redux";
import {IProject} from "../../types/types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notFound from "../../assets/img/not-found.png"
import ProjectLoader from "./ProjectsLoader/ProjectLoader/ProjectLoader";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Animate from "../../components/Animate/Animate";
import {tabs} from "../../constants/constants";
import ProjectsLoader from "./ProjectsLoader/ProjectsLoader";
import ProjectsError from "./ProjectsError/ProjectsError";
import ProjectsInfo from "./ProjectsInfo/ProjectsInfo";
import ProjectsTabs from "./ProjectsTabs/ProjectsTabs";
import ProjectsItems from "./ProjectsItems/ProjectsItems";

const ProjectsPage = () => {
    const dispatch = useDispatch();
    const [currentCategory, setCurrentCategory] = useState(0);
    const projects = useSelector((state: any) => state.projects.projects[currentCategory]);
    const { error, isLoading } = useSelector((state: any) => state.projects);
    useEffect(() => {
        if (!projects) {
            // @ts-ignore
            dispatch(getProjects(currentCategory));
        }
    }, [dispatch, currentCategory, projects])
    useEffect(() => {
        if (!isLoading && error) {
            toast.error(error)
        }
    }, [isLoading, error])
    return (
        <section className={styles.projects} id="projects">
            <Container>
                <Animate animateClasses="animate__animated animate__fadeIn">
                    <ProjectsInfo />
                    <ProjectsTabs  currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
                    <ProjectsItems error={error}  isLoading={isLoading} projects={projects}/>
                </Animate>
            </Container>
        </section>
    )
}

export default ProjectsPage;