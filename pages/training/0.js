import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const lessonZero = () => {
  const title = 'Lesson 0: Welcome to Regex Wizard Training!';
  const paragraphs = [' Hey there! In this short course, you will be learning the basics of regular expressions. The goal by the end of the course is not to be an expert in regular expressions, but rather to feel confident enough to apply them in the text editor of your choosing. Before we get started, lets make sure you\'re familiar with the environment you\'ll be working in.',
    ' To the left we have the lessons table. From here you can navigate to any lesson in the course. By selecting the dropdown menu, you can reference the cheatsheet. I recommend looking at it often! Underneath this text, you will see two light blue boxes filled with text. The left box holds the initial text before modification by your regex, and the right box holds the text after you have parsed it. At the bottom of the page there is an input box where you can enter your regex. Use the format /(regex here)/(flags here). First format the regex, and then apply the flags. Press the reset button to reset your regex and the right side text box. Press the submit button when you are confident in your answer. That about sums is up! When you\'re ready, click the \'next lesson\' button to get started!',
  ];
  const initialText = 'Type \'/correct/ig\' and press submit. Or, press the next lesson button.';

  const solution = 'correct';

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

export default lessonZero;
