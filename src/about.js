import React,{Component} from "react";
import moment from "moment";
//class based components
 class About extends Component{
    state={name:"poorvi",contact:"23453554",email:"poorvi12@gmail.com"}
    render(){
        return( 
            <div className="container">
                <h1>
                    "About component"
                </h1>
                <h2>
                    {this.state.name}
                </h2>
                <h2>
                    {this.state.contact}
                </h2>
                <h2>
                    {this.state.email}
                </h2>
                <h2>
                {moment().format('MMMM Do YYYY, h:mm:ss a')}
                </h2>
            </div>
        )
    }
}
 export default About;