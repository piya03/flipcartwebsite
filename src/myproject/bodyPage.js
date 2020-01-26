import React from "react"
import LeftPage from "./leftSide.js"
import RightPage from "./rightSide.js"

import "./body.css"

class BodyPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        
                <div className="body-container">
            <LeftPage />
            <RightPage />
            </div>
            
        )
    }
}
export default BodyPage