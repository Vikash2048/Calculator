import React,{useContext} from 'react'
import InputState from '../context/InputState';

const Keys = ({item,id}) => {

    const {input} = useContext(InputState);

    const color = id === 0 || id === 1 || id === 2 || id === 3 || id === 7 || id === 11 || id === 15 || id === 19 ? 'goldenrod' : 'white';

    const keyStyle = {
        color: color,
        fontWeight: "800",
        cursor: "pointer",
    }

    const handleClick = (e) =>{
        SetInput(prevValue => prevValue + e.target.innerText);
        console.log(input);
    }
  return (
    <div className='key' style={keyStyle} onClick={handleClick} >{item}</div>
  )
}

export default Keys