import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const state = {
	labels: [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	],
	datasets: [
		{
			label: "Steps count",
			backgroundColor: "rgba(108, 99, 255, 0.8)",
			borderColor: "rgb(108, 99, 255)",
			borderWidth: 1,
			data: [3820, 4740, 1990, 2003, 4001, 5005, 3940],
		},
	],
};

function StepsChart() {
	return (
		<>
			<div className="chart-container">
				<Bar
					data={state}
					options={{
						title: {
							display: true,
							text: "Steps Count",
							fontSize: 20,
						},
						legend: {
							display: true,
							position: "right",
						},
					}}
				/>
			</div>
		</>
	);
}

export default StepsChart;
