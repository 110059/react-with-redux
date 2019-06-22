import React, { Component } from 'react';
import './App.css';
import todos from './data/tododata';
import ToDoItems from './ToDoItems';

class App extends Component {
  constructor() {
    super();

    this.state = {
      toDoList: [],
      loading: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState(
      {
        loading: true
      }
    )
    fetch('./data/todo.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('data:', data);
        this.setState({
          toDoList: data,
          loading: false
        })
  })
  }

  handleChange(id) {
    this.setState(prevState => {
      const toDoNewList = prevState.toDoList.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
      return {
        toDoList: toDoNewList
      }
    });
  }

  render() {    
    const ToDoItemsList = this.state.toDoList.map(todo => {
      return (<ToDoItems key={todo.id} item={todo} handleChange={this.handleChange} />);
    })
    return (
      <div>
        {ToDoItemsList}
      </div>
    );
  }
}

export default App;
