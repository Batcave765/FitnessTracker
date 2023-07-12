import React from "react";
import loginlogo from "./image/login.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	function ValidateState() {
		if (username.length === 0 && password.length === 0) {
			setError("Invalid username and password");
			return;
		} else if (username.length === 0) {
			setError("Invalid Form, User Name can not be empty");
			return;
		} else if (password.length === 0) {
			setError("Invalid Form, Password can not be empty");
			return;
		} else if (username.length > 0 && password.length > 0) {
			setError("");
			return;
		}
		if (error.length === 0) {
		}
	}
	return (
		<div className="content login">
			<div className="card" id="login-card">
				<div className="row card home ">
					<div className="card home">
						<img src={loginlogo} alt="loginlogo" height={300} />
					</div>
					<div className="card home homeText ">
						<h1>Login</h1>
						<div className="line">
							<label htmlFor="username">
								<h2>Username: </h2>
							</label>
							<input
								type="text"
								id="username"
								className="inputfield"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className="line">
							<label htmlFor="password">
								<h2>Password: </h2>
							</label>
							<input
								type="password"
								id="password"
								className="inputfield"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="error line" style={{ color: "red" }}>
							{error}
						</div>
						<button
							onClick={() => {
								ValidateState();
							}}
						>
							Login
						</button>
						<Link to="/register" className="link-button">
							Create a new Account
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
