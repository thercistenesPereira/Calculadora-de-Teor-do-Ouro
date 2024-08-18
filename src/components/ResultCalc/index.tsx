type ResultCalcProps = {
    onCalcWeigth: number;
    onCalcPure: number;
    onCalcImpure: number;
    onCarats: number;
}

function ResultCalc({ onCalcWeigth, onCalcPure, onCalcImpure, onCarats }: ResultCalcProps) {
    return (
        <section>
            <h2>Resultado</h2>
            <p>{ `Teor ${onCalcWeigth}` }</p>
            <p>{ `Kilates ${onCarats}` }</p>
            <p>{ `Ouro Mil ${onCalcPure}g` }</p>
            <p>{ `Impurezas ${onCalcImpure}g` }</p>
        </section>
    )
}

export default ResultCalc;
