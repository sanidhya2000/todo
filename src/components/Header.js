import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import '../csses/header.css'

class Header extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="header  w-100 w-100-m w-90-l mw12 ">
				<div className="title ">Todo</div>
				<div className="button">
					
					<Button variant="contained" color="secondary" onClick={this.props.addItem} className="addButton" style={{"background-color": "grey","borderRadius":"15%"}}>
					  <AddIcon style={{ fontSize: 30 }}/>
					</Button>
				</div>
				
			</div>



			);
	}
}

export default Header