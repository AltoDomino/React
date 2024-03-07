import React from "react";
import { useState } from "react";


export const App = () =>{
    const [prop, setValue] = useState(0)

    return (
    <div class="set">
        <div class="result">{prop}</div>
        <button onClick={()=>{setValue(prop+1)}}>+</button>
        <button onClick={()=>{setValue(prop-1)}}>-</button>
    </div>
     )
}