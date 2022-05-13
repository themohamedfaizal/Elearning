import React from 'react';
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className='brandHeader'>
            <div className='container justify-between p-1'>
                <div className='row'>
                    <div className='col'>
                    <h2>Mars E-Learning</h2>
                    </div>
                    <div className='col'>
                    
                    </div>
                    <div className='d-flex justify-content-around align-items-center col' >
                        <div class="p-2">
                        <select id="navigation" className='navigation'>
                            <option><Link to="/register">Register</Link></option>
                            <option><Link to="/login">Login</Link></option>
                            <option><Link to="/about">About</Link></option>
                        </select>
                        </div>

                        <div class="p-2">
                        <button type="button" className="loginbtn btn btn-primary" id="headerRegisterBtn"
                        onClick={()=>props.fnc(1)}>Register</button>
                        </div>

                        <div class="p-2">
                        <button type="button" className="loginbtn btn btn-primary" id="headerLoginBtn"
                        onClick={()=>props.fnc(2)}>Login</button>
                        </div>
                    </div>
                </div>
                Your upskill journey begins here
                {/* <div className='row'>
                    <div className='col subscript'>
                        Your upskill journey begins here
                    </div>
                    <div className='col'>
                       
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Header;