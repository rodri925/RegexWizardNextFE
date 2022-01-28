import React from 'react';
import Link from 'next/link';
import styles from '../styles/LandingPageBottom.module.css';

const LandingPageBottom = () => (
  <div className={styles.bigContainer}>
    <div className={styles.smallContainer}>
      <h2>Missions</h2>
      <hr className={styles.hrLineLP} />
      <p>
        After training, you must practice.
        <br />
        Check out the Missions page for
        <br />
        more
        <span> Regex </span>
        challenges!
      </p>
      <Link href="./missions"><div className={styles.containerLink}><span>Missions</span></div></Link>
    </div>
    <div className={`${styles.smallContainer} ${styles.smallContainer2}`}>
      <h2>Become a Wizard</h2>
      <hr className={styles.hrLineLP} />
      <p>
        Save your progress.
        <br />
        Track your achievements.
        <br />
        Post custom
        <span> Scrolls.</span>
      </p>
      <Link href="./login"><div className={styles.containerLink}><span>SIgn Up</span></div></Link>
    </div>
    <div className={styles.smallContainer}>
      <h2>Scrolls</h2>
      <hr className={styles.hrLineLP} />
      <p>
        Have a useful
        <span> Regex </span>
        for parsing
        <br />
        files, emails, or documents?
        <br />
        Post it here!
      </p>
      <Link href="./scrolls"><div className={styles.containerLink}><span>Scrolls</span></div></Link>
    </div>
  </div>
);
export default LandingPageBottom;
