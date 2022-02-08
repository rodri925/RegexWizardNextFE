import React, { useState } from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import styles from '../styles/LandingPageTop.module.css';

const LandingPage = () => {
  const [para, setPara] = useState('Betty Botter had some butter,\n'
+ '"But," she said, "this butter\'s bitter.\n'
+ 'If I bake this bitter butter,\n'
+ 'It would make my batter bitter.\n'
+ 'But a bit of better butter,\n'
+ 'That would make my batter better."\n'
+ 'So she bought a bit of butter –\n'
+ 'Better than her bitter butter –\n'
+ 'And she baked it in her batter;\n'
+ 'And the batter was not bitter.');

  const [count, setCount] = useState(0);

  const regexStrings = ['butter', 'b[uaie]tter', 'b...er', '\\b[Bb][ui]t\\b'];

  const manipulatePara = (regex) => {
    if (count >= 4) {
      setCount(0);
    }
    const regularX = new RegExp(`${regex}`, 'gi');
    const spanStart = '<mark>';
    const spanEnd = '</mark>';
    const newPara = para.replace(regularX, (word) => `${spanStart}${word}${spanEnd}`);
    setPara(newPara);
    const newCount = count + 1;
    setCount(newCount);
  };

  const cleanPara = () => {
    const newPara = para.replace(/<mark>/gi, '');
    const mark = '</mark>';
    const regularX2 = new RegExp(mark, 'gi');
    const finalPara = newPara.replace(regularX2, '');
    setPara(finalPara);
  };
  /* Not possible to reduce Typewriter functions to loop. */
  return (
    <div className={styles.container1}>
      <div className={styles.CTA}>
        <h1>Jump right in.</h1>
        <p>
          Learn how to use
          <span> regular expressions </span>
          like a wizard.
        </p>
        <Link href="./training"><div className={styles.mainLink}><span>Begin Training</span></div></Link>
      </div>
      <div className={styles.Example}>
        <div className={styles.inputBox}>
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter.typeString(regexStrings[0])
                .callFunction(() => manipulatePara(regexStrings[0]))
                .pauseFor(3500)
                .deleteAll()
                .callFunction(() => cleanPara())
                .pauseFor(1500)
                .typeString(regexStrings[1])
                .callFunction(() => manipulatePara(regexStrings[1]))
                .pauseFor(3500)
                .deleteAll()
                .callFunction(() => cleanPara())
                .pauseFor(1500)
                .typeString(regexStrings[2])
                .callFunction(() => manipulatePara(regexStrings[2]))
                .pauseFor(3500)
                .deleteAll()
                .callFunction(() => cleanPara())
                .pauseFor(1500)
                .typeString(regexStrings[3])
                .callFunction(() => manipulatePara(regexStrings[3]))
                .pauseFor(3500)
                .deleteAll()
                .callFunction(() => cleanPara())
                .pauseFor(1500)
                .start();
            }}
          />
        </div>
        <div className={styles.paragraphBox}>
          <p dangerouslySetInnerHTML={{ __html: para }} />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
