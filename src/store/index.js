import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// reducer
import { appReducer } from "../redux/app.reducer";
import { projectReducer } from "../redux/project.reducer";
import { documentReducer } from "../redux/document.reducer";
import { idfClassesReducer } from '../redux/idfClasses.reducer'

const composeEnhancers =
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const rootReducer = combineReducers({
  app: appReducer,
  project: projectReducer,
  document: documentReducer,
  idfClasses: idfClassesReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
