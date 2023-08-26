import React, { useEffect } from 'react'
import { useState } from "react";
import Course from '../models/course.model';
import CourseCard from './CourseCard';
import axios from 'axios';

export default function CourseListComponent() {
  const [courses, setCourses] = useState<Course[]>([]);

  const url1 = "http://localhost:4000/CourseDb";

  const fetchCourseList = (async () => {
    try {
      const response = await axios.get(`${url1}`);
      setCourses(response.data);
    }
    catch {
      console.log("Error");
    }
  })

  useEffect(() => {
    fetchCourseList();
  }, []);

  return (
    <div className="flex overflow-x-scroll space-x-4">
      {courses.map((course) => (
        <div
          key={course.courseName}
          className="flex-none w-60 max-w-xs bg-gray-300 rounded-lg p-4"
        >
          <p className="font-semibold text-lg truncate">{course.courseName}</p>
          <img src={require(`../images/${course.thumbnail}`)} alt={course.courseName} className="my-2 max-h-32" />
          <p className="text-gray-700">{course.description}</p>
          <p className="text-gray-600"> Duration: {course.duration}</p>
        </div>
      ))}
    </div>
  )
}