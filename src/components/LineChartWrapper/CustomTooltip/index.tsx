import { TooltipProps } from "recharts";
import {
    NameType,
    ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import cl from "./CustomTooltip.module.css";

function getTouristsLabel(tourists: ValueType | undefined): string {
    if (tourists === 1) {
        return `${tourists} турист`;
    } else if (tourists && tourists >= 2 && tourists <= 4) {
        return `${tourists} туриста`;
    } else {
        return `${tourists} туристов`;
    }
}

function CustomTooltip({
    active,
    payload,
    label,
    viewBox,
}: TooltipProps<ValueType, NameType>) {
    if (active && payload && viewBox) {
        const value = payload[0].value;
        const touristsLabel = getTouristsLabel(value);
        return (
            <div className={cl.customTooltip}>
                <p className={cl.intro}>{`${touristsLabel}`}</p>
                <p className={cl.label}>{`${label}`}</p>
            </div>
        );
    }
    return null;
}

export default CustomTooltip;
