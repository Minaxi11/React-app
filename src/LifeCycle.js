import React,{ Component } from 'react';
import './App.css';

class LifeCycle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {vlaue: ""};
    }
  
    componentDidMount() {
        alert('This is alert')
    }
  
    componentWillUnmount() {
        this.setState({vlaue:'This is alert'})
    }
  
    render() {
      return (
        <div>
        
          <h2>{this.state.vlaue}</h2>
        </div>
      );
    }
  }
  export default LifeCycle;