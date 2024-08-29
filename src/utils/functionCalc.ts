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

export const priceGoldPureStock = (
        massa: number, volume: number, constante: number, priceGold: number
    ) => {
        const priceGoldPureResult = priceGold * ((massa * (massa / volume) * constante) / 100);
        return priceGoldPureResult;
}

export const priceGoldDiscount = (
    massa: number, volume: number, constante: number, priceGold: number, discount: number
    ) => {
        const priceGoldDiscountResult = ((priceGold * ((massa * (massa / volume) * constante) / 100)) * (100 - discount)) / 100;
        return priceGoldDiscountResult
}
