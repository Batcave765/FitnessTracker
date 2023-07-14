import React from "react";
import { Link } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import { RxDashboard } from "react-icons/rx";
import { LuGlassWater } from "react-icons/lu";
import "./Sidebar.css";
export default (props) => {
	return (
		<Menu>
			<Link to="/profile" className="menu-item">
				<div className="line" id="sidebar-line">
					<div id="sidebar-icon">
						<RxDashboard size={25} />
					</div>
					DashBoard
				</div>
			</Link>
			<Link to="/waterintake" className="menu-item">
				<div className="line" id="sidebar-line">
					<div id="sidebar-icon">
						<LuGlassWater size={25} />
					</div>
					Water Intake
				</div>
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
