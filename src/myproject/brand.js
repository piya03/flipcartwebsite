import React from "react";
import LeftPage from "./leftBody.css";

class Brand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        active : true
    }
  }
  hideShow = () =>{
      this.setState((pstate) =>({
          active: !pstate.active
      }))
  }
  render() {
    return (
      <div className="brand-categories">
        <div className="brand-text">
          <div>BRAND</div>
          <span>
            <i class="fa fa-angle-down" onClick ={this.hideShow}></i>
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
                value="Puma"
              />
              <label for="checkbox_id">Puma</label>
            </div>
            <div>
              <input type="checkbox" name="checkbox" value="REEBOK" />
              <label for="checkbox_id">REEBOK</label>
            </div>
            <div>
              <input type="checkbox" name="checkbox" value="Sparx" />
              <label for="checkbox_id">Sparx</label>
            </div>
            <div>
              <input type="checkbox" name="checkbox" value="Asian" />
              <label for="checkbox_id">Asian</label>
            </div>
            <div>
              <input type="checkbox" name="checkbox" value="Lee Cooper" />
              <label for="checkbox_id">Lee Cooper</label>
            </div>
            <span className="more-brand"> 1640 MORE</span>
          </div>
    </div> }
      </div>
    );
  }
}
export default Brand;
