import {useEffect, useState} from "react";
import type {IStats} from "../types.ts";
import api from "../services/api.ts";


export default function useFetchStats() {
    const [stats, setStats] = useState<IStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        api.get<IStats>("/stats")
            .then( (result: IStats) => {
                setStats(result);
            })
            .catch( (error: Error) => {
                setError(error);
            })
            .finally( () => {
                setLoading(false)
            })

        // todo: add cleanup if expanding the app
        return () => {}
    }, []);

    return {stats, loading, error};
}