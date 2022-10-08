// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
// import About from "./about";
import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Messege from "./components/Messege";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from './components/ParentComponent';
import Vote from './Task1/Vote';
import UserGreeting from './components/UserGreeting';
import List from './components/List';
import LifecycleA from './components/LifecycleA';
import LifecycleB from './components/LifecycleB';

// const App=()=> {
//   // return React.createElement("div",
//   // {className:"App"},
//   // React.createElement("h1",null,"Hello ReactJS App!")
//   // );
//   return (
//     <div className='App'>
//       <h1>Hello JSX!</h1>
//       <About />
//     </div>
//   );
// }

class App extends Component{
  render(){
    return(
      <div className='App'>
        {/* <LifecycleB/> */}
        {/* <LifecycleA/> */}
        {/* <List/> */}
        {/* <UserGreeting/> */}
        <Vote/>
        {/* <ParentComponent/> */}
        {/* <Counter/> */}
        {/* <EventBind/> */}
        {/* <FunctionClick/>
        <ClassClick/>
        <Greet name="poorvi">
          <p>
            This is about props
          </p>
          <h1>
            poorvi
          </h1>
        </Greet>
        <Greet name="Nikunj">
          <button>
            Action
          </button>
        </Greet> */}
        {/* {/* <Greet name="Nitin"/>
        <Welcome name="Poorvi Tiwari"/>
        <Welcome name="Nikunj Gupta"/>
        <About/>
        <Hello/> 
        <Messege/> */}
      </div>
    )
  }
}


export default App;
