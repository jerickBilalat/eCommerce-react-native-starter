import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "../Reducers";

const configureStore = (preloadedState) => {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../Reducers", () => {
      const nextRootReducer = require("../Reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
