import { useState } from "react";
import validator from 'validator'

function Stopwatch()
{
    const [errormassage, setErrormessage]=useState('');
    const validator=(value)=>{
        if(validator.isStrongPassword(value,{
            minLength: 8, minLowercase: 1, 
            minUppercase: 1, minNumbers: 1, minSymbols: 1 
        })){
            setErrormessage('Is Strong Password')
        }
        else
        {
            setErrormessage('Is Not Strong Password')
        }
    }
    return(
        <div style={{
            marginLeft:'200px',
        }}>
          <pre>
            <h2>Checking Password Strength in ReactJS</h2>
            <span>Enter Password: </span><input type="text"/>
            {errormassage === '' ? null : 
                    <span style={{ 
                        fontWeight: 'bold', 
                        color: 'red', 
                    }}>{errormassage}</span>} 
          </pre>
        </div>
    )
}
export default Stopwatch;