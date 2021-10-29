import React from "react";
import ProjectCard from "../ProjectCard";
import projects from "../../projects.json";
import "./portfolio.css";

function Portfolio() {
	console.log(projects);

	return (
		<div className="d-flex justify-content-center flex-wrap container">
			{projects.map((project) => {
				return (
					<ProjectCard
						id={project.id}
						name={project.name}
						description={project.description}
						img={project.img}
						gitLink={project.gitLink}
						deployLink={project.deployLink}
					/>
				);
			})}
		</div>
	);
}

export default Portfolio;
