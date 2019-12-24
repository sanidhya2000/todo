import React, { Component } from 'react';
import TodoItem from './TodoItem.js'
import AddField from './AddField.js'

class Section extends Component{
	constructor(props){
		super(props);
	}

	render(){

		const todoList = this.props.todoItems.map((td,i)=>{
			if(td.title == ''){
				return <AddField key={i} saveItem={this.props.saveItem}/>
			}
			else{
			return(<TodoItem key={i} index={i} item={td.title} stateOfBox={td.completed} updateTodo={this.props.updateTodo}/>)
			}
		})

		return(
			<div style={{'width':'90%','margin':'0 auto'}}>
				{todoList}
			</div>)
	}
}

export default Section