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
        ]
      }
      state = initialState;
      localStorage.setItem('Storage', JSON.stringify(state.users));
      return state;
    case GET_USER:
      return state;
    case GET_USER_BY_ID:      
      state.edit = {...action.payload}
      return state;
    case UPDATE_USER:
      const key = action.payload.id;
      delete action.payload.id
      state.users[key] = {...action.payload,...state.users[key]}
      return state;
    case DELETE_USER: 
      const returns = {
        ...state,
        users: [
          ...state.users.slice(0,action.payload),
          ...state.users.slice(action.payload +1)
        ]
      }
      localStorage.setItem('Storage', JSON.stringify(returns.users));
      return returns;
    default:
      return { ...state };
  }
};
