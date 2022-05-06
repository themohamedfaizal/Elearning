import React from 'react';
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className='brandHeader container d-flex justify-between p-2'>


            <div >
            <h1>Welcome to Mars E-Learning!</h1>
            <sub>Your upskill journey begins here</sub>
            </div>
            <select id="navigation" className='navigation'>
                <option><Link to="/register">Register</Link></option>
                <option><Link to="/login">Login</Link></option>
                <option><Link to="/about">About</Link></option>
            </select>
            <button type="button" className="loginbtn btn btn-primary" id="headerRegisterBtn"
            onClick={()=>props.fnc(1)}>Register</button>
            <button type="button" className="loginbtn btn btn-primary" id="headerLoginBtn"
            onClick={()=>props.fnc(2)}>Login</button>
        </div>
    );
}

export default Header;