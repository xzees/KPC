import {
  UserActionTypes,
  ADD_USER,
  GET_USER,
  UPDATE_USER,
  DELETE_USER
} from './types';

import { DEFAULT_SETTINGS } from './settings';

const initialState: any = DEFAULT_SETTINGS;

export const userReducer = (
  state: any = initialState,
  action: UserActionTypes
): any => {
  switch (action.type) {
    case ADD_USER: 
      state.push(action.payload);
      localStorage.setItem('Storage', JSON.stringify(action.payload));
      return state;
    // GET_USER
    // UPDATE_USER
    // DELETE_USER 
    // case SET_SETTINGS:
    //   return { ...action.payload };
    // case UPDATE_SETTINGS:
    //   return { ...state, ...action.payload };
    // case RESET_SETTINGS:
    //   return { ...initialState };
    // case TOGGLE_SIDEBAR:
    //   return { ...state, sidebarOpened: !state.sidebarOpened };
    default:
      return { ...state };
  }
};
