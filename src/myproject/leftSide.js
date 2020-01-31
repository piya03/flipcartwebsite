import React from "react"
import Brand from "./brand.js"
import CustomerRating from "./customerRating.js"
import Color from "./color.js"
import "./leftBody.css"
class LeftPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: true
        }
    }
    showHide = (value) =>{
    this.setState((pstate) => ({
        active : !pstate.active
    }))
    }
    render(){
     const { active } = this.state
    return (
        <div className="leftside">
            <h5>Filters</h5>
            <div className="categories">
                <p>CATEGORIES</p>
                <div containerClass='footwear-text'>
                    <div className='footwear-text'><i class="fa fa-angle-down" 
                    style = {{transform: active ? 'rotate(0deg)' : 'rotate(-90deg)'}}
                    onClick={this.showHide}></i> footwear</div>
                   {this.state.active && <ul className="footwear-categories">
                        <li><a href='#'>Women's Footwear</a></li>
                        <li><a href='#'>Kids' & Infant Footwear</a></li>
                        <li><a href='#'>Men's Footwear</a></li>
                    </ul> }

                </div>
            </div>

            {/* /////////// */}
            <div className="price-categories">
                <div className="price-text">
                    <div>PRICE</div>
                    <span>CLEAR</span>
                </div>
                <div className="input-range">
                    <input type="range" name="points" min="0" max="10" />
                </div>
                <div className='select-box'>
                    <select>
                        <option value="Min">Min</option>
                        <option value="500">₹500</option>
                    </select>
                    <span>To</span>
                    <select>
                        <option value="500">₹500</option>
                        <option value="1000">₹1000</option>
                        <option value="1500">₹1500</option>
                        <option value="2000">₹2000</option>
                        <option value="3000">₹3000</option>
                        <option value="Max">₹3000+</option>
                    </select>
                </div>
            </div>
            {/* /////////////////// */}
           <Brand />
           <CustomerRating />
           <Color />
        </div>
    )
    }
}
export default LeftPage