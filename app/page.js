import TypingAnimation from "./components/TypingAnimation/TypingAnimation.jsx";
import ProjectSelection from "./components/ProjectSelection/ProjectSelection";
import SkillsBanner from "./components/SkillsBanner/SkillsBanner.jsx";
import styles from './page.module.css';
import Link from 'next/link';
//Home Page
export default function Home() {
    return (<main>
            {/*Intro Section*/}
            <section className={styles.introSection}>
                <h1>Dylan Hedges</h1>
                <TypingAnimation page='Home'/>
            </section>
            {/*About section*/}
            <section className={styles.aboutSection}>
                <div className={styles.aboutContainer}>
                    <div className={styles.textSection}>
                        <p>Web & UI Developer specialising in creating interactive and engaging websites and web applications using HTML, CSS, JavaScript & React.</p>
                        <p>I’m always open to new opportunities. Reach out to me anytime directly via email or LinkedIn.</p>
                        <Link href="/contact"><button>Get in touch!</button></Link>
                    </div>
                    <div className={styles.imageSection}>
                        <img src="/images/home-intro.jpg" alt="Dylan Hedges profile photo."/>
                    </div>
                </div>
            </section>
            {/*Skills Section*/}
            <section className={styles.skillsSection}>
                <h1>Skills</h1>
                <SkillsBanner />
            </section>
            {/*Game Section*/}
            <section className={styles.gameSection}>
                <h1>Want to play a game instead?</h1>
                <Link href="https://portfoliogame.dylanhedges.com/" target="_blank"><img src={"/images/portfolio-game-thumb.png"} alt="Portfolio game screenshot, select to launch the portfolio game."/></Link>
            </section>
            {/*Projects Section*/}
            <section className={styles.projectsSection}>
                <h1>Projects</h1>
                <ProjectSelection />
            </section>
            {/*Favourite Channels Section*/}
            <section className={styles.channelsSection}>
                <h1 className={styles.channelsHeader}>Favourite Channels</h1>
                <div className={styles.channelsContainer}>
                    <iframe className={styles.video} src="https://www.youtube.com/embed/VGu1vDAWNTg?si=qdByFbORh_xhRdck" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className={styles.video} src="https://www.youtube.com/embed/BI1o2H9z9fo?si=EhtO0s8_x8zoe8hc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className={styles.video} src="https://www.youtube.com/embed/y8CYSwHXVNE?si=RTaVophJY22Txruh" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className={styles.video} src="https://www.youtube.com/embed/RmveJc8_voo?si=YlDFAp4JvuaoDy31" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className={styles.video} src="https://www.youtube.com/embed/e1dA5MLuS44?si=uv_zeKquluwb_JUv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className={styles.video} src="https://www.youtube.com/embed/jx8olulc3zE?si=KK-F1ZFovhci7JFo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </section>

        </main>);
}
