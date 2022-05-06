// import e from 'express';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addUserAction} from '../action/action.js';
import {useSelector} from 'react-redux';
import {currentUser} from '../reducer/Reducer.js';

function Register(props) {

    const dispatch = useDispatch();
    const user = useSelector((state)=>state.items.fname);
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


    // const [fname,setFname] = useState('');
    // const [lname,setLname] = useState('');
    // const [role,setRole] = useState('');
    // const [dob,setDob] = useState(new Date());
    // const

    function handleDateUpdate(e) {
        console.log(e.target.id);
        let val = '';
        switch(e.target.id)
        {
            case "fname":
                postdata.fname = e.target.value;
                // setFname(val);
                break;
            case "lname":
                postdata.lname = e.target.value;
                // setLname(val);
                break;
            case "dob":
                postdata.dob = e.target.value;
                // console.log("dateValue", dateValue);
                // setDob(dateValue);  // state variable updated here
                break;
            case "role":
                postdata.role = e.target.value;
                // setRole(val);
                // console.log({role});
                break;
        }
        
      }

      

      const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(postdata);
        dispatch(addUserAction(postdata));
        console.log("user",user);
        props.fnc(0);
      }

    return (
        <div id="formContent">
            <div className="fadeIn first">
            {/* <img src="" id="icon" alt="User Icon" /> */}
            </div>

            {/* <!-- Login Form --> */}
            <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" id="fname" className="fadeIn second" name="fname" placeholder="First Name" 
                onChange={(e)=>{postdata.fname = e.target.value}}/>
            <input type="text" id="lname" className="fadeIn second" name="lname" placeholder="Last Name"
                onChange={(e)=>{postdata.lname = e.target.value}}/>
            <input type="date" id="dob" className="fadeIn second" name="dob" placeholder="Date of birth"
                onChange={(e)=>{postdata.dob=e.target.value;}}/>
            <br></br>
            <select id="role" className="fadeIn second" name="role" 
                onChange={(e)=>postdata.role=e.target.value}>
            <option value="" disabled selected hidden>You are a...</option>
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
                <option value="Admin">Admin</option>
            </select>
            <br></br>
            <input type="email" id="emailid" className="fadeIn second" name="emailid" placeholder="Email Id"
                onChange={(e)=>postdata.emailid=e.target.value}/>
            <br></br>
            <input type="password" id="password" className="fadeIn third" name="password" placeholder="Password"
                onChange={(e)=>postdata.password=e.target.value}/>
            <br></br>
            <input type="password" id="ConfirmPassword" className="fadeIn third" name="ConfirmPassword" placeholder="Confirm Password"/>
            <br></br>
            <input type="text" id="SecQuestion" className="fadeIn third" name="SecQuestion" placeholder="Security Question"
                onChange={(e)=>postdata.securityquestion=e.target.value}/>
            <input type="text" id="SecAnswer" className="fadeIn third" name="SecAnswer" placeholder="Answer to Security Question"
                onChange={(e)=>postdata.securityanswer=e.target.value}/>
            <input type="submit" className="fadeIn fourth" value="Register"/>
            <input type="button" className="fadeIn fourth" value="Cancel" onClick={()=>props.fnc(0)}/>
            </form>

            {/* <!-- Remind Passowrd --> */}
            <div id="formFooter">
            <a className="underlineHover" href="#">Already Registered? Sign in here..</a>
            </div>
        </div>
    );
}

export default Register;