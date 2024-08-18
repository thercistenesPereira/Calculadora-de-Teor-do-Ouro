import Label from "../Label";
import Input from "../Input";
import ResultCalc from "../ResultCalc";
import { useState } from 'react';
import { goldContent, goldPure, impuritiesGold } from "../../utils/functionCalc";
import { constantGold } from "../../constants";

function Form() {
    const [dryWeight, setDryWeight] = useState('');
    const [wetWeight, setWetWeight] = useState('');

    const [calcWeight, setCalcWeight] = useState(0);
    const [carats, setCarats] = useState(0);
    const [calcPure, setCalcPure] = useState(0);
    const [calcImpure, setCalcImpure] = useState(0);

    const dryWeightNumber = Number(dryWeight);
    const wetWeightNumber = Number(wetWeight);
    const contentGold = constantGold.CONST_CONTENT_GOLD;
    const caratsGold = constantGold.CONST_KILATES_GOLD;

    const handlCalcGold = () => {
        const resultContent = goldContent(dryWeightNumber, wetWeightNumber, contentGold);
        setCalcWeight(Number(resultContent.toFixed(2)));

        const resultCarats = goldContent(dryWeightNumber, wetWeightNumber, caratsGold);
        setCarats(Number(resultCarats.toFixed(2)));

        const resultPure = goldPure(dryWeightNumber, wetWeightNumber, contentGold);
        setCalcPure(Number(resultPure.toFixed(2)));

        const resultImpure = impuritiesGold(dryWeightNumber, wetWeightNumber, contentGold);
        setCalcImpure(Number(resultImpure.toFixed(2)));
    }

    const resetForm = () => {
        setDryWeight('');
        setWetWeight('');
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handlCalcGold();
        resetForm();
    }
    
    return (
        <main>
            <form onSubmit={ handleSubmit }>
                <Label
                    onTitle="Peso Seco"
                    onHtmlFor="dryWeight"
                />
                <Input
                    onType="number"
                    onId="dryWeight"
                    onName="dryWeight"
                    onChange={ ({ target }) => setDryWeight(target.value) }
                    onValue={ dryWeight }
                    onPlaceholder="Peso em Gramas"
                />
                <Label
                    onTitle="Peso Molhado"
                    onHtmlFor="wetWeight"
                />
                <Input
                    onType="number"
                    onId="wetWeight"
                    onName="wetWeight"
                    onChange={ ({ target }) => setWetWeight(target.value) }
                    onValue={ wetWeight }
                    onPlaceholder="Peso em Gramas"
                />
                <button>Calcular</button>
            </form>
            
            <ResultCalc
                onCalcWeigth={ calcWeight }
                onCalcPure={ calcPure }
                onCalcImpure={ calcImpure }
                onCarats={ carats }
            />
        </main>
    )
}

export default Form;