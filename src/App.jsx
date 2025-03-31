import React, { useState } from "react";
import { Toggle } from "./Toggle";

export function App() {
  const [checkOne, setCheckOne] = useState(true);
  const [checkTwo, setCheckTwo] = useState(true);
  const [checkThree, setCheckThree] = useState(true);

  const handleOnCheck = (value) => {
    setCheckOne(!value);
    setCheckTwo(!value);
    setCheckThree(!value);
  };

  return (
    <div>
      <Toggle
        checked={checkOne}
        onCheck={handleOnCheck}
        title={"General Controller"}
      />
      <Toggle checked={checkTwo} onCheck={handleOnCheck} />
      <Toggle checked={checkThree} onCheck={handleOnCheck} />
    </div>
  );
}
