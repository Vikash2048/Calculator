import React, { useContext, useState } from 'react'
import { InputContext } from '../context/InputContext';
import { OutputContext } from '../context/OutputContext';

const Keys = ({ item, id }) => {

  const {setInput } = useContext(InputContext);
  const { setOutput } = useContext(OutputContext)
  const [operator, setOperator] = useState("");
  const [preValue, setPreValue] = useState("");
  const [currentValue, setCurrentValue] = useState('');

  const color = id === 0 || id === 1 || id === 2 || id === 3 || id === 7 || id === 11 || id === 15 || id === 19 ? 'goldenrod' : 'white';

  const keyStyle = {
    color: color,
    fontWeight: "800",
    cursor: "pointer",
  }

  const handleClick = (e) => {
    const value = e.target.innerText;
    setInput(prevValue => {
      let updatedValue = "";
      if (value >= 0 && value <= 9) {
        updatedValue = String(prevValue) + String(value);
      }
      else {
        updatedValue = String(prevValue) + " " + String(value) + " ";
      }
      return updatedValue;
    })
    if (!isNaN(value)) {
    } else if (value === "AC") {
      setInput("");
      setOutput("00");
    } else if (value === "=") {
      const result = calculate();
      setOutput(result);
      setCurrentValue(result);
      setPreValue("");
      setOperator("00");
    } else{
      if(operator){
        const result = calculate();

      }
    }


  }

  const calculate = () => {

  }
  return (
    <div className='key' style={keyStyle} onClick={handleClick} >{item}</div>
  )
}

export default Keys