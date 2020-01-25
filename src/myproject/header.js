import React from "react"
import BottomHeader from "./bottomheader.js"
import "./common.css"

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        
                <div className="header-container">
                    <ul className="top-header">
                        <li><a href="#">flipKart</a></li>
                        <li class="serch-box"><input type='text' placeholder='search...' /><span><i class="fa fa-search"></i></span></li>
                        <li><a href="#">Log in</a></li>
                        <li><a href='#'>More</a></li>
                        <li><a href='#'><span><i class="fa fa-shopping-cart"></i></span>Cart</a></li>
                    </ul>
                
            <BottomHeader />
            
            </div>
            
        )
    }
}
export default Header