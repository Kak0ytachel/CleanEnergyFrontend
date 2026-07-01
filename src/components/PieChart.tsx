import styles from "./PieChart.module.css";
import type {CSSProperties, ReactElement} from "react";
import type {IEnergyTypeItem} from "../types.ts";
import {ELEMENT_COLORS, ELEMENT_ORDER} from "../constants/elements.ts";


interface IPieChartProps {
    data?: IEnergyTypeItem[],
    percentage?: number
}


export default function PieChart({data = [], percentage = 0}: IPieChartProps) {

    data.sort((a, b) => ELEMENT_ORDER[a.fuel] - ELEMENT_ORDER[b.fuel]);

    const items: ReactElement[] = [];
    let percentageSum = 0;
    let gradient: string = "";

    for (const item of data) {
        const perc = Math.floor(item.perc);
        const el: ReactElement = <span
            className={styles.pieChartLabel} key={item.fuel}
            style={{"--start": percentageSum, "--percentage": item.perc} as CSSProperties}>{`${perc}%`}</span>
        if (perc > 3) {
            items.push(el);
        }
        const color = ELEMENT_COLORS[item.fuel];
        gradient += `${color} ${percentageSum}% ${percentageSum + perc}%, `
        percentageSum += perc;
    }
    console.log(gradient);
    gradient = gradient.slice(0, -2); // removes trailing comma and space
    return (
        <>
            <div className={styles.pieChart} style={{backgroundImage: `conic-gradient(${gradient})`} as CSSProperties}>
                <div className={styles.pieChartArc} style={{"--percentage": `${percentage}%`} as CSSProperties}/>
                {items}
           </div>
        </>
    )
}
