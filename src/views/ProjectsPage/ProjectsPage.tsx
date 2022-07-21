
import styles from "./ProjectsPage.module.scss"
import Container from "../../components/Container/Container";
const ProjectsPage = () => {
    return (
        <section className={styles.projects}>
            <Container>
                <div className={styles.projects__info}>
                    <h2 className={styles.projects__title}>Projects</h2>
                    <p className={styles.projects__subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className={styles.projects__tabs}>
                    <div className={styles.projects__tab}>
                        <div>Tab 1</div>
                    </div>
                    <div className={styles.projects__tab}>
                        <div>Tab 1</div>
                    </div>
                    <div className={styles.projects__tab}>
                        <div>Tab 1</div>
                    </div>
                </div>
                <div className={styles.projects__items}>
                    <div className={styles.projects__item}>
                        <img src="https://i.pinimg.com/originals/52/fc/bf/52fcbfb642e9357878a34359b6fb6138.png" alt=""/>
                        <div className={styles.projects__item_hoverText}>
                            <h4>Business Startup</h4>
                            <p>Design & Development</p>
                        </div>
                    </div>
                    <div className={styles.projects__item}>
                        <img src="https://i.pinimg.com/originals/52/fc/bf/52fcbfb642e9357878a34359b6fb6138.png" alt=""/>
                        <div className={styles.projects__item_hoverText}>
                            <h4>Business Startup</h4>
                            <p>Design & Development</p>
                        </div>
                    </div>
                    <div className={styles.projects__item}>
                        <img src="https://i.pinimg.com/originals/52/fc/bf/52fcbfb642e9357878a34359b6fb6138.png" alt=""/>
                        <div className={styles.projects__item_hoverText}>
                            <h4>Business Startup</h4>
                            <p>Design & Development</p>
                        </div>
                    </div>
                    <div className={styles.projects__item}>
                        <img src="https://i.pinimg.com/originals/52/fc/bf/52fcbfb642e9357878a34359b6fb6138.png" alt=""/>
                        <div className={styles.projects__item_hoverText}>
                            <h4>Business Startup</h4>
                            <p>Design & Development</p>
                        </div>
                    </div>
                    <div className={styles.projects__item}>
                        <img src="https://i.pinimg.com/originals/52/fc/bf/52fcbfb642e9357878a34359b6fb6138.png" alt=""/>
                        <div className={styles.projects__item_hoverText}>
                            <h4>Business Startup</h4>
                            <p>Design & Development</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ProjectsPage;