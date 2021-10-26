import React, { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import "./projectContainer.css";

function ProjectContainer() {
	const [currentPage, setCurrentPage] = useState("About");

	const renderPage = () => {
		// Add a switch statement that will return the appropriate component of the 'currentPage'
		// YOUR CODE HERE
		//
		switch (currentPage) {
			case "Projects":
				return <Project />;
			case "Contact":
				return <Contact />;
			default:
				return <About />;
		}
	};

	return <div className="projectContainer">{renderPage()}</div>;
}

export default ProjectContainer;
