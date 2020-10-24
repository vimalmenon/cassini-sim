import React from "react";
import Container from "react-bootstrap/esm/Container";

import Header from "./header";

const Page:React.FC = () => {
	return (
		<Container fluid={"lg"}>
			<div>
				<Header />
				This is page
			</div>
		</Container>
		
	);
};

export default Page;