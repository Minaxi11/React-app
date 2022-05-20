
import { Component } from 'react';
import Basic from './Basic';
import BasicFunction from './BasicFunction';
class Condition extends Component {
  
   constructor(){
      super();
      this.state={status:false}
   }
   statusChange(){
      this.setState({status:true})
    }
 render(){
   
   let  message;
   if(this.state.status){
      message=<> <Basic className="Basic-heading" text="Basic"/></>
   }
   else{
      message=<><BasicFunction className="Basic-heading" personDetails={{fname:'Minakshi',email:'minakshiwani11@gmail.com'}}/> </>
   }
   return (
      <>{message}
      <button onClick={()=>this.statusChange()}>Change status </button>
      </>
   );
      
 }
}
export default Condition;