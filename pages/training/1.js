import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const lessonOne = () => {
  const title = 'Lesson 1: Flags and String Literals';
  const paragraphs = [`We will begin with something easy: string literals. If you've ever pressed ctrl-F before, you already know how to use them. A string literal
  simply finds all matches that contain your string, character for character. If your string literal is 'cat', the regular expression
  will return all matching strings that are either 'cat', or contain 'cat' as substrings. 'cat', for example, would be the string returned from 'cat' and 
  'cataract'.`,
  `Next, we have flags. Flags provide higher level instructions on how a regular expression should function. Two flags that will be
   extremely important moving forward are 'i' and 'g'. 'i' tells the regex to ignore capitalization. Without it, 'cat' and 'Cat' would
   not be a match. The second flag, 'g', tells the regex to return all the values which it matches. Without 'g', the string 'cat cats cataract'
   would only return the first word, 'cat'. `,
  `Now that we have our feet wet with string literals and basic flags, let's try the following exercise. Below is a tongue twister. Find a regular expression
    that matches all of the words or substrings that are 'wood', irrespective of capitalization.`];
  const initialText = [`How much wood would a Woodchuck chuck if a woodchuck could chuck wood?
  He would chuck, he would, as much as he could, and chuck as much wood
  As a woodchuck would if a Woodchuck could chuck wood`];

  return (
    <WorkspaceLayout title={title} paragraphs={paragraphs} initialtext={initialText} />
  );
};

export default lessonOne;
