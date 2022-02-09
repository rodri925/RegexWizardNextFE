import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ type }) => {
  let text = '';
  if (type === 'correct') {
    text = 'That is correct!';
  } else if (type === 'incorrect') {
    text = 'That is incorrect';
  }
  return <span>{text}</span>;
};

Notification.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Notification;
