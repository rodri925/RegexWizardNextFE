import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const lessonEleven = () => {
  const title = 'FIN';
  const paragraphs = [`You have completed all lessons for your training. Congratulations! But remember, if you
  don't use it, you lose it. Head over to the missions tab to practice your regex skills
  with real world problems.`];
  const initialText = `
  Congrats! You did it! :D You are awesome!`;

  const solution = 'You are awesome!';

  const initialTextArray = [];

  const solutionArray = [];

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

export default lessonEleven;
