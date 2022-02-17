import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const missionNine = () => {
  const title = 'Mission 9: Barbara\'s Database';
  const paragraphs = ['Dear Regex Wizards,',
    `Hi! My name is Barbara. I work at city hall managing the database that contains
    information about the people in our city. This morning, the mayor requested something
    peculiar: A list of all of the males between the ages of 18 and 36, whose first names
    begin with a letter from the from the first half of the alphabet (up to and including m) 
    and are at most 5 letters long. They must also live in the district of Kenzington.`,
    `Do you think you could help me find a regular expression that matches these requirements?
    I've attached a list of our residents below.`,
  ];
  const initialText = '';

  const solution = '';

  const initialTextArray = ['50-Kenny Smith-Kenzington',
    '23-Bob Richards-Kenzington',
    '31-John Doe-Lexington',
    '35-Zeke Lucas-Kenzington',
    '16-Judie Carols-Kenzington',
    '19-Jimothy Johnson-Kenzington'];

  const solutionArray = ['23-Bob Richards-Kenzington'];

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

export default missionNine;
