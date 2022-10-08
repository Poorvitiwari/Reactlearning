import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         messege:'Hello'
      }
      // this.clickHnadler=this.clickHnadler.bind()
    }
    // clickHnadler(){
    //     this.setState({
    //         messege:'Goodbye!'
    //     })
    //     console.log(this);
    // }
    clickHnadler=()=>{
        this.setState({
            messege:'GoodBye!'
        })
    }
  render() {
    console.log(this);
    return (
      <div>
        <h1>EventBind</h1>
        <div>{this.state.messege}</div>
        <button onClick={this.clickHnadler}>click</button>
        {/* <button onClick={()=>this.clickHnadler()}>click</button> */}
        </div>
    )
  }
}

export default EventBind