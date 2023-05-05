import { useState } from 'react';
import "./App.css";
import LineChartWrapper from "./components/LineChartWrapper";
import PieChartWrapper from "./components/PieChartWrapper";
import CustomButton from './ui/Button';

function App() {
    const [showAnotherChart, setShowAnotherChart] = useState(false);
    const handleClick = () => {
        setShowAnotherChart(prev => !prev);
    }
    return (
        <div className="wrapper">
            <CustomButton handleOnClick={handleClick}>Сменить график</CustomButton>
            {showAnotherChart ? <PieChartWrapper /> : <LineChartWrapper />}
        </div>
    );
}

export default App;
