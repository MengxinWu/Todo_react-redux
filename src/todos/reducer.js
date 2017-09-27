import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes';

// define redux reducer
// reducer 不能修改原state，返回一个新的state
export default (state=[], action) => {
	switch(action.type) {
		case ADD_TODO: {
			return [
				{
					id: action.id,
					text: action.text,
					completed: action.completed
				},
				...state
			];
			// 使用...扩展操作符，返回一个新数组包含新加的对象和原来的数组state
			// 不改变原数组
		}

		case TOGGLE_TODO: {
			return state.map((todoItem) => {
				if(todoItem.id === action.id) {
					return {...todoItem, completed: !todoItem.completed};
				} else {
					return todoItem;
				}
			});
			// 使用map方法，映射一个数组的元素，不影响原数组
			// 使用...扩展操作符展开一个对象，并对对象的属性赋值
		}

		case REMOVE_TODO: {
			return state.filter((todoItem) => {
				return todoItem.id !== action.id;
			});
			// 使用filter方法，过滤不需要的元素，不影响原数组
		}

		default: {
			return state;
		}
	}
};