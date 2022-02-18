import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const missionTwo = () => {
  const title = 'Mission 2: Mr. Fortran\'s Classroom';
  const paragraphs = ['Dear Regex Wizards,',
    `My name is Mr. Fortran. I am a teacher at our local school, and yesterday I asked my students to 
provide their birth dates for the first day of class. When I took a look at the birthday list, 
I realized that I had forgotten to give them a format!`,
    `Could you help me find a regular expression that matches the birth dates formatted to
my liking? Here is the format: MM/DD/YYYY`,
  ];
  const initialText = '';

  const solution = '';

  const initialTextArray = ['12/01/2005',
    '30/07/2001',
    '11-14-2002',
    '10/90/2004',
    '9/9/2003',
    '05042001',
    '03/16/2003',
    '04/11/2002'];

  const solutionArray = ['12/01/2005', '04/11/2002', '03/16/2003'];

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

export default missionTwo;
