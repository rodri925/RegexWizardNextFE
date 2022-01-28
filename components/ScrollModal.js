import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Dashboard.module.css';

const ScrollModal = ({
  regex, user, desc, setToggleModal,
}) => (
  <div className={styles.scrollModal}>
    <button type="submit" onClick={() => setToggleModal(false)}>X</button>
    <h3>
      Regex:&nbsp;
      {regex}
    </h3>
    <p>
      Description:&nbsp;
      {desc}
    </p>
    <span>
      User:&nbsp;
      {user}
    </span>
  </div>
);

ScrollModal.propTypes = {
  regex: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  setToggleModal: PropTypes.func.isRequired,
};
export default ScrollModal;
