import './Category.scss';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Category = ({ categories }) => {
  useEffect(() => {
  });
  return (
    <div className="shop-by-category">
      <div className="categories">
        { categories?.data?.map((item) => (
          <div key={item.id} className="category">
            <img
              key={item.id}
              src={process.env.REACT_APP_DEV_URL + (item.attributes.img.data[0]?.attributes.url || '')}
              alt=""
            />
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
};

Category.defaultProps = {
  categories: { data: [] },
};
