import React from "react"
import Header from "./header.js"
import BodyPage from "./bodyPage.js"
import "./common.css"

class MainPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
         <div>
             <Header />
             <BodyPage />
         </div>
        )
    }
}
export default MainPage