import { LineChart, Line, XAxis, YAxis, Tooltip, AreaChart, Area, ReferenceLine } from "recharts";
import { data } from "./constants";

const Recharts = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "20px",
			}}
		>
			<span>recharts 라이브러리 실습</span>
			<div
				style={{
					display: "flex",
					gap: "20px",
				}}
			>
				<AreaChart width={300} height={350} data={data}>
					<defs>
						<linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis dataKey="date" />
					<YAxis
						tickCount={6}
						domain={[
							Math.min(...data.map((item) => item.price)) - 1000,
							Math.max(...data.map((item) => item.price)) + 1000,
						]}
					/>
					<Tooltip />
					<Area
						type="monotone"
						dataKey="price"
						stroke="#8884d8"
						fillOpacity={1}
						fill="url(#gradient)"
					/>
					<ReferenceLine
						y={Math.min(...data.map((item) => item.price))}
						label="최저가"
						stroke="#00E396"
						strokeDasharray="3 3"
					/>
					<ReferenceLine
						y={Math.max(...data.map((item) => item.price))}
						label="최고가"
						stroke="#fff"
						strokeDasharray="3 3"
					/>
				</AreaChart>
				<LineChart width={300} height={350} data={data}>
					<Line
						type={"monotone"}
						dataKey={"price"}
						stroke={"#8884d8"}
						dot={false}
						strokeWidth={2}
					/>
					<XAxis dataKey="date" />
					<YAxis
						domain={[
							Math.min(...data.map((item) => item.price)) - 1000,
							Math.max(...data.map((item) => item.price)) + 1000,
						]}
					/>
					<ReferenceLine
						y={Math.min(...data.map((item) => item.price))}
						label="최저가"
						stroke="#00E396"
						strokeDasharray="3 3"
					/>
					<ReferenceLine
						y={Math.max(...data.map((item) => item.price))}
						label="최고가"
						stroke="#fff"
						strokeDasharray="3 3"
					/>
					<Tooltip />
				</LineChart>
			</div>
		</div>
	);
};

export default Recharts;
