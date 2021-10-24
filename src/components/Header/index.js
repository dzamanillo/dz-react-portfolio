import React from "react";
import "./header.css";

function Header() {
	return (
		<div className="header">
			<header>
				<h1>Daniel Zamanillo</h1>
				<nav>
					<ul>
						<li>
							<a href="/">
								<h2>About Me</h2>
							</a>
						</li>
						<li>
							<a href="/">
								<h2>Portfolio</h2>
							</a>
						</li>
						<li>
							<a href="/">
								<h2>Contact</h2>
							</a>
						</li>
						<li>
							<a href="/">
								<h2>Resume</h2>
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
export default Header;
