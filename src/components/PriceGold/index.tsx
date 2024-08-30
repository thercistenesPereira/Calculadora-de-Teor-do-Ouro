import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ReduxState } from '../../types';
import { fecthPriceGoldAPI } from '../../redux/action';
import gifLoading from '../../assets/loading-11.gif';

function PriceGold() {
    const rootState = useSelector((state: ReduxState) => state);
    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        dispatch(fecthPriceGoldAPI());
    }, [dispatch]);

    if (rootState.isFetchin) return <img src={ gifLoading } alt="Carregando..." className="gif_loading" />;
    if (rootState.errorMessage) return <p>Erro: {rootState.errorMessage}</p>;

    return (
        <span className="content_price_gold">
            <p className="font_header">Preço do Ouro(g)</p>
            <p className="font_header font_header_price_gold">{ `R$ ${rootState.priceGold}` }</p>
        </span>
    )
}

export default PriceGold;
