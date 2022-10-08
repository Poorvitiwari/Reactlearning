import React from "react";

// function Greet(){
//     return <h1>Hello poorvi</h1>
// }
const Greet=(props)=> {
    // console.log(props);
    // props.name="vishwas"
    const{name,children}=props
    return(
            <>
                <h1>Hello {name}</h1>
                          {children}
            </>
            
    )}

export default Greet