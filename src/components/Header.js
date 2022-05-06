import React from 'react';

function Header(props) {
    return (
        <div className='brandHeader container d-flex justify-between p-2'>
            <div >
            <h1>Welcome to Mars E-Learning!</h1>
            <sub>Your upskill journey begins here</sub>
            </div>
            <button type="button" class="loginbtn btn btn-primary" id="headerLoginBtn">Log In</button>
        </div>
    );
}

export default Header;