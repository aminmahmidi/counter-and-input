import React, { useState } from "react";

const Input = () => {
  const [showText, setShowText] = useState(true);
  const [text, setText] = useState("");
  const handelInput = (e) => {
    setText(e.target.value);
  };
  const handleShow = () => {
    setShowText(!showText);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleShow();
  };
  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <div className="preview">
          <h4> {showText ? text : ""}</h4>
        </div>

        <input type="text" onChange={handelInput} name="" id="" />
        <div className="submit-container">
          <button type="submit" className="text-btn">{!showText ? "نمایش" : "مخفی سازی"}</button>
        </div>
      </form>
    </div>
  );
};

export default Input;
