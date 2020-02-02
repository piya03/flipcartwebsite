import React from "react"

import "./body.css"

class SingleCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { changeData, data, index} = this.props
        const { img, disc, price, color, size, brand } = this.props.cardData

        let finalHeartClass = "circle"
        if(data[index].color === "green") {
            finalHeartClass = `${finalHeartClass} green-heart`
        } else {
            finalHeartClass = `${finalHeartClass} red-heart`
        }
        
        return (


            <div className='singleCard'>
                <div className={finalHeartClass} style={{ backgroundColor: color }}
                    onClick={() => {
                        const newData = [...data]
                        if (color === "green") {
                            newData[index].color = "red"
                           
                        } else {
                            newData[index].color = "green"
                        }
                        changeData(newData)
                    }}></div>
                <div className='imgBox'>
                    <img src={img} />
                </div>
                <div className="card-bottom">
                    <div className="brand">{brand}</div>
                <div className='discription'><span>{disc}</span><img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png" /></div>
                    <div className='price'>{price}</div>
                    <div className='size'><span className="text-size">Size </span>{size}</div>
                </div>
            </div>



        )
    }
}
export default SingleCard