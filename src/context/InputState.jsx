import { useState } from "react";
import { InputContext } from "./InputContext";

const InputState = ({children}) =>{
    const [input,setInput] = useState("");
    return (
        <InputContext.Provider value={{input,setInput}}>{children}</InputContext.Provider>
    )
}

export default InputState;