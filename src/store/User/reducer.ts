import {
  ADD_USER,
  GET_USER,
  RESET_USER,
  DELETE_USER,
  GET_USER_BY_ID
} from './types';
import { REHYDRATE } from 'redux-persist';
import DEFAULT_SETTINGS from './settings';

const initialState: any = DEFAULT_SETTINGS;

export const userReducer = (
  state: any =initialState,
  action: any
): any => {
  switch (action.type) {
    case REHYDRATE:
      return state;
    case ADD_USER:
      if(action.payload!.create_date == undefined){
        action.payload.create_date = Date.now()
        state.users.push(action.payload);
      }else{
        state.users = [
          ...state.users.map( (value: any) => {
            if(value.create_date == action.payload.create_date) {
              return action.payload
            }
            return value
          })
        ],
        state.edit = initialState.edit;
      }
      return state;
    case GET_USER:
      state.edit = initialState.edit;
      return state;
    case GET_USER_BY_ID:
      state.edit = {...action.payload}
      return state;
    case RESET_USER:
      state.edit = initialState.edit;
      return state;
    case DELETE_USER: 
      const returns = {
        ...state,
        users: [
          ...state.users.slice(0,action.payload),
          ...state.users.slice(action.payload +1)
        ]
      }
      return returns;
    default:
      return { ...state };
  }
};
