import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import useWindowWidth from './hooks/useWindowWidth';
//  Get dynamic width using custom hook, using useLayoutEffect.
//  This allows us to have a responsive hamburger menu.
/* Need to make var for domain name once moving off of localhost */
const Navbar = () => {
  const [hamToggle, setHamToggle] = useState(false);
  const width = useWindowWidth();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.Title}>
          <a href="http://localhost:3000"><em className={styles.emHighlight}>Regex Wizard</em></a>
          <input type="checkbox" id="viewMenu" aria-label="Open the menu" className={styles.hamCheck} onChange={() => setHamToggle(!hamToggle)} />
          <div className={styles.burger}>
            {' '}
            <div className={styles.hamLine} />
            <div className={styles.hamLine} />
            {' '}
            <div className={styles.hamLine} />
          </div>
        </div>
        <Link href="http://localhost:3000/training/0"><div className={styles.navLinks} style={{ display: width > 600 ? 'block' : 'none' }}>Training</div></Link>
        <Link href="http://localhost:3000/missions/1"><div className={styles.navLinks} style={{ display: width > 600 ? 'block' : 'none' }}>Missions</div></Link>
        <Link href="http://localhost:3000/dashboard"><div className={styles.navLinks} style={{ display: width > 600 ? 'block' : 'none' }}>Dashboard</div></Link>
        <Link href="http://localhost:3000/scrolls"><div className={styles.navLinks} style={{ display: width > 600 ? 'block' : 'none' }}>Scrolls</div></Link>
        <Link href="http://localhost:3000/training/0"><div className={styles.navLinksCol} style={{ display: hamToggle && width < 600 ? 'block' : 'none' }}>Training</div></Link>
        <Link href="http://localhost:3000/missions/1"><div className={styles.navLinksCol} style={{ display: hamToggle && width < 600 ? 'block' : 'none' }}>Missions</div></Link>
        <Link href="http://localhost:3000/dashboard"><div className={styles.navLinksCol} style={{ display: hamToggle && width < 600 ? 'block' : 'none' }}>Dashboard</div></Link>
        <Link href="http://localhost:3000/scrolls"><div className={styles.navLinksCol} style={{ display: hamToggle && width < 600 ? 'block' : 'none' }}>Scrolls</div></Link>
      </nav>
    </div>
  );
};

export default Navbar;
