import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const initialState = {
	todoInput : ''
}

class AddField extends Component{
	constructor(props){
		super(props);
		this.state = initialState
	}

	componentDidMount(){
		this.nameInput.focus(); 
	}

	toggleInput = (event)=>{
		let value = event.target.value.trim()
		this.setState({todoInput : value})
	}

	enterPressed =(event)=>{
		let code = event.keyCode || event.which;	
		if(code === 13){

			if(this.state.todoInput!=='')
			this.props.saveItem(this.state.todoInput)
		}
	}

	render(){
		return(
			<div className="w-100 w-100-m w-100-l mw12" style={{"display":'inline-flex'}}>
				<FormControlLabel
		            control={<Checkbox checked={this.props.stateOfBox}  value={this.props.index} onChange={this.props.updateTodo}/>}
		            label={this.props.item}
		            disabled
		          />	
				<input type="text" style={{'border' : 0,'width' : '100%','marginLeft':'-1%','backgroundColor':'#1A1B1B','color':'white'}} ref={(input) => { this.nameInput = input; }} onKeyPress={this.enterPressed} onChange={this.toggleInput} />
			</div>
			)
	}
}

export default AddField