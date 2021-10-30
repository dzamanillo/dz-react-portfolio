import React from "react";

import "./card.css";

function ProjectCard({ id, name, description, img, gitLink, deployLink }) {
	return (
		<div class="m-3 card" id="dz-border" key={id}>
			<img src={img} alt={name} class="card-img-top" />
			<div class="card-body">
				<p class="card-text">{description}</p>
			</div>
			<div class="d-flex justify-content-around align-items-center">
				<a href={gitLink} target="_blank" rel="noreferrer">
					<i className="bi bi-github"></i>
				</a>
				<p class="card-title" id="title">
					{name}
				</p>
				<a href={deployLink} target="_blank" rel="noreferrer">
					<i class="bi bi-eye-fill"></i>
				</a>
			</div>
		</div>
	);
}

export default ProjectCard;
