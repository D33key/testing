
import { useState } from 'react';
import CustomButton from "../../ui/Button";
import cl from './ChartInfo.module.css';

interface IChartInfo {
    title: string;
    firstButton: string;
    secondButton: string;
    firstButtonClick: () => void;
    secondButtonClick: () => void;
    activeButton: string;
    isColumn?: boolean;
}

const ChartInfo = ({
    title,
    firstButton,
    firstButtonClick,
    secondButton,
    secondButtonClick,
    activeButton,
    isColumn
}: IChartInfo) => {
    return (
        <div className={`${cl.chartInfo} ${isColumn && cl.column}`}>
            <h2 className={cl.chartTitle}>{title}</h2>
            <div className={cl.chartSwitchers}>
                <CustomButton
                    handleOnClick={firstButtonClick}
                    activeButton={activeButton}
                >
                    {firstButton}
                </CustomButton>
                <CustomButton
                    handleOnClick={secondButtonClick}
                    activeButton={activeButton}
                >
                    {secondButton}
                </CustomButton>
            </div>
        </div>
    );
};

export default ChartInfo;
