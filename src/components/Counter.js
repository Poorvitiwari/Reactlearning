import React, { Component } from 'react'

class Counter extends Component {
  constructor(props){
    super(props)
    this.state={
        count:0
    }
  }
  increment(){
    // this.setState({
    //     count: this.state.count+1
    // },
    //     ()=>{console.log('callback value:',this.state.count);
    // })
    // console.log(this.state.count);
    this.setState((prevState,props )=>({
        count: prevState.count +1
    }))
  }
  
  incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
        <div>
            <div>Counter-{this.state.count}</div>
            <button onClick={()=>this.incrementFive()}>Increment</button>
        </div>

    )
  }
}

// class A{
//     constructor(props){
//         this.props=props

//     }
// }
// class B extends A{
//     constructor(props){
//         super(props)
//         console.log(this.props);
//     }
// }

// console.log(new B({title:"hello world"}));

export default Counter