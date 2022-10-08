import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Vishwas'
      }
      console.log('LifecycleA constructor');
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle getDerviedStateFromProps');

        return null
    }
    // componentDidMount(){
    //     console.log('LifeCycleA componentDidMount ');
    //     this.setState({
    //         name:
    //     })
    // }
  render() {
    console.log('Lifecycle render');
    return (
        <div>
            <div>LifecycleA</div>
    
        </div>
      
    )
  }
}

export default LifecycleA