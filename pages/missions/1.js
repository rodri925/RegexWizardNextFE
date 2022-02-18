import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const missionOne = () => {
  const title = 'Mission 1: Ms. Perl\'s Cupcakes';
  const paragraphs = [`Hey there. It looks like you're new here - Welcome! You can do missions sent in by 
  the local townsfolk here. They are often in need of regex scrolls. Here's a mission
  to get you started; a letter from Ms. Perl. Take a look!`,
  'Dear Regex Wizards',
  `Hello there, my name is Ms. Perl. I am starting a cupcake business and have created
a web page where potential customers can enter there phone numbers. I've collected a few,
but there's a problem; not everyone enters in their zipcode, not everyone encloses their zipcode
in parentheses, and some jokesters just enter in a bunch of random stuff!`,
  `Can you help me find a regular expression that filters out all of the junk? Here is how
I want my phone numbers formatted: (XXX)-XXX-XXXX`,
  'All the best,',
  'Ms. Perl',
  ];
  const initialText = '';

  const solution = '';

  const initialTextArray = ['(626)-236-2979',
    '(573)-878-0615',
    '(206)-631-8512',
    '(361)-897-1003',
    '(646)-588-4970',
    '6262524406',
    '658-2853',
    '##863-678-5050@@',
    'abc-123-1234',
    '12-34-444'];

  const solutionArray = ['(626)-236-2979',
    '(573)-878-0615',
    '(206)-631-8512',
    '(361)-897-1003',
    '(646)-588-4970'];

  const exType = 'missions';

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

export default missionOne;
