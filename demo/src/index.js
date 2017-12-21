import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { persistStore, persistCombineReducers } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { createStore, applyMiddleware, compose } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import thunk from "redux-thunk";
import storage from "redux-persist/es/storage";
import modules from "./modules";

import "reset.css";

const config = {
  key: "root",
  storage
};

const createStoreWithMiddleware = () => {
  const middlewares = [thunk, apiMiddleware];

  const store = createStore(
    persistCombineReducers(config, modules),
    {},
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );

  const persistor = persistStore(store);
  return { persistor, store };
};

const { persistor, store } = createStoreWithMiddleware();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
