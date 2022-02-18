import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const missionSeven = () => {
  const title = 'Mission 7: Marks\'s Project Write Up';
  const paragraphs = ['Dear Regex Wizards,',
    `Hey there! My name is Mark, and I'm designing a new social media website. Recently
    my project manager asked me for a summary of the project, and an idea came to me-
    why not use the current comments in the code as a starting point for the write up?
    The only thing is, going through all the different files and scrolling through all the lines
    in the code would take way too long.`,
    `That's where you come in. Do you think you could come up with a regular expression to
    help me extract out all of the comments in my code? Comments either begin with '//' or
    are encapsulated with a '/*' at the beginning of the comment and a '*/' at the end.`,
  ];
  const initialText = '';

  const solution = '';

  const initialTextArray = [
    '//This function takes a and turns it into b',
    '/* This variable is used to store b */',
    'a=b',
    'c+=d',
    'f = () => {return 0}',
    '/* This isn\'t the right format',
    'Neither is this//',
    '//Write a comment using /* and */',
    '/*You can also write a comment like //this */'];

  const solutionArray = ['//This function takes a and turns it into b', '/* This variable is used to store b */'];

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

export default missionSeven;
