import { useEffect, useState } from "react";
import fetchGoldPrice from "../../service";

function PriceGold() {
    const [goldPrice, setGoldPrice] = useState<number | string>('');

    useEffect(() => {
        const fetchAndSetGoldPrice = async () => {
            try {
                const price = await fetchGoldPrice();

                if (typeof price === 'number') {
                    setGoldPrice(price);
                } else {
                    throw new Error('Valor inválido retornado pela API');
                }
            } catch (error) {
                console.error('Erro ao buscar o preço do ouro:', error);
                setGoldPrice('Erro ao carregar');
            }
        };

            fetchAndSetGoldPrice()
    }, []);
    return (
        <span>
            <p>Preço do Ouro Mil (Gramas)</p>
            <p>{goldPrice}</p>
        </span>
    )
}

export default PriceGold;
