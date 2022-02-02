/* eslint-disable no-useless-concat */
import React, { useEffect, useState } from 'react';
import styles from '../styles/Training.module.css';

const Lessons = () => {
  const [regex, setRegex] = useState('');
  const constantText = '    Lorem Ipsum is simply dummy text of the printing \n'
  + 'and typesetting industry. Lorem Ipsum has been the \n'
  + 'industry&apos;s standard dummy text ever since the 1500s, \n'
  + 'when an unknown printer took a galley of type and \n'
  + 'scrambled it to make a type specimen book. It has \n'
  + 'survived not only five centuries, but also the \n'
  + 'leap into electronic typesetting, remaining \n'
  + 'essentially unchanged. It was popularised in the \n'
  + '1960s with the release of Letraset sheets \n'
  + 'containing Lorem Ipsum passages, and more \n'
  + 'recently with desktop publishing \n'
  + 'software like Aldus PageMaker including versions \n'
  + 'of Lorem Ipsum.';

  const [indexOfFwdSlashes, setIndexOfFwdSlashes] = useState([]);
  const [filteredText, setFilteredText] = useState(constantText);

  useEffect(() => {
    const indexPlaceholder = [];
    for (let i = 0; i < regex.length; i += 1) {
      if (regex[i] === '/') {
        indexPlaceholder.push(i);
      }
    }
    setIndexOfFwdSlashes(indexPlaceholder);
    console.log(indexPlaceholder);
  }, [regex]);

  const filterPara = () => {
    if (indexOfFwdSlashes[0] !== 0 || indexOfFwdSlashes.length < 2) {
      return;
    }
    try {
      const regexNoFlags = regex.slice(1, (indexOfFwdSlashes[indexOfFwdSlashes.length - 1]));
      const regexFlags = regex.slice(indexOfFwdSlashes[indexOfFwdSlashes.length - 1] + 1);
      console.log(`No flags: ${regexNoFlags}`);
      console.log(`Flags: ${regexFlags}`);
      let typedRegex = '';
      typedRegex = new RegExp(regexNoFlags, regexFlags);
      const newTextArray = constantText.match(typedRegex);
      let newTextString = '';
      if (!newTextArray || newTextArray.length === 0) {
        setFilteredText('');
      }
      for (let i = 0; i < newTextArray.length; i += 1) {
        newTextString = `${newTextString}${newTextArray[i]}` + '\n';
      }
      setFilteredText(newTextString);
    } catch (error) { console.log(error); }
  };

  const resetText = (event) => {
    event.preventDefault();
    setRegex('');
    setFilteredText(constantText);
  };

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
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Lesson</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className={styles.innerWrapper}>
        <div className={styles.textBox}>
          <h1>Lesson 0: Welcome to Regex Wizard Training!</h1>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Hey there! In this short course, you will be learning
            the basics of regular expressions. The goal by the end of the course is not
            to be an expert
            in regular expressions, but rather to feel confident enough to apply
            them in the text editor of your choosing. Before we get started,
            lets make sure you&apos;re familiar
            with the environment you&apos;ll be working in.
          </p>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;To the left we have the lessons table.
            From here you can navigate to
            any lesson in the course. By selecting the dropdown menu, you can
            reference the cheatsheet. I recommend looking at it often! Underneath this text,
            you will see two light blue boxes filled with text. The left box holds the
            initial text before modification by your regex, and the right box holds the text
            after you have parsed it. At the bottom of the page there is an input box where you can
            enter your regex. Use the format
            {' '}
            <strong>/(regex here)/(flags here)</strong>
            .
            Press the reset button to reset your regex and the right side text box.
            Press the submit button when you are confident in your answer. That
            about sums is up! When you&apos;re ready, click the &apos;next lesson&apos;
            button to get started!
          </p>
          <div className={styles.textBoxes}>
            <div className={styles.textBoxForRegex}>
              <p>
                {constantText}
              </p>
            </div>
            <div className={styles.textBoxForRegex}>
              <p dangerouslySetInnerHTML={{ __html: filteredText }} />
            </div>
          </div>
        </div>
        <div className={styles.inputWrapper}>
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

export default Lessons;
