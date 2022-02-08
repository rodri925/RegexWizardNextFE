import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const lessonNine = () => {
  const title = 'Lesson 9: Kleene Stars and Kleene Pluses';
  const paragraphs = [`For our last lesson on quantifiers, let's consider the following scenario: Say you weren't sure
  how many repeats there were in a given string, if there were any at all. Can we still use quantifiers
  to try and define this dynamic string? The answer is yes, with Kleene stars and Kleene pluses! Named
  after the man who invented regular expressions, Stephen Kleene, Kleene stars indicate that
  a character or grouping is repeated 0 or more times, while a Kleene plus indicates that it
  is repeated 1 or more times. Kleene stars are denoted with the '*' symbol, and Kleene pluses
  are denoted with the '+' symbol. Thus, if we wanted to match 'BOOM' with a varying amount of 'O's, 
  we could use the regular expression /BOO+M/.`,
  `Below is a list of a few more onomatopoeias. Try finding a regular expression that matches 
  all the iterations of the words 'vroom' and 'kaboom' without using bracket notation.`];
  const initialText = [`vroom
  vrooooom
  kaboom
  meow
  oink
  kaboooooom
  crackle
  buzzzzz
  vroooooooooooom`];

  return (
    <WorkspaceLayout title={title} paragraphs={paragraphs} initialtext={initialText} />
  );
};

export default lessonNine;
