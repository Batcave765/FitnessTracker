import React from "react";
import fitness from "./image/fitness.jpg";
import goals from "./image/goals.png";
import food from "./image/food.png";
import steps from "./image/steps.png";
import workout from "./image/workout.png";
import healthy from "./image/healthy.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
	return (
		<>
			<Navbar />
			<div className="content home">
				<div className="card-split">
					<div className="row card home ">
						<div className="card home homeText ">
							<h1 style={{ fontSize: "100px" }}>Do it.</h1>
							<h1 style={{ fontSize: "100px" }}>Track it.</h1>
							<h2 className="sub-text">
								For better life Tracking your health made easy
							</h2>
							<Link to="/login" className="link-button ">
								<button>Get Started</button>
							</Link>
						</div>
						<div className="card home">
							<img src={fitness} alt="fitness" height={500} />
						</div>
					</div>
					<div className="row card home ">
						<div className="card home">
							<img src={goals} alt="goals" height={500} />
						</div>
						<div className="card home homeText ">
							<h1 style={{ fontSize: "70px" }} className="sub-text">
								Set Goals.
							</h1>
							<h1 style={{ fontSize: "70px" }} className="sub-text">
								Track Progress.
							</h1>
							<h2 className="sub-text">
								For better life Tracking your health made easy
							</h2>
						</div>
					</div>
					<div className="row card home ">
						<div className="card home">
							<img src={food} alt="food" height={200} />
							<h1 className="sub-text">
								Keep track of your daily food intake.
							</h1>
						</div>
						<div className="card home">
							<img src={workout} alt="workout" height={200} />
							<h1 className="sub-text">
								Count the calories burnt with yout workout.
							</h1>
						</div>
						<div className="card home">
							<img src={steps} alt="steps" height={200} />
							<h1 className="sub-text">Every step matters.</h1>
						</div>
					</div>
					<div className="row card home ">
						<div className="card home ">
							<img src={healthy} alt="healthy" height={500} />
						</div>
						<div className="card home homeText ">
							<h1 style={{ fontSize: "70px" }}>Get Fit.</h1>
							<h1 style={{ fontSize: "70px" }}>Stay Fit.</h1>
							<h2 className="sub-text">
								For better life Tracking your health made easy
							</h2>
							<Link to="/login" className="link-button ">
								<button>Start tracking</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
