import Card from "./Card.tsx";
import PieChart from "./PieChart.tsx";
import type {IEnergyTypeItem, IGenerationData} from "../types.ts";
import formatDate from "../utils/formatDate.ts";
import styles from "./PieChartCard.module.css";
import leaf from "./../assets/leaf.png"


function getCleanPercentage(items: IEnergyTypeItem[]) {
    let counter = 0;
    for (const item of items) {
        if (["biomass", "nuclear", "hydro", "wind", "solar"].includes(item.fuel))
        counter += item.perc;
    }
    return counter;

}

export default function PieChartCard({data = {from: "1970-01-01T", to: "", generationmix: []}}: {data?: IGenerationData}) {
    const title = formatDate(data.from);
    const percentage = getCleanPercentage(data.generationmix);
    return (
        <Card>
            <div className={styles.leafContainer}>

                <span className={styles.leafIndicator}>
                    <img src={leaf} alt="leaf" className={styles.leaf}/>
                    {`${percentage}%`}
                </span>
            </div>
            <h3 className={styles.pieChartTitle}>{title}</h3>

            {/* todo: add leaf */}
            <PieChart data={data.generationmix} percentage={percentage}/>
        </Card>
    )
}