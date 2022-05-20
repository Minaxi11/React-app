
import { Component } from 'react';
class Condition extends Component {

   constructor() {
      super();
      this.state = { name: "", pass: "" }
   }
   Submit() {
      console.warn(this.state)
   }
   render() {

      return (
         <>
            <p>{this.state.name}</p>
            <input type="text" onChange={(e) => { this.setState({ name: e.target.value }) }} />
            <p>{this.state.pass}</p>
            <input type="password" onChange={(e) => { this.setState({ pass: e.target.value }) }} />
            <button onClick={() => this.Submit()}>Submit</button>
         </>
      );

   }
}
export default Condition;