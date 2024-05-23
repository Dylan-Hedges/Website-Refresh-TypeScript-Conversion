//Next.js configuration - renders component on the client side/browser, apply to components with interactivity
"use client";
import styles from './SkillsBanner.module.css';
//Typing Animation Component
export default function SkillsBanner() {
    return (<video className={styles.video} src={"/videos/skills-icons-video-cropped.mp4"} autoPlay loop muted playsInline/>);
}
