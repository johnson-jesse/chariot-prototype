import React from "react";

type One = { name: string } | null;
const INITIAL_ONE = { name: "foo" };
const OneContext = React.createContext<One>(null);

export function Button() {
  return (
    <OneContext.Provider value={INITIAL_ONE}>
      <div>
        <div>My Button</div>
        <button onClick={() => alert("hello world")} style={{ border: "2px solid purple" }}>CLICK ME</button>
      </div>
    </OneContext.Provider>
  );
}
