/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ScrollModal from '../components/ScrollModal';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  const [fakeScrolls, setFakeScrolls] = useState([
    {
      title: 'Vowels',
      user: 'Mickey',
      regex: '[aeioasdfasfasdfasdfdasfasdfasdfadsfasdfasu]',
      desc: 'this regex finds vowels',
      id: 1,
    },
    {
      title: 'Ugly Finder',
      user: 'Borby',
      regex: '/ugly/',
      desc: 'this regex finds the ugly',
      id: 2,
    },
    {
      title: 'Okayge',
      user: 'Egg',
      regex: '...',
      desc: 'this regex finds 3 letter words',
      id: 3,
    },
    {
      title: 'Vowels',
      user: 'Mickey',
      regex: '[aeiou]',
      desc: 'this regex finds vowels',
      id: 4,
    },
    {
      title: 'Ugly Finder',
      user: 'Borby',
      regex: '/ugly/',
      desc: 'this regex finds the ugly',
      id: 5,
    },
    {
      title: 'Okayge',
      user: 'Egg',
      regex: '...',
      desc: 'this regex finds 3 letter words',
      id: 6,
    },
  ]);

  const [toggleModal, setToggleModal] = useState(false);
  const [selectedScroll, setSelectedScroll] = useState({
    title: 'N/A',
    user: 'N/A',
    regex: 'N/A',
    desc: 'INIT',
    id: 0,
  });

  const scrollSelector = ({
    title, user, regex, desc, id,
  }) => {
    const newScroll = {
      title,
      user,
      regex,
      desc,
      id,
    };
    setSelectedScroll(newScroll);
  };

  const addModal = (title, user, regex, desc, id) => {
    const newScroll = {
      title,
      user,
      regex,
      desc,
      id,
    };

    const fakeScrollsHolder = fakeScrolls;
    fakeScrollsHolder.push(newScroll);

    setFakeScrolls(fakeScrollsHolder);
  };

  const editModal = (title, user, regex, desc, id) => {
    const newScroll = {
      title,
      user,
      regex,
      desc,
      id,
    };
    const newFakeScrolls = fakeScrolls.filter((scroll) => scroll.id !== id);
    newFakeScrolls.push(newScroll);

    setFakeScrolls(newFakeScrolls);
  };

  const doesScrollExist = (id) => {
    const trueScroll = fakeScrolls.filter((scroll) => scroll.id === id);
    if (trueScroll) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (selectedScroll.id !== 0) {
      setToggleModal(true);
    }
  }, [selectedScroll]);

  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.topWrapper}>
        <div className={styles.pieWrapper}>
          <div className={styles.welcomeWrapper}>
            <h1>Welcome, User</h1>
            <span>Track lesson and mission progress.</span>
            <br />
            <span>Create and edit scrolls.</span>
          </div>
          <div className={styles.pieBlock}>
            <h2>Completed Lessons: 60%</h2>
            <hr />
            <div className={styles.pieCircle}>
              <div className={styles.innerCircle} />
            </div>
            <div className={styles.pieCompleteWrapper}>
              <div className={styles.pieCompleteInnerWrapper}>
                <span>Complete:</span>
                <div className={styles.greenDot} />
              </div>
              <div className={styles.pieCompleteInnerWrapper}>
                <span>Incomplete:</span>
                <div className={styles.grayDot} />
              </div>
            </div>
          </div>
          <div className={styles.pieBlock}>
            <h2>Completed Missions: 50%</h2>
            <hr />
            <div className={styles.pieCircle2}>
              <div className={styles.innerCircle} />
            </div>
            <div className={styles.pieCompleteWrapper}>
              <div className={styles.pieCompleteInnerWrapper}>
                <span>Complete:</span>
                <div className={styles.greenDot} />
              </div>
              <div className={styles.pieCompleteInnerWrapper}>
                <span>Incomplete:</span>
                <div className={styles.grayDot} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.outerWrapper}>
        <div className={styles.stickyBlocks}>
          <div className={styles.stickyBlock}>
            <span>Start Lesson</span>
            <button type="submit">Start</button>
          </div>
          <div className={styles.stickyBlock}>
            <span>Start Mission</span>
            <button type="submit">Start</button>
          </div>
        </div>
        <div className={styles.rightWrapper}>
          {toggleModal && (
          <ScrollModal
            title={selectedScroll.title}
            regex={selectedScroll.regex}
            user={selectedScroll.user}
            desc={selectedScroll.desc}
            id={selectedScroll.id}
            setToggleModal={setToggleModal}
            addModal={addModal}
            editModal={editModal}
            scrollExists={doesScrollExist(selectedScroll.id)}
          />
          ) }
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Regex</th>
                <th>User</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {fakeScrolls.map((scroll) => (
                <tr>
                  <td>{scroll.title}</td>
                  <td>{scroll.regex}</td>
                  <td>{scroll.user}</td>
                  <td>{scroll.desc}</td>
                  <td><button type="submit" className={styles.editBtn} onClick={() => scrollSelector(scroll)}>Edit</button></td>
                  <td><button type="submit" className={styles.delBtn}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.addScrollWrapper}>
            <button type="submit" className={styles.addScrollBtn} onClick>Add Scroll</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
