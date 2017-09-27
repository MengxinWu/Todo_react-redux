import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TodoItem from './todoItem';
import {toggleTodo, removeTodo} from '../actions';
import {FilterTypes} from '../../constants';


// 定义React组件：TodoList，傻瓜组件（函数表示）
const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
	return (
		<ul className='todo-list'>
		{
			todos.map((item) => (
				<TodoItem 
					key={item.id}
					text={item.text}
					completed={item.completed}
					onToggle={() => onToggleTodo(item.id)}
					onRemove={() => onRemoveTodo(item.id)} 
				/> 
			))
		}
		</ul>
	);
};

TodoList.propTypes = {
	todos: PropTypes.array.isRequired
};

// 选择需要显示的todo项
const selectVisibleTodos = (todos, filter) => {
	switch(filter) {
		case FilterTypes.ALL:
			return todos;
		case FilterTypes.COMPLETED:
			return todos.filter(item => item.completed);
		case FilterTypes.UNCOMPLETED:
			return todos.filter(item => !item.completed);
		default:
			throw new Error('unsupported filter.');
	}
};

const mapStateToProps = (state) => {
	return {
		todos: selectVisibleTodos(state.todos, state.filter)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onToggleTodo: (id) => {
			dispatch(toggleTodo(id));
		},
		onRemoveTodo: (id) => {
			dispatch(removeTodo(id));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);