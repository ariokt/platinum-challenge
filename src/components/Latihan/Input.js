import React from 'react'
import { useState } from 'react'
const Input = ({ textInput, setTextInput }) => {
  return (
    <div>
      <input
        type="text"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
    </div>
  );
};

export default Input