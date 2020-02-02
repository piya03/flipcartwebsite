import React from "react"
import Electronics from "./hoverpages/electronics.js"



class ElectronicsCompound extends React.Component {
    state = {
        show: false
    }
    render() {
        const { label, content, children } = this.props
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
                    {show && <Electronics content1={content} children={children}/>}
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
                    <ElectronicsCompound label="Electronics" >
                        <ul>
                            <li>Phone</li>
                            <li>Charger</li>
                            <li>Laptop</li>
                            <li>Phone</li>
                            <li>Phone</li>
                        </ul>
                    </ElectronicsCompound>
                    <ElectronicsCompound label="TVs & Appliances" content="i tv ">
                        <ul>
                            <li>Phone</li>
                            <li>Charger</li>
                            <li>Laptop</li>
                            <li>Phone</li>
                            <li>Phone</li>
                        </ul>
                    </ElectronicsCompound>
                    <ElectronicsCompound label="Men" content="i men ">
                        <ul>
                            <li>Phone</li>
                            <li>Charger</li>
                            <li>Laptop</li>
                            <li>Phone</li>
                            <li>Phone</li>
                        </ul>
                    </ElectronicsCompound>
                    <ElectronicsCompound label="Women" content="i women ">
                        <ul>
                            <li>Phone</li>
                            <li>Charger</li>
                            <li>Laptop</li>
                            <li>Phone</li>
                            <li>Phone</li>
                        </ul>
                    </ElectronicsCompound>
                    <ElectronicsCompound label="Baby & Kids" content="i baby ">
                        <ul>
                            <li>Phone</li>
                            <li>Charger</li>
                            <li>Laptop</li>
                            <li>Phone</li>
                            <li>Phone</li>
                        </ul>
                    </ElectronicsCompound>
                    <ElectronicsCompound label="Home & Furniture" content="i home">
                        <ul>
                            <li>Phone</li>
                            <li>Charger</li>
                            <li>Laptop</li>
                            <li>Phone</li>
                            <li>Phone</li>
                        </ul>
                    </ElectronicsCompound>
                    <ElectronicsCompound label="Sports, Books & More" content="i book">
                        <ul>
                            <li>Phone</li>
                            <li>Charger</li>
                            <li>Laptop</li>
                            <li>Phone</li>
                            <li>Phone</li>
                        </ul>
                    </ElectronicsCompound>
                    <ElectronicsCompound label="Offer Zone" content="i offer ">
                        <ul>
                            <li>Phone</li>
                            <li>Charger</li>
                            <li>Laptop</li>
                            <li>Phone</li>
                            <li>Phone</li>
                        </ul>
                    </ElectronicsCompound>

                </ul>
            </div>
        </div>
    )
}



export default BottomHeader