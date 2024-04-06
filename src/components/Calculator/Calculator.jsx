import React, { useState } from "react";
import './Calculator.css'
const Calculator = () => {
    let [display, setDisplay] = useState("");

    const handleClick = (e) => {
        let btnvalue = e.target.value;
        setDisplay(display + btnvalue);
    };

    const handleClear = () => {
        setDisplay("");
    };

    const handleEquals = () => {
        try {
            let result = eval(display);
            setDisplay(result);
        } catch (err) {
            alert('Error! Please check your expression');
        }
    };

    return (
        <div >
            {/* <input className="calculator-display">{display}</input> */}

            <div id="container">

                <main>
            
                    <div id="screen">
                       
                        {/* <input id="input" type="text" placeholder="0" readOnly value={display} className="calculator-display" /> */}
                        
                        <div id="input">{display}</div>
                        <div id="output">{display}</div>
                    </div>
                    <div id="buttons">
                        <button type="button" value={"7"} onClick={handleClick} >

                            7
                        </button>
                        <button type="button" value={"8"}  onClick={handleClick}>

                            8
                        </button>
                        <button type="button" value={"9"}  onClick={handleClick}>

                            <label for="d1-9" class="digit1"></label>
                            9
                        </button>
                        <button type="button" value={'/'} onClick={handleClick}><label for="divide"></label>&divide;</button>
                        <button type="button" value={"4"}  onClick={handleClick}>

                            4
                        </button>
                        <button type="button" value={"5"}  onClick={handleClick}>

                            5
                        </button>
                        <button type="button" value={"6"} onClick={handleClick}>

                            6
                        </button>
                        <button type="button" value={'*'} onClick={handleClick}><label for="multiply"></label>&times;</button>
                        <button value={"1"}  type="button" onClick={handleClick}>

                            1
                        </button>
                        <button value={"2"}  type="button" onClick={handleClick}>

                            2
                        </button>
                        <button value={"3"}  type="button" onClick={handleClick}>

                            3
                        </button>
                        <button type="button" value={'-'} onClick={handleClick}><label for="subtract"></label>-</button>
                        <button type="button" onClick={handleClear}><input type="reset" value="AC" /></button>
                        <button value={"0"}  type="button" onClick={handleClick}>

                            0
                        </button>
                        <button type="button" onClick={handleEquals}><label for="equals"></label>=</button>
                        <button type="button" value={'+'} onClick={handleClick}><label for="add"></label>+</button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Calculator;