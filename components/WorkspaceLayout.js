/* eslint-disable no-useless-concat */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Training.module.css';
import Notification from './Notification';
import ParaGenerator from './ParaGenerator';

const WorkspaceLayout = ({
  initialtext, paragraphs, title, solution, solutionArray, initialTextArray,
}) => {
  const [regex, setRegex] = useState('');
  const textType = initialTextArray.length > 0 ? initialTextArray : initialtext;

  const missions = [{
    title: 'Welcome to Regex Training',
    id: 0,
    completed: true,
  },
  {
    title: 'Flags and String Literals',
    id: 1,
    completed: false,
  },
  {
    title: 'Alternators and Character Sets',
    id: 2,
    completed: false,
  },
  {
    title: 'Wildcards, Whitespaces, and the Escape Character',
    id: 3,
    completed: true,
  },
  {
    title: 'Ranges',
    id: 4,
    completed: false,
  },
  {
    title: 'Shorthand Character Classes',
    id: 5,
    completed: false,
  },
  {
    title: 'Groupings and Word Boundaries',
    id: 6,
    completed: false,
  },
  {
    title: 'Quantifiers',
    id: 7,
    completed: false,
  },
  {
    title: 'Optional Quantifiers',
    id: 8,
    completed: false,
  },
  {
    title: 'Kleene Stars and Kleene Pluses',
    id: 9,
    completed: true,
  },
  {
    title: 'Anchors',
    id: 10,
    completed: false,
  },
  {
    title: 'Moving Forward',
    id: 11,
    completed: false,
  },
  ];
  const [indexOfFwdSlashes, setIndexOfFwdSlashes] = useState([]);
  const [filteredText, setFilteredText] = useState(textType);

  console.log(filteredText);
  console.log(solution);
  /* keep an index of all of the forward slashes, so that the string
  is only split by the first and last slashes */
  useEffect(() => {
    const indexPlaceholder = [];
    for (let i = 0; i < regex.length; i += 1) {
      if (regex[i] === '/') {
        indexPlaceholder.push(i);
      }
    }
    setIndexOfFwdSlashes(indexPlaceholder);
  }, [regex]);
  /* If the regex is in the correct format, parse the paragraph */
  const filterPara = () => {
    if (indexOfFwdSlashes[0] !== 0 || indexOfFwdSlashes.length < 2) {
      return;
    }
    try {
      const regexNoFlags = regex.slice(1, (indexOfFwdSlashes[indexOfFwdSlashes.length - 1]));
      let regexFlags = '';
      if (indexOfFwdSlashes[indexOfFwdSlashes.length - 1] === (regex.length - 1)) {
        regexFlags = '';
      } else {
        regexFlags = regex.slice(indexOfFwdSlashes[indexOfFwdSlashes.length - 1] + 1);
      }
      let typedRegex = '';
      typedRegex = new RegExp(regexNoFlags, regexFlags);
      if (initialTextArray.length === 0) {
        const newTextArray = initialtext.match(typedRegex);
        let newTextString = '';
        if (!newTextArray || newTextArray.length === 0) {
          setFilteredText('');
          return;
        }
        for (let i = 0; i < newTextArray.length; i += 1) {
          newTextString = `${newTextString}${newTextArray[i]} `;
        }
        setFilteredText(newTextString.trim());
      } else {
        const newTextArr = textType.filter((word) => typedRegex.test(word));
        console.log(newTextArr);
        setFilteredText(newTextArr);
      }
    } catch (error) { console.log(error); }
  };

  const resetText = (event) => {
    event.preventDefault();
    setRegex('');
    setFilteredText(textType);
  };

  const missionRedirect = (event, id) => {
    event.preventDefault();
    if (id === 0) {
      window.location.href = 'http://localhost:3000/training';
    } else {
      window.location.href = `http://localhost:3000/training/${id}`;
    }
  };

  /* Solution checker for arrays */
  const matchingSolutions = () => {
    if (initialTextArray.length > 0) {
      if (solutionArray.length !== filteredText.length) {
        return false;
      }
      for (let i = 0; i < filteredText.length; i += 1) {
        if (!solutionArray.includes(filteredText[i])) {
          return false;
        }
      }
      return true;
    }
    return false;
  };

  /* filter the paragraph every time the regex input changes */
  useEffect(() => {
    filterPara();
  }, [regex]);

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.tableBox}>
        <div className={styles.selectWrapper}>
          <select>
            <option value="lessons">Lessons</option>
            <option value="cheatsheet">Cheatsheet</option>
          </select>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.missionTable}>
            <thead>
              <tr>
                <th>#</th>
                <th>Lesson</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {missions.map((mission) => (
                <tr onClick={(event) => missionRedirect(event, mission.id)}>
                  <td>{mission.id}</td>
                  <td>{mission.title}</td>
                  <td>{mission.completed && '✔'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.innerWrapper}>
        <div className={styles.textBox}>
          <h1>{title}</h1>
          {paragraphs.map((para) => (
            <p>{para}</p>
          ))}
          <div className={styles.textBoxes}>
            <div className={styles.textBoxForRegex}>
              {initialTextArray.length > 0 && <ParaGenerator array={initialTextArray} />}
              {initialTextArray.length === 0 && <p>{initialtext}</p>}
            </div>
            <div className={styles.textBoxForRegex}>
              {initialTextArray.length > 0 && <ParaGenerator array={filteredText} />}
              {initialTextArray.length === 0 && <p>{filteredText}</p>}
            </div>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          {(solution === filteredText || matchingSolutions()) && <Notification type="correct" />}
          <input type="text" className={styles.inputBox} value={regex} onChange={(e) => setRegex(e.target.value)} />
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.inputBtn}>Submit</button>
            <button type="submit" className={styles.inputBtn} onClick={(event) => resetText(event)}>Reset</button>
          </div>
          <button type="submit" className={`${styles.inputBtn} ${styles.nextBtn}`}>Next Lesson</button>
        </div>
      </div>
    </div>
  );
};

WorkspaceLayout.propTypes = {
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialtext: PropTypes.string.isRequired,
  solution: PropTypes.string.isRequired,
  solutionArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialTextArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WorkspaceLayout;
