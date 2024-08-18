export const goldContent = (massa: number, volume: number, constante: number) => {
    const teorResult = (massa / volume) * constante;
    return teorResult;
};

export const goldPure = (massa: number, volume: number, constante: number) => {
    const goldPureResult = (massa * (massa / volume) * constante) / 100;
    return goldPureResult;
}

export const impuritiesGold = (massa: number, volume: number, constante: number) => {
    const impuritiesGoldResult = massa - ((massa * (massa / volume) * constante) / 100);
    return impuritiesGoldResult;
};
