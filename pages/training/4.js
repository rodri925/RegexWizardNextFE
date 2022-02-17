/* eslint-disable no-useless-escape */
import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const lessonThree = () => {
  const title = 'Lesson 4: Wildcards, Whitespaces, and the Escape Character';
  const paragraphs = [`On occassion, you might not want to match any particular character, or type of character. You may just want to make sure there is a character at a specific index. This is
  where the wildcard character '.' comes in. '.' Will match any given character at the index given.`,
  `But what about regular periods? How do we match those in particular? To do this, we need to introduce another feature of regular expressions: the escape character '\\'. The escape
character works by matching character literals to what would normally be regular expressions operators, such as '[', '|', '(', '.', and so on. So, if your regex is '\\.', it will
not function as a wildcard, but instead as a literal period. What if we want to match a backwards slash? Escape the escape character, of course!`,
  `Lastly, I want to introduce you to a regex operator that is part of a class of shorthand characters, which we will go over in more depth in the 5th lesson. It is the operator '\\s',
and it is used to find whitespaces. With '\\s', '\\sball\\s' would not match ' balloon', however '\\sball' would. Try 
implementing this for the example below.`,
  `Below is a list of usernames. Not all of the usernames are valid, however, and it is your task today to find a regex that matches the valid usernames, given the following parameters:
1. All username must be 7 characters long.
2. The username must end in a period.
3. The usernames are separated by whitespaces.
4. The username must not contain a whitespace.`];
  const initialText = '';

  const solution = '';

  const initialTextArray = ['p@ss12.',
    'ReGeX22',
    'asdfjkl;',
    'password123.',
    'PASSWORD=USERNAME',
    '1111111111',
    '111111.',
    'j@v@SCRIPTES6!!',
    'bibbidy$$##234.'];

  const solutionArray = ['p@ss12.', '111111.'];

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

export default lessonThree;
