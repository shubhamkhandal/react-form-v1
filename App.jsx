import React, { useState } from 'react';

const App = () => {
    const  [fullName, setfullName] = useState({
        fname: "",
        lname:""
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        // setfullName(event.target.value);

        const value = event.target.value;
        const name = event.target.name;

        setfullName((preValue) => {
            // console.log(preValue)
            if(name === 'fname'){
                return{
                    fname: value,
                    lname: preValue.lname
                };
            } else if (name === 'lname'){
                return{
                    fname: preValue.fname,
                    lname: value
                };
            }
        });
    };


    const onSubmit = (event) => {
        event.preventDefault();
        alert("form Submitted!😄");

    };

   
   return (
    <reactFragment>
    <form onSubmit={onSubmit}>
        <div>
            <h1>Hello {fullName.fname}{fullName.lname}</h1>
            <input type="text" placeholder="enter your name" name="fname" onChange={inputEvent} value={fullName.fname} /><br/>
            <input type="text" placeholder="enter your Last name" name="lname" onChange={inputEvent} value={fullName.lname} /><br/>
            <button type="submit" >Change above 👍</button>
        </div>
    </form>
    </reactFragment>
   );

};
export default App;