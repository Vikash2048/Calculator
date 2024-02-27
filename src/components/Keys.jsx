import React from 'react'

const Keys = ({item,id}) => {

    const color = id === 0 || id === 1 || id === 2 || id === 3 || id === 7 || id === 11 || id === 15 || id === 19 ? 'goldenrod' : 'white';

    const keyStyle = {
        color: color,
        fontWeight: "800",
        cursor: "pointer",
    }
  return (
    <div className='key' style={keyStyle} >{item}</div>
  )
}

export default Keys