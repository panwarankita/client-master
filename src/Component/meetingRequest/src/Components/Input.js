import React from "react";
import "./Input.css";

function Input({ Placeholder }) {
  return (
    <div>
      <input className="inputfield" type="text" placeholder={Placeholder} />
    </div>
  );
}

export default Input;