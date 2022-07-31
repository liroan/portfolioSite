import styles from "./Banner.module.scss"
import Container from "../../components/Container/Container";

import {FC} from "react";
import BannerInfo from "./BannerInfo/BannerInfo";
import BannerImage from "./BannerImage/BannerImage";

const Banner:FC = () => {
    return (
        <section className={styles.banner} id="home">
            <Container>
                <BannerInfo />
                <BannerImage />
            </Container>
        </section>
    )
}

export default Banner;