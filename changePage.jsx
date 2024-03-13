import React from "react";
import { useState } from "react";
import "./pages.css"

export const App = () =>{
 const [value, setPage]=useState("bright")


 const changeBackround =()=>{
    setPage(!value)
    
 }
console.log(value)
 return (
    <div className={value? "bright" : "dark"} >
        <button onClick={changeBackround}>
            {value? "zmień na ciemny motyw":'zmień na jasny motyw'}
        </button>
    </div>
 )
}



