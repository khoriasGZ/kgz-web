/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */


/*
 * Code
 */
const Header = ({ categories, onCategoryClick }) => (
  <header id="header">
  {categories.map(category => (
    <a 
    key={category} 
    className="header-category"
    onClick={onCategoryClick(category)}
    >
    {category}
    </a>
  ))}
  </header>
);

// PropTypes
Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

/*
 * Export default
 */
export default Header;
