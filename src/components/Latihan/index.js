import React from 'react'
import { useState } from 'react'
import Input from "./Input"
import Button from "./Button"
const Latihan = () => {

    const [name, setName] = useState('kamu')
    const [textInput, setTextInput] = useState('')

    function changeName() {
        setName(textInput)
        setTextInput('') 
    }

  return (
    <div>
      <h1>Latihan State & Props</h1>
      <p>Halo {name}</p>
      <Input textInput={textInput} setTextInput={setTextInput} />
      <Button text="Change Name" onClick={changeName} />
    </div>
  );
}

export default Latihan;