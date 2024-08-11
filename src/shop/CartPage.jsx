import React, { useEffect, useState } from 'react';
import PageHeader from "../Components/PageHeader";
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
  const [cartItems , setCartItems] = useState([]);
  // useEffect
  useEffect(()=> {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  } , [])
  // calculate price functionality
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  }
  // handle quantitiy increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);
    localStorage.setItem("cart" , JSON.stringify(cartItems));
  }
  // handle quantitiy decrease
  const handleDecrease = (item) => {
    if(item.quantity > 1){
      item.quantity -= 1;
      setCartItems([...cartItems]);
      localStorage.setItem("cart" , JSON.stringify(cartItems));
    }
  }
  // handle remove item
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    // update new cart
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  }
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart" , JSON.stringify(cart));
  }
  // cart subtotal 
  const cartSubtotal = cartItems.reduce((total,items) => {
    return total + calculateTotalPrice(items);
  }, 0)
  // order total
  const orderTotal = cartSubtotal;
  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart PAge"} />
      {/* content */}
      <div className="shop-cart padding-tb"> 
        <div className="container">
          <div className="section-wrapper">
            {/* top cart */}
            <div className="cart-top">
              <table>
                {/* table head */}
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                {/* table body */}
                <tbody>
                  {
                    cartItems.map((item,index) => (
                      <tr key={index}>
                        <td className="product-item cat-product">
                          <div className="p-thumb">
                            <Link to="/shop">
                              <img src={item.img} alt="" />
                            </Link>
                          </div>
                          <div className="p-content">
                            <Link to="/shop">{item.name}</Link>
                          </div>
                        </td>
                        {/*  */}
                        <td className="cat-price">${item.price}</td>
                        {/*  */}
                        <td className='cat-quantity'>
                          <div className="cart-plus-minus">
                            <div className="dec qtybutton"
                            onClick={() => handleDecrease(item)}>-</div>
                            <input type="text" name="qtybutton" 
                            value={item.quantity} 
                            className='cart-plus-minus-box'/>
                            <div className='inc qtybutton'
                            onClick={() => handleIncrease(item)}>+</div>
                          </div>
                        </td>
                        {/*  */}
                        <td className='cat-toprice'>${calculateTotalPrice(item)}</td>
                        {/*  */}
                        <td className='cat-edit'>
                          <a href="#" onClick={() => handleRemoveItem(item)}>
                            <img src={delImgUrl} alt="" />
                          </a>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            {/* ----- cart top ends ----- */}

            {/* cart bottom */}
            <div className="cart-bottom">
              <div className="cart-checkout-box">
                {/*  */}
                <from className="coupon">
                  <input type="text" name="coupon" id="coupon"
                  placeholder='Coupon Code Here...' 
                  className="cart-page-input-text" />
                  <input type="submit" value="Apply Coupon"/>
                </from>
                {/*  */}
                <form className="cart-checkout">
                  <input type="submit" value="Update Cart"/>
                  <div>
                    <CheckOutPage/>
                  </div>
                </form>
              </div>
              {/* shopping box */}
              <div className="shiping-box">
                <div className="row">
                  {/* left side */}
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shipping</h3>
                      <div className="outline-select">
                        <select >
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="bd">Bangladesh </option>
                          <option value="pak"> Pakistan </option>
                          <option value="ind"> India </option>
                          <option value="np"> Nepal </option>
                        </select>
                        <span className="select-icon">
                          <i className='icofont-rounded-down'></i>
                        </span>
                      </div>
                      {/* shiping */}
                      <div className="outline-select shipping-select">
                      <select >
                          <option value="uk">New York</option>
                          <option value="bd">Faisalabad </option>
                          <option value="pak"> Karcahi </option>
                          <option value="ind"> New Delhi </option>
                          <option value="np"> Nepal </option>
                        </select>
                        <span className="select-icon">
                          <i className='icofont-rounded-down'></i>
                        </span>
                      </div>
                      {/* inputs */}
                      <input type="text" name='postalCode' id="postalCode"
                      placeholder='postalCode/ZIP*' className='cart-page-input-text'/>
                      <button type='submit'>Update Adress</button>
                    </div>
                  </div>
                  {/* right side */}
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className='pull-left'>Cart Subtotal</span>
                          <p className='pull-right'>${cartSubtotal}</p>                         
                        </li>
                        <li>
                          <span className='pull-left'>Shipping and Handling</span>
                          <p className='pull-right'>Free Shipping</p>                         
                        </li>
                        <li>
                          <span className='pull-left'>Order total</span>
                          <p className='pull-right'>${orderTotal.toFixed(2)}</p>                         
                        </li>                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>





            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage;
