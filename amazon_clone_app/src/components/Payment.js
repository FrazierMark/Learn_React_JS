import React, { useState, useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';
import { useHistory } from 'react-router';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    const history = useHistory();

    useEffect(() => {
        //generate the stripe secret key that allows us to charge a customer appropriatley

        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        };

        getClientSecret();
    }, [basket])

    console.log('the secrest is ', clientSecret)

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        //Implement stripe processing
        e.preventDefault(); // prevents refreshing
        setProcessing(true); // once button hit, blocks you from clicking more than once

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            // send user to order page after payment submission
            history.replace("/orders")
        })

        // const payload = await stripe
    };

    const handleChange = (e) => {
        //Listen for changes in CardElement
        //and display any errors as the customer types card info
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");

    }

    return (
        <div className="payment" >
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout"> {basket?.length} items</Link>)
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>5432 Python Ave.</p>
                        <p>San Francisco, CA</p>
                    </div>
                </div>

                

                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                

                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Payment Method</h3>
                    </div>
                    <div className="payment__details">

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                            <h3> Order Total: {value} </h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* {ERRORS} */}
                            {error && <div>{error} </div>}
                        </form>

                    </div>
                    
                </div>


            </div>
        </div>
    )
}

export default Payment;
