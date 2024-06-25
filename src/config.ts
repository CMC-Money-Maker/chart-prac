import { ApexOptions } from "apexcharts";
import { data } from "./constants";

export const apexChartOptions: ApexOptions = {
	series: [
		{
			name: "쿠팡 상품 가격 변동",
			data: data.map((item) => ({ x: item.date, y: item.price })),
		},
	],
	theme: {
		mode: "dark",
	},
	annotations: {
		yaxis: [
			{
				y: Math.min(...data.map((item) => item.price)),
				borderColor: "#00E396",
				label: {
					borderColor: "#00E396",
					style: {
						color: "#fff",
						background: "#00E396",
					},
					text: "최저가",
				},
			},
			{
				y: Math.max(...data.map((item) => item.price)),
				borderColor: "#f3f3f3",
				label: {
					borderColor: "#f3f3f3",
					style: {
						color: "#000",
						background: "#f3f3f3",
					},
					text: "최고가",
				},
			},
		],
	},
	grid: {
		borderColor: "#555",
		yaxis: {
			lines: {
				show: false,
			},
		},
	},
	dataLabels: {
		enabled: false,
	},
	yaxis: {
		min: Math.min(...data.map((item) => item.price)) - 1000,
		max: Math.max(...data.map((item) => item.price)) + 1000,
		stepSize: 1000,
		tickAmount: 5,
	},
	xaxis: {
		type: "datetime",
		categories: data.map((item) => item.date),
	},
	stroke: {
		width: 2,
	},
	fill: {
		type: "gradient",
	},
	chart: {
		toolbar: {
			show: false,
		},
	},
};
