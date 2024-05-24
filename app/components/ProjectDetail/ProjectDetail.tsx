import Link from 'next/link';
import styles from './ProjectDetail.module.css';
import IProjectsData from '../ProjectSelection/IProjectsData';

//TypeScript interface, used for ProjectCard props.projectInfo, must have a property called 'projectInfo' and the value of this property must conform to the structure defined by the IProjectsData interface (see IProjectsData.ts)
interface IProjectInfo {
    projectInfo: IProjectsData;
}

//Page Detail Function - {projectInfo}: IProjectInfo, TypeScript, saves props.projectInfo to projectInfo (destructuring), checks 'projectInfo' aheres to the 'IProjectInfo' interface. 'IProjectInfo' interface specifies the object must have a 'projectInfo' property and its value must conform to the structure defined by the 'IProjectsData' interface.
export default function ProjectCard({projectInfo}: IProjectInfo){
    
    //Saves values from props.projectInfo
    const { title, image, projectURL, bullets, gitHubURL } = projectInfo;

    return(
        <div className={styles.projectContainer}>
            {/*Header*/}
            <div className={styles.header}>
                <h1>{title}</h1>
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
                    {bullets.map((bullet: string)=>{
                        return <li className={styles.li} key={bullet}>{bullet}</li>
                    })
                    }
                </ul>
            </div>
        </div>
    )
}
