import { Dispatch } from "../../types";
import fetchGoldPrice from "../../service";

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FALIED = 'REQUEST_FALIED';

const requestStarted = () => {
    return { type: REQUEST_STARTED } 
}

const requestSuccessful = (priceGold: number) => {
    return {
        type: REQUEST_SUCCESSFUL,
        payload: priceGold,
    }
}

const requestFalied = (errorMessage: string) => {
    return {
        type: REQUEST_FALIED,
        payload: errorMessage,
    }
}

export const fecthPriceGoldAPI = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(requestStarted());
            const priceGramBRL = await fetchGoldPrice();
            dispatch(requestSuccessful(priceGramBRL))
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            dispatch(requestFalied(error.message))
        }
    }
}