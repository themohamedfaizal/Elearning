import React, { useState } from 'react';
import Header from './Header';
import Register from './Register';
import Login from './Login';

function MainComponent(props) {
     const [loginState, setLoginState] = useState(0)
    // setLoginState(true);
    return (
        
        <div className='maincomponent'>

            <Header fnc={setLoginState}/>
            {/* <Register/> */}
            {(loginState == 1) && <Register fnc={setLoginState}/>}
            {(loginState ==2) && <Login fnc={setLoginState}/>}
        </div>
    );
}

export default MainComponent;