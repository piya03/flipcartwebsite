import React from "react"

import "./body.css"

class SingleCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {img, disc, price, color,size, brand} = this.props.cardData
        return (


                <div className='singleCard'>
                    <div className='circle'></div>
                    <div className='imgBox'>
                        <img src={img} />
                    </div>
                    <div className="card-bottom">
                        <div className="brand">{brand}</div>
                        <div className='discription'>{disc}</div>
                        <div className='price'>{price}</div>
                        <div className='size'><span className="text-size">Size </span>{size}</div>
                    </div>
                </div>



        )
    }
}
export default SingleCard