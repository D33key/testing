import { CustomTooltipProps } from "../../../types";

import cl from "./CustomTooltip.module.css";


function CustomTooltip({ active, payload, viewBox, data }: CustomTooltipProps) {
    if (active && payload && viewBox) {
        const value = Number(payload[0].value);
        const total = data.reduce((sum, entry) => sum + entry.students, 0);
        const percentage = ((value / total) * 100).toFixed(2);
        return (
            <div className={cl.tooltipWrapper}>
                <p className={cl.percentage}>{percentage}%</p>
                <p className={cl.text}>{payload[0].name}</p>
            </div>
        );
    }
    return null;
}

export default CustomTooltip;
