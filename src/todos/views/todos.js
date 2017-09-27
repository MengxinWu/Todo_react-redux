import React from 'react';

import AddTodo from './addTodo';
import TodoList from './todoList';

import './style.css';

// 无状态组件，用一个函数直接表示
export default () => {
	return (
		// JSX指定元素的类名使用‘className’
		<div className='todos'>
			<AddTodo />
			<TodoList />
		</div>
	);
};