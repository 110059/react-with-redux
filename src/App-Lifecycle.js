import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {

  /////////////Mounting///////////////
  constructor() {
    super();
    console.log('constructor');
  }

  render() {
    console.log('render');
    return (<h1>render</h1>)
  }
  
  componentDidMount() {
    //componentDidUpdate(prevProps, prevState, snapshot) // Typical usage (don't forget to compare props):
    //After rendering (DOM available) 
    console.log('componentDidMount');
  }

  // componentWillMount() {
  //   //dont use this
  //   console.log('componentWillMount');
  // }


  //////////////updating///////////////
  static getDerivedStateFromProps() {}

  shouldComponentUpdate(newProps, newState) {
    //Skips render() if returns false
    console.log('shouldComponentUpdate');
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
  }

  componentDidUpdate() {
    //Use setState() here, but remember to compare props
    console.log('componentDidUpdate');
  }

  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  UNSAFE_componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  ////////Unmounting /////////
  componentWillUnmount() {
    //Before DOM removal #  //You should not call setState() in componentWillUnmount()
    console.log('componentWillUnmount');
  }



  ///////Errror handiling////////// 
  static getDerivedStateFromError() {}
  componentDidCatch() {
    //Catch errors (16+) #
    console.log('componentDidCatch');
  }

}


export default App;