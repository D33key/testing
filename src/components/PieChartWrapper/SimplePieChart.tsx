import { useState } from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { IDataPieChart } from "../../types";
import CustomLegend from './CustomLegend';
import CustomTooltip from './CustomTooltip';

interface ILineChart {
    data: IDataPieChart[];
}

const COLORS = ["#E377C2", "#41C6FF", "#FF820F"];

const SimplePieChart = ({ data }: ILineChart) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const handleCellEnter = (index: number) => {
        setActiveIndex(index);
    };
    const handleMouseLeave = () => {
        setActiveIndex(-1);
    };

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                cx={200}
                cy={200}
                innerRadius={155}
                outerRadius={170}
                paddingAngle={2}
                dataKey="students"
                cornerRadius={20}
                startAngle={-60}
                activeIndex={-1}
                onMouseEnter={() => setActiveIndex(-1)}
                onMouseLeave={handleMouseLeave}
            >
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        onMouseEnter={() => setActiveIndex(index)}
                    />
                ))}
            </Pie>
            <Legend
                wrapperStyle={{ position: "static" }}
                content={
                    <CustomLegend
                        payload={data.map((entry, index) => ({
                            value: entry.name,
                            color: COLORS[index % COLORS.length],
                            payload: entry,
                        }))}
                        activeIndex={activeIndex}
                        data={data}
                    />
                }
            />
            <Tooltip
                wrapperStyle={{ outline: "none" }}
                content={<CustomTooltip data={data} />}
            />
        </PieChart>
    );
};

export default SimplePieChart;
