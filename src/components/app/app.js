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
				this.createDataItem('Выпить кофе'),
				this.createDataItem('Сделать приложение'),
				this.createDataItem('Ужин'),
			],

			term: '',
			filter: 'all',
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

	searchItems = (currentTerm) => {
		this.setState({
			term: currentTerm
		});
	};

	search = (items, term) => {
		const currentTerm = term.trim();

		if (currentTerm.length === 0) {
			return items;
		}

		return items.filter(el => {
			return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
		})
	};

	filterItems = (arr) => {
		switch (this.state.filter) {
			case 'all':
				
				return arr;
			case 'important':
				return arr.filter(el => el.important)
			case 'done':
				return arr.filter(el => el.done)
			default:
				return arr;
		}
	}

	onChangeFilter = (filter) => {
		this.setState({ filter })
	}


	render() {

		const { todoData, term, filter } = this.state;

		const visible = this.filterItems(this.search(todoData, term));
		const doneCount = todoData.filter(el => el.done).length;
		const todoCount = todoData.length - doneCount;

		return (
			<div className="todo-app">
				<AppHeader
					todo={todoCount}
					done={doneCount} />
				<div className="d-flex top-panel">
					<SearchPanel
						searchItems={this.searchItems} />
					<ItemStatusFilter
						filter={filter}
						onChangeFilter={this.onChangeFilter} />
				</div>
				<TodoList
					todos={visible}
					onDeleted={this.deleteItem}
					onToggleDone={this.onToggleDone}
					onToggleImportant={this.onToggleImportant} />
				<CreateItemPanel
					onCreate={this.createItem} />
			</div>
		);
	}
};
