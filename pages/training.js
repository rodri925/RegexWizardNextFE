import React from 'react';
import styles from '../styles/Training.module.css';

const Lessons = () => (
  <div className={styles.outerWrapper}>
    <div className={styles.tableBox} />
    <div className={styles.innerWrapper}>
      <div className={styles.textBox}>
        <h1>Lesson 1</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the
          leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the
          1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more
          recently with desktop publishing
          software like Aldus PageMaker including versions
          of Lorem Ipsum.
        </p>
      </div>
      <div className={styles.inputWrapper}>
        <input type="text" />
        <button type="submit">Parse!</button>
        <button type="submit" className={styles.nextBtn}>Next Lesson</button>
      </div>
    </div>
  </div>
);

export default Lessons;
