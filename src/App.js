// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import ComponentUnmount from './components/ComponentUnmount';
import Lifecycle from './components/Lifecycle';
import State from "./components/State";
import Vote from './Task1/Vote';

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
        {/* <Lifecycle/> */}
        <Vote/>
        {/* <ComponentUnmount/> */}
        {/* <State/> */}

      </div>
    )
  }
}


export default App;
