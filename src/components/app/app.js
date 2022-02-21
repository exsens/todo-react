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
				{ label: 'Drink Coffe', important: false, id: 0, },
				{ label: 'Make Awasome App', important: true, id: 1, },
				{ label: 'Have  a lunch', important: true, id: 2, },
			],
		}
	};

	onToggleDone = () => {
		console.log(2);
	}

	onToggleImportant = () => {
		console.log(1);
	}

	createItem = (text) => {

		const item = {
			label: text,
			important: false,
			id: this.maxId++,
		};

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
			const index = todoData.findIndex((el) => el.id === id);
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

		let { todoData } = this.state;

		return (
			<div className="todo-app">
				<AppHeader />
				<div className="d-flex top-panel">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList
					todos={todoData}
					onDeleted={this.deleteItem} 
					onToggleDone={this.onToggleDone}
					onToggleImportant={this.onToggleImportant}/>
				<CreateItemPanel
					onCreate={this.createItem} />
			</div>
		);
	}
};
