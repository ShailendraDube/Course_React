import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    //startting me ek bhi course liked nahi hai as 
    //passed props in the card components  
    const[likedcourses,setlikedcourses] = useState([]);

    // data ko single array me lana hai

    function getCourses() {
      if(category === "All"){
        let allcourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allcourses.push(courseData);
            })
        })
        return allcourses;
    }
    else{
        //only specific category should be passed
        return courses[category];
    }
}
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
    {
        getCourses().map( (course) => (
            <Card key={course.id} course = {course} 
            likedcourses = {likedcourses}
                setlikedcourses = {setlikedcourses}
            />
        ))
    }
    </div>
  )
}

export default Cards;