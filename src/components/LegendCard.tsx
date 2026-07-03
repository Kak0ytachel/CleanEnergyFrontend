import Card from "./Card";
import styles from "./LegendCard.module.css";
import type {CSSProperties, ReactElement} from "react";
import {ELEMENT_COLORS, ELEMENT_ORDER} from "../constants/elements.ts";


export default function LegendCard() {
    const elements: ReactElement[] = [];

    for (const fuel in ELEMENT_ORDER) {
        const color = ELEMENT_COLORS[fuel];
        const name = fuel[0].toUpperCase() + fuel.slice(1);
        const el = <span className={styles.element} key={name}
                         style={{"--color": color} as CSSProperties}>{name}</span>
        elements.push(el);
    }

    return (
        <Card>
            <h3 className={styles.title}>Legend</h3>
            <div className={styles.box}>
                {elements}
            </div>
            {/*<span className={styles.element} style={{"--color": "blue"} as CSSProperties}>Biomass</span>*/}
        </Card>
    )
}