import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import persistState from 'redux-localstorage';

import DevTools from '../containers/DevTools/DevTools';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const logger = createLogger();
    const enhancers = compose(
        applyMiddleware(logger),
        DevTools.instrument(),
    );

    const store = createStore(
        rootReducer,
        initialState,
        enhancers,
        persistState,
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => { // eslint-disable-line global-require
            const nextRootReducer = require('../reducers'); // eslint-disable-line global-require
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
