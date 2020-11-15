import {applyMiddleware, createStore} from "redux";
import * as Redux from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();
const middleware: [Redux.Middleware] = [sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
// sagaMiddleware.run(rootSaga);
