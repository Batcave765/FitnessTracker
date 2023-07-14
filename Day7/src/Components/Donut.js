import React from "react";
import { Doughnut } from "react-chartjs-2";

const DonutChart = ({ data, labels }) => {
	const chartData = {
		labels: labels,
		datasets: [
			{
				data: data,
				backgroundColor: [
					"rgba(108, 99, 255, 0.7)",
					"rgba(183, 183, 183, 0.7)",
				],
			},
		],
	};

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
			labels: {
				display: false,
			},
		},
		borderWidth: 0,
		borderAlign: "inner",
		hoverBorderWidth: 1,
		circumference: 180,
		rotation: 270,
		weight: 10,
		borderRadius: 5,
		radius: 200,
		cutout: "90%",
		spacing: 0,
	};

	return <Doughnut data={chartData} options={chartOptions} />;
};

export default DonutChart;
