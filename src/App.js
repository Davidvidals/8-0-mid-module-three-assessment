import "./App.css";
import { Component } from "react";
import productData from "./data/productData";
import ProductItem from "./components/product-item";

class App extends Component {
  constructor(){
    super();
    this.state={
      productList: productData,
      price : productData.price,
      productArray: [],
      total : 0
      
    }
  }
  
  handleProductCLick=(product)=>{
    let newArr = [...product]
    this.setState({
      productArray: newArr,
      total: this.state.total + productData.price

    })
  }


  handleInfoAlertsClick=()=>{
    let card = document.getElementById('credit-card')
    let zipCode = document.getElementById('zip-code')
    // let first = document.getElementById('first-name')
    // let last = document.getElementsById('last-name')
    // let email=document.getElementById('email')
    
    
    
    if(card.value.length > 16 || card.value.length ===0){
     return alert('Credit card number is not valid')
    }
    else if(zipCode.value.length <5 || zipCode.value.length === 0){
      return alert('Zip code is not valid')
    }
    else(
       alert('Purchase complete')
    )

  }

  render(){
    let productsScreen = this.state.productList.map((products)=>{
      return(
        <ProductItem products = {products} />
      )
    

    })
    return (
      <div class='display'>
        
        <div id='header'>
          <h1 >My Garage Sale</h1>
        </div>
        
        <div class='products'>
          {productsScreen}
        </div>

        <div id='cart'>
          <h2>Cart</h2>
          <ul>
            <li></li>
          </ul>
          Subtotal -  {this.state.total}<br/>
          Tax -    <br/>
          Total - 

        </div>

        <div id='checkout-container'>
          <h2>Checkout</h2>
          <form id='checkout'>

            <div>
              <label for="first-name">First Name</label><br/>
              <input type="text" id="first-name" name="text-value"/>
            </div>

            <div>
              <label for="last-name">Last Name</label><br/>
              <input type="text" id="last-name" name="text-value"/>
            </div>

            <div>
              <label for="email">Email</label><br/>
              <input type="text" id="email" name="text-value"/>
            </div>

            <div>
              <label for="credit-card">Credit Card</label><br/>
              <input type="text" id="credit-card" name="text-value"/>

              <div>
              <label for="zip-code">Zip Code</label><br/>
              <input type="text" id="zip-code" name="text-value"/>
            </div>
            </div>

            <div>
              <button onClick={this.handleInfoAlertsClick} >Buy Now</button>
              
            </div>
          </form>
        </div>

      </div>
    
  )
  }
}
  

export default App;
