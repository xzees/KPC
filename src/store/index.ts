import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
