import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const lessonSeven = () => {
  const title = 'Lesson 7: Quantifiers';
  const paragraphs = [`Up until now, we have only been able to match characters one for one. This can get tiresome, especially when face with a string like 'hahahaha'. To match this,
  we would need to use the full string literal. This is where quantifiers come in. With quantifiers we can identify repeating substrings and instruct the regex
  to look for a specific number of repeats. Instead of writing /hahahaha/, we can use the quantifier characters '{ }' and write /(ha){4}/. If you want to match, say,
  'ha' 'haha' and 'hahaha' as well, you can also incorporate a range within your quantifiers, writing /(ha){1,4}/. One thing to note is that, if not using the 'g' flag,
  the quantifier will return the largest repeat it can find.`,
  'Below is a list of onomatopoeias. Find a regular expression that returns all iterations of \'shh\' and \'hiss\'.'];
  const initialText = [`shhhhh
  haha
  shh
  hiss
  hahaha
  buzz
  hissss
  buzzzzz
  `];

  return (
    <WorkspaceLayout title={title} paragraphs={paragraphs} initialtext={initialText} />
  );
};

export default lessonSeven;
