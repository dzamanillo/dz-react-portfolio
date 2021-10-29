import React from "react";
import Form from "react-bootstrap/Form";

function Contact() {
	return (
		<div>
			<Form className="p-3">
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Name" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="name@example.com" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Message</Form.Label>
					<Form.Control as="textarea" rows={3} />
				</Form.Group>
			</Form>
		</div>
	);
}

export default Contact;
