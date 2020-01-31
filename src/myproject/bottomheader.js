import React from "react"
import Electronics from "./hoverpages/electronics.js"



class ElectronicsCompound extends React.Component {
state = {
    show: false
}
render() {
    const { label, content } = this.props
    const { show } = this.state
    return (
        <div>
            <li 
            onMouseOver={() => {
                this.setState({
                    show: true
                })
            }}
            onMouseLeave={() => {
                this.setState({
                    show: false
                })
            }}
            >{label} <i class="fa fa-angle-down"></i>
            {show && <Electronics content1= {content} />}
            </li>
            
        </div>
    )
}
}

function BottomHeader() {
    return (
        <div className="bottom-header">
            <div class="container">
                <ul class="bottom-header-ul">
                <ElectronicsCompound label="Electronics" content ="i am "></ElectronicsCompound>
                <ElectronicsCompound label="TVs & Appliances" content ="i tv "></ElectronicsCompound>
                <ElectronicsCompound label="Men" content ="i men "></ElectronicsCompound>
                <ElectronicsCompound label="Women" content ="i women "></ElectronicsCompound>
                <ElectronicsCompound label="Baby & Kids" content ="i baby "></ElectronicsCompound>
                <ElectronicsCompound label="Home & Furniture" content ="i home"></ElectronicsCompound>
                <ElectronicsCompound label="Sports, Books & More" content="i book"></ElectronicsCompound>
                <ElectronicsCompound label="Offer Zone" content ="i offer "></ElectronicsCompound>

                </ul>
            </div>
        </div>
    )
}



export default BottomHeader