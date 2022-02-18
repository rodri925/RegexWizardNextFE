import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const missionEight = () => {
  const title = 'Mission 8: Mark\'s Project: Part 2';
  const paragraphs = ['Dear Regex Wizards,',
    `Hi! It's Mark again. Still working on the same project. The social media website, if you
    recall. This time around, I'm working on making my HTML use less 'divs', in an attempt
    to make it more semantic. To do this, I'm going to need a regular expression that can find all of the html tags
    in my code. Can you put something like that together? HTML tags are formatted as follows:
    <'string'> and </'string'>.`,
  ];
  const initialText = '';

  const solution = '';

  const initialTextArray = ['<div>',
    '<<div>',
    '<nav',
    '<(table)>',
    '</a>',
    '</$span>',
    '</span>'];

  const solutionArray = ['<div>', '</a>', '</span>'];

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

export default missionEight;
