import { CustomTooltipProps } from "../../../types";
import cl from "./CustomLegend.module.css";

interface ICustomLegend extends CustomTooltipProps {
    activeIndex: number;
}

const CustomLegend = ({ payload, activeIndex, data }: ICustomLegend) => {
    const total = data.reduce(
        (sum, entry) => sum + entry.students,
        0
    );
    return (
        <ul className={cl.legendWrapper}>
            {payload?.map((entry, index) => {
                const percentage = (
                    (entry.payload.value / total) *
                    100
                ).toFixed(2);

                return (
                    <li
                        className={`${cl.legendElement} ${
                            index === activeIndex ? cl.activeLegendElement : ""
                        }`}
                        key={`item-${index}`}
                    >
                        <span
                            className={cl.rectColor}
                            style={{ backgroundColor: entry.color }}
                        ></span>
                        <p className={cl.description}>{`${entry.value}`} </p>
                        <span
                            className={cl.count}
                        >{`${entry.payload.students}`}</span>
                        <span className={cl.percent}>{`${percentage}%`}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export default CustomLegend;
