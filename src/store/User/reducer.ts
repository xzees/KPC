import {
  UserActionTypes,
  ADD_USER,
  GET_USER,
  UPDATE_USER,
  DELETE_USER
} from './types';

import DEFAULT_SETTINGS from './settings';

const initialState: any = DEFAULT_SETTINGS;

export const userReducer = (
  state: any = initialState,
  action: UserActionTypes
): any => {
  switch (action.type) {
    case ADD_USER:
      state.users.push(action.payload);
      localStorage.setItem('Storage', JSON.stringify(state.users));
      return state;
    case GET_USER:
      return state;
    case UPDATE_USER:
      const key = action.payload.id;
      delete action.payload.id
      state.users[key] = {...action.payload,...state.users[key]}
      return state;
    case DELETE_USER: 
      const keys = action.payload.id;
      delete state.users[keys];
      localStorage.setItem('Storage', JSON.stringify(state.users));
      return state;
    default:
      return { ...state };
  }
};
