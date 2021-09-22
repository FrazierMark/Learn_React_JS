import React from 'react'
import "./Product.css"

const Product = () => {
    return (
        <div className="product">
            <div className="Product__info">
                <p>The Lean Startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>🌟</p>
                    ))}
                </div>
            </div>
            <img src={img} alt="" />
            
            <button>Add to Basket</button>
        </div>
    )
}

export default Product;
