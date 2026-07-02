import Card from "./Card.tsx";
import styles from "./OptimalCard.module.css";
import SegmentedControl from "./SegmentedControl.tsx";
import {useState} from "react";
import leaf from "./../assets/leaf.png"

export default function OptimalCard() {

    const [hours, setHours] = useState(1);

    return (
        <Card>
            <h3 className={styles.title}>Optimal charging time</h3>
            <span>Duration:
            <SegmentedControl updateValue={setHours}/>
                hours</span>
            <button className={styles.button}>Submit</button>
            <div className={styles.container}>
                <div className={styles.result}>6 hours at <img src={leaf} alt={"leaf"} className={styles.leaf}/>
                    67% clean energy (average):
                    {"\n"}between 20:30 tomorrow and 2:30 July 1</div>

                <div className={styles.result}>6 hours at <img src={leaf} alt={"leaf"} className={styles.leaf}/>
                    67% clean energy (average):
                    {"\n"}between 20:30 tomorrow and 2:30 July 1</div>

                <div className={styles.result}>6 hours at <img src={leaf} alt={"leaf"} className={styles.leaf}/>
                    67% clean energy (average):
                    {"\n"}between 20:30 tomorrow and 2:30 July 1</div>
            </div>
        </Card>
    )
}