
import { useState } from "react"
import React from "react";

export default function Input2({todos, deleteTodos}){

   return(
        <div>
          <ul>
            {todos.map((item, index)  =>{

                return(
                    <li>
                        {item}
                        <button onClick={() => deleteTodos(item)}>
                        Done
                        </button>
                    </li>
                )
            })}
          </ul>
        </div>
    )
}