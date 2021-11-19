import { render } from "@testing-library/react";
import { Component } from "react";

class ProductItem extends Component{
    constructor(){
        super();
    }
        

    render(){
        const formatPrice = (price) => `$${price.toFixed(2)}`;

        let { img, name, price, description}= this.props.products
        return(
            <div id='product-item-container' >
                <div><h2>{name}</h2></div> 
                <div>Price: ${price.toFixed(2)}</div>
                <button >  Add To Cart</button>
                <br/>
                <img src = {img} alt='product image'/>
                <div>{description}</div>
            </div>
    )
    }
}

export default ProductItem