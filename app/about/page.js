import Link from 'next/link';
import TypingAnimation from ".././components/TypingAnimation/TypingAnimation.jsx";
import SkillsBanner from ".././components/SkillsBanner/SkillsBanner.jsx";
import styles from './page.module.css';
//About Page
export default function About() {
    return (<main>
            {/*Intro Section*/}
            <section className={styles.introContainer}>
                <TypingAnimation page='About'/>
            </section>
            {/*About Section*/}
            <section className={styles.aboutContainer}>
                <div className={styles.textSection}>
                    <h4>Hi, i'm Dylan.</h4>
                    <p>I’m a Web & UI Developer specialising in creating interactive and engaging websites and web applications using HTML, CSS, JavaScript & React.</p>
                    <p>My background is in IT, Network Engineering, UI development, Front-End web development.</p>
                    <p>To learn more about my skills and experience also visit the Portfolio page of this site.</p>
                    <p>I’m always open to new opportunities, so feel free to reach out to me anytime directly via email or LinkedIn.</p>
                </div>
                <div className={styles.imageSection}>
                    <img src="/images/profile-photo.jpg" alt="Dylan Hedges profile photo."/>
                </div>
            </section>
            {/*Skills Section*/}
            <section className={styles.skillsContainer}>
                <h1>Skills</h1>
                <SkillsBanner />
            </section>
            {/*Static Timeline Section*/}
            <section className={styles.staticTimelineContainer}>
                <h1>Experience</h1>
                <div className={styles.row1}>
                    <div className={styles.rowImage}>
                        <img src="/images/circle-dot.svg" alt=""/>
                    </div>
                    <div className={styles.rowText}>
                        <h5>IT BSc (First-Class Honours)</h5>
                        <h6>Bournemouth University (2010-2014)</h6>
                        <p>Web Development (HTML, CSS, JavaScript), Relational Databases (MySQL), Networking and Security (Cisco)</p>
                    </div>
                </div>
                <div className={styles.row2}>
                    <div className={styles.rowImage}>
                        <img src="/images/circle-dot.svg" alt=""/>
                    </div>
                    <div className={styles.rowText}>
                        <h5>Network Engineer </h5>
                        <h6>Intel (2012-2013)</h6>
                        <p>Supported and maintained the enterprise network infrastructure, installed, configured and maintained networking equipment, provided end user support</p>
                    </div>
                </div>
                <div className={styles.row3}>
                    <div className={styles.rowImage}>
                        <img src="/images/circle-dot.svg" alt=""/>
                    </div>
                    <div className={styles.rowText}>
                        <h5>UI Developer</h5>
                        <h6>PwC (2014-2017)</h6>
                        <p>Developed engaging web-based courses, created interactive User Interfaces and digital front-ends, coordinated projects and communicated with stakeholders</p>
                    </div>
                </div>
                <div className={styles.row4}>
                    <div className={styles.rowImage}>
                        <img src="/images/circle-dot.svg" alt=""/>
                    </div>
                    <div className={styles.rowText}>
                        <h5>UI Developer</h5>
                        <h6>Pathways Training (2018-2022)</h6>
                        <p>Worked with clients to develop interactive web-based courses, created User Interfaces & engaging User Experiences, maintained & updated the company website and increased SEO ranking</p>
                    </div>
                </div>
                <div className={styles.row5}>
                    <div className={styles.rowImage}>
                        <img src="/images/circle-dot.svg" alt=""/>
                    </div>
                    <div className={styles.rowText}>
                        <h5>UI Developer</h5>
                        <h6>IC Axon (2022-2023)</h6>
                        <p>Developed interactive web-based courses, maintained and updated the company website, created customised HTML emails for mass communication</p>
                    </div>
                </div>
            </section>
            {/*Interactive Timeline Section*/}
            <section className={styles.interactiveTimelineContainer}>
                <h1>Interactive Timeline</h1>
                <Link href="https://timeline.dylanhedges.com/" target="_blank"><img src={"/images/interactive-timeline.png"} alt="Interactive timeline, select to launch the interactive timeline."/></Link>
            </section>
        </main>);
}
