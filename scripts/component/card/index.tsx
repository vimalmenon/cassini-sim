import React from "react";


import styled from "styled-components";

const CardSection = styled.section`
	display:flex;
	flex-direction:column;
	.count{
		display:flex;
		justify-content:center;
	}
	.text{
		display:flex;
		justify-content:center;
	}
`;

const Card:React.FC = () => {
	return (
		<CardSection>
			<div className="count">
				124
			</div>
			<div className="text">
				Documents successfully scanned
			</div>
		</CardSection>
	);
};

export default Card;