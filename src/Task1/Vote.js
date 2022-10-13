import React, { Component } from 'react'
import './Vote.css'
class Vote extends Component {
    constructor(props) {
      super(props)
      this.state ={
         languages:[
            {name:"Javascript",vote:0},
            {name:"Python",vote:0},
            {name:"Java",vote:0},
            {name:"C++",vote:0},
            {name:"Kotlin",vote:0},
         ]
 
      }
    }
    // componentDidMount(){
    //   // const state=window.localStorage.getItem('state')
    //   // const items=JSON.parse(state)
    //   // console.log(items);
    //   // this.setState(()=>(items))
    //   const state =JSON.parse(window.localStorage.getItem('state'))
    //   this.setState(()=>(state))
    //   console.log(1,this.state,window.localStorage.getItem('state'));
    //   console.log(state);
    //   // window.localStorage.setItem('state',JSON.stringify(state))

    // }
    componentDidUpdate(prevProps,prevState){
      if(this.state!=prevState){
        const state =JSON.parse(window.localStorage.getItem('state'))
      this.setState(()=>(state))
       console.log(2,this.state,window.localStorage.getItem('state'),prevState);
      }
      // console.log(prevState.languages);
      // let data=JSON.parse(window.localStorage.getItem('state'));
      // console.log(data[0].vote);
      

        //window.localStorage.setItem('state',JSON.stringify(prevState.languages))
      
    }
    shouldComponentUpdate(prevProps,prevState){
      const Vote=this.state.languages.map(({vote})=>vote)
     for(let i=0;i<Vote.length;i++)
     {
      if(Vote[i]===4)
      {
        return false
      }
     }
     return true
     
    }
    reset(state){
       window.localStorage.clear(state);
       this.setState({
        languages:[
            {name:"Javascript",vote:0},
            {name:"Python",vote:0},
            {name:"Java",vote:0},
            {name:"C++",vote:0},
            {name:"Kotlin",vote:0},
         ]
       })
      }     
      voteIncrement(index){
        let newLanguageVote=this.state.languages;
        newLanguageVote[index].vote++;
        this.setState({
            languages:newLanguageVote.sort((a,b)=>b.vote-a.vote)
        });
    }
    render() {
      // console.log(this.state.languages.map(({vote})=>vote));
        return (
        <div>
            <h1>Vote your languages</h1>
            <button onClick={this.reset.bind(this)}>Clear All</button>
            <div className="languages">
            {
                this.state.languages.map((item,index)=>
                <div key={index} className='item'>
                    <div className='voteCount' >{item.vote}</div>
                    <div className='lnaguageName'>{item.name}</div>
                    <button onClick={this.voteIncrement.bind(this,index)}>Vote ME</button>
                </div>
                )
            }
            </div>
        </div>
        )
  }
}

export default Vote