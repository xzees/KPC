

export const ADD_USER = '[user] add user'
export const UPDATE_USER = '[user] update user'
export const GET_USER = '[user] all user'
export const DELETE_USER = '[user] delete user'
export const GET_USER_BY_ID = '[user] get user by id'

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
}

export interface DELETE_USER {
  type: typeof DELETE_USER;
  payload: any;
}

export interface GET_USER_BY_ID {
  type: typeof GET_USER_BY_ID;
  payload: any;
}

export type UserActionTypes = ADD_USER | UPDATE_USER | GET_USER | DELETE_USER | GET_USER_BY_ID
