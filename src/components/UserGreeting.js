import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn:true
      }
    }
  render() {
    //short circuit operator
   return this.state.isLoggedIn && <div>Welcome Vishwas</div>


    //conditional operator
//    return this.state.isLoggedIn?(
//     <div>Welcome Vishwas</div>
//     ):(
//     <div>Welcome Guest</div>
//     )


    // element variable
    // let Messege
    // if(this.state.isLoggedIn){
    //     Messege=<div>Welcome Vishwas</div>
    // }else{
    //     Messege=<div>Welcome Guest</div>
    // }
    // return <div>{Messege}</div>

    // if(this.state.isLoggedIn){
    //     return(
    //         <div>
    //             Welcome Vishwas
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }
    // return (
    //   <div>
    //     <div>Welcome Guest</div>
    //     <div>Wlcome Vishwas</div>
    //   </div>
    // )
  }
}

export default UserGreeting