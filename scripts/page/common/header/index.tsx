import React from "react";

import styled from "styled-components";

import {localization} from "model";

import logo from "../../../assets/images/cassini-logo.png";
import profile from "../../../assets/images/profile1.png";

const StyledHeader = styled.header`
	display:flex;
	flex: 0 0 5rem;
	background: #272c4d;
	border:1px solid #272c4d;
	color:white;
	align-items:center;
	.profile {
		display:flex;
		max-height:3.6rem;
		flex: 0 0 auto;
		.img{
			padding:0 0.843rem;
		}
		.text {
			display:flex;
			flex-direction:column;
			justify-content:center;
			.welcome {
				font-size:12px;
			}
			.name{
				font-size:16px;
				font-weight:bold;
			}
		}
	}
	.fill {
		display: flex;
		flex: 1 1 100%;
		justify-content:center;
		.brand {
			display: flex;
			flex-direction:column;
			max-height:3.5rem;
			flex:0 0 auto;
			.logo {
				width:10rem;
			}
			.text{
				font-size:14px;
				font-weight:bold;
			}
		}
	}
`;

const Header:React.FC = () => {
	return (
		<StyledHeader>
			<div className="profile">
				<img className="img" src={profile} alt="profile"/>
				<div className="text">
					<span className="welcome">{localization.header.welcome}</span>
					<span className="name">Dennis Smith</span>
				</div>
			</div>
			<div className="fill">
				<div className="brand">
					<img className="logo" src={logo} alt="cassini"/>
					<span className="text">{localization.header.title}</span>
				</div>
			</div>
		</StyledHeader>
	);
};

export default Header;