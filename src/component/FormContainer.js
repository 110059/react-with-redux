import React, { Component } from 'react';
import FormCompoent from './FormComponent';

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isEmployee: false,
      dept: "java"
    }

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const {name, value, type, checked} = event.target;
    if (type === "checkbox") {
      this.setState({[name]: checked})
    } else {
      this.setState({[name]: value})
    }    
  }

  handleSubmit(event) {
    console.log("working");
    event.preventDfault();
  }

  render() {
    return (
      <FormCompoent 
        handleChange={this.handleChange} 
        data={this.state} 
        handleSubmit={this.handleSubmit}
      />
    )
  }

}

export default FormContainer;