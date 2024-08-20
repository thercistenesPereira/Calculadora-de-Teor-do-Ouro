// "https://www.goldapi.io/"

const fetchGoldPrice = () => {
    const myHeaders = new Headers();
    myHeaders.append("x-access-token", "goldapi-9pgjqrloevpuew-io");
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    return fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
        .then(response => response.text())
        .then(result => result)
        .catch(error => {
            console.log('error', error);
            return error;
        });
}

export default fetchGoldPrice;