/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ScrollModal from '../components/ScrollModal';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  /* 1. Replace use state nums with completed missions pulled from DB when ready
     2. Need to pull a the first incomplete lesson and first incomplete mission.
     Must render something different if all lessons/all mission complete.
     3. Need to come back and make notification for deletion. Cannot use Windows confirm.
     4. Need to make Components for mission and lesson squares.
     5. They must be dynamic and  recognize when all content has been compl
   */
  const [lessonPercent, setLessonPercent] = useState(() => 7 * 4);
  const [missionPercent, setMissionPercent] = useState(() => 10 * 4);
  const [toggleModal, setToggleModal] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(null);
  const [user, setUser] = useState('Mickey');
  const [category, setCategory] = useState('all scrolls');

  const [fakeScrolls, setFakeScrolls] = useState([
    {
      user: 'Mickey',
      regex: '[aeioasdfasfasdfasdfdasfasdfasdfadsfasdfasu]',
      desc: 'this regex finds vowels',
      id: 1,
    },
    {
      user: 'Borby',
      regex: '/ugly/',
      desc: 'this regex finds the ugly',
      id: 2,
    },
    {
      user: 'Egg',
      regex: '...',
      desc: 'this regex finds 3 letter words',
      id: 3,
    },
    {
      user: 'Mickey',
      regex: '[aeiou]',
      desc: 'this regex finds vowels',
      id: 4,
    },
    {
      user: 'Borby',
      regex: '/ugly/',
      desc: 'this regex finds the ugly',
      id: 5,
    },
    {
      user: 'Egg',
      regex: '...',
      desc: 'this regex finds 3 letter words',
      id: 6,
    },
  ]);

  const [filteredScrolls, setFilteredScrolls] = useState(fakeScrolls);

  const setupModal = (event, scroll) => {
    event.preventDefault();
    setToggleModal(true);
    setCurrentScroll(scroll);
  };

  const filterScrolls = (event, currentCategory, currentScrolls) => {
    event.preventDefault();
    if (currentCategory === 'my scrolls') {
      const myScrolls = currentScrolls.filter((scroll) => scroll.user === user);
      setFilteredScrolls(myScrolls);
    } else if (currentCategory === 'favorited scrolls') {
      const favScrolls = currentScrolls.filter((scroll) => scroll.user !== user);
      setFilteredScrolls(favScrolls);
    } else {
      setFilteredScrolls(currentScrolls);
    }
  };
  /* Need to Fix: must fix state immediately after deleting */
  const deleteScroll = (event, delScroll) => {
    event.preventDefault();
    if (window.confirm(`Delete ${delScroll.regex}?`)) {
      const newScrolls = fakeScrolls.filter((scroll) => scroll.id !== delScroll.id);
      setFakeScrolls(newScrolls);
      filterScrolls(event, category, newScrolls);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <h1>Hi User!</h1>
      <div className={styles.innerContainer}>
        <div className={styles.info}>
          <div className={styles.progress}>
            <span>
              Training Progress:&nbsp;
              {lessonPercent}
              %
            </span>
            <div className={styles.BarOuter}>
              <div className={styles.BarInner} style={{ width: `${lessonPercent}%` }} />
            </div>
            <span>
              Mission Progress:&nbsp;
              {missionPercent}
              %
            </span>
            <div className={styles.BarOuter}>
              <div className={styles.BarInner} style={{ width: `${missionPercent}%` }} />
            </div>
          </div>
          <div className={styles.missionIncompletes}>
            <div className={styles.incompleteBox}>
              <p>
                Start Lesson:
                <br />
                Lesson
              </p>
              <a href="./Training">Start</a>
            </div>
            <div className={styles.incompleteBox}>
              <p>
                Start Mission:
                <br />
                Mission
              </p>
              <a href="./Missions">Start</a>
            </div>
          </div>
        </div>
        <div className={styles.personalScrolls}>
          <div className={styles.pScrollHeader}>
            <span>
              Personal Scrolls
            </span>
            <div className={styles.formAndSpan}>
              <form
                className={styles.pScrollSelection}
                onSubmit={(event) => filterScrolls(event, category, fakeScrolls)}
              >
                <select name="scrolls" id="scrolls" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="all scrolls">All Scrolls</option>
                  <option value="my scrolls">My Scrolls</option>
                  <option value="favorited scrolls">Favorited Scrolls</option>
                </select>
                <button type="submit" className={`${styles.tableBtn} ${styles.filterBtn}`}>Filter</button>
              </form>
              <span>
                Scrolls:&nbsp;
                {fakeScrolls.length}
                /50
              </span>
            </div>
            <hr className={styles.hrLine} />
          </div>
          <div className={styles.tableContainer}>
            <table>
              <thead className={styles.THeadDB}>
                <tr>
                  <th className={styles.THlarge}>Regex</th>
                  <th className={styles.THsmall}>User</th>
                  <th className={styles.THsmall}>Desc</th>
                  <th className={styles.THsmall}>Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredScrolls.map((scroll) => (
                  <tr key={scroll.id}>
                    <td className={`${styles.THlarge} ${styles.tdGeneral}`}>{scroll.regex}</td>
                    <td className={`${styles.THsmall} ${styles.tdGeneral}`}>{scroll.user}</td>
                    <td className={`${styles.THsmall} ${styles.tdGeneral}`}>
                      <button type="submit" className={styles.tableBtn} onClick={(event) => setupModal(event, scroll)}>
                        Desc
                      </button>
                    </td>
                    <td className={`${styles.THsmall} ${styles.tdGeneral}`}>
                      <button type="submit" className={`${styles.tableBtn} ${styles.delBtn}`} onClick={(event) => deleteScroll(event, scroll)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {toggleModal && (
            <ScrollModal
              regex={currentScroll.regex}
              user={currentScroll.user}
              desc={currentScroll.desc}
              setToggleModal={setToggleModal}
            />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
