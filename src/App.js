import React, { Component } from 'react';
import Header from './components/Header.js'
import { Container, Row, Col } from 'reactstrap';
import Section from './components/Section.js'
import Helmet from 'react-helmet';
import './App.css';

const initialState = {
  todoItems : []
}

class App extends Component {

  constructor(){
    super();
    this.state = initialState;
  }

  componentDidMount(){
    
    if(localStorage.getItem('todoItems') == null){
      
    }
    else{
      let todos = localStorage.getItem('todoItems')
      this.setState({todoItems : JSON.parse(todos)})
    }
  }

  changeState=(e)=>{
    let targetIndex = e.target.value;
    let targetElement = this.state.todoItems;
    if(targetElement.length !=0){
    if(targetElement[targetElement.length - 1].title == ''){
      targetElement.pop();
    }
  }
    targetElement[targetIndex].completed = !targetElement[targetIndex].completed;
    this.setState({todoItems : targetElement})
    localStorage.setItem('todoItems',JSON.stringify(this.state.todoItems))
  }

  addItem=()=>{
    let newTodo = {title :'',completed:false}
    let targetElement = this.state.todoItems;
    if(targetElement.length !=0){
    if(targetElement[targetElement.length - 1].title == ''){
      targetElement.pop();
    }
  }
    targetElement.push(newTodo)
    this.setState({todoItems : targetElement})
  }

  saveItem = (item) =>{
    let newTodo = {title :item,completed:false}
    let targetElement = this.state.todoItems;
    targetElement.pop();
    targetElement.push(newTodo)
    localStorage.setItem('todoItems',JSON.stringify(targetElement))
    let newTodo2 = {title :'',completed:false}
    targetElement.push(newTodo2)
    this.setState({todoItems : targetElement})
    
  }

  render() {
    console.log(this.state)
    return (
      <div >
      <Helmet bodyAttributes={{style: 'background-color : #1A1B1B'}}/>
       <Container className="App">
        <Row>
          <Col style={{'textAlign':'center','margin-bottom':'1%'}}><Header addItem={this.addItem}/></Col>
        </Row>
        <Row>
          <Col ><Section todoItems={this.state.todoItems} updateTodo={this.changeState} saveItem={this.saveItem}/></Col>
        </Row>
       </Container>
      </div>
    );
  }
}

export default App;
