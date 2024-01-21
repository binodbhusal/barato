import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';
import './Search.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`,
  );

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
            onChange={handleChange}
          />
          <MdClose onClick={() => setShowSearch(false)} />
        </div>
        <div className="search-result-content">
          <div className="search-result">
            {data && data.data && data.data.map((item) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <div
                className="search-result-item"
                role="button"
                tabIndex={0}
                key={item.id}
                onClick={() => {
                  navigate(`/singleproduct/${item.id}`);
                  setShowSearch(false);
                }}
              >
                <div className="img-container">
                  <img
                    src={
                    process.env.REACT_APP_DEV_URL
                    + item.attributes.img.data[0].attributes.url
                  }
                    alt=""
                  />
                </div>
                <div className="product-details">
                  <span className="name">{item.attributes.title}</span>
                  <span className="description">{item.attributes.Description}</span>
                </div>

              </div>
            ))}
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
