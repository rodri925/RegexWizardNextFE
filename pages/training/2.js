import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const lessonTwo = () => {
  const title = 'Lesson 2: Alternators and Character Sets';
  const paragraphs = [`Which do you prefer? Apples or bananas? With regular expressions, you can have both, using the alternator character! The alternator character '|' is synonymous with 'OR', and can be
  used to match apples|bananas. But it may be important to specify what, exactly, you are operating on. If you wanted to say, for example, 'I will eat apples|oranges', it might not work as you intended.
   If you arrange your regex like this, it will match string literals for 'I will eat apples' OR 'oranges'. So, in order to get it to function as intended, we need to wrap our expression
  in parentheses, like so: 'i will eat (apples|oranges)'. Got it? Great!`,
  `Along with alternators, there is another regex operator that works in a similar fashion to alternators, but matches to characters instead of string literals. It is the character set,
and it's characters are the brackets '[]'. Character sets will match a character so long as it is contained with its set of characters. For example,
take the string 'The cat in the hat'. If you wanted to match the words 'cat' and 'hat', you could use alternators to give the regex 'cat|hat'. Or, you could match the first letter to 
either a 'c' or an 'h' using character sets, denoted as '[ch]at'.`,
  `Within the english language, there are several words that are spelled differently, depending on where you are in the world. The word 'flavor', for example, is spelled as such in the US,
while it is spelled 'flavour' in the UK. Below are a list of similar words. For this exercise, find a regular expression that matches the words 'analyze/analyse' and 'pretence/pretense'.`];
  const initialText = '';

  const solution = '';

  const initialTextArray = ['defence', 'defense', 'licence', 'license', 'offence', 'offense', 'pretence', 'pretense', 'analyse', 'analyze',
    'breathalyse', 'breathalyze', 'paralyse', 'paralyze'];

  const solutionArray = ['pretence', 'pretense', 'analyse', 'analyze'];

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

export default lessonTwo;
