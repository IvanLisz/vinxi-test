import React from "react";

import "./style.css";

export default function App({ assets, children }) {
  const [count, setCount] = React.useState(0);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {assets}
      </head>
      <body>
        <section>
          <h1>Hello AgentConf wdddithddd ya asdo!!!</h1>
          <button onClick={() => setCount(count + 1)}>
            Click fffffme: {count}!
          </button>
        </section>
        {children}
      </body>
    </html>
  );
}
