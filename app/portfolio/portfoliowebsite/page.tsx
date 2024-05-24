import ProjectCard from "../../components/ProjectDetail/ProjectDetail";
//Imports projects data
import { projectsData } from '../../components/ProjectSelection/projectsData';

export default function PortfolioWebsite() {
    //Defines which project to show
    const projectToShow = "Portfolio Website";
    
    //Returns only the data for a specific project (specified above)
    const projectInfo = projectsData.find((project) =>{
        return project.title === projectToShow;
    });

    //Checks that a found project exists - if no project return message
    if (!projectInfo) {
        return <div>Project not found. Please refresh the page.</div>;
    }

    return (
        <main>
            <ProjectCard projectInfo={projectInfo} />
        </main>
    )
}
  