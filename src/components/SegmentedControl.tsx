import {type ReactElement, useEffect, useState} from "react";
import styles from "./SegmentedControl.module.css";

export default function SegmentedControl({updateValue}: {updateValue: (index: number) => void}) {
    const [selectedIndex, setSelectedIndex] = useState(0); // zero-based

    useEffect(() => {
        updateValue(selectedIndex + 1); // actual number
    })
    const elements: ReactElement[] = [];
    for (let i = 0; i < 6; i++) { // zero-based
        elements.push(<div className={styles.option} onClick={() => setSelectedIndex(i)}>{i + 1}</div>)
    }

    return (
        <div className={styles.container}>
            <div className={styles.slider} style={{transform: `translateX(${selectedIndex * 1.75}rem)` }}/>
            {elements}
        </div>
    )
}
