import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const Subtotal = () => {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

        {/* <Redirects customer to /payment> */}
      <Button onClick={e => history.push('/payment')}>Proceed to Checkout</Button>
    </div>
    )
}

export default Subtotal;

const Button = styled.button`
    cursor: pointer;
`