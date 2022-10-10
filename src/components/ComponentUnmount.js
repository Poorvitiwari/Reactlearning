import React, { Component } from 'react'

 class ComponentUnmount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         show:false
      }
    }
  render() {
    return (
      <div>
        <h1>ComponentWillunmount</h1>
        {this.state.show?<Child/>:null}
        <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle child</button>
        </div>
    )
  }
}

class Child extends Component{
 componentWillUnmount(){
    console.log("Component is hiddent here");
 }
 render(){
    return(
        <div>
            <h2>Child Component</h2>
        </div>
    )
 }
}

export default ComponentUnmount