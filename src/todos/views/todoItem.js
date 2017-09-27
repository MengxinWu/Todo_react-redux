import React from 'react';
import PropTypes from 'prop-types';

// 傻瓜组件（函数表示）
const TodoItem = ({onToggle, onRemove, completed, text}) => {

	return (
		<li
			className='todo-item'
			style={{
				textDecoration: completed ? 'line-through' : 'none'
			}}
		>
			<input className='toggle' type='checkbox' onClick={onToggle} />
			<label className='text'>{text}</label>
			<button className='remove' onClick={onRemove}>删除</button>
		</li>
	);
};

TodoItem.propTypes = {
	onToggle: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default TodoItem;