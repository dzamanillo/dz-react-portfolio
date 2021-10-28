import React, { useState } from "react";
import Main from "../Main";
import "./header.css";

function Header() {
	const [currentPage, setCurrentPage] = useState("About");

	const handleClick = (event) => {
		// console.log(event.target.innerHTML);
		setCurrentPage(event.target.innerHTML);
	};

	return (
		<div>
			<div className="header">
				<header>
					<h1>Daniel Zamanillo</h1>
					<nav>
						<ul>
							<li>
								<div onClick={handleClick}>
									<h2>About</h2>
								</div>
							</li>
							<li>
								<div onClick={handleClick}>
									<h2>Portfolio</h2>
								</div>
							</li>
							<li>
								<div onClick={handleClick}>
									<h2>Contact</h2>
								</div>
							</li>
							<li>
								<a href="https://docs.google.com/document/d/1h6ijdHJdwup88T4No8lVcwiU2PYd7FkM48E0lNe5ILs/edit?usp=sharing">
									<h2>Resume</h2>
								</a>
							</li>
						</ul>
					</nav>
				</header>
			</div>
			<Main currentPage={currentPage} />
		</div>
	);
}
export default Header;
