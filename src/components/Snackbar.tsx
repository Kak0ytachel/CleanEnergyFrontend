import {useEffect, useState} from "react";
import styles from "./Snackbar.module.css"

const SNACKBAR_DURATION = 3000;

export default function Snackbar({text, isOpen, onClose}: {text: string, isOpen: boolean, onClose: () => void}) {
    const [visible, setVisible] = useState(true);
    // open=false => does not exist in dom
    // visible=false => hidden below the screen (animation is running)

    // flow:
    // open=false, visible=true
    // open()
    // open=true, visible=true -> appear animation plays
    // 3s pass
    // open=true, visible=false -> hide animation plays
    // 300ms pass
    // open=false, visible=true -> remove from dom


    // activates animation and starts timer to remove from dom
    useEffect(() => {
        if (!isOpen) return;
        // console.log("effect1");
        const timer = setTimeout(() => {
            setVisible(false);
            // console.log("timer1")
        }, SNACKBAR_DURATION);

        return () => clearTimeout(timer);
    }, [isOpen])

    // removes from dom
    useEffect(() => {
        if (!visible) {
            // console.log("effect2");
            const timer = setTimeout(() => {
                onClose();
                // console.log("timer2");
                setVisible(true)}, 300);

            return () => clearTimeout(timer); // sets isOpen to false
        }

    }, [visible, onClose])

    if (!isOpen) {
        return null;
    }

    return (
        <div className={`${styles.snackbar} ${(!visible)? styles.snackbarHidden: ""}`}>
            {text}
        </div>
    )
}
