import React from "react";
import "./footer.css";

function Footer() {
	return (
		<div className="footer">
			<footer>
				<ul>
					<li>
						<a
							href="https://github.com/dzamanillo"
							target="_blank"
							rel="noreferrer"
						>
							<i className="bi bi-github"></i>
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/dzamanillo/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="bi bi-linkedin"></i>
						</a>
					</li>
					<li>
						<a
							href="https://stackoverflow.com/users/15910359/daniel-zamanillo"
							target="_blank"
							rel="noreferrer"
						>
							<i className="bi bi-stack-overflow"></i>
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}

export default Footer;
