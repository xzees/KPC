import { Todo, TodoActionType, TodoActionInterface } from "./types";

export function addTodo(todo: Todo): TodoActionInterface {
  return {
    type: TodoActionType.ADD_TODO,
    payload: todo
  };
}

export function deleteTodo(index: number): TodoActionInterface {
  return {
    type: TodoActionType.DELETE_TODO,
    payload: index
  };
}

export function checkTodo(index: number): TodoActionInterface {
  return {
    type: TodoActionType.CHECK_TODO,
    payload: index
  };
}
