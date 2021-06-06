import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  /*
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  */
  return (
    <main>

      <Helmet>

        <title>💚☕🌈🧙🌌🌀⊙🌵⊙🐸🐹🐈🦄👨‍⏰🔆☠️🌲🤰🤱🧔🧗🧘🧙🧚🐯🐭🐁🌱🐸🌵🌲🏢🏡🌈🧚🐁🌵🐸🌲🌌🍄 CryptoVR ↯ Open-Source Cryprocurrencies Virtual Worlds ⇴∢±∞∗¤💎💥💚</title>

      </Helmet>
      
      <h3>💚☕🌈🧙🌌🌀⊙🌵⊙🐸🐹🐈🦄👨‍⏰🔆☠️🌲🤰🤱🧔🧗🧘🧙🧚🐯🐭🐁🌱🐸🌵🌲🏢🏡🌈🧚🐁🌵🐸🌲🌌🍄 CryptoVR ↯ Open-Source Cryprocurrencies Virtual Worlds ⇴∢±∞∗¤💎💥💚</h3>
      
      <p>
        <em><b>CryptoVR Platform</b></em> is a new open-source cryptocurrencies-based Open Simulator-based {'3D'} &amp; multi-modal virtual worlds <em>forkable platform</em> project.
      </p>

      <p>
        Money layer will be based on our new <em><b>Money Layer Antarctica Glacier</b> forkable platform</em> project, also known as <code>libmoney</code>.
      </p>

      <p>
        One instance for <em><b>CryptoVR Platform</b></em> will probably be at <a href="http://ANYWORLDS.APP/">ANYWORLDS.APP</a>.
      </p>

      <p>
        <em>Project status:</em> The platform development just starting (June 6, 2021).
      </p>


      {/*<h2>
        Deployed with{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/vercel/vercel/tree/main/examples/gatsby"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        is a <a href="https://www.gatsbyjs.org/">Gatsby</a> app with two
        directories, <code>/src</code> for static content and <code>/api</code>{' '}
        which contains a serverless{' '}
        <a href="https://nodejs.org/en/">Node.js (TypeScript)</a> function. See{' '}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Node.js (TypeScript)
        </a>
        .
      </p>
      <br />
      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
      */}
      <p>Copyright © 2021 individual contributors. All Rights Reserved.</p>

    </main>
  );
}

export default Index;
