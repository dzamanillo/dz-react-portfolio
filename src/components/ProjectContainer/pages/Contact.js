import React from "react";

function Contact() {
	return (
		<div>
			<form className="contactForm">
				<div>
					<label for="name">Name:</label>
					<br />
					<input type="text" name="name" id="name" />
				</div>
				<div>
					<label for="email">Email Address:</label>
					<br />
					<input type="email" name="email" id="email" />
				</div>
				<div>
					<label for="message">Message:</label>
					<br />
					<textarea cols="30" rows="10" id="message"></textarea>
				</div>
			</form>
		</div>
	);
}

export default Contact;
