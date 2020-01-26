import React from "react"
import SingleCard from "./singleCard.js"
import "./body.css"
const ServerCardData = [{
    img: "https://img.etimg.com/thumb/msid-70101475,width-643,imgsize-366669,resizemode-4/skechers-gorun-7-helps-in-easy-foot-movement-and-provides-great-support-.jpg",
    disc: "men shoes",
    price: "1000 Rs",
    color: "green",
    size: "5,6,7,8",
    brand: "ADIDAS"
},
{
    img: "https://rukminim1.flixcart.com/image/580/696/jxc5a4w0/shoe/5/9/u/19032608-11-puma-black-white-firecracker-original-imafbkzdvrbmmgfv.jpeg?q=50",
    disc: "men shoes",
    price: "1000 Rs",
    color: "green",
    size: "5,6,7,8",
    brand: "ADIDAS"

},
{
    img: "https://rukminim1.flixcart.com/image/580/696/jvif0y80/shoe/s/m/h/2044519-9-puma-red-original-imafgdpzgthqszfp.jpeg?q=50",
    disc: "men shoes",
    price: "1000 Rs",
    color: "green",
    size: "5,6,7,8",
    brand: "Puma"

},
{
    img: "https://img.etimg.com/thumb/msid-70101475,width-643,imgsize-366669,resizemode-4/skechers-gorun-7-helps-in-easy-foot-movement-and-provides-great-support-.jpg",
    disc: "men shoes",
    price: "1000 Rs",
    color: "green",
    size: "5,6,7,8",
    brand: "Nike"
},
{
    img: "https://img.etimg.com/thumb/msid-70101475,width-643,imgsize-366669,resizemode-4/skechers-gorun-7-helps-in-easy-foot-movement-and-provides-great-support-.jpg",
    disc: "men shoes",
    price: "1000 Rs",
    color: "green",
    size: "5,6,7,8",
    brand: "Nike"

},
{
    img: "https://img.etimg.com/thumb/msid-70101475,width-643,imgsize-366669,resizemode-4/skechers-gorun-7-helps-in-easy-foot-movement-and-provides-great-support-.jpg",
    disc: "men shoes",
    price: "1000 Rs",
    color: "green",
    size: "5,6,7,8,9,10,11",
    brand: "REEBOK"

},
{
    img: "https://img.etimg.com/thumb/msid-70101475,width-643,imgsize-366669,resizemode-4/skechers-gorun-7-helps-in-easy-foot-movement-and-provides-great-support-.jpg",
    disc: "men shoes",
    price: "4000 Rs",
    color: "green",
    size: "6,7,8,10",
    brand: "REEBOK"

}]
class RightPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ServerCardData
        }
    }

    render() {
        const { data } = this.state
        return (
            <div className='rightbody-container'>
                <div className='all-cards'>
                    {data.map((each) => {
                        return (
                            <SingleCard cardData={each} />

                        )
                    })}

                </div>
            </div>
        )
    }
}
export default RightPage