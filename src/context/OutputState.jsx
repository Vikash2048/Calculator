import { useState } from "react";
import { OutputContext } from "./OutputContext";
const OutputState = ({children}) =>{
    const [output,setOutput] = useState("00");
    return (
        <OutputContext.Provider value={{output,setOutput}}>{children}</OutputContext.Provider>
    )
}

export default OutputState;