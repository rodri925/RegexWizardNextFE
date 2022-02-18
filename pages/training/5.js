import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const lessonFour = () => {
  const title = 'Lesson 5: Ranges';
  const paragraphs = [`The way we currently match a character against a collection of characters is using character sets, such as '[abc]'. But what if we wanted to match all characters from the
  first half of the alphabet? Would we have to write all letters a through m? Luckily not, thanks to ranges! with ranges, we can simply denote [a-m] and all characters between
  and including a and m will be matched. Ranges work for numbers as well. For example, if you wanted to match any character between a and k, or any digit between 0 and 6, you could
  simply say [a-k0-6].`,
  `In addition to ranges, we can improve our bracket notation even further with the caret symbol '^', which is synonymous with NOT. For example, putting a caret before the range like so
  [^a-f] will match all characters NOT in the range a-f.`,
  `Below is a list of three letter words. For this exercise, find a regular expression that matches the following parameters: 1. The first letter must be between the letters a and m, inclusively.
  2. The second letter must not be a vowel (aeiou). 3. The third letter must be between the letters n and z, inclusively. Find all matches.`];
  const initialText = '';

  const solution = '';

  const initialTextArray = ['cry',
    'hat',
    'cat',
    'dry',
    'pry',
    'guy',
    'hey',
    'day',
    'age',
    'ant',
    'art'];

  const solutionArray = ['cry', 'dry', 'ant', 'art'];

  const exType = 'lessons';

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

export default lessonFour;
