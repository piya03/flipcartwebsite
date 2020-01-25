import React from "react"
import Header from "./header.js"
import "./common.css"

class MainPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
         <div>
             <Header />
         </div>
        )
    }
}
export default MainPage