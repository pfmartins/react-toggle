import React, { useState, useEffect } from "react";
import { Switch } from "@material-ui/core";

export function Toggle({ checked, onCheck, title = "Switch Component" }) {
  const [localCheck, setLocalCheck] = useState(checked);

  const handleOnChange = (value) => {
    if (title === "General Controller") {
      onCheck(value);
      setLocalCheck(!value);
    } else {
      setLocalCheck(!value);
    }
  };

  useEffect(() => {
    setLocalCheck(checked);
  }, [checked]);

  return (
    <>
      <h1>{title}</h1>
      <Switch
        checked={localCheck}
        onChange={() => handleOnChange(localCheck)}
      />
      {localCheck ? (
        <span style={{ color: "red" }}>On fire for the party!</span>
      ) : (
        <span style={{ color: "blue" }}>Off to sleep</span>
      )}
    </>
  );
}
