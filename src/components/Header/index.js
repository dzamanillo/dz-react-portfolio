import React, { useState } from "react";
import Main from "../Main";
import "./header.css";
import Nav from "react-bootstrap/Nav";

function Header() {
	const [currentPage, setCurrentPage] = useState("About");

	const handleClick = (event) => {
		event.preventDefault();
		setCurrentPage(event.target.innerHTML);
	};

	return (
		<div>
			<div className="header d-flex justify-content-center">
				<header>
					<h1 className="text-align-center my-2">Daniel Zamanillo</h1>

					<nav class="navbar navbar-expand-lg navbar-light my-2">
						<div class="container-fluid">
							<div class="" id="navbarNav">
								<ul class="navbar-nav">
									<li class="nav-item">
										<a
											className={
												currentPage === "About"
													? " nav-link active"
													: "nav-link"
											}
											aria-current="page"
											href="/"
											onClick={handleClick}
										>
											About
										</a>
									</li>
									<li class="nav-item">
										<a
											className={
												currentPage === "Portfolio"
													? " nav-link active"
													: "nav-link"
											}
											href="/"
											onClick={handleClick}
										>
											Portfolio
										</a>
									</li>
									<li class="nav-item">
										<a
											className={
												currentPage === "Contact"
													? " nav-link active"
													: "nav-link"
											}
											href="/"
											onClick={handleClick}
										>
											Contact
										</a>
									</li>
									<li class="nav-item">
										<a
											className={
												currentPage === "Resume"
													? " nav-link active"
													: "nav-link"
											}
											href="./assets/pdf/DanielZamanilloResume.pdf"
											onClick={handleClick}
										>
											Resume
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>

					{/* <Nav className="nav-bar" variant="" defaultActiveKey="/about">
						<Nav.Item>
							<Nav.Link
								id="nav-item"
								onClick={handleClick}
								href="/about"
								className={currentPage === "About" ? " active" : ""}
							>
								About
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								id="nav-item"
								onClick={handleClick}
								eventKey="/portfolio"
								className={currentPage === "Portfolio" ? " active" : ""}
							>
								Portfolio
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								id="nav-item"
								onClick={handleClick}
								eventKey="/contact"
								className={currentPage === "Contact" ? " active" : ""}
							>
								Contact
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link id="nav-item" eventKey="/resume">
								Resume
							</Nav.Link>
						</Nav.Item>
					</Nav> */}
				</header>
			</div>
			<Main currentPage={currentPage} />
		</div>
	);
}
export default Header;
