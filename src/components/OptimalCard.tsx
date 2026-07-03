import Card from "./Card.tsx";
import styles from "./OptimalCard.module.css";
import SegmentedControl from "./SegmentedControl.tsx";
import {type ReactElement, useEffect, useState} from "react";
import leaf from "./../assets/leaf.png"
import useFetchStats from "../hooks/useFetchStats.ts";
import useFetchOptimal from "../hooks/useFetchOptimal.ts";
import type {ICleanEnergyInterval} from "../types.ts";
import formatDate from "../utils/formatDate.ts";

// date start and finish in ISO format: YYYY-MM-DDTHH:mm:ss.sssZ
function formatPeriod(dateStart: string, dateFinish: string): string {

    const timeStart = dateStart.split("T")[1].slice(0, 5);
    const timeFinish = dateFinish.split("T")[1].slice(0, 5);

    // used for comparison only
    const dayStartStr = dateStart.split("T")[0];
    const dayFinishStr = dateFinish.split("T")[0];

    if (dayStartStr === dayFinishStr) {
        const dayStr = formatDate(dateStart, true);
        return `between ${timeStart} and ${timeFinish} ${dayStr}`;
    } else {
        return `between ${timeStart} ${formatDate(dateFinish, true)} and ` +
            `${timeFinish} ${formatDate(dateFinish, true)}`;
    }
}

export default function OptimalCard() {

    const [hours, setHours] = useState(1);
    const {intervals, loading, error, fetch} = useFetchOptimal(hours);

    useEffect(() => {
        console.log(intervals);
    }, [intervals])

    const elements: ReactElement[] = [];

    for (const interval of intervals) {
        const el = (
            <div className={styles.result} key={interval.fetchtime}>{interval.hours || 0} hours at
                <img src={leaf} alt={"leaf"} className={styles.leaf}/>
                {interval.perc}% clean energy (average):
                {"\n"}{formatPeriod(interval.from, interval.to)}
            </div>
        )
        elements.push(el);
    }

    return (
        <Card>
            <h3 className={styles.title}>Optimal charging time</h3>
            <span>Duration:
            <SegmentedControl updateValue={setHours}/>
                hours</span>
            <button className={styles.button} onClick={fetch}>Submit</button>
            <div className={styles.container}>
                {elements}

                {/*<div className={styles.result}>{intervals[1]?.hours || 0} hours at <img src={leaf} alt={"leaf"} className={styles.leaf}/>*/}
                {/*    67% clean energy (average):*/}
                {/*    {"\n"}between 20:30 tomorrow and 2:30 July 1</div>*/}

                {/*<div className={styles.result}>{intervals[2]?.hours || 0} hours at <img src={leaf} alt={"leaf"} className={styles.leaf}/>*/}
                {/*    67% clean energy (average):*/}
                {/*    {"\n"}between 20:30 tomorrow and 2:30 July 1</div>*/}
            </div>
        </Card>
    )
}