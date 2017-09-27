import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {addTodo} from '../actions';

// 定义React组件：AddTodo
class AddTodo extends Component {
	// React构造函数
	constructor(props, context) {
		super(props, context);

		// 显式绑定方法
		this.onSubmit = this.onSubmit.bind(this);
		this.refInput = this.refInput.bind(this);
	}

	onSubmit(ev) {
		// 阻止form表单被提交的默认行为（网页跳转）
		ev.preventDefault();

		const input = this.input;
		if(!input.value.trim()) {
			return;
		}
		// 传入参数
		this.props.onAdd(input.value);
		input.value = '';
	}

	refInput(node) {
		this.input = node;
	}

	// 傻瓜组件，没有和Redux的Store交互，负责渲染页面（通过React）
	render() {
		return (
			<div className='add-todo'>
				<form onSubmit={this.onSubmit} >
					<input className='new-todo' ref={this.refInput} />
					<button className='add-btn' type='submit'>
						添加
					</button>
				</form>
			</div>
		);
	}
}

AddTodo.propTypes = {
	onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAdd: (text) => {
			dispatch(addTodo(text));
		}
	}
};

export default connect(null, mapDispatchToProps)(AddTodo);