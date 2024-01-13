import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import prod from '../../../assets/products/earbuds-prod-1.webp';
import './CartItem.scss';

const CartItem = () => {
  useEffect(() => {

  });
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={prod} alt="" />
        </div>
        <div className="product-details">
          <span className="name">Product Name</span>
          <MdClose className="btn-close" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span className="highlight">&euro;49,99</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
