import React from 'react'




export default class SubmitForm extends React.Component {
    constructor() {
        super()

        this.state = {
            user:"",
            password:"",
            email:"",
            nameError:"",
            passwordError:"",
            emailError:""

        }
    }

     valid()
    {

if(!this.state.user.match("^[a-zA-Z]+$") || this.state.password.length<5 || this.state.email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
{
    this.setState({
        nameError:"Invalid Name",passwordError:"password more than 5",emailError:"Invalid Email"

    })
}
else if(!this.state.user.match("^[a-zA-Z]+$") )
{
    this.setState({
nameError:"Invalid Name",passwordError:""

    })
}
else if(this.state.password.length<5)
{
    this.setState({
nameError:"",passwordError:"password more than 5"

    })
}
else if(!this.state.user.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$") )
{
    this.setState({
nameError:"",passwordError:"",emailError:"Enter valid email"

    })
}
else{

    return true
}

    }



    submit()
    {

         if(this.valid())
         {
            this.setState({
                nameError:"",passwordError:"",emailError:""
            })
             alert("form submitted")
             console.warn(this.state)

            }
    
  }
        


    render() {
        return (
        <div>
            <h1>Form Handling</h1>
                    <input type="text" placeholder="Enter name" name="user" onChange={(e)=>{this.setState({user:e.target.value})}} />
                <br/><br/>
                  { <p >{this.state.nameError}</p>  } 
                    <input type="password" name="password" placeholder="Enter password" onChange={(e)=>{this.setState({password:e.target.value})}} />
            <br/><br/>
              <p >{this.state.passwordError}</p>   
              <input type="email" name="email" placeholder="Enter email" onChange={(e)=>{this.setState({email:e.target.value})}} />
              <p >{this.state.emailError}</p>  
                <button onClick={()=>this.submit()}>Submit</button>
        </div>

    )
}
}