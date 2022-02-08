import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const lessonSix = () => {
  const title = 'Lesson 6: Groupings and Word Boundaries';
  const paragraphs = [`Recall the second lesson you completed, involving alternators: In order to properly
  say 'I will eat apples OR oranges' we needed to put apples and oranges within parentheses,
  like so: 'I will eat (apples|oranges)'. The parentheses are actually the symbols for 
  grouping, which is a way to separate, or group, parts of a regular expression. This extends
  into the concept of capturing groups, which allow you to save, or capture, the subtrings matched
  by the characters within the parentheses. This is more applicable within programming applications 
  and will not be tested, but it is good to be aware of.`,
  `Another way to match specific strings is using the concept of word boundaries, denoted with
the character symbols '\\b'. Word boundaries check that the character on it's boundary is a valid
word character (recall that a word character is any alphabetical letter, or digit, or underscore).
Thus, if you want to ensure that you only match a word, and not a substring, you can wrap the word
in word boundaries, i.e. '\\bcat\\b'. In this example, the regex would match with the word 'cat' but 
not 'cataract'.`,
  'Below there are several phrases. In this example, match the first three phrases.'];
  const initialText = [`I like apples
  I like oranges
  I like pears
  I like strawberries`];

  return (
    <WorkspaceLayout title={title} paragraphs={paragraphs} initialtext={initialText} />
  );
};

export default lessonSix;
