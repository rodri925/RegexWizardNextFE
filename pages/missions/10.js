import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const missionTen = () => {
  const title = 'Mission 10: Woz\'s IP\'s';
  const paragraphs = ['Dear Regex Wizards,',
    `Hey wizards, my name is Woz. I work IT at the library. It's my job to log 
    all activity on our computers. Problem is, the logs come through in one big string,
    and all I need is the IPV4 address.`,
    `Here are a couple of the strings. Could you help me find a regular expression
    that matches all of the valid IP addresses?`,
  ];
  const initialText = '';

  const solution = '';

  const initialTextArray = ['127.0.0.1',
    '177.222.43.1',
    '132.155.1.256',
    '-4.7.9.6',
    '1.1.1.1.',
    '0.0.0.0',
    '30.168.1.255.1',
    '5...5'];

  const solutionArray = ['127.0.0.1', '0.0.0.0', '177.222.43.1'];

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

export default missionTen;
