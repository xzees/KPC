import {
  UserActionTypes,
  ADD_USER,
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_USER_BY_ID
} from './types';

import DEFAULT_SETTINGS from './settings';

const initialState: any = DEFAULT_SETTINGS;

export const userReducer = (
  state: any = initialState,
  action: UserActionTypes
): any => {
  switch (action.type) {
    case ADD_USER:
      action.payload.create_date = Date.now()
      state.users.push(action.payload);
      localStorage.setItem('Storage', JSON.stringify(state.users));
      return state;
    case GET_USER:
      return state;
    case GET_USER_BY_ID:      
      state.edit = {...state.users[action.payload]}
      return state;
    case UPDATE_USER:
      const key = action.payload.id;
      delete action.payload.id
      state.users[key] = {...action.payload,...state.users[key]}
      return state;
    case DELETE_USER: 
      const returns = {
        ...state,
        users: state.users.filter((item: any, index: any) => index !== action.payload)
      }
        localStorage.setItem('Storage', JSON.stringify(returns.users));
      return returns;
    default:
      return { ...state };
  }
};
