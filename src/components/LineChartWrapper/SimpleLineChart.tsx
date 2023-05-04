import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { IData } from "../../types";
import CustomTooltip from "./CustomTooltip";

interface ILineChart {
    data: IData[];
}

const SimpleLineChart = ({ data }: ILineChart) => {
    const maxTourists = Math.max(...data.map((item) => item.tourists));

    return (
        <ResponsiveContainer width="100%" height={470}>
            <AreaChart width={730} height={250} data={data}>
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="0%"
                            stopColor="#41C6FF"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="100%"
                            stopColor="#41C6FF"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" tick={{ fontSize: 13, dy: 20 }} />
                <YAxis
                    domain={[0, maxTourists * 1.6]}
                    tickCount={9}
                    tick={{ fontSize: 13, dx: -20 }}
                />
                <CartesianGrid fill="#F5F7F9" strokeWidth={4} stroke="#fff" />
                <Tooltip
                    cursor={{ stroke: "#41C6FF", strokeDasharray: 5 }}
                    content={<CustomTooltip />}
                    wrapperStyle={{ outline: "none" }}
                />

                <Area
                    dataKey="tourists"
                    stroke="#41C6FF"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorPv)"
                    dot={{
                        r: 4,
                        fill: "#41C6FF",
                        stroke: "white",
                        strokeWidth: 2,
                    }}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default SimpleLineChart;
