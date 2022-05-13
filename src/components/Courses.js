import React from 'react';
import {useState,useRef} from 'react';
import http from '../AxiosMW/http-common.js';
import Styles from '../Styles/Courses.module.css';

function Courses(props) {

    //const [emailid,setEmailid] = useState('');
    const emailid = useRef("");
    const [courses,setCourses]=useState([
        {courseid:'C101',coursename:'HTML',description:'Introduction to HTML',fee:12.99,instructor:'Jim K',resources:'https://www.htmlresources/page1'},
        {courseid:'C102',coursename:'CSS',description:'Introduction to CSS',fee:12.99,instructor:'Jim K',resources:'https://www.htmlresources/page1'},
    ]);
    const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
    console.log(inputEl.current.value)
  };
    const fetchCourses = ()=>{

        console.log("In Fetch Courses");
        // http://localhost:8082/elearning/courses
        http.get("/courses/")
        .then(res => {
            console.log(res.data);
            setCourses(res.data);
          
        })
        .catch(error => {
          console.log(error);
        });

        const str = emailid.current.value+ " Check this";
        console.log(str);
        http.get("enrollment/user/"+emailid.current.value)
        .then(res => {
            console.log(res.data);
            // setCourses(res.data);
          
        })
        .catch(error => {
          console.log(error);
        });


    }

    // const [courses,setCourses]=useState([
    //     {courseid:'C101',coursename:'HTML',description:'Introduction to HTML',fee:12.99,instructor:'Jim K',resources:'https://www.htmlresources/page1'},
    //     {courseid:'C102',coursename:'CSS',description:'Introduction to CSS',fee:12.99,instructor:'Jim K',resources:'https://www.htmlresources/page1'},
    // ]);

    


    return (
        <div>
        <div className={Styles.headerbanner}>
            <h2>Mars E-Learning</h2>
        </div>
        <div className='container'>
            <p className={Styles.rowItems}>
                <input type='email' ref={emailid} pattern='.+@.+\.com'></input>
                <button className ={Styles.btn} onClick={onButtonClick}>check enrollment</button>
            </p>
            <button onClick={fetchCourses}> Update Course List</button>
            <div className='courselist'>
                {courses.map((course)=><Course id={course.courseid}
                    name = {course.coursename}
                    desc = {course.description}
                    fee = {course.fee}
                    tutor = {course.instructor}
                    res = {course.resources} />)}
            </div>
        </div>
        </div>
    );
}

function Course({id,name,desc,fee,tutor,res}){
    return(
        <div className='course'>
            <h3>{id}:{name}</h3>
            <h4>{tutor}</h4>
            <p>{desc}</p>
            <p>Fee: ${fee}</p>
            {res}

        </div>
    );
}

export default Courses;