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
        const { colorName } = this.props
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
                                value="{colorName[0]}"
                            />
                            <span className='circle-color circle-color1'></span>
                            <label for="checkbox_id">{colorName[0]}</label>
                        </div>
                        <div>
                            <input type="checkbox" name="checkbox" value="{colorName[1]}" />
                            <span className='circle-color circle-color2'></span>
                            <label for="checkbox_id">{colorName[1]}</label>
                        </div>
                        <div>
                            <input type="checkbox" name="checkbox" value="{colorName[2]}" />
                            <span className='circle-color circle-color3'></span>
                            <label for="checkbox_id">{colorName[2]}</label>
                        </div>
                        <div>
                            <input type="checkbox" name="checkbox" value="{colorName[3]}" />
                            <span className='circle-color circle-color4'></span>
                            <label for="checkbox_id">{colorName[3]}</label>
                        </div>

                    </div>
                </div>}
            </div>
        );
    }
}
export default Color