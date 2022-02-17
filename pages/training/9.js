import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const lessonEight = () => {
  const title = 'Lesson 9: Optional Quantifiers';
  const paragraphs = [`Beyond specifying a number or range of numbers of which a character or grouping will be repeated, quantifiers can also specify that a word may or may not contain a specific character. These
  are called optional quantifiers, and use the '?' character. Let's return to the US vs UK english example. If we take the word 'flavor', it is spelled like so in the US. However,
  in the UK it is spelled 'flavour'. Both are technically correct, so how do we write a regular expression that matches both efficiently? We can use an optional quantifier and write
  /flavou?r/, indicating that the word may or may not contain a 'u'.`,
  'Below is a list of several words with different spellings between the US and the UK. Write a regular expression which returns both countries\' versions of \'color\' and \'humour\'.'];
  const initialText = '';

  const solution = '';

  const initialTextArray = ['humor',
    'flavor',
    'colour',
    'labor',
    'humour',
    'flavour',
    'neighbour',
    'labour',
    'neighbor',
    'color'];

  const solutionArray = ['humor', 'colour', 'humour', 'color'];

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

export default lessonEight;
