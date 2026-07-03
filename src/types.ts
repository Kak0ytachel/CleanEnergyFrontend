// the same names as in the backend

export interface IStats {
    today: IGenerationData,
    tomorrow: IGenerationData,
    afterTomorrow: IGenerationData,
}

export interface IGenerationData {
    from: string;
    to: string;
    //noinspection SpellCheckingInspection
    generationmix: Array<IEnergyTypeItem>
}

export interface IEnergyTypeItem {
    fuel: string, // FuelType,
    //noinspection SpellCheckingInspection
    perc: number
}

export interface ICleanEnergyInterval {
    from: string,
    to: string,
    perc: number
    hours: number
    fetchtime: string // used as a key for react
}