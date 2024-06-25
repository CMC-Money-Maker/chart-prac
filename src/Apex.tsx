import ReactApexChart from "react-apexcharts";
import { apexChartOptions } from "./config";

const Apex = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "20px",
			}}
		>
			<span>apexchart 라이브러리 실습</span>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "20px",
				}}
			>
				<ReactApexChart
					type="area"
					options={apexChartOptions}
					series={apexChartOptions.series}
					height={350}
					zoom={{
						enabled: true,
					}}
				/>
				<ReactApexChart
					type="line"
					options={apexChartOptions}
					series={apexChartOptions.series}
					height={350}
					zoom={{
						enabled: true,
					}}
				/>
			</div>
		</div>
	);
};

export default Apex;
