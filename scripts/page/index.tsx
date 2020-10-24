import React from "react";

import styled from "styled-components";

import Header from "./header";

import {init} from "./index.service";

const Container = styled.div`
	display:flex;
	flex-direction:column;
`;

const Page:React.FC = () => {
	React.useEffect(init,[]);
	return (
		<Container>
			<Header />
			<div>
				This is page
			</div>
		</Container>
		
	);
};

export default Page;