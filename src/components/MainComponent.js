import React, { useState } from 'react';
import Header from './Header';
import Register from './Register';
import Login from './Login';
import Home from './Home';

function MainComponent(props) {
     const [loginState, setLoginState] = useState(0)
    // setLoginState(true);
    return (
        
        <div className='maincomponent'>

            <Header fnc={setLoginState}/>
            {/* <Register/> */}
            {(loginState == 1) && <Register fnc={setLoginState}/>}
            {(loginState ==2) && <Login fnc={setLoginState}/>}
            <Home/>
        </div>
    );
}

export default MainComponent;