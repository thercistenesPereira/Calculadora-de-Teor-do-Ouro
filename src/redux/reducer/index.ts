import { REQUEST_FALIED, REQUEST_STARTED, REQUEST_SUCCESSFUL} from '../action';
import { ReduxState } from '../../types';

const INITIAL_STATE: ReduxState = {
    isFetchin: false,
    priceGold: 0,
    errorMessage: '',
};

type ActionType = {
    type: string,
    payload: number | string,
}

const priceGoldReducer = (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case REQUEST_STARTED:
            return {
                ...state,
                isFetchin: true,
                priceGold: 0,
                errorMessage: '',
            }
        
        case REQUEST_SUCCESSFUL:
            return {
                ...state,
                isFetchin: false,
                priceGold: action.payload as number,
                errorMessage: '',
            }

        case REQUEST_FALIED:
            return {
                ...state,
                isFetchin: false,
                priceGold: 0,
                errorMessage: action.payload as string,
            }
        default:
            return state
    }
}

export default priceGoldReducer;
