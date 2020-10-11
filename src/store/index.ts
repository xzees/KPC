import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import {userReducer} from './User/reducer';
const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
