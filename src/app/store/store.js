import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storageSession from 'redux-persist/lib/storage/session';
import combinedReducers from 'app/state/rootReducer';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  blacklist: ['payment']
};
const persistedReducer = persistReducer(persistConfig, combinedReducers);

// We can add push new middlewares as needed
const middlewares = [];

const store = composeWithDevTools(applyMiddleware(...middlewares))(createStore)(
  persistedReducer
);

const persistor = persistStore(store, null, () => {});

export { store, persistor };
