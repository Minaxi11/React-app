import React from 'react'

export default class Ref extends React.Component
{


    //state concept
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
    this.userRef.current.type=y
    this.userRef1.current.value=x.toUpperCase()
    // this.userRef.current.focus()
}


render()
{
    return (
<div>
<h1> Refs Example </h1>

<button onClick={()=>this.editval()} >Click Me</button>

<input ref={this.userRef} type="text" name="user" />

<input ref={this.userRef1} type="checkbox" name="user" />
    </div>
    )
    

}

   

}