import { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import PropTypes from 'prop-types';
import CartItem from './CartItem/CartItem';
import './Cart.scss';
import { Context } from '../../utils/context';

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);
  return (
    <>
      <div className="cart-panel">
        <div className="opac-layer" />
        <div className="cart-content">
          <div className="cart-header">
            <span className="heading">Shopping Cart</span>
            <button
              className="close-btn"
              type="button"
              onClick={() => setShowCart(false)}
            >
              <MdClose />
              <span className="text">Close</span>
            </button>
          </div>
          {!cartItems?.length && (
          <div className="empty-card">
            <BsCartX />
            <span>No Products in the Cart.</span>
            <button type="button" className="btn-cta">RETURN TO SHOP</button>
          </div>
          )}
          {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="sub-total">
                <span className="text">Subtotal:</span>
                <span className="text total">
                  &euro;
                  {' '}
                  {cartSubTotal}
                </span>
              </div>
              <div className="button">
                <button type="button" className="checkout-cta">Checkout</button>
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
  setShowCart: PropTypes.bool,

};
Cart.defaultProps = {
  setShowCart: false,
};
export default Cart;
