import React,{ Component } from 'react';
import './App.css';

class Basic extends Component {
   constructor()
{

super()
this.userRef=React.createRef();
this.userRef1=React.createRef();
}
editval()
{

   let x="password"
   let y="radio"
    this.userRef.current.value=this.state.sec;
    this.userRef1.current.value=this.state.name;
    // this.userRef.current.focus()
}
 render(){
    return (
        <div className="Basic">
           <h1 className={this.props.class}>{this.props.text}</h1>

           <h1> Refs Example </h1>
            <button onClick={()=>this.editval()} >Click Me</button>
           <input type="text" ref={this.userRef} onChange={(e) => { this.setState({ name: e.target.value }) }} />
            
            <input type="text"  ref={this.userRef1} onChange={(e)=>{this.setState({sec:e.target.value})}} />
            
        </div>
      );
 }
}
export default Basic;
