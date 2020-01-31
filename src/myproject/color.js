import React from "react"
import LeftPage from "./leftBody.css";


class Color extends React.Component {
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
                    <div>Color</div>
                    <span>
                        <i class="fa fa-angle-down" style={{ transform: active ? 'rotate(180deg)' : 'rotate(0deg' }} onClick={this.hideShow}></i>
                    </span>
                </div>
                {this.state.active && <div className="brand-search-box">

                    <div className="show-brand-list show-color-list">
                        <div>
                            <input
                                type="checkbox"
                                name="checkbox"
                                id="checkbox_id"
                                value="Beige"
                            />
                            <span className='circle-color circle-color1'></span>
                            <label for="checkbox_id">Beige</label>
                        </div>
                        <div>
                            <input type="checkbox" name="checkbox" value="Black" />
                            <span className='circle-color circle-color2'></span>
                            <label for="checkbox_id">Black</label>
                        </div>
                        <div>
                            <input type="checkbox" name="checkbox" value="Blue" />
                            <span className='circle-color circle-color3'></span>
                            <label for="checkbox_id">Blue</label>
                        </div>
                        <div>
                            <input type="checkbox" name="checkbox" value="Brown" />
                            <span className='circle-color circle-color4'></span>
                            <label for="checkbox_id">Brown</label>
                        </div>

                    </div>
                </div>}
            </div>
        );
    }
}
export default Color