import React, { Component } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import '../csses/todoItem.css'
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600]
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);


class TodoItem extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="w-100 w-100-m w-100-l mw12" style={{"color":"white"}}>	
		          <FormControlLabel 
		            control={<GreenCheckbox checked={this.props.stateOfBox}  value={this.props.index} onChange={this.props.updateTodo}/>}
		            label={this.props.item}
		            className="todo"
		          />
		          <hr style={{'width':'95%','opacity':'0.3'}}/>
            </div>
			)
	}
}

export default TodoItem