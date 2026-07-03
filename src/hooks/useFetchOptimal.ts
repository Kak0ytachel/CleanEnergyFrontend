import {useState} from "react";
import type {ICleanEnergyInterval} from "../types.ts";
import api from "../services/api.ts";


export default function useFetchOptimal(chargeHours: number) {
    const [intervals, setIntervals] = useState<ICleanEnergyInterval[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetch = async () => {
        setLoading(true);
        console.log("fetching optimal");
        api.get<ICleanEnergyInterval>(`/optimal?chargeHours=${chargeHours}`)
            .then( (result: ICleanEnergyInterval) => {
                result.hours = chargeHours;
                result.fetchtime = new Date().toISOString();
                setIntervals(prev => [result, ...prev].slice(0, 3));

            })
            .catch( (error: Error) => {
                setError(error);

            })
            .finally( () => {
                setLoading(false)
                console.log("done fetching optimal");
            })
    }

    return {intervals, loading, error, fetch};
}