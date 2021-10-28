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
								<button onClick={handleClick}>
									<h2>About</h2>
								</button>
							</li>
							<li>
								<button onClick={handleClick}>
									<h2>Portfolio</h2>
								</button>
							</li>
							<li>
								<button onClick={handleClick}>
									<h2>Contact</h2>
								</button>
							</li>
							<li>
								<button>
									<h2>Resume</h2>
								</button>
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
