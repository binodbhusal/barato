import { useContext, useEffect, useRef } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { loadStripe } from '@stripe/stripe-js';
import CartItem from './CartItem/CartItem';
import './Cart.scss';
import { Context } from '../../utils/context';
import { makePaymentRequest } from '../../utils/api';

const Cart = ({ showCart, setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);
  const cartContentRef = useRef(null);
  const navigate = useNavigate();
  const handlePayment = async () => {
    try {
      const stripePromise = loadStripe(
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
      );
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post('/api/orders', {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (cartContentRef.current && cartContentRef.current.contains(event.target)) return;
      setShowCart(false);
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [setShowCart]);

  return (
    <>
      <div className={`cart-panel ${showCart ? '' : 'hide'}`}>
        <div className="opac-layer" />
        <div className={`cart-content ${showCart ? '' : 'hide'}`} ref={cartContentRef}>
          <div className="cart-header">
            <span className="heading">Your Cart</span>
            <button
              className="close-btn"
              type="button"
              aria-label="closebtn"
              onClick={() => {
                setShowCart(false);
              }}
            >
              <MdClose />

            </button>
          </div>
          {!cartItems?.length && (
          <div className="empty-card">
            <BsCartX />
            <span>No Products in the Cart.</span>
            <button
              type="button"
              className="btn-cta"
              onClick={() => {
                navigate('/');
                setShowCart(false);
              }}
            >
              Continue Shopping

            </button>

          </div>
          )}
          {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="sub-total">
                <span className="text">Cart total:</span>
                <span className="text total">
                  &euro;
                  {' '}
                  {cartSubTotal}
                </span>
              </div>
              <div className="button">
                <button
                  type="button"
                  className="checkout-cta"
                  onClick={handlePayment}
                >
                  <span>
                    Confirm Order
                    {'  '}
                    <IoIosArrowForward />
                  </span>

                </button>
              </div>
            </div>
          </>
          )}
        </div>
      </div>
    </>
  );
};
Cart.propTypes = {
  setShowCart: PropTypes.func,
  showCart: PropTypes.bool,
};
Cart.defaultProps = {
  setShowCart: false,
  showCart: false,

};
export default Cart;
