import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./card.css";

function ProjectCard({ id, name, description, img, gitLink, deployLink }) {
	return (
		<div key={id} className="m-3">
			<Card className="card" style={{ width: "18rem" }}>
				<Card.Img variant="top" src={img} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>{description}</Card.Text>
					<div class="links">
						<a href={gitLink} rel="noreferrer" target="_blank">
							<i className="bi bi-github"></i>
						</a>
						<a href={deployLink} rel="noreferrer" target="_blank">
							<i class="bi bi-binoculars"></i>
						</a>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}

export default ProjectCard;
