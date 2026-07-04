import Card from "./Card.tsx";
import styles from "./OptimalCard.module.css";
import SegmentedControl from "./SegmentedControl.tsx";
import {type ReactElement, useEffect, useState} from "react";
import leaf from "./../assets/leaf.png"
import useFetchOptimal from "../hooks/useFetchOptimal.ts";
import formatDate from "../utils/formatDate.ts";
import placeholder from "./../assets/placeholder.jpg"

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

export default function OptimalCard({showSnackbar}: {showSnackbar?: (text: string) => void}) {

    const [hours, setHours] = useState(1);
    const {intervals, loading, error, fetch} = useFetchOptimal(hours);

    useEffect(() => {
        if (error) {
            showSnackbar?.("Error fetching optimal charging time, please try again later");
        }
    }, [error, showSnackbar]);

    // useEffect(() => {
    //     console.log(intervals);
    // }, [intervals])

    const elements: ReactElement[] = [];

    for (const interval of intervals) {
        const el = (
            <div className={styles.result} key={interval.fetchtime}>{interval.hours || 0} hours at
                <img src={leaf} alt={"leaf"} className={styles.leaf}/>
                {interval.perc}% clean energy (avg.):
                {"\n"}{formatPeriod(interval.from, interval.to)}
            </div>
        )
        elements.push(el);
    }

    return (
        <Card className={styles.card}>
            <h3 className={styles.title}>Optimal charging time</h3>

            <span className={styles.controlsBox}>Duration:
            <SegmentedControl updateValue={setHours}/>
                hours
            <button className={styles.button} onClick={fetch} disabled={loading}>Submit</button>
                </span>
            <div className={`${styles.container} ${(elements.length == 0)? styles.containerPlaceholder: ""}`}>
                {(elements.length > 0)? elements :
                    <>
                        <img className={styles.placeholderImage} src={placeholder} alt={"placeholder cat meme"}/>
                        <span className={styles.placeholderText}>Results would appear here</span>
                    </>
                }
            </div>
        </Card>
    )
}