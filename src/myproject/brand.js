import React from "react";
import LeftPage from "./leftBody.css";

class Brand extends React.Component {
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
    const { brandName } = this.props
    return (
      <div className="brand-categories">
        <div className="brand-text">
          <div>BRAND</div>
          <span>
            <i class="fa fa-angle-down" style={{ transform: active ? 'rotate(180deg)' : 'rotate(0deg' }} onClick={this.hideShow}></i>
          </span>
        </div>
        {this.state.active && <div className="brand-search-box">
          <div className="search-symbol">
            <span>
              <i class="fa fa-search"></i>{" "}
            </span>
            <input type="search" name="serch" placeholder="Search Brand" />
          </div>
          <div className="show-brand-list">
            <div>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox_id"
                value="{brandName[0]}"
              />
              <label for="checkbox_id">{brandName[0]}</label>
            </div>
            <div>
              <input type="checkbox" name="checkbox" value="{brandName[1]}" />
              <label for="checkbox_id">{brandName[1]}</label>
            </div>
            <div>
              <input type="checkbox" name="checkbox" value="{brandName[2]}" />
              <label for="checkbox_id">{brandName[2]}</label>
            </div>
            <div>
              <input type="checkbox" name="checkbox" value="{brandName[3]}" />
              <label for="checkbox_id">{brandName[3]}</label>
            </div>
            <div>
              <input type="checkbox" name="checkbox" value="{brandName[4]}" />
              <label for="checkbox_id">{brandName[4]}</label>
            </div>
            <span className="more-brand"> {brandName[5]}</span>
          </div>
        </div>}
      </div>
    );
  }
}
export default Brand;
