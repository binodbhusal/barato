import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';
import './Search.scss';
import prod from '../../../assets/products/earbuds-prod-1.webp';

const Search = ({ setShowSearch }) => {
  useEffect(() => {

  });
  return (
    <>
      <div className="search-modal">
        <div className="form-field">
          <input
            type="text"
            ref={(inputElement) => {
              if (inputElement) {
                inputElement.focus();
              }
            }}
            placeholder="Type product name here to search"
          />
          <MdClose onClick={() => setShowSearch(false)} />
        </div>
        <div className="search-result-content">
          <div className="search-result">
            <div className="search-result-item">
              <div className="img-container">
                <img src={prod} alt="" />
              </div>
              <div className="product-details">
                <span className="name">Product Name</span>
                <span className="description">Product Description</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Search.propTypes = {
  setShowSearch: PropTypes.bool,

};
Search.defaultProps = {
  setShowSearch: false,
};
export default Search;
