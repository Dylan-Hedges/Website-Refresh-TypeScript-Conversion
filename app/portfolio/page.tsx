import ProjectSelection from "../components/ProjectSelection/ProjectSelection";
import TypingAnimation from ".././components/TypingAnimation/TypingAnimation";
import styles from './page.module.css';


//Portfolio Page
export default function Portfolio() {
    return (
        <main>
            <div className={styles.introContainer}>
                <TypingAnimation page='Portfolio' />
            </div>
            <ProjectSelection />
        </main>
    )
}
  