import React from "react";

import {
	Switch,
	Route
} from "react-router-dom";

import styled from "styled-components";

import Header from "./common/header";
import PageNotFound from "./common/page-not-found";


import Home from "./home";

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
				<Switch>
					<Route exact path={`/`} component={Home} />
					<Route component={PageNotFound} />
				</Switch>
			</div>
		</Container>
	);
};

export default Page;