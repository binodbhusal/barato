import './Home.scss';
import { useEffect, useContext, useCallback } from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Products from '../Products/Products';
import fetchDataFromApi from '../../utils/api';
import { Context } from '../../utils/context';

const Home = () => {
  const {
    categories, setCategories, products, setProducts,
  } = useContext(Context);
  const getCategories = useCallback(() => {
    fetchDataFromApi('/api/categories?populate=*').then((res) => {
      setCategories(res);
    });
  }, [setCategories]);

  const getProducts = useCallback(() => {
    fetchDataFromApi('/api/products?populate=*')
      .then((res) => {
        setProducts(res);
      });
  }, [setProducts]);
  useEffect(() => {
    getCategories();
    getProducts();
  }, [getCategories, getProducts]);

  return (

    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
