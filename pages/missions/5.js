import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const missionFive = () => {
  const title = 'Mission 5: Alan\'s Blog';
  const paragraphs = ['Dear Regex Wizards,',
    `My name is Alan. I run a blog that promotes pet products to my subscribers. The problem is,
    not all of my subscribers give me valid email addresses! The format isn't too difficult; an
    email address can be any character except for an '@' symbol, followed by an '@' symbol, and 
    lastly either 'yahoo.com' or 'gmail.com' as the domain. `,
    `Can you help me find a regular expression that filters email addresses based on my requirements?
    `,
  ];
  const initialText = '';

  const solution = '';

  const initialTextArray = ['petlover2@gmail.com',
    'lovemydoggies!@yahoo.com',
    'followme@insta@gmail.com',
    'zoomies23@hotmail.com',
    '##$$%%@gmail.com',
    '@gmail.com',
    '@yahoo.com',
    'funwithferrets@'];

  const solutionArray = ['petlover2@gmail.com', 'lovemydoggies!@yahoo.com', '##$$%%@gmail.com'];

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

export default missionFive;
