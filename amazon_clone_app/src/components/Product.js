import { ratingClasses } from '@mui/material';
import React from 'react'
import "./Product.css"
import {useStateValue} from "./StateProvider"

const Product = ({ id, title, image, price, rating }) => {
    const [state, dispatch] = useStateValue();

        // Send/dispatch item to data layer/context
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="Product__info">
                <p>The Lean Startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {/* {create an array of length of the ratings passed and loop through them and render out the star emoji the number of times the ratings passed through the props.} */}
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>🌟</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />
            
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
