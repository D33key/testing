import { useState } from "react";

import SimpleLineChart from "./SimpleLineChart";
import { dataDay, dataMonth } from "./data";

import ChartInfo from "../ChartInfo";

const FIRST_BUTTON = 'По дням';
const SECOND_BUTTON = 'По месяцам';

const LineChartWrapper = () => {
    const [data, setData] = useState(dataMonth);

    const [activeButton, setActiveButton] = useState(SECOND_BUTTON);

    const handleMonthButton = () => {
        setData(dataMonth);
        setActiveButton(SECOND_BUTTON);
    };

    const handleDayButton = () => {
        setData(dataDay);
        setActiveButton(FIRST_BUTTON);
    };

    return (
        <div className="line-chart-wrapper">
            <ChartInfo
                title="Количество визитеров"
                firstButton={FIRST_BUTTON}
                firstButtonClick={handleDayButton}
                secondButton={SECOND_BUTTON}
                secondButtonClick={handleMonthButton}
                activeButton={activeButton}
            />
            <SimpleLineChart data={data} />
        </div>
    );
};

export default LineChartWrapper;
