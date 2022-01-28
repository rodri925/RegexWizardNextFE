/* eslint-disable react/jsx-props-no-spreading */
import propTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

MyApp.propTypes = {
  Component: propTypes.elementType.isRequired,
  pageProps: propTypes.elementType.isRequired,
};
export default MyApp;
