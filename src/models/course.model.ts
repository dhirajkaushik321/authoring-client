// model - 
// type - course
// name, desc, thumbanil, time,


// card component
// cardList component - define dummy dataarray : array course[], arraydata.map(card), 

type Course = {    
    courseName: string;
    description: string;
    thumbnail: string;
    duration: string;
    [key: string]: string; // Index signature
};

export default Course;