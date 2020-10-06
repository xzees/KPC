export interface Todo {
  todo: string;
  isCheck: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  CHECK_TODO = "CHECK_TODO",
  DELETE_TODO = "DELETE_TODO"
}
export type TodoAction = TodoActionType;

export interface TodoActionInterface {
  type: TodoAction;
  payload: any;
}
