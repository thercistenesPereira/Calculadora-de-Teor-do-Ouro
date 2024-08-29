type ResultCalcProps = {
    onCalcWeigth: number;
    onCalcPure: number;
    onCalcImpure: number;
    onCarats: number;
    onPriceDiscount: number;
    onPriceStockExchange: number;
    handleResult: () => void
}

function ResultCalc(
    {
        onCalcWeigth,
        onCalcPure,
        onCalcImpure,
        onCarats,
        onPriceDiscount,
        onPriceStockExchange,
        handleResult 
    }: ResultCalcProps) {
    return (
        <section>
            <h2>Resultado</h2>
            <p>{ `Teor ${onCalcWeigth}` }</p>
            <p>{ `Kilates ${onCarats}` }</p>
            <p>{ `Ouro Mil ${onCalcPure}g` }</p>
            <p>{ `Impurezas ${onCalcImpure}g` }</p>
            <p>{ `Preço com Deságio R$ ${onPriceDiscount}`}</p>
            <p>{ `Preço na Bolsa R$ ${onPriceStockExchange}`}</p>
            <button onClick={ handleResult }>Voltar</button>
        </section>
    )
}

export default ResultCalc;
