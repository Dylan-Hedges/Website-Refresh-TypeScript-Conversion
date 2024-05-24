//Renders component on the client side/browser - use for components with interactivity
"use client";
import React, { useState, useEffect } from 'react';
//Imports projects data
import { projectsData } from './projectsData';
//Imports TypeScript interface for projectsData - defines projectsData data types
import IProjectsData from './IProjectsData';
import styles from './ProjectSelection.module.css'; 
import Link from 'next/link';

//Project Selection Component - JSX.Element, TypeScript, ensures component returns a JSX element
export default function ProjectSelection() : JSX.Element{
    //State that keeps track of current tag
    const [tag, setTag] = useState('All');
    //State that keeps track of projects to show on screen 
    const [currentProjects, setProjects] = useState(projectsData);

    //Hook that runs everytime there is a change to the tag state
    useEffect(() => {
        //Filter that only returns project which have the current tag - (project: IProjectsData), TypeScript, checks each individual 'project' (object) adheres to the 'IProjectsData' interface (object), ensures type safety.
        const filteredProjects = projectsData.filter((project: IProjectsData) => {
            return project.tag.includes(tag)
        })
        setProjects(filteredProjects);
    }, [tag]); 

    //On click updates selected button tag - TypeScript, tag must be type String
    const handleClick = (newTag: string) =>{
        //Updates the tag state with a new tag
        setTag(newTag);
    }

    return(
        <div>
            {/*Buttons Section*/}
            <div className={styles.btnContainer}>
                <button className={styles.btn} onClick={() => handleClick('All')}>All</button>       
                <button className={styles.btn} onClick={() => handleClick('Web')}>Web</button>
                <button className={styles.btn} onClick={() => handleClick('UI')}>UI</button>    
                <button className={styles.btn} onClick={() => handleClick('Email')}>Email</button>      
            </div>
            {/*Card Section*/}
            <div className={styles.cardsContainer}>
                {currentProjects.map(project => (
                    <Link key={project.id} href={project.projectPageURL} className={styles.cardLink}>
                        <div className={styles.card}>
                            <h3 className={styles.cardHeader}>{project.title}</h3>
                            <img src={project.image} className={styles.cardImg} alt=""/>
                            <p className={styles.cardText}>{project.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
