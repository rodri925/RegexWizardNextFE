import React from 'react';
import WorkspaceLayout from '../../components/WorkspaceLayout';

const missionSix = () => {
  const title = 'Mission 6: Mr. McKinnen vs H4X0R5';
  const paragraphs = ['Dear Regex Wizards,',
    `My name is Mr. McKinnon, and I work cybersecurity at the bank. Yes, that one. I've been
    reviewing some suspicious logs and have found some suspect input that got into our database-
    the problem is, it's heavily obfuscated.`,
    `Do you think you could help me find a regular expression that extracts the malicious code?
    Try to figure out what separates it from the obfuscation.`,
  ];
  const initialText = `Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999
  Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999
  Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999M@liCi0U5C0D3Z#$%YYY**&&788999Z#$%YYY**&&788999
  Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999
  Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999
  Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999Z#$%YYY**&&788999`;

  const solution = 'M@liCi0U5C0D3';

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

export default missionSix;
