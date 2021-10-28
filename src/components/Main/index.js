import React from "react";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";

function Main(props) {
	console.log(props);

	const renderHandle = (param) => {
		switch (param) {
			// case "About":
			// 	return <About />;
			case "Contact":
				return <Contact />;
			case "Portfolio":
				return <Portfolio />;
			default:
				return <About />;
		}
	};

	return <div>{renderHandle(props.currentPage)}</div>;
}

export default Main;
