import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCatrCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const handleSubTotal = (items) => {
    let subTotal = 0;
    items.forEach((item) => {
      subTotal += item.attributes.price * item.attributes.quantity;
    });
    return subTotal.toFixed(2);
  };

  const handleCartCount = (items) => {
    let cartCount = 0;
    items.forEach((item) => {
      cartCount += item.attributes.quantity;
    });
    return cartCount;
  };

  useEffect(() => {
    const subtotal = handleSubTotal(cartItems);
    setCartSubTotal(subtotal);

    const count = handleCartCount(cartItems);
    setCatrCount(count);
  }, [cartItems]);

  const handleAddtoCart = (product, quantity) => {
    let items = [...cartItems];
    const index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
    // If the product is already in the cart, update its quantity

      items[index] = {
        ...items[index],
        attributes: {
          ...items[index].attributes,
          quantity: items[index].attributes.quantity + quantity,
        },
      };
    } else {
    // If the product is not in the cart, add it with the specified quantity

      const newProduct = {
        ...product,
        attributes: {
          ...product.attributes,
          quantity,
        },
      };
      items = [...items, newProduct];// Add the new product to the cart
    }
    setCartItems(items);
  };
  const handleRemoveCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };
  const handlecartProductQuantity = (type, product) => {
    const items = [...cartItems];
    const index = items.findIndex((p) => p.id === product.id);
    if (type === 'inc') {
      items[index].attributes.quantity += 1;
    } else if (type === 'dec') {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCatrCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddtoCart,
        handleRemoveCart,
        handlecartProductQuantity,
        quantity,
        setQuantity,
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
