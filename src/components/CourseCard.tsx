import React from 'react';
import { useState } from 'react';
import Course from '../models/course.model';

// export default 
// function CourseCard(props:String) {  

//     return (
//         <div>CourseCard {props}</div>
//     )
// }


//const CourseCard = ({ course }: Course) => {
const CourseCard = ({ courseName }: Course) => {
    return (
      <div className="flex flex-col items-center">
        
        <h2 className="text-xl font-bold">{courseName}</h2>
        {/* <p className="text-gray-700">{course.description}</p>
        <p className="text-gray-500">{course.duration}</p> */}
      </div>
    );
  };
  

  export default CourseCard;