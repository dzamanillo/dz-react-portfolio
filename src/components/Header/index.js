import React, { useState } from "react";
import Main from "../Main";
import "./header.css";
import Nav from "react-bootstrap/Nav";

function Header() {
	const [currentPage, setCurrentPage] = useState("About");

	const handleClick = (event) => {
		event.preventDefault();
		console.log(event.target.innerHTML);
		setCurrentPage(event.target.innerHTML);
	};

	return (
		<div>
			<div className="header ">
				<header>
					<h1 className="m-3">Daniel Zamanillo</h1>
					<Nav className="nav-bar" /*variant="" defaultActiveKey="/about"*/>
						<Nav.Item>
							<Nav.Link id="nav-item" onClick={handleClick} href="/about">
								About
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								id="nav-item"
								onClick={handleClick}
								eventKey="/portfolio"
							>
								Portfolio
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link id="nav-item" onClick={handleClick} eventKey="/contact">
								Contact
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link id="nav-item" eventKey="/resume">
								Resume
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</header>
			</div>
			<Main currentPage={currentPage} />
		</div>
	);
}
export default Header;
