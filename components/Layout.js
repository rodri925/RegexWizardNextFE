import React from 'react';
import propTypes from 'prop-types';
import Navbar from './navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

Layout.propTypes = {
  children: propTypes.elementType.isRequired,
};
export default Layout;
