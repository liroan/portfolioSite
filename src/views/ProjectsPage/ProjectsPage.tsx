
import styles from "./ProjectsPage.module.scss"
import Container from "../../components/Container/Container";
import {useEffect, useState} from "react";
import {getProjects} from "../../store/projectReducer";
import {useDispatch, useSelector} from "react-redux";
import {IProject, IProjects} from "../../types/types";
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProjectsPage = () => {
    const dispatch = useDispatch();
    const [currentCategory, setCurrentCategory] = useState(0);
    const tabs = ["Best", "Play", "Unfinished"];
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
        <section className={styles.projects}>
            <Container>
                <div><ToastContainer style={{ marginTop: 60 }}/></div>
                <div className={styles.projects__info}>
                    <h2 className={styles.projects__title}>Projects</h2>
                    <p className={styles.projects__subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className={styles.projects__tabs}>
                    {
                        tabs.map((tab, index) => {
                            return (
                                <div className={styles.projects__tab + " " + (index === currentCategory ? styles.projects__tab_active : "")} onClick={() => setCurrentCategory(index)}>
                                    <div>{tab}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.projects__items}>
                    {
                        !projects ? <>Loading</> :
                        projects.map((project: IProject) => (
                                <div className={styles.projects__item}>
                                    <a href={project.ref} target="_blank" rel="noreferrer">
                                    <img src={project.img} alt=""/>
                                    <div className={styles.projects__item_hoverText}>
                                        <h4>{project.name}</h4>
                                        <p>{project.description}</p>
                                    </div>
                                    </a>
                                </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}

export default ProjectsPage;