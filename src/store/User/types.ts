

export const ADD_USER = '[user] add user'
export const UPDATE_USER = '[user] update user'
export const GET_USER = '[user] get user'
export const DELETE_USER = '[user] delete user'

export interface ADD_USER {
  type: typeof ADD_USER;
  payload: any;
}

export interface UPDATE_USER {
  type: typeof UPDATE_USER;
  payload: any;
}

export interface GET_USER {
  type: typeof GET_USER;
  payload: any;
}

export interface DELETE_USER {
  type: typeof DELETE_USER;
  payload: any;
}

export type UserActionTypes = ADD_USER | UPDATE_USER | GET_USER | DELETE_USER
