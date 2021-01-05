import React from "react";
import Product from './product'
import Photo from '../../images/legume/11.jpg'
import * as API_PRODUCTS from "../api/products_api";
class Products extends React.Component {
    constructor(props) {
        super(props);
        this.items=[];
        this.addItem= this.props.addItem2;
        this.state = {
            produse: [],
            ok:false
        };
        this.fetchProducts= this.fetchProducts.bind(this);
        this.fetchProducts();
    }
    fetchProducts(){
        return API_PRODUCTS.getProducts((result, status, err) => {
            if (result !== null && status === 200) {
                //acum in resul avem toti pacientii din baza de date.
                this.item={
                    id:0,
                    name:"",
                    price:0,
                    description:"",
                    image:"",
                    category:"",
                    country:"",
                    discount:0,
                    season:"",
                    cantity:""

                };
                this.aux=[]
                for(let i=0;i<result.length;i++){
                    this.item={
                        id:result[i].id,
                        name:result[i].name,
                        price:result[i].price,
                        description:result[i].description,
                        image:result[i].image,
                        category:result[i].category,
                        country:result[i].country,
                        discount:result[i].discount,
                        season:result[i].season,
                        cantity:result[i].cantity
                    };
                   this.aux[i]=this.item;
                   this.items[i]=this.item;
                }

                this.setState(() => ({
                    ok: true
                }));
            } else {
                this.setState(({
                    errorStatus: status,
                    error: err
                }));
            }
        });
    }


    render() {
        const {ok}= this.state;

        if(ok){
        return (
            <div>
                <div className="container mt-4">
                    <div className="row">
                        {this.items.map(item => <Product key={item.id} imagine={item.image} product={item} addItem={this.addItem} /> )}
                    </div>
                </div>
            </div>
        );}
        return null;
    }
}
export default Products;
