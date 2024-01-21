import { TbSearch } from 'react-icons/tb';
import { CgShoppingBag } from 'react-icons/cg';

import { IoPersonOutline } from 'react-icons/io5';
import { useAuth0 } from '@auth0/auth0-react';

import './Header.scss';
import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import '../Cart/Cart.scss';

import Search from './Search/Search';
import { Context } from '../../utils/context';

const Header = () => {
  const {
    loginWithRedirect, isAuthenticated, user, logout,
  } = useAuth0();

  const { cartCount } = useContext(Context);
  const navigate = useNavigate();
  const [scrolls, setScrolls] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolls(true);
    } else {
      setScrolls(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  const handleClick = () => {
    navigate('/');
  };
  const handlelogOut = () => {
    logout({ returnTo: window.location.origin });
  };
  const toggleUserProfile = () => {
    setShowUserInfo(!showUserInfo);
  };
  return (
    <>
      <header className={`header-container ${scrolls ? 'sticky-header' : ''}`}>
        <div className="header-content">
          <div className="left">
            <Link to="/" onClick={handleClick}>
              <img
                src="../assets/barato-logo.png"
                alt=""
              />
            </Link>
          </div>
          <ul className="center-items">
            <Link to="/" onClick={handleClick}>
              <li>Home</li>
            </Link>
            <li>Categories</li>
            <li>About</li>
          </ul>
          <div className="right">
            <div className="search-container">
              <input type="text" placeholder="Search" onClick={() => setShowSearch(true)} />
              <TbSearch className="search-icon" onClick={() => setShowSearch(true)} />
            </div>
            <div className="person">
              { isAuthenticated ? (
                <>
                  <button type="button" onClick={toggleUserProfile}>
                    <img src={user.picture} alt={user.name} />
                  </button>
                  {showUserInfo && (
                  <div className="user-info">
                    <span className="user-info-span">
                      <img src={user.picture} alt={user.name} />
                      {user.name}
                      {' '}
                      <br />
                      {user.email}
                    </span>
                    <button
                      type="button"
                      onClick={handlelogOut}
                    >
                      Logout

                    </button>
                  </div>
                  )}

                </>
              ) : (
                <button onClick={() => loginWithRedirect()} type="button">
                  <span className="person-span">
                    <IoPersonOutline />
                    {' '}
                    Log in
                  </span>
                </button>

              )}

            </div>
            <span className="cart-icon">
              <CgShoppingBag onClick={() => setShowCart(true)} />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>

      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};
export default Header;
