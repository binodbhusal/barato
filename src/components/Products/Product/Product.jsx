/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Product.scss';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  useEffect(() => {

  });
  const handleProductClick = () => {
    navigate(`singleproduct/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="product-card"
      onClick={handleProductClick}
    >
      <div className="thumb-nail">
        <img
          src={process.env.REACT_APP_DEV_URL
          + data.img.data[0]?.attributes.url || ''}
          alt=""
        />
      </div>
      <div className="product-details">
        <sapn className="name">{data.title}</sapn>
        <sapn className="price">
          &euro;
          {data.price}

        </sapn>
      </div>
    </div>

  );
};

export default Product;
Product.propTypes = {
  id: PropTypes.number,
  data: PropTypes.shape({
    img: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          attributes: PropTypes.shape({
            url: PropTypes.string.isRequired,
          }),
        }),
      ),
    }),
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
  }),
};

Product.defaultProps = {
  id: null,

  data: {
    img: {
      data: [{
        attributes: {
          url: '',
        },
      }],
    },
    title: '',
    price: 0,
  },
};
