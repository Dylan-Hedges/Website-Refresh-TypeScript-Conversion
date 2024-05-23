import Link from 'next/link';
import styles from './ProjectDetail.module.css';
export default function ProjectCard(props) {
    const name = props.projectInfo.title;
    const image = props.projectInfo.image;
    const projectURL = props.projectInfo.projectURL;
    const bullets = props.projectInfo.bullets;
    const gitHubURL = props.projectInfo.gitHubURL;
    return (<div className={styles.projectContainer}>
            {/*Header*/}
            <div className={styles.header}>
                <h1>{name}</h1>
            </div>
            {/*Image*/}
            <div className={styles.thumbImg}>
                <Link href={projectURL} target="_blank"><img src={image} alt="Live project screenshot, select to view the live version of this project."/></Link>
            </div>
            {/*Icons*/}
            <div className={styles.icons}>
                <Link href={projectURL} target="_blank"><img src="/images/eye.png" alt="Live project icon, select to view the live version of this project."/></Link>
                <Link href={gitHubURL} target="_blank"><img src="/images/github.png" alt="Github icon, select to view the GitHub repository for this project."/></Link>
            </div>
            {/*Bullets*/}
            <div className={styles.bulletList}>
                <ul className={styles.ul}>
                    {bullets.map((bullet) => {
            return <li className={styles.li} key={bullet}>{bullet}</li>;
        })}
                </ul>
            </div>
        </div>);
}
