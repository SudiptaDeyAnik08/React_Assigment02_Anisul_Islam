import React, { useState } from "react";
import './CounterApp.css';

const CounterApp =()=>{

    const [value,setValue] = useState(0);

    
    const add = ()=>{
       let  sum= 1 + value;
        setValue(sum);
    }

    const min = ()=>{
        let sum = value - 1;
        setValue(sum);
    }

    const setZero = () =>{
        let sum = 0 ;
        setValue(sum);
    }

    return(
        <div className="Body">   
            <h1>Country App</h1>
            <div className="child">
                <h3>Count: {value}</h3>
                <div className="btn-group">
                    <button onClick={add} disabled={value === 5 ? true : false}>+</button>
                    <button onClick={min} disabled={value === -5 ? true : false}>-</button>
                    <button onClick={setZero}>0</button>
                </div>
            </div>
        </div>
    )
}

export default CounterApp;