import React, { Component } from 'react'
import './Vote.css'
class Vote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      languages: [
        { name: "Javascript", vote: 0 },
        { name: "Python", vote: 0 },
        { name: "Java", vote: 0 },
        { name: "C++", vote: 0 },
        { name: "Kotlin", vote: 0 },
      ]
    }
  }

  //setting localstorage using componentDidMount and ComponentDidUpdate
  componentDidMount() {
    if (window.localStorage.getItem('state')) {
      this.setState({
        languages: JSON.parse(window.localStorage.getItem('state'))
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.languages !== prevState.language){
      window.localStorage.setItem('state', JSON.stringify(this.state.languages))
    }
  }
  //Just used this function for understading this hides the whole UI 
  componentWillUnmount(){
    console.log("component ie hidden now");
  }
  resetState(state) {
    window.localStorage.clear(state);
    this.setState({
      languages: [
        { name: "Javascript", vote: 0 },
        { name: "Python", vote: 0 },
        { name: "Java", vote: 0 },
        { name: "C++", vote: 0 },
        { name: "Kotlin", vote: 0 },
      ]
    })
  }
  voteIncrement(index) {
    let newLanguageVote = this.state.languages;
    newLanguageVote[index].vote++;
    this.setState({
      languages: newLanguageVote.sort((a, b) => b.vote - a.vote)
    });
  }
  render() {
    return (
      <div>
        <h1>Vote your languages</h1>
        <button onClick={this.resetState.bind(this)}>Clear All</button>
        <div className="languages">
          {
            this.state.languages.map(({name,vote}, index)=>
              <div key={index} className='item'>
                <div className='voteCount' >{vote}</div>
                <div className='lnaguageName'>{name}</div>
                <button onClick={this.voteIncrement.bind(this, index)}>Vote ME</button>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

class Child extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       show:false
    }
  }
  handleStartGame(){
    this.setState({show:!this.state.show})
    // console.log(this.state.show);
  }
  render() {
      return (
        <div>
          <h2>Welcome To The Voting Game</h2>
          {this.state.show&&<Vote/>}
          {this.state.show?<button onClick={()=>this.handleStartGame()}>End The Game</button>:<button onClick={()=>this.handleStartGame()}>Start the Game</button>}
          </div>
      )
    }
}

export default Child