// const API_GOLD = "https://www.goldapi.io/api/XAU/USD";
// const API_USD_BRL = "https://economia.awesomeapi.com.br/json/last/USD-BRL";

const API_GOLD = "impede requisição";
const API_USD_BRL = "impede requisição";

const fetchGoldPrice = async (): Promise<number> => {
    const myHeaders = new Headers();
    myHeaders.append("x-access-token", "goldapi-9pgjqrloevpuew-io");
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const goldResponse = await fetch(API_GOLD, requestOptions);
        const goldData = await goldResponse.text();
        const data = JSON.parse(goldData);
        const priceGram24k = data.price_gram_24k;

        const exangeResponse = await fetch(API_USD_BRL);
        const exangeData = await exangeResponse.json();
        const usdToBrl = exangeData.USDBRL.high;

        const priceGramBrl = Number(priceGram24k) * Number(usdToBrl);

        return Number(priceGramBrl.toFixed(2));
    } catch (error) {
        console.error('erro ao buscar o preço do ouro', error);
        return NaN;
    }
}

export default fetchGoldPrice;