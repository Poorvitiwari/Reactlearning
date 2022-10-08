import React,{Component} from "react";

class Messege extends Component{
    constructor(){
        super()
        this.state={
            Messege:'Welcome Visitor'
        }
    }
    changeMessege(){
        this.setState({
            Messege:'Thank you for subscribing'
        })
    }

    render(){
        return (
            <div>
                <h1>
                    {this.state.Messege}
                </h1>
                <button onClick={()=>this.changeMessege()}>Subscribe</button>
            </div>
        )
        
    }
}

export default Messege;