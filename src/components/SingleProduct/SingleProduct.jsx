import { useEffect } from 'react';
import './SingleProduct.scss';
import { FaCartPlus, FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import prod from '../../assets/products/earbuds-prod-1.webp';

const Singleproduct = () => {
  useEffect(() => {

  });
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={prod} alt="" />
          </div>
          <div className="right">
            <span className="name">Product Name</span>
            <span className="price">Price</span>
            <span className="description">Description</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="btn-add-to-cart" type="button">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <sapn className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span> Headphones</span>

              </span>
              <span className="text-bold share">
                Share:
                <span className="social-icons">
                  <FaFacebook size={16} />
                  <FaSquareXTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedin size={16} />
                </span>

              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>

  );
};

export default Singleproduct;
