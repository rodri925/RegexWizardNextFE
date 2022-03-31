import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Dashboard.module.css';

const ScrollModal = ({
  title, regex, user, desc, id, setToggleModal, addModal, editModal, scrollExists,
}) => {
  const [currentRegex, setCurrentRegex] = useState(regex);
  const [currentDesc, setCurrentDesc] = useState(desc);
  const [currentTitle, setCurrentTitle] = useState(title);

  return (
    <div className={styles.scrollModal}>
      <button type="submit" onClick={() => setToggleModal(false)}>X</button>
      <span>Title</span>
      <input
        type="text"
        value={title}
        onChange={(e) => setCurrentTitle(e.target.value)}
      />
      <span>Regex</span>
      <input
        type="text"
        value={regex}
        onChange={(e) => setCurrentRegex(e.target.value)}
      />
      <span>Description</span>
      <textarea
        name="modalDesc"
        placeholder={desc}
        onChange={(e) => setCurrentDesc(e.target.value)}
      />
      <div className={styles.modalBtnWrapper}>
        {!scrollExists
        && (<button type="submit" className={styles.modalBtn} onClick={() => addModal(currentRegex, user, currentDesc, currentTitle)}>Add</button>)}
        {scrollExists
        && (<button type="submit" className={styles.modalBtn} onClick={() => editModal(currentRegex, user, currentDesc, currentTitle, id)}>Edit</button>)}
      </div>
    </div>
  );
};

ScrollModal.propTypes = {
  title: PropTypes.string.isRequired,
  regex: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  setToggleModal: PropTypes.func.isRequired,
  addModal: PropTypes.func.isRequired,
  editModal: PropTypes.func.isRequired,
  scrollExists: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
export default ScrollModal;
