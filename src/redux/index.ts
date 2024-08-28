import { legacy_createStore as createStore, applyMiddleware } from "redux";
import priceGoldReducer from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const store = createStore(
    priceGoldReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
