import React from "react";

import logo from "../../assets/images/cassini-logo.png";

const Header:React.FC = () => {
	return (
		<header>
			<img src={logo} />
			This is header
		</header>
	);
};

export default Header;