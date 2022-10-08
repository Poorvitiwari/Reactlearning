import React, { Component } from 'react'

 class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Vishwas'
      }
      console.log('LifecycleB constructor');
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerviedStateFromProps');
        return null
    }
    componentDidMount(){
        console.log('LifeCycleB componentDidMount ');
    }
  render() {
    console.log('LifecycleB render');
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB