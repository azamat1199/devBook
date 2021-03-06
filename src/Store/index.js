import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import userReducer from "./reducers/userReducer";
import reduxThunk from "redux-thunk";
import bookReducer from "./reducers/bookReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  storage,
  key: "root",
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  myBooks: bookReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(logger, reduxThunk))
);
console.log(store, "storeggg");
const persistor = persistStore(store);

export { store as default, persistor };
