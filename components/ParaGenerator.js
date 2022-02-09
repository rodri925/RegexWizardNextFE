import React from 'react';
import PropTypes from 'prop-types';

const ParaGenerator = ({ array }) => (
  <>
    {array.map((word) => <p>{word}</p>)}
  </>
);

ParaGenerator.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ParaGenerator;
