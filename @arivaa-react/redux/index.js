/*
 Bootstrap redux
 */
import {
    applyMiddleware,
    compose,
    createStore as createReduxStore,
    combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {
    configureActions,
    createAction as createActionFn,
    getAxiosInstance,
    setAxiosInstance,
} from './helpers/action';

import { getError, getResponseError } from './helpers/axios';
function configureThirdPartyActions(dispatch) {
    /**
     * Configure Third Party Redux Plugins here that require access to dispatch
     */
}

export function createStore(obj) {
    const {
        initialState = {},
        actions = [],
        reducers = {},
        middlewares = [],
        enhancers = [],
    } = obj || {};
    configureActions(actions);

    const composeEnhancers =
        typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

    /**
      Combine enhancers and middlewares
    */
    const composedEnhancers = composeEnhancers(
        applyMiddleware(thunk, promise, ...middlewares),
        ...enhancers
    );
    /**
     * Create Third party reducers
     * @type {{locale, routing: *}}
     */
    const thirdPartyReducers = {};
    const thirdPartyInitialState = {};
    const store = createReduxStore(
        combineReducers({
            ...thirdPartyReducers,
            ...reducers,
        }),
        {
            ...initialState,
            ...thirdPartyInitialState,
        },
        composedEnhancers
    );
    configureThirdPartyActions(store.dispatch);
    return store;
}

export const createAction = createActionFn;

export { getAxiosInstance, setAxiosInstance, getError, getResponseError };
