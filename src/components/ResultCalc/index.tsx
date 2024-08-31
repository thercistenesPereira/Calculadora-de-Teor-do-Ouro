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
        <section className="result_style">
            <h2 className="result_title">Resultado</h2>

            <div className="result_container">
                <p>Teor</p>
                <p>{onCalcWeigth}</p>
            </div>

            <div className="result_container">
                <p>Kilates</p>
                <p>{onCarats}</p>
            </div>

            <div className="result_container">
                <p>Ouro 999,9</p>
                <p>{ `${onCalcPure}g`}</p>
            </div>

            <div className="result_container">
                <p>Impurezas</p>
                <p>{`${onCalcImpure}g`}</p>
            </div>
            
            <div className="result_container">
                <p>Preço com Deságio</p>
                <p>{`R$ ${onPriceDiscount}`}</p>
            </div>

            <div className="result_container">
                <p>Preço na Bolsa</p>
                <p>{`R$ ${onPriceStockExchange}`}</p>
            </div>

            <button onClick={ handleResult } className="button_style button_result">Novo Cálculo</button>
        </section>
    )
}

export default ResultCalc;
