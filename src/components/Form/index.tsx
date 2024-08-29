import Label from "../Label";
import Input from "../Input";
import ResultCalc from "../ResultCalc";
import { useState, useEffect } from 'react';
import { goldContent, goldPure, impuritiesGold, priceGoldDiscount,priceGoldPureStock } from "../../utils/functionCalc";
import { constantGold } from "../../constants";
import { isFormValidation } from "./validation";
import { useDispatch, useSelector } from 'react-redux';
import { fecthPriceGoldAPI } from '../../redux/action';
import { Dispatch, ReduxState } from '../../types';


function Form() {
    const [dryWeight, setDryWeight] = useState('');
    const [wetWeight, setWetWeight] = useState('');
    const [discount, setDiscount] = useState(() => {
        const savedDiscount = localStorage.getItem('discount');
        return savedDiscount !== null ? savedDiscount : '';
    });

    const [calcWeight, setCalcWeight] = useState(0);
    const [carats, setCarats] = useState(0);
    const [calcPure, setCalcPure] = useState(0);
    const [calcImpure, setCalcImpure] = useState(0);
    const [priceDiscount, setPriceDiscount] = useState(0);
    const [priceStockExchange, setPriceStockExchange] = useState(0);
    const [showResult, setShowResult] = useState(true);

    const dryWeightNumber = Number(dryWeight);
    const wetWeightNumber = Number(wetWeight);
    const discountPrice = Number(discount);
    const contentGold = constantGold.CONST_CONTENT_GOLD;
    const caratsGold = constantGold.CONST_KILATES_GOLD;

    const priceGold = useSelector((state: ReduxState) => state.priceGold);
    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('discount', discount);
    }, [discount]);

    useEffect(() => {
        dispatch(fecthPriceGoldAPI());
    }, [dispatch]);

    const handleResult = () => {
        setShowResult((prevState) => !prevState);
    }

    const handlCalcGold = () => {
        const resultContent = goldContent(dryWeightNumber, wetWeightNumber, contentGold);
        setCalcWeight(Number(resultContent.toFixed(2)));

        const resultCarats = goldContent(dryWeightNumber, wetWeightNumber, caratsGold);
        setCarats(Number(resultCarats.toFixed(2)));

        const resultPure = goldPure(dryWeightNumber, wetWeightNumber, contentGold);
        setCalcPure(Number(resultPure.toFixed(2)));

        const resultImpure = impuritiesGold(dryWeightNumber, wetWeightNumber, contentGold);
        setCalcImpure(Number(resultImpure.toFixed(2)));

        const resultPriceDiscount = priceGoldDiscount(
            dryWeightNumber, wetWeightNumber, contentGold, priceGold, discountPrice
        );
        setPriceDiscount(Number(resultPriceDiscount.toFixed(2)));

        const resultPriceStockExchange = priceGoldPureStock(dryWeightNumber, wetWeightNumber, contentGold, priceGold);
        setPriceStockExchange(Number(resultPriceStockExchange.toFixed(2)));
    }

    const resetForm = () => {
        setDryWeight('');
        setWetWeight('');
    }

    const isFormValid = () => {
        return isFormValidation(dryWeight, wetWeight);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isFormValid()) {
            handlCalcGold();
            resetForm();
            setShowResult(false);
        }
        else {
            setShowResult(true);
            resetForm();
        }
    }
    
    return (
        <main>
            { showResult ? (
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

                <Label
                    onTitle="Deságio"
                    onHtmlFor="discount"
                />
                <Input
                    onType="number"
                    onId="discount"
                    onName="discount"
                    onChange={ ({target}) => setDiscount(target.value)}
                    onValue={ discount }
                    onPlaceholder="Desconto (%)"
                />

                <button>Calcular</button>
            </form>
            ) : (
                <ResultCalc
                onCalcWeigth={ calcWeight }
                onCalcPure={ calcPure }
                onCalcImpure={ calcImpure }
                onCarats={ carats }
                onPriceDiscount={ priceDiscount }
                onPriceStockExchange={ priceStockExchange }
                handleResult={ handleResult }
            />
            ) }           
        </main>
    )
}

export default Form;