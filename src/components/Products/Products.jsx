/* eslint-disable react/prop-types */
import { Tab, Tabs } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useEffect, useContext, useState } from 'react';
import './Products.scss';

import Product from './Product/Product';
import { Context } from '../../utils/context';

const Products = ({ products, innerpage, headingText }) => {
  const { handleAddtoCart } = useContext(Context);
  const [value, setValue] = useState('all');
  const productsData = Array.isArray(products.data) ? products.data : [];

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
  });
  const topRatedItems = productsData.filter(
    (item) => item.attributes.categoryitems === 'topRated',
  );
  const newArivalsItems = productsData.filter(
    (item) => item.attributes.categoryitems === 'newArivals',
  );
  const bestSellersItems = productsData.filter(
    (item) => item.attributes.categoryitems === 'bestSellers',
  );
  return (
    <div className="products-container">
      { !innerpage && <div className="section-heading">{headingText}</div> }
      <Tabs
        className="tab-menu mb-4"
        activeKey={value}
        onSelect={handleChange}
      >
        <Tab title="All" eventKey="all" className="tab-li" />
        <Tab title="New Arivals" eventKey="newArivals" />
        <Tab title="Best Sellers" eventKey="bestSellers" />
        <Tab title="Top Rated" eventKey="topRated" />

      </Tabs>
      <div className="products">
        {value === 'all' && productsData.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            data={product.attributes}
            handleAddtoCart={handleAddtoCart}
          />
        ))}
        {value === 'newArivals' && newArivalsItems.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            data={product.attributes}
            handleAddtoCart={handleAddtoCart}
          />
        ))}
        {value === 'bestSellers' && bestSellersItems.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            data={product.attributes}
            handleAddtoCart={handleAddtoCart}
          />
        ))}
        {value === 'topRated' && topRatedItems.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            data={product.attributes}
            handleAddtoCart={handleAddtoCart}
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
