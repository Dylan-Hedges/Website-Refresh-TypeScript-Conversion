import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer(){
    return(
        <div className={styles.footerContainerInternal}>
            {/*Column 1 - Text*/}
            <div className={styles.textContainer}>
                <h5>ABOUT</h5>
                <p>Still works</p>
                <p>Web & UI Developer specialising in creating interactive and engaging websites and web applications using HTML, CSS, JavaScript & React. I am always open to new opportunities. Reach out to me anytime directly via email or LinkedIn. </p>
            </div>
            {/*Column 2 - Buttons*/}
            <div className={styles.buttonContainer}>
            <Link href="/contact"><button className={styles.btn}>Get in touch!</button></Link>
            </div>
            {/*Column 3 - Icons*/}
            <div className={styles.iconContainer}>
                <ul>
                    <li><Link href="mailto:dh@dylanhedges.com"><img src={"/images/envelope-reverse.png"} alt="Email icon, select to open email client."/></Link></li>
                    <li><Link href="https://www.linkedin.com/in/dylan-hedges/" target="_blank"><img src={"/images/linkedin-reverse.png"} alt="LinkedIn icon, select to open Dylan Hedges LinkedIn profile."/></Link></li>
                    <li><Link href="https://github.com/Dylan-Hedges" target="_blank"><img src={"/images/github-reverse.png"} alt="GitHub icon, select to open Dylan Hedges GitHub profile."/></Link></li>
                </ul>
            </div>
        </div>
    )
}