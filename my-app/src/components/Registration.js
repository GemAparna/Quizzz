import React, { useState } from 'react'
import { Form,Alert } from 'react-bootstrap';
import Login  from './Login'
import styles from './Registration.module.css';
import Header from './Header';
function Registration() {

    const [ name , setName] = useState("");
    const [ email , setEmail] = useState("");
    const [ password , setPassword] = useState("");
    const [ flag , setFlag] = useState(false);
    const [ logIn , setLogin] = useState(true);

function handleSubmit(e){
    e.preventDefault();
    
    if(!name || !email || !password){
        setFlag(true);
    }
    else{
        setFlag(false);
        localStorage.setItem("Email",JSON.stringify(email)); 
        localStorage.setItem("Password",JSON.stringify(password)); 
        setLogin(!logIn);
    }

}

    function handleClick(){
        setLogin(!logIn);
    }
    const handle = () => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Password', password);
     };


  return (
      <div>
          <Header/>
    <div className={styles.all}>
        <br></br>
        {" "}
          {logIn ? (
        <form onSubmit={handleSubmit}>
            <h1 className='hii mx-2 my-2'>User Registration</h1>
            <div className='form-group p-2 mx-2 my-2'>
                <label>Name</label>
                <input type="text"
                className='form-control '
                placeholder='Enter your name'
                onChange={(event) => setName(event.target.value)}
                ></input>
            </div>
            <div className='form-group p-2 mx-2 my-2'>
                <label>Email:</label>
                <input type="text"
                className='form-control '
                placeholder='Enter your email'
                onChange={(event) => setEmail(event.target.value)}
                ></input>
            </div>
            <div className='form-group p-2 mx-2 my-2'>
                <label>Password</label>
                <input type="password"
                className='form-control '
                placeholder='Enter your password'
                onChange={(event) => setPassword(event.target.value)}
                ></input>
            </div>
            <button type='submit' className='btn btn-dark btn-block mx-2 my-2'  onClick={handle}>Register Me!</button>
            <br></br>
            <p>Already have an account? {" "}<span className='text-info' onClick={handleClick}>Log in</span> </p>
            <br></br>
            {flag && (
                <Alert color="primary" variant='danger'>
                    Please fill fields properly
                </Alert>
            )}


        </form>
         ) : (

                <Login></Login>
                )}

    </div>
    </div>
  );
}

export default Registration