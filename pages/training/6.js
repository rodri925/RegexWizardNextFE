import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const lessonFive = () => {
  const title = 'Lesson 6: Shorthand Character Classes';
  const paragraphs = [`This lesson, we will be revisiting a topic we briefly introduced in lesson 3: shorthand character
  classes. As a refresher, the '\\s' character, which matches white spaces, is one of these shorthand character classes.
  But what is the purpose of them? In general, they provide an easy 'shorthand' for character types which are
  often needed for matching. For example, if you wanted to match any digit from 0 to 9, you would have to use
  bracket notation and ranges to denote [0-9]. But with the shorthand classes, you can use the shorthand for
  digits, which is denoted as '\\d'.`,
  `The last shorthand character is '\\w', which represents all word characters (this includes all upper
    and lower case letters, as well as digits and the underscore). If you want to match the inverse of the
    shorthand, you can simply use it's uppercase equivalent, namely '\\S', '\\D', and '\\W'. These match characters that
    are NOT whitespaces, NOT digits, and NOT word characters, respectively.`,
  `In this next exercise, find a regular expression which matches the following usernames given the following parameters:
  1. The first two characters must be word characters.
  2. The third character must be a digit.
  3. The last two characters must NOT be word characters.`];
  const initialText = '';

  const solution = '';

  const initialTextArray = ['RX3@!',
    're6ex',
    'CH4##',
    'CH4RS',
    '@@4%%',
    'AA@@@'];

  const solutionArray = ['RX3@!', 'CH4##'];

  const exType = 'Lessons';

  return (
    <WorkspaceLayout
      title={title}
      paragraphs={paragraphs}
      initialtext={initialText}
      solution={solution}
      initialTextArray={initialTextArray}
      solutionArray={solutionArray}
      exerciseType={exType}
    />
  );
};

export default lessonFive;
