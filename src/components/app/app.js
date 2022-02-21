import React, { Component } from "react";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import CreateItemPanel from "../create-item-panel";

import './app.css'

export default class App extends Component {

	constructor() {
		super();

		this.maxId = 100;

		this.state = {
			todoData: [
				this.createDataItem('Drink Coffe'),
				this.createDataItem('Make Awasome App'),
				this.createDataItem('Have  a lunch'),
			],
		}
	};

	createDataItem = (label) => {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++,
		}
	};

	currentItemIndex = (id, data) => data.findIndex((el) => el.id === id);

	toggleProp = (arr, id, propName) => {
		const index = this.currentItemIndex(id, arr);
		const oldItem = arr[index];

		const newItem = { ...oldItem, [propName]: !oldItem[propName] };

			return [
				...arr.slice(0, index),
				newItem,
				...arr.slice(index + 1)
			];
	}

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProp(todoData, id, 'done'),
			}
			
		})
	};

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProp(todoData, id, 'important'),
			}
		})
	}

	createItem = (text) => {
		const item = this.createDataItem(text);

		this.setState(({ todoData }) => {
			const newArr = [
				...todoData,
				item
			];

			return {
				todoData: newArr
			}
		});
	};

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const index = this.currentItemIndex(id, todoData);
			const arr = [
				...todoData.slice(0, index),
				...todoData.slice(index + 1)
			];

			return {
				todoData: arr,
			};
		});
	};

	render() {

		const { todoData } = this.state;
		const doneCount = todoData.filter(el => el.done).length;
		const todoCount = todoData.length - doneCount;

		return (
			<div className="todo-app">
				<AppHeader
					todo={todoCount}
					done={doneCount} />
				<div className="d-flex top-panel">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList
					todos={todoData}
					onDeleted={this.deleteItem}
					onToggleDone={this.onToggleDone}
					onToggleImportant={this.onToggleImportant} />
				<CreateItemPanel
					onCreate={this.createItem} />
			</div>
		);
	}
};
