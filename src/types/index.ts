import { ThunkDispatch } from "redux-thunk";
import { UnknownAction } from "redux";

export type ReduxState = {
  isFetchin: boolean;
  priceGold: number;
  errorMessage: string;
}

export type Dispatch = ThunkDispatch<ReduxState, null, UnknownAction>
