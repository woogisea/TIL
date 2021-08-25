import { createAction, deprecated } from "typesafe-actions";
import { Todo } from "./types";

const {createStandardAction} = deprecated;

export const ADD_TODO = 'todos/ADD_TODO' as const;
export const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
export const REMOVE_TODO = 'todos/REMOVE_TODO' as const;



let nextId = 1;
export const addTodo = createAction(ADD_TODO, (text : string) => ({
    id : nextId++,
    text
}))<Todo>();

export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();