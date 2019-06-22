import React, { Component } from 'react';
import './App.css';
import Login  from './component/Login';
class App extends Component {
  constructor() {
    super();  
    this.state = {
      isLogin: false
    }  

    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //    setTimeout(() => {
  //      this.setState(prev => {
  //           prev.isLogin = true;
  //           return prev;
  //      })
  //    }, 1000)
  // }

  handleChange() {
     this.setState(prevState => {
      console.log('handle change working')
          return  {
            isLogin: !prevState.isLogin
          }  
     })
  }

  render() {
     return (<Login handleChange={this.handleChange} isLoggin={this.state.isLogin} />)
  }
}

export default App;
