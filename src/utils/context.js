import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
      }}
    >
      {children}
    </Context.Provider>

  );
};

export default AppContext;

AppContext.propTypes = {
  children: PropTypes.node,
};
AppContext.defaultProps = {
  children: null,
};
