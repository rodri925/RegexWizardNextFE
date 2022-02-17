import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const lessonTen = () => {
  const title = 'Lesson 3: Anchors';
  const paragraphs = [`Several lessons ago, we learned how to match strings based on the property of being the beginning
  or the end of a word character, using word boundaries. In this lesson we will learn how to match
  our regex to the beginning or the end of a full string, using anchors.`,
  `Anchors are denoted with the characters '^' and '$', indicating the beginning and the end of a string,
  respectively. You may remember the caret symbol from character sets, where the caret indicates that
  a matching character is NOT found within the brackets. When used outside of brackets, the caret symbol
  takes on the meaning of being an anchor. For an example, lets take two strings: 'I like apples' and 
  'I like apples and bananas'. If you only wanted the first string, the regex /I like apples/ would not
  cut it. But since they are two separate strings, you can simply write /^I like apples$/ and the correct
  string will be returned. Anchors are especially helpful when you are working with a list of strings,
  and not one large string.`,
  'Below is a list of strings. Find a regular expression that matches the following string: \'Star Wars\'.'];
  const initialText = '';

  const solution = '';

  const initialTextArray = ['Star Wars', 'Star Wars: The Phantom Menace', 'Star Wars: Revenge of the Sith'];

  const solutionArray = ['Star Wars'];

  return (
    <WorkspaceLayout
      title={title}
      paragraphs={paragraphs}
      initialtext={initialText}
      solution={solution}
      initialTextArray={initialTextArray}
      solutionArray={solutionArray}
    />
  );
};

export default lessonTen;
