import PropTypes from 'prop-types';
import { useEffect } from 'react';
import './Products.scss';

import Product from './Product/Product';

const Products = ({ products, innerpage, headingText }) => {
  useEffect(() => {
  });
  return (
    <div className="products-container">
      { !innerpage && <div className="section-heading">{headingText}</div> }
      <div className="products">
        {products?.data?.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            data={product.attributes}
          />
        ))}

      </div>
    </div>
  );
};
Products.propTypes = {
  innerpage: PropTypes.bool,
  headingText: PropTypes.string,
  products: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

Products.defaultProps = {
  innerpage: false,
  headingText: null,
  products: { data: [] },
};
export default Products;
