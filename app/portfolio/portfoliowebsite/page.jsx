import ProjectCard from "../../components/ProjectDetail/ProjectDetail";
import { projectsData } from '../../components/ProjectSelection/projectsData';

export default function PortfolioWebsite() {
    //Defines which project to show
    const projectToShow = "Portfolio Website";
    //Returns only the data for a specific project (specified above)
    const projectInfo = projectsData.find((project) =>{
        return project.title === projectToShow;
    });

    return (
        <main>
            <ProjectCard projectInfo={projectInfo} />
        </main>
    )
}
  