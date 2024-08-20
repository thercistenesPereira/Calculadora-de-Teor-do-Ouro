import { useEffect, useState } from "react";
import fetchGoldPrice from "../../service";

function PriceGold() {
    const [goldPrice, setGoldPrice] = useState('');

    useEffect(() => {
        fetchGoldPrice().then(setGoldPrice);
    }, []);
    return (
        <div>
            <h1>Preço do Ouro</h1>
            <p>{goldPrice}</p>
        </div>
    )
}

export default PriceGold;
