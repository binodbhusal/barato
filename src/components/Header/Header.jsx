import { TbSearch } from 'react-icons/tb';
import { CgShoppingBag } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import './Header.scss';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolls, setScrolls] = useState(false);
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
  return (
    <header className={`header-container ${scrolls ? 'sticky-header' : ''}`}>
      <div className="header-content">
        <div className="left">
          <h4>barato</h4>
        </div>
        <ul className="center">
          <li>Home</li>
          <li>About</li>
          <li>Category</li>
        </ul>
        <div className="right">
          <TbSearch />
          <AiOutlineHeart />
          <span className="cart-icon">
            <CgShoppingBag />
            <span>6</span>
          </span>
        </div>
      </div>
    </header>

  );
};
export default Header;
