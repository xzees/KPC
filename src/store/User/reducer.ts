import {
  UserActionTypes,
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
  state: any = initialState,
  action: any
): any => {
  switch (action.type) {
    case REHYDRATE:
      return state;
    case ADD_USER:
      if(action.payload!.create_date == undefined){
        state.users.push({
          ...action.payload,
          create_date: Date.now()
        });
      }else{
        state.users = [
          ...state.users.map( (value: any) => {
            if(value.create_date == action.payload.create_date) {
              return action.payload
            }
            return value
          })
        ];
        console.log(action.payload);
      }

      return {
        ...state,
        edit: initialState.edit,
      };
    case GET_USER:
      return state;
    case GET_USER_BY_ID:
      state.edit = action.payload
      return state;
    case RESET_USER:
      state.edit = initialState.edit;
      return state;
    case DELETE_USER: 
      if(Array.isArray(action.payload)) {
        for (var i = action.payload.length -1; i >= 0; i--) {
          state = {
            ...state,
            users: [
              ...state.users.slice(0,action.payload[i]),
              ...state.users.slice(action.payload[i] +1)
            ]
          }
        }

      }else{
        return {
          ...state,
          users: [
            ...state.users.slice(0,action.payload),
            ...state.users.slice(action.payload +1)
          ]
        }
      }
      return state;
    default:
      return { ...state };
  }
};
