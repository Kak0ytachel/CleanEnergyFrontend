import PieChartCard from "./PieChartCard.tsx";
import useFetchStats from "../hooks/useFetchStats.ts";
import LegendCard from "./LegendCard.tsx";
import styles from "./PieChartCardGroup.module.css";
import {useEffect} from "react";

export default function PieChartCardGroup({showSnackbar}: {showSnackbar?: (text: string) => void}) {
    const {stats, loading, error} = useFetchStats();

    useEffect(() => {
        if (error) {
            showSnackbar?.("Error fetching data, please try again later");
        }
    }, [error, showSnackbar])

    return (
        <div className={styles.grid}>
            <PieChartCard data={stats?.today} loading={loading}></PieChartCard>
            <PieChartCard data={stats?.tomorrow} loading={loading}></PieChartCard>
            <PieChartCard data={stats?.afterTomorrow} loading={loading}></PieChartCard>
            <LegendCard/>
        </div>
    )
}