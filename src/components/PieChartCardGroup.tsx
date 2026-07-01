import PieChartCard from "./PieChartCard.tsx";
import useFetchStats from "../hooks/useFetchStats.ts";
import LegendCard from "./LegendCard.tsx";
import styles from "./PieChartCardGroup.module.css";

export default function PieChartCardGroup() {
    const {stats, loading, error} = useFetchStats();
    // todo: add loading and error handling


    return (
        <div className={styles.grid}>
            <PieChartCard data={stats?.today}></PieChartCard>
            <PieChartCard data={stats?.tomorrow}></PieChartCard>
            <PieChartCard data={stats?.afterTomorrow}></PieChartCard>
            <LegendCard/>
        </div>
    )
}