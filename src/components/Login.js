import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {validateUserAction} from '../action/action.js';

function Login(props) {

    const dispatch = useDispatch();
    const password = useSelector((state)=>state.items.password);
    const postdata = {
        fname:'',
        lname:'',
        dob:new Date(),
        role:'',
        emailid:'',
        password:'',
        securityquestion:'',
        securityanswer:''
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(postdata);
        dispatch(validateUserAction(postdata));
        dispatch(logpwd);
        props.fnc(0);
    }

    const logpwd =()=>{console.log("uspassword: ",password);}

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                {/* <!-- Tabs Titles --> */}

                {/* <!-- Icon --> */}
                <div className="fadeIn first">
                {/* <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" /> */}
                </div>

                {/* <!-- Login Form --> */}
                <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" id="emailid" className="fadeIn second" placeholder="Email id"
                    onChange={(e)=>postdata.emailid=e.target.value}/>
                <input type="text" id="password" className="fadeIn third" placeholder="password"
                    onChange={(e)=>postdata.password=e.target.value}/>
                
                <input type="submit" className="fadeIn fourth" value="Log In"/>
                <input type="button" className="fadeIn fourth" value="Cancel" onClick={()=>props.fnc(0)}/>
                </form>

                {/* <!-- Remind Passowrd --> */}
                <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
        </div>
    );
}

export default Login;