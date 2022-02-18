import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const missionThree = () => {
  const title = 'Mission 3: Steve\'s Bank';
  const paragraphs = ['Dear Regex Wizards,',
    `My name is Steve and I run a website for our local bank. As such, I need to make sure
  our customers have strong passwords. I have determined that a strong password must meet these criteria: 1. The password must
  be between 8 and 16 characters, inclusively. 2. All symobols except ';', ':', ',", and
  '.' may be used. 3. There must be at least 1 letter. 4. The first letter to appear, left to
  right, must be capitalized. There can be symbols before the first letter.Could you help me find a 
  regular expression that matches these criteria?`,
    '-Regards,',
    'Steve',
  ];
  const initialText = '';

  const solution = '';

  const initialTextArray = ['password123',
    'AAAA',
    'BBBBBBBBBBBBBBBBBB',
    '@#$$1234',
    '@@secretPW404',
    '$.MyPassword201!',
    '##TheyllNeverGuess!!'];

  const solutionArray = ['password123', '##TheyllNeverGuess!!'];

  const exType = 'Missions';

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

export default missionThree;
