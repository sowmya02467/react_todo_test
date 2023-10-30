
import { useState } from "react";

import React  from "react";

export default function Input1({addNewTodos}){

    const[inputValue, setInputValue] = useState("")

    return(
        <div >
            <input style={{marginTop:'5rem',marginLeft:'20rem', width:'15rem', height:'2rem',}}   placeholder="add your title"
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}/>
   <button  style={{ height:'2.5rem', width:'5rem',backgroundColor:"#F8BBD0"}}
   onClick={() =>{
    addNewTodos(inputValue)
    setInputValue("")
   }}>
    add
   </button>
        </div>
    )
}