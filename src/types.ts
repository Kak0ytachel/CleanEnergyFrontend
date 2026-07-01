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