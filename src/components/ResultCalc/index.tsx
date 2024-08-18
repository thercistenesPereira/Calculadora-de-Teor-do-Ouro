type ResultCalcProps = {
    onCalcWeigth: number;
    onCalcPure: number;
    onCalcImpure: number;
    onCarats: number;
    handleResult: () => void
}

function ResultCalc(
    {
        onCalcWeigth,
        onCalcPure,
        onCalcImpure,
        onCarats,
        handleResult 
    }: ResultCalcProps) {
    return (
        <section>
            <h2>Resultado</h2>
            <p>{ `Teor ${onCalcWeigth}` }</p>
            <p>{ `Kilates ${onCarats}` }</p>
            <p>{ `Ouro Mil ${onCalcPure}g` }</p>
            <p>{ `Impurezas ${onCalcImpure}g` }</p>
            <button onClick={ handleResult }>Voltar</button>
        </section>
    )
}

export default ResultCalc;
