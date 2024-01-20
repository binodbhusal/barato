import './Home.scss';
import {
  useEffect, useContext, useCallback, useState,
} from 'react';
// import Banner from './Banner/Banner';
import Category from './Category/Category';
import Products from '../Products/Products';
import fetchDataFromApi from '../../utils/api';
import { Context } from '../../utils/context';
import MainCarousel from './Banner/MainCarousel';
import { slidesLg, slidesSm } from './Banner/slideImgData';

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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (

    <div>
      <div
        className="carouselimg-container"
      >
        { windowWidth > 768 ? (
          <MainCarousel autoSlides>
            {slidesLg.map((s) => (
              <img
                src={s.path}
                key={s.id}
                alt={`carouselSlide-${s.id}`}
                style={{ objectFit: 'cover', width: '100%' }}

              />
            ))}
          </MainCarousel>
        ) : (
          <MainCarousel autoSlides>
            {slidesSm.map((s) => (
              <img
                src={s.path}
                key={s.id}
                alt={`carouselSlide-${s.id}`}
                style={{ objectFit: 'cover', width: '100%' }}
              />
            ))}
          </MainCarousel>
        )}
      </div>
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} headingText="Shop By Categories" />

          <Products products={products} headingText="Feature Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
