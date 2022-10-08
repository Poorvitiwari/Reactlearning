import React, { Component } from 'react'
import './Vote.css'
class Vote extends Component {
    constructor(props) {
      super(props)
    
      this.state =JSON.parse(window.localStorage.getItem('state')) || {
         languages:[
            {name:"Javascript",vote:0},
            {name:"Python",vote:0},
            {name:"Java",vote:0},
            {name:"C++",vote:0},
            {name:"Kotlin",vote:0},
         ]
      }
    }
    setState(state) {
        window.localStorage.setItem('state', JSON.stringify(state));
        super.setState(state);
      }
    // reset(){
    //    localStorage.clear();
    //   }
    vote(i){
        let newLanguageVote=this.state.languages;
        console.log(newLanguageVote[i].name);
        newLanguageVote[i].vote++;

        console.log("click:",i);
        console.log(newLanguageVote[i].vote);
        this.setState({
            languages:newLanguageVote
        });
    }
    render() {
        return (
        <div>
            <h1>Vote your languages</h1>
            {/* <button onClick={this.reset}>Clear All</button> */}
            <div className="languages">
            {
                this.state.languages.map((item,i)=>
                <div key={i} className='item'>
                    <div className='voteCount'>{item.vote}</div>
                    <div className='lnaguageName'>{item.name}</div>
                    <button onClick={this.vote.bind(this,i)}>Vote ME</button>
                </div>
                )
            }
            </div>
        </div>
        )
  }
}

export default Vote