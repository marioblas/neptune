/* eslint no-underscore-dangle: 0 */
/* eslint global-require: 0 */

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

/**
 * Inject reducers into store
 */
function injectReducers(reducers) {
  return function configureStore(initialState) {
    const middlewares = [
      // Add other middleware on this line...

      // Thunk middleware can also accept an extra argument to be passed to each thunk action
      // @see https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
      thunk,
    ];

    // Add support for Redux DevTools
    const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

    // Create Store
    // @see http://redux.js.org/docs/api/createStore.html
    const store = createStore(
      rootReducer(reducers),
      initialState,
      composeEnhancers(applyMiddleware(...middlewares)),
    );

    // Enable HMR for reducers
    // @see https://stackoverflow.com/questions/34243684/make-redux-reducers-and-other-non-components-hot-loadable
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        const nextReducer = require('./reducers').default;
        store.replaceReducer(nextReducer);
      });
    }

    return store;
  };
}

export default injectReducers;
