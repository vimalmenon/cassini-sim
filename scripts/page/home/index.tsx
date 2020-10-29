import React from "react";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import DocumentDetails from "./document-details";
import DocumentStatus from "./document-status";
import Grid from "./grid";

const Home:React.FC = () => {
	return (
		<Container fluid>
			<Row>
				<Col lg="6">
					<DocumentDetails />
				</Col>
				<Col lg="6">
					<DocumentStatus />
				</Col>
			</Row>
			<Row>
				<Col lg="6">
					<section>
						This is home
					</section>
				</Col>
			</Row>
			<Row>
				<Col lg="6">
					<Grid />
				</Col>
			</Row>		
		</Container>
	);
};

export default Home;