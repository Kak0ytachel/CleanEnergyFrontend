import type {ReactNode} from "react";
import styles from "./Card.module.css";


interface ICardProps {
    children?: ReactNode;
    className?: string;
}

export default function Card({children, className}: ICardProps) {
    return (
        <div className={`${styles.card} ${className}`}>
            {children}
        </div>
    )
}