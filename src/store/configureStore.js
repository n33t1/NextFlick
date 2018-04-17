import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import moviesReducer from './reducers/movies';
import tagsReducer from './reducers/tags';
import queriesReducer from './reducers/queries';

const rootReducer = combineReducers({
    movies: moviesReducer,
    tags: tagsReducer,
    queries: queriesReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;