import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import registerimg from "./image/meditate.png";

function Register() {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [dob, setDob] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	function ValidateState() {
		if (
			name.length === 0 &&
			username.length === 0 &&
			dob.length === 0 &&
			email.length === 0 &&
			password.length === 0
		) {
			setError("Invalid Form, All fields are required");
			return;
		} else if (name.length === 0) {
			setError("Invalid Form, Name can not be empty");
			return;
		} else if (username.length === 0) {
			setError("Invalid Form, Username can not be empty");
			return;
		} else if (dob.length === 0) {
			setError("Invalid Form, Date of Birth can not be empty");
			return;
		} else if (email.length === 0) {
			setError("Invalid Form, Email can not be empty");
			return;
		} else if (password.length === 0) {
			setError("Invalid Form, Password can not be empty");
			return;
		} else if (
			name.length > 0 &&
			username.length > 0 &&
			dob.length > 0 &&
			email.length > 0 &&
			password.length > 0
		) {
			setError("");
			return;
		}
	}

	return (
		<div className="content login">
			<div className="card">
				<div className="row card home ">
					<div className="card home">
						<img src={registerimg} alt="registerimg" height={450} />
					</div>
					<div className="card home homeText ">
						<h1> Register </h1>
						<div className="line">
							<label htmlFor="name">
								<h2> Name: </h2>
							</label>
							<input
								type="text"
								id="name"
								className="inputfield"
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="line">
							<label htmlFor="username">
								<h2> Username: </h2>
							</label>
							<input
								type="text"
								id="username"
								className="inputfield"
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className="line">
							<label htmlFor="dob">
								<h2> Date of Birth: </h2>
							</label>
							<input
								type="date"
								id="dob"
								className="inputfield"
								onChange={(e) => setDob(e.target.value)}
							/>
						</div>
						<div className="line">
							<label htmlFor="gender">
								<h2> Gender: </h2>
							</label>
							<div className="radio">
								<div>
									<label className="form-control">
										<input
											type="radio"
											value="Male"
											name="gender"
											checked="true"
										/>{" "}
										Male
									</label>
								</div>
								<div>
									<label className="form-control">
										<input type="radio" value="Female" name="gender" /> Female
									</label>
								</div>
							</div>
						</div>

						<div className="line">
							<label htmlFor="email">
								<h2> E-mail: </h2>
							</label>
							<input
								type="text"
								id="email"
								className="inputfield"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="line">
							<label htmlFor="password">
								<h2> Password: </h2>
							</label>
							<input
								type="password"
								id="password"
								className="inputfield"
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
							{" "}
							Register{" "}
						</button>
						<Link to="/login" className="link-button">
							Already have an account?
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
