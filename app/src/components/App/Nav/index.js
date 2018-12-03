/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import Link from './Link';

/*
 * Code
 */
const Nav = ({ routes }) => (
  <nav id="nav">
    {Object.keys(routes).map(path => (
      <Link
        key={path}
        to={path}
        className="nav-item"
      >
        {routes[path].nav}
      </Link>
    ))}
  </nav>
);
Nav.propTypes = {
  routes: PropTypes.object.isRequired,
};

/*
 * Export default
 */
export default Nav;