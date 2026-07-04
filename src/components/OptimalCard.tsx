import Card from "./Card.tsx";
import styles from "./OptimalCard.module.css";
import SegmentedControl from "./SegmentedControl.tsx";
import {type ReactElement, useEffect, useState} from "react";
import leaf from "./../assets/leaf.png"
import useFetchOptimal from "../hooks/useFetchOptimal.ts";
import formatDate from "../utils/formatDate.ts";
import placeholder from "./../assets/placeholder.jpg"

// start and finish dates in ISO format: YYYY-MM-DDTHH:mm:ss.sssZ
function formatPeriod(dateStart: string, dateFinish: string): string {

    const start = new Date(dateStart);
    const finish = new Date(dateFinish);

    //HH:mm format
    const timeOptions: Intl.DateTimeFormatOptions = {hour: '2-digit', minute: '2-digit', hour12: false};
    const timeStart = start.toLocaleTimeString('it-CH', timeOptions);
    const timeFinish = finish.toLocaleTimeString('it-CH', timeOptions);

    // compares date in local timezone
    const dayStartStr = formatDate(dateStart, true);
    const dayFinishStr = formatDate(dateFinish, true);

    if (dayStartStr === dayFinishStr) {
        const dayStr = formatDate(dateStart, true);
        return `between ${timeStart} and ${timeFinish} ${dayStr}`;
    } else {
        return `between ${timeStart} ${dayStartStr} and ` +
            `${timeFinish} ${dayFinishStr}`;
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