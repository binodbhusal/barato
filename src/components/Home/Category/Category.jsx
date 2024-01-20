/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './Category.scss';
import '../../Products/Products.scss';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Category = ({ categories, headingText }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`category/${item.id}`);
  };

  return (
    <div className="shop-by-category">
      <div className="section-heading">{headingText}</div>
      <div className="categories">
        { categories?.data?.map((item) => (
          <div key={item.id} className="category" onClick={() => handleClick(item)}>
            <img
              key={item.id}
              src={process.env.REACT_APP_DEV_URL + (item.attributes.img.data[0]?.attributes.url || '')}
              alt=""
            />
            <span>
              {item.attributes.title}
              {' '}

            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;
Category.propTypes = {
  categories: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  headingText: PropTypes.string,

};

Category.defaultProps = {
  categories: { data: [] },
  headingText: PropTypes.string,
};
