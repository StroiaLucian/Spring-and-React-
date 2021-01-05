import React from 'react';
const Product = (props) => {
    const { imagine } = props;
    return (
        <div className="col-sm-4">
            <div className="card">
                <img src={require(`../../images/legume/${imagine}.jpg`)} className="card-img-top" alt="product"/>
                <div className="card-body">
                    <h5 className="card-title">{props.product.name}</h5>
                    <h6 className="card-price">{props.product.price} lei/{props.product.cantity}</h6>
                    <button className="buton" onClick={() => props.addItem(props.product)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}
export default Product;