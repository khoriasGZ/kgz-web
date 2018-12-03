/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


/*
 * Local import
 */


/*
 * Code
 */
const Link = ({ to, children, className }) => (
  <NavLink
    exact
    to={to}
    className={className}
  >
    {children}
  </NavLink>
);
Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};


/*
 * Export default
 */
export default Link;