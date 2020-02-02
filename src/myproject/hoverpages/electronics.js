import React from "react"
import "./hoverpage.css"

class Electronics extends React.Component{
    constructor(props){
        super(props);
       
    }
   
    render(){
        return(
         <div className='electronic-page'>
       {this.props.children}
            
         </div>
        )
    }
}

export default Electronics