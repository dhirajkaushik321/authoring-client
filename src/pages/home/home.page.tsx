import Navbar from "../../components/Navbar";
import CarouselComponent from "../../components/CarouselComponent";
import CourseListComponent from "../../components/CourseListComponent";
import CourseCard from "../../components/CourseCard";
// import { Grid } from 'tailwindcss/components';
import Course from "../../models/course.model";

export default function HomePage(){

    // const course = {
    //     courseName: "React Fundamentals",
    //     description: "A beginner's course on React",
    //     thumbnail: "https://example.com/thumbnail.jpg",
    //     duration:"2 Hr"
    //   };
    
    return(
        <>
            <Navbar/>
            <CarouselComponent />
            <div className="p-5">
            <CourseListComponent />
            </div>
            {/* <CourseCard course={course} /> */}
        </>
    )
}