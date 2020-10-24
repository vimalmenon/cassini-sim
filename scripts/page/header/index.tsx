import React from "react";

import styled from "styled-components";

import {localization} from "model";

import logo from "../../assets/images/cassini-logo.png";
import profile from "../../assets/images/profile1.png";

const StyledHeader = styled.header`
	display:flex;
	flex: 0 0 5rem;
	background: #272c4d;
	border:1px solid #272c4d;
	color:white;
	.profile {
		display:flex;
		.text {
			font-size:12px;
		}
	}
	.brand {
		display: flex;
		flex-direction:column;
		.logo {
			width:10rem;
		}
		.text{
			font-size:14px;
			font-weight:bold;
		}
	}
	
`;

const Header:React.FC = () => {
	React.useEffect(() => {
		console.log("test");
	},[]);
	return (
		<StyledHeader>
			<div className="profile">
				<img className="img" src={profile} alt="profile"/>
				<div>
					<span className="text">Welcome</span>
				</div>
			</div>
			<div className="brand">
				<img className="logo" src={logo} alt="cassini"/>
				<span className="text"> {localization.title}</span>
			</div>
		</StyledHeader>
	);
};

export default Header;