import { useParams } from 'react-router-dom';
import { useState, useContext } from 'react';
import './SingleProduct.scss';
import { FaCartPlus, FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import useFetch from '../../hooks/useFetch';
import { Context } from '../../utils/context';

const Singleproduct = () => {
  const { handleAddtoCart } = useContext(Context);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  if (!data || !data.data || data.data.length === 0) return null;

  const product = data.data[0].attributes;
  const handleIncrement = () => setQuantity((prevState) => prevState + 1);
  const handleDecrement = () => {
    setQuantity((prevState) => (prevState === 1 ? 1 : prevState - 1));
  };
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL
                + product.img.data[0].attributes.url
            }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">
              {' '}
              &euro;
              {' '}
              {product.price}
            </span>
            <span className="description">{product.Description}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>
                  {' '}
                  <button type="button" className="btn-incre" onClick={handleDecrement}>-</button>
                </span>
                <span>{quantity}</span>
                <span><button className="btn-incre" type="button" onClick={handleIncrement}>+</button></span>
              </div>
              <button
                className="btn-add-to-cart"
                type="button"
                onClick={() => {
                  handleAddtoCart(data.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <sapn className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>
                  {' '}
                  {product.categories.data[0].attributes.title}
                </span>
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
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>

  );
};

export default Singleproduct;
