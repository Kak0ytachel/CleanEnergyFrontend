import "./PieChart.css"
import type {CSSProperties} from "react";


export default function PieChart() {
    return (
        <>
            <div className="pie-chart">
                <span className="pie-chart-label" style={{"--start": 0, "--percentage": 1} as CSSProperties}>1%</span>
                <span className="pie-chart-label" style={{"--start": 1, "--percentage": 69} as CSSProperties}>69%</span>
                <span className="pie-chart-label" style={{"--start": 70, "--percentage": 30} as CSSProperties}>30%</span>
            </div>
        </>
    )
}
