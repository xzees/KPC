import {
  ADD_USER,
  UPDATE_USER,
  GET_USER,
  DELETE_USER
} from './types';

export const addUser = (data: any) => ({
  type: ADD_USER,
  payload: data
});

export const updateUser = (data: any) => ({
  type: UPDATE_USER,
  payload: data
});

export const getUser = (data: any) => ({
  type: GET_USER,
  payload: data
});

export const deleteUser = (data: any) => ({
  type: DELETE_USER,
  payload: data
});

