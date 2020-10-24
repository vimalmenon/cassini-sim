import React from "react";

import styled from "styled-components";

import Header from "./header";

import {init} from "./index.service";

const Container = styled.div`
	@media screen and (min-width: 1300px) {
		display:flex;
		flex:0 0 1300px;
	}
	display:flex;
	flex:1 1 100%;
	flex-direction:row;
	.content{
		display:flex;
		flex-direction:column;
		flex:1 1 100%;
	}
`;
const Page:React.FC = () => {
	React.useEffect(init,[]);
	return (
		<Container>
			<div className="content">
				<Header />
				<div>
					This is page
				</div>
			</div>
		</Container>
		
	);
};

export default Page;