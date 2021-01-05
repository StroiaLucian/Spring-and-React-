import React from "react";
import Product from './product'
import Photo from '../../images/legume/11.jpg'
import Products from "./products";
class PreviewProducts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            produse: []
        };
        this.produseleSelectate=this.props.produse;
        this.item={
            id:1,
            name:"Tomatoes",
            price:2.5,
            description:"Descriere",
            image:Photo
        };
        this.items=[this.item,this.item,this.item,this.item,this.item,this.item,this.item,this.item,this.item,this.item,this.item,this.item];
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                            {this.produseleSelectate.map(item =>
                                <tr>
                                    <td>
                                        <div className="Informatii">
                                            <div className="imaginePreview">
                                                <div className="col-sm-4">
                                                    <div className="card2">
                                                        <img src={require(`../../images/legume/${item.image}.jpg`)} className="card-img-top2" alt="product"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="cantitateXpret">Number of products X price</p>
                                            <p className="totalPrice">Price/Product</p>
                                        </div>
                                    </td>
                                 </tr>
                            )
                            }
                            <tr>
                                <td>
                                    <div className="Informatii">
                                        <button > View basket & Checkout </button>
                                        <p className="totalPrice2">Total price:</p>
                                    </div>
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default PreviewProducts;
