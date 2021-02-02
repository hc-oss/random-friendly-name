import React, { useState } from "react";

import { getRandomName, wait } from "./lib";

export default function App() {
  const [name, setName] = useState(getRandomName());
  const [isCopying, setIsCopying] = useState();

  const generate = () => {
    setName(getRandomName());
  };

  const copy = async () => {
    window.navigator.clipboard.writeText(name);
    setIsCopying(true);
    await wait(600);
    setIsCopying(false);
  };

  return (
    <>
      <div className="name">{name}</div>
      <div className="actions">
        <button onClick={generate}>🔀 Something Else</button>
        <button onClick={copy}>📋 {isCopying ? "Copied" : "Copy"}</button>
      </div>
    </>
  );
}
