import React from "react";
import { Link } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import "./Sidebar.css";
export default (props) => {
	return (
		<Menu>
			<Link to="/profile" className="menu-item">
				Profile
			</Link>
			<Link to="/waterintake" className="menu-item">
				Water Intake
			</Link>
			<Link to="/" className="menu-item">
				Home
			</Link>
			<Link to="/" className="menu-item">
				Home
			</Link>
		</Menu>
	);
};
