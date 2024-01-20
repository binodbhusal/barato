/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { Context } from '../../../utils/context';
import './CartItem.scss';

const CartItem = () => {
  const { cartItems, handleRemoveCart, handlecartProductQuantity } = useContext(Context);

  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div className="cart-product" key={item.id}>
          <div className="img-container">
            {item.attributes?.img?.data && item.attributes.img.data[0]?.attributes?.url && (
            <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
            )}
          </div>
          <div className="product-details">
            <span className="name">{item.attributes.title}</span>
            <sapn className="close-btn-span"><MdClose className="close-button" onClick={() => handleRemoveCart(item)} /></sapn>

            <div className="text">
              <span>
                { item.attributes.quantity === 1 ? '1 Item' : `${item.attributes.quantity} Items` }
                {' '}
                {' '}
                price
              </span>
              <span>=</span>
              <span className="highlight">
                &euro;
                { (item.attributes.price * item.attributes.quantity).toFixed(2)}
              </span>
            </div>
            <div className="quantity-buttons">
              <span onClick={() => handlecartProductQuantity('dec', item)}>-</span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handlecartProductQuantity('inc', item)}>+</span>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};
export default CartItem;
