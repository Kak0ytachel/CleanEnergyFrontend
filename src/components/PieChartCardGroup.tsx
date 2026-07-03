import PieChartCard from "./PieChartCard.tsx";
import useFetchStats from "../hooks/useFetchStats.ts";
import LegendCard from "./LegendCard.tsx";
import styles from "./PieChartCardGroup.module.css";

export default function PieChartCardGroup() {
    const {stats, loading, error} = useFetchStats();
    // todo: add error handling


    return (
        <div className={styles.grid}>
            <PieChartCard data={stats?.today} loading={loading}></PieChartCard>
            <PieChartCard data={stats?.tomorrow} loading={loading}></PieChartCard>
            <PieChartCard data={stats?.afterTomorrow} loading={loading}></PieChartCard>
            <LegendCard/>
        </div>
    )
}