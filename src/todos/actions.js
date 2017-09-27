import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes';

let nextTodoId = 0;

// define action constructor
// return action object(type and other attributes)

// addTodo action constructor
export const addTodo = (text) => ({
	type: ADD_TODO,
	completed: false,
	id: nextTodoId ++,
	text: text
});

// toggleTodo action constructor
export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	id: id
});

// removeTodo action constructor
export const removeTodo = (id) => ({
	type: REMOVE_TODO,
	id: id
});