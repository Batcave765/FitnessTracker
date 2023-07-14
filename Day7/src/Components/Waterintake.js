import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DonutChart from "./Donut";
import { useState } from "react";

function Waterintake() {
	const chartLabels = ["Goal", "Yet to drink"];
	const [state, setState] = useState({
		data: 0,
		chartData: [0, 100],
		goals: 1,
	});

	const handleButtonClick = () => {
		setState((prevState) => {
			const newData = prevState.data + 1;
			if (newData > prevState.goals) return prevState;
			const newChartData = [
				(newData / prevState.goals) * 100,
				100 - (newData / prevState.goals) * 100,
			];
			const newState = {
				...prevState,
				data: newData,
				chartData: newChartData,
			};
			return newState;
		});
	};

	const handleGoalChange = (event) => {
		const newGoal = parseInt(event.target.value);
		setState((prevState) => ({
			...prevState,
			goals: newGoal,
		}));
	};

	const handleReset = () => {
		setState({
			data: 0,
			chartData: [0, 100],
			goals: 1,
		});
	};
	return (
		<>
			<Navbar />
			<Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
			<div className="content">
				<div className="card">
					<h1>Water Intake</h1>
					<div className="List">
						<label htmlFor="goal">
							<h2>Goal :</h2>
						</label>
						<input
							type="number"
							name="goal"
							id="goal"
							className="inputfield"
							value={state.goals}
							onChange={handleGoalChange}
						/>
					</div>

					<div className="card donut">
						<div className="donut-content">
							<DonutChart data={state.chartData} labels={chartLabels} />
						</div>
						<div className="donut-modify">
							<div className="List">
								<h1>Text</h1>
								<button onClick={handleButtonClick}>Update</button>
								<button onClick={handleReset}>Reset</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Waterintake;
