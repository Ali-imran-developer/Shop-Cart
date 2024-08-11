import React, { useState } from 'react';
import { json, Link } from 'react-router-dom';

const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit."  

const ProductDisplay = ({ item }) => {
    const { name, img, id, price, seller, ratingsCount,quantity } = item;
    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");

    const hadleSizeChange = (event) => {
        setSize(event.target.value);
    }
    const hadleColorChange = (event) => {
        setColor(event.target.value);
    }
    const handleDecrease = () => {
        if(prequantity > 1){
            setQuantity(prequantity - 1)
        }
    }
    const handleIncrease = () => {
        setQuantity(prequantity + 1)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id : id,
            img : img,
            name : name,
            price : price,
            quantity : prequantity,
            size : size,
            color : color,
            coupon : coupon,
        }
        // console.log(product);
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = existingCart.findIndex((item) => item.id === id);
        if(existingProductIndex !== -1){
            existingCart[existingProductIndex].quantity += prequantity;
        }else{
            existingCart.push(product);
        }
        // update local storage
        localStorage.setItem("cart",JSON.stringify(existingCart));
        // reset form field
        setQuantity(1);
        setSize("Select Size");
        setColor("Select Color");
        setCoupon("");
    }

    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className='rating'>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <span>{ratingsCount} review</span>
                </p>
                <h4>${price}</h4>
                <h6>{seller}</h6>
                <p>{desc}</p>
            </div>
            {/* cart component */}
            <div>
                <form onSubmit={handleSubmit}>
                    {/* size */}
                    <div className="select-product size">
                        <select value={size} 
                        onChange={hadleSizeChange}>
                            <option value="Select Size">Select Size</option>
                            <option value="SM">SM</option>
                            <option value="MD">MD</option>
                            <option value="LG">LG</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>
                    {/* color */}
                    <div className="select-product color">
                        <select value={color} 
                        onChange={hadleColorChange}>
                            <option value="Select Size">Select Color</option>
                            <option value="pink">pink</option>
                            <option value="Ash">Ash</option>
                            <option value="Red">Red</option>
                            <option value="White">White</option>
                            <option value="Blue">Blue</option>
                            <option value="Black">Black</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>
                    {/* number */}
                    <div className="cart-plus-minus">
                        <div className='dec qtybutton fw-bold'
                        onClick={handleDecrease}>-</div>
                        <input type="text" name="qtybutton" 
                        id="qtybutton" value={prequantity}
                        className='cart-plus-minus-box' 
                        onChange={(e) => setQuantity(parseInt(e.target.value ,10)) }/>
                        <div className='inc qtybutton fw-bold'
                        onClick={handleIncrease}>+</div>
                    </div>
                    {/* copoun field */}
                    <div className='discount-code mb-2'>
                        <input type="text" 
                        placeholder='Enter Discount Code'
                        onChange={(e) => setCoupon(e.target.value)}/>
                    </div>
                    {/* button */}
                    <button className='lab-btn' type='submit'>
                        <span>Add to Cart</span>
                    </button>
                    <Link to="/cart-page" className='lab-btn bg-primary'>
                        <span>Check Out</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ProductDisplay;
