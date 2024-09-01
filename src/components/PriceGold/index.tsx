import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ReduxState } from '../../types';
import { fecthPriceGoldAPI } from '../../redux/action';

function PriceGold() {
    const rootState = useSelector((state: ReduxState) => state);
    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        dispatch(fecthPriceGoldAPI());
    }, [dispatch]);

    if (rootState.isFetchin) return <p>Carregando...</p>;
    if (rootState.errorMessage) return <p>Erro: {rootState.errorMessage}</p>;

    return (
        <span className="content_price_gold">
            <p>Preço do Ouro Mil (g) </p>
            <p>{ rootState.priceGold }</p>
        </span>
    )
}

export default PriceGold;
