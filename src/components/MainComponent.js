import React, { useState } from 'react';
import Header from './Header';
import Register from './Register';

function MainComponent(props) {
     const [loginState, setLoginState] = useState(false)
    // setLoginState(true);
    return (
        
        <div className='maincomponent'>
            <Header/>
            <button onClick={()=>setLoginState(true)}>
                Click me
            </button>
            <Register/>
            {/* {loginState && <Register/>} */}
        </div>
    );
}

export default MainComponent;