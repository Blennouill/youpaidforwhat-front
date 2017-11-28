import { createStore, applyMiddleware, compose } from "redux";

import { State, reducer, initialState } from "../reducers";
import DevTools from '../containers/DevTools';

const store = createStore<State>(reducer, initialState, compose(
    applyMiddleware(),
    DevTools.instrument()
));

export default store;