import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from 'react-router';
import {validateUserAction} from '../action/action.js';
import http from "../AxiosMW/http-common.js"

function Login(props) {

    const dispatch = useDispatch();
    const password = useSelector((state)=>state.items.password);
    let navigate = useNavigate();
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
        // console.log(postdata);
        // dispatch(validateUserAction(postdata));
        // dispatch(logpwd);
        props.fnc(0);

        http.get("/users/"+postdata.emailid)
        .then(res => {
            console.log(res);
          const user = res.data.fname;
          const password = res.data.password;
          //const username = this.state.username;
          const passwordEntered = postdata.password;
        //   if(username === '' && passwordEntered === ''){
        //     document.getElementById('status').innerHTML = '<p>Please Enter A Valid Username and Password</p>';
        //   }else 
          if(passwordEntered === password){
            gotoenroll();
          }else{
              //document.getElementById('status').innerHTML = '<p>Please Enter A Valid Username and Password</p>';
              console.log("Password Mismatch");
          }
        })
        .catch(error => {
          console.log(error);
        });


    }

    function gotoenroll(){
        navigate("\About Us");
    }

    const logpwd =()=>{console.log("uspassword: ",password);}

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                {/* <!-- Tabs Titles --> */}

                {/* <!-- Icon --> */}
                <div className="fadeIn first">
                <h3>Log in</h3>
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