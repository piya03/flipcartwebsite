import React from "react"
import LeftPage from "./leftBody.css";


class CustomerRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        }
    }
    hideShow = () => {
        this.setState((pstate) => ({
            active: !pstate.active
        }))
    }
    render() {
        const { active } = this.state
        return (
            <div className="brand-categories">
                <div className="brand-text">
                    <div>Customer Ratings</div>
                    <span>
                        <i class="fa fa-angle-down" style={{ transform: active ? 'rotate(180deg)' : 'rotate(0deg' }} onClick={this.hideShow}></i>
                    </span>
                </div>
                {this.state.active && <div className="brand-search-box">
                  
                    <div className="show-brand-list">
                        <div>
                            <input
                                type="checkbox"
                                name="checkbox"
                                id="checkbox_id"
                                value="Puma"
                            />
                            <label for="checkbox_id">4★ & above</label>
                        </div>
                        <div>
                            <input type="checkbox" name="checkbox" value="REEBOK" />
                            <label for="checkbox_id">3★ & above</label>
                        </div>
                        <div>
                            <input type="checkbox" name="checkbox" value="Sparx" />
                            <label for="checkbox_id">2★ & above</label>
                        </div>
                        <div>
                            <input type="checkbox" name="checkbox" value="Asian" />
                            <label for="checkbox_id">1★ & above</label>
                        </div>
                       
                    </div>
                </div>}
            </div>
        );
    }
}
export default CustomerRating