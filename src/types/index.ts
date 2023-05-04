import { TooltipProps } from "recharts";
import {
    NameType,
    ValueType,
} from "recharts/types/component/DefaultTooltipContent";

export interface IData {
    name: string;
    tourists: number;
}

export interface IDataPieChart {
    name: string;
    students: number;
}

export type CustomTooltipProps = TooltipProps<ValueType, NameType> & {
    data: IDataPieChart[];
};
