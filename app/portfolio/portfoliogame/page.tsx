import ProjectCard from "../../components/ProjectDetail/ProjectDetail";
//Imports projects data
import { projectsData } from '../../components/ProjectSelection/projectsData';
//Imports TypeScript interface for projectsData - defines projectsData data types
import IProjectsData from '../../components/ProjectSelection/IProjectsData';

export default function PortfolioGame() {
    //Defines which project to show
    const projectToShow = "Portfolio Game";
    //Returns only the data for a specific project (specified above)
    const projectInfo: IProjectsData | undefined  = projectsData.find((project) =>{
        return project.title === projectToShow;
    });

    return (
        <main>
            <ProjectCard projectInfo={projectInfo} />
        </main>
    )
}
  