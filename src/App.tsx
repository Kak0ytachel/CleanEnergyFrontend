import Card from "./components/Card.tsx";
import PieChartCardGroup from "./components/PieChartCardGroup.tsx";
import SegmentedControl from "./components/SegmentedControl.tsx";
import OptimalCard from "./components/OptimalCard.tsx";
import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.box}>
            <h2 className={styles.title}>
                UK Clean Energy Statistics
            </h2>
            <div className={styles.grid}>
                <PieChartCardGroup/>
                <div className={styles.innerGrid}>
                    <OptimalCard/>
                    <Card className={styles.about}>
                        Made by <a href="https://github.com/Kak0ytachel">chel0</a> as a test assignment
                        {"\n"}Source code available on <a href={"https://github.com/Kak0ytachel/CleanEnergyFrontend"}>GitHub</a>
                    </Card>
                </div>
            </div>
            <span className={styles.helper}>
                * Daily data is shown in the UK timezone, optimal charging time is calculated in local timezone
            </span>
        </div>
    )
}

export default App
