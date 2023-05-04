import React, { useState } from "react";
import ChartInfo from "../ChartInfo";
import { dataCountry, dataRegions } from './data';
import SimplePieChart from "./SimplePieChart";

const FIRST_BUTTON = "Страны";
const SECOND_BUTTON = "Регионы РФ";

const PieChartWrapper = () => {
    const [data, setData] = useState(dataCountry);
    const [activeButton, setActiveButton] = useState(FIRST_BUTTON);

    const handleMonthButton = () => {
        setData(dataRegions);
        setActiveButton(SECOND_BUTTON);
    };

    const handleDayButton = () => {
        setData(dataCountry);
        setActiveButton(FIRST_BUTTON);
    };
    return (
        <div className="pie-chart-wrapper">
            <ChartInfo
                title="Цель визитов"
                firstButton={FIRST_BUTTON}
                firstButtonClick={handleDayButton}
                secondButton={SECOND_BUTTON}
                secondButtonClick={handleMonthButton}
                activeButton={activeButton}
                isColumn={true}
            />
            <SimplePieChart data={data} />
        </div>
    );
};

export default PieChartWrapper;
