import Card from "./components/Card.tsx";
import PieChartCardGroup from "./components/PieChartCardGroup.tsx";
import OptimalCard from "./components/OptimalCard.tsx";
import styles from "./App.module.css";
import {useCallback, useState} from "react";
import Snackbar from "./components/Snackbar.tsx";

function App() {
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [snackbarText, setSnackbarText] = useState("");

    // useCallback prevents unnecessary 2nd useEffect call in Snackbar
    const handleSnackbarClose = useCallback(() => {
        setIsSnackbarOpen(false);
    }, []);

    const showSnackbar = useCallback((text: string) => {
        setSnackbarText(text);
        setIsSnackbarOpen(true);
    }, []);

    return (
        <div className={styles.box}>
            <h2 className={styles.title}>
                UK Clean Energy Statistics
            </h2>
            <div className={styles.grid}>
                <PieChartCardGroup showSnackbar={showSnackbar}/>
                <div className={styles.innerGrid}>
                    <OptimalCard showSnackbar={showSnackbar}/>
                    <Card className={styles.about}>
                        Made by <a href="https://github.com/Kak0ytachel">chel0</a> as a test assignment
                        {"\n"}Source code available on <a href={"https://github.com/Kak0ytachel/CleanEnergyFrontend"}>GitHub</a>
                    </Card>
                </div>
            </div>
            <span className={styles.helper}>
                * Daily data is shown in the UK timezone, optimal charging time is calculated in local timezone
                {/*<button onClick={() => {setSnackbarText("123"); setIsSnackbarOpen(true);}}></button>*/}
            </span>
            <Snackbar text={snackbarText} isOpen={isSnackbarOpen} onClose={handleSnackbarClose}/>
        </div>
    )
}

export default App
