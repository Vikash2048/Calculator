import React, { useContext } from 'react'
import { OutputContext } from '../context/OutputContext'
import { InputContext } from '../context/InputContext';

const Input = () => {
  const {output} = useContext(OutputContext);
  const {input} = useContext(InputContext);
  return (
    <div className='input'>
        <div className='ip'>{input}</div>
        <div className="op">{output}</div>
    </div>
  )
}

export default Input