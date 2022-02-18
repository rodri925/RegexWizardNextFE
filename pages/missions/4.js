import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const missionFour = () => {
  const title = 'Mission 4: Steve\'s Bank: Part 2';
  const paragraphs = ['Dear Regex Wizards,',
    `Hey, it's Steve again. From the bank, remember? I have another issue. We 
    recently started to accept Visa and I have been assigned the task of finding
    a regular expression that matches Visa cards. Do you think you could help me out 
    with that? I'm sure you can find the specifications somewhere online.`,
  ];
  const initialText = '';

  const solution = '';

  const initialTextArray = ['4084902296814164',
    '6013369236255931',
    '4534315815509',
    '2228290947490',
    '48219',
    '470838796134860513570',
    '48305ADDE8963',
    '4134BCCD42261116'];

  const solutionArray = ['4084902296814164', '4534315815509'];

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

export default missionFour;
