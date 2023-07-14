import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

//navbar
function Navbar() {
	const [url, setUrl] = useState("");
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		var a = document.createElement("a");
		a.href = window.location.href;
		setUrl(a.pathname);
	});

	return (
		<>
			<div className="right">
				<div className="navbar">
					<div className="logo">
						<Link to="/">
							<h1 className="logo-text">Fitness Tracker</h1>
						</Link>
					</div>

					<div className="links">
						{url === "/" ? (
							<>
								<Link to="/login">
									<h2>Login</h2>
								</Link>
								<Link to="/register">
									<h2>Register</h2>
								</Link>
							</>
						) : (
							<Link to="/profile">
								<h2>Profile</h2>
							</Link>
						)}
					</div>
				</div>
				<Outlet />
			</div>
		</>
	);
}

export default Navbar;
