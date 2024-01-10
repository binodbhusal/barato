import { createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

const AppContext = ({ children }) => <Context.Provider>{children}</Context.Provider>;
export default AppContext;

AppContext.propTypes = {
  children: PropTypes.node,
};
AppContext.defaultProps = {
  children: null,
};
