/* eslint-disable no-useless-concat */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Training.module.css';
import Notification from './Notification';
import ParaGenerator from './ParaGenerator';

const WorkspaceLayout = ({
  initialtext, paragraphs, title, solution, solutionArray, initialTextArray, exerciseType,
}) => {
  const [regex, setRegex] = useState('');
  const textType = initialTextArray.length > 0 ? initialTextArray : initialtext;
  /* Missions are lessons, RealMissions are actual missions, will change */
  const [missions, setMissions] = useState([{
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
    title: 'Anchors',
    id: 3,
    completed: false,
  },
  {
    title: 'Wildcards, Whitespaces, and the Escape Character',
    id: 4,
    completed: true,
  },
  {
    title: 'Ranges',
    id: 5,
    completed: false,
  },
  {
    title: 'Shorthand Character Classes',
    id: 6,
    completed: false,
  },
  {
    title: 'Groupings and Word Boundaries',
    id: 7,
    completed: false,
  },
  {
    title: 'Quantifiers',
    id: 8,
    completed: false,
  },
  {
    title: 'Optional Quantifiers',
    id: 9,
    completed: false,
  },
  {
    title: 'Kleene Stars and Kleene Pluses',
    id: 10,
    completed: true,
  },
  {
    title: 'Moving Forward',
    id: 11,
    completed: false,
  },
  ]);

  const [realMissions, setRealMissions] = useState([{
    title: 'Ms. Perl\'s Cupcakes',
    id: 1,
    completed: true,
  },
  {
    title: 'Mr. Fortran\'s Classroom',
    id: 2,
    completed: false,
  },
  {
    title: 'Steve\'s Bank',
    id: 3,
    completed: false,
  },
  {
    title: 'Steve\'s Bank: Part 2',
    id: 4,
    completed: false,
  },
  {
    title: 'Alan\'s Blog',
    id: 5,
    completed: true,
  },
  {
    title: 'Mr. McKinnen vs H4X0R5',
    id: 6,
    completed: false,
  },
  {
    title: 'Marks\'s Project Write Up',
    id: 7,
    completed: false,
  },
  {
    title: 'Mark\'s Project: Part 2',
    id: 8,
    completed: false,
  },
  {
    title: 'Barbara\'s Database',
    id: 9,
    completed: false,
  },
  {
    title: 'Woz\'s IP\'s',
    id: 10,
    completed: false,
  },
  ]);
  const [indexOfFwdSlashes, setIndexOfFwdSlashes] = useState([]);
  const [filteredText, setFilteredText] = useState(textType);
  const [href, setHref] = useState('');
  const [showNotif, setShowNotif] = useState(false);
  const [dropSelected, setDropSelected] = useState(exerciseType);

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

  useEffect(() => {
    if (window) {
      setHref(window.location.href);
    }
  }, []);
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
  /* get lesson id from url params */
  const getUrlID = () => {
    if (href.length > 0) {
      let urlArray = '';
      if (exerciseType === 'Lessons') {
        urlArray = href.match(/training\/[0-9]+/);
      } else {
        urlArray = href.match(/missions\/[0-9]+/);
      }
      const id = urlArray[0].slice(9);
      console.log(id);
      return Number(id);
    }
    return null;
  };
  /* Redirect within mission table */
  const missionRedirect = (event, id) => {
    event.preventDefault();
    if (exerciseType === 'Lessons') {
      if (id === 12) {
        window.location.href = 'http://localhost:3000';
      } else {
        window.location.href = `http://localhost:3000/training/${id}`;
      }
    }
    if (exerciseType === 'Missions') {
      if (id === 11) {
        window.location.href = 'http://localhost:3000';
      } else {
        window.location.href = `http://localhost:3000/missions/${id}`;
      }
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

  const wrongSolutionNotif = () => {
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 5000);
  };

  const solutionSubmitter = (event) => {
    event.preventDefault();
    const id = getUrlID();
    if (matchingSolutions() || solution === filteredText) {
      if (exerciseType === 'Lessons') {
        const newMissions = missions.map((mission) => {
          if (mission.id === id) {
            const newMission = mission;
            newMission.completed = true;
            return newMission;
          }
          return mission;
        });
        setMissions(newMissions);
        missionRedirect(event, id + 1);
      } else {
        const newMissions = realMissions.map((mission) => {
          if (mission.id === id) {
            const newMission = mission;
            newMission.completed = true;
            return newMission;
          }
          return mission;
        });
        setRealMissions(newMissions);
        missionRedirect(event, id + 1);
      }
    } else {
      wrongSolutionNotif();
      console.log('u got it wrong');
      console.log(showNotif);
    }
  };

  /* filter the paragraph every time the regex input changes */
  useEffect(() => {
    filterPara();
  }, [regex]);

  /* Close the incorrect notif if correct solution is found */
  useEffect(() => {
    if ((solution !== filteredText || !matchingSolutions())) {
      setShowNotif(false);
    }
  }, [regex]);

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.tableBox}>
        <div className={styles.selectWrapper}>
          <select onChange={(event) => setDropSelected(event.target.value)}>
            <option value={exerciseType}>{exerciseType}</option>
            <option value="Cheatsheet">Cheatsheet</option>
          </select>
        </div>
        <div className={styles.tableWrapper}>
          {dropSelected === exerciseType && (
          <table className={styles.missionTable}>
            <thead>
              <tr>
                <th>#</th>
                <th>{exerciseType}</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {exerciseType === 'Lessons' && missions.map((mission) => {
                if (getUrlID() !== null) {
                  if (mission.id === getUrlID()) {
                    return (
                      <tr
                        onClick={(event) => missionRedirect(event, mission.id)}
                        className={styles.currentTR}
                      >
                        <td>{mission.id}</td>
                        <td>{mission.title}</td>
                        <td>{mission.completed && '✔'}</td>
                      </tr>
                    );
                  } if (mission.id !== getUrlID()) {
                    return (
                      <tr onClick={(event) => missionRedirect(event, mission.id)}>
                        <td>{mission.id}</td>
                        <td>{mission.title}</td>
                        <td>{mission.completed && '✔'}</td>
                      </tr>
                    );
                  }
                }
                return null;
              })}
              {exerciseType === 'Missions' && realMissions.map((mission) => {
                if (getUrlID() !== null) {
                  if (mission.id === getUrlID()) {
                    return (
                      <tr
                        onClick={(event) => missionRedirect(event, mission.id)}
                        className={styles.currentTR}
                      >
                        <td>{mission.id}</td>
                        <td>{mission.title}</td>
                        <td>{mission.completed && '✔'}</td>
                      </tr>
                    );
                  } if (mission.id !== getUrlID()) {
                    return (
                      <tr onClick={(event) => missionRedirect(event, mission.id)}>
                        <td>{mission.id}</td>
                        <td>{mission.title}</td>
                        <td>{mission.completed && '✔'}</td>
                      </tr>
                    );
                  }
                }
                return null;
              })}
            </tbody>
          </table>
          )}
          {dropSelected === 'Cheatsheet' && (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Flags</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>i</td>
                    <td>Ignore capitalization</td>
                  </tr>
                  <tr>
                    <td>g</td>
                    <td>Find all matches in the string</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr>
                    <th>Symbols</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>abc</td>
                    <td>String Literal: matches abc</td>
                  </tr>
                  <tr>
                    <td>a|b</td>
                    <td>Matches a or b</td>
                  </tr>
                  <tr>
                    <td>[abc]</td>
                    <td>Matches an a, b, or c</td>
                  </tr>
                  <tr>
                    <td>^,$</td>
                    <td>Matches the beginning/end of a string, respectively</td>
                  </tr>
                  <tr>
                    <td>.</td>
                    <td>Matches any character</td>
                  </tr>
                  <tr>
                    <td>\</td>
                    <td>Escapes the character in front of it</td>
                  </tr>
                  <tr>
                    <td>a-z</td>
                    <td>Matches characters from a to z</td>
                  </tr>
                  <tr>
                    <td>^a</td>
                    <td>Within brackets, matches all but a</td>
                  </tr>
                  <tr>
                    <td>\s</td>
                    <td>Matches white spaces (opposite if capital)</td>
                  </tr>
                  <tr>
                    <td>\d</td>
                    <td>Matches digits</td>
                  </tr>
                  <tr>
                    <td>\w</td>
                    <td>Matches word characters</td>
                  </tr>
                  <tr>
                    <td>(abc)</td>
                    <td>Identifies the letters abc as one grouping</td>
                  </tr>
                  <tr>
                    <td>\b</td>
                    <td>Matches word boundaries</td>
                  </tr>
                  <tr>
                    <td>{'a{1,4}'}</td>
                    <td>Matches 1 to 4 repeats of a</td>
                  </tr>
                  <tr>
                    <td>a?</td>
                    <td>Match may or may not contain a</td>
                  </tr>
                  <tr>
                    <td>a*</td>
                    <td>Matches 0 or more a&apos;s</td>
                  </tr>
                  <tr>
                    <td>+</td>
                    <td>Matches 1 or more a&apos;s</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <div className={styles.innerWrapper}>
        <div className={styles.textBox}>
          <h1>{title}</h1>
          {paragraphs.map((para) => (
            <p className={styles.mainParas}>{para}</p>
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
        {(solution === filteredText || matchingSolutions())
        && (
          <div className={styles.correctInput}>
            <Notification type="correct" />
          </div>
        )}
        {showNotif
        && (
          <div className={styles.incorrectInput}>
            <Notification type="incorrect" />
          </div>
        )}
        <div className={styles.inputWrapper}>
          <input type="text" className={styles.inputBox} value={regex} onChange={(e) => setRegex(e.target.value)} />
          <div className={styles.buttonWrapper}>
            <button
              type="submit"
              className={styles.inputBtn}
              onClick={(event) => solutionSubmitter(event)}
            >
              Submit
            </button>
            <button type="submit" className={styles.inputBtn} onClick={(event) => resetText(event)}>Reset</button>
          </div>
          {(((getUrlID() < 11) && (exerciseType === 'Lessons')) || ((getUrlID() < 10) && (exerciseType === 'Missions')))
          && (
          <button
            type="submit"
            className={`${styles.inputBtn} ${styles.nextBtn}`}
            onClick={(event) => missionRedirect(event, (getUrlID() + 1))}
          >
            Next Lesson
          </button>
          )}
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
  exerciseType: PropTypes.string.isRequired,
};

export default WorkspaceLayout;
