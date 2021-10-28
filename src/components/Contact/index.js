import React from "react";
import "./contact.css";

function Contact() {
	return (
		<div>
			<form className="contactForm">
				<div>
					<label htmlFor="name">Name:</label>
					<br />
					<input type="text" name="name" id="name" />
				</div>
				<div>
					<label htmlFor="email">Email Address:</label>
					<br />
					<input type="email" name="email" id="email" />
				</div>
				<div>
					<label htmlFor="message">Message:</label>
					<br />
					<textarea cols="30" rows="10" id="message"></textarea>
				</div>
			</form>
		</div>
	);
}

export default Contact;
