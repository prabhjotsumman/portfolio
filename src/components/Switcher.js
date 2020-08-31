import React, { useState } from "react";

import "../css/switcher/switcher.css";

function Switcher() {
  const [mode, setMode] = useState(false);

  const onChange = () => {
    setMode(!mode);
  };

  if (mode) {
    document.getElementById("Body").style.backgroundColor = "#131417";
  } else {
    document.getElementById("Body").style.backgroundColor = "#103c42";
  }

  return (
    <div className="Switcher-Container">
      <i className="far fa-sun"></i>
      <label className="switch">
        <input type="checkbox" onChange={() => onChange()} />
        <span className="slider round"></span>
      </label>
      <i className="far fa-moon"></i>
    </div>
  );
}

export default Switcher;
