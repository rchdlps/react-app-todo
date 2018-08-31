import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import todos from "./reducers";
import rootSaga from "~/store/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(todos, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
