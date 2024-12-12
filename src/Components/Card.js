import React from 'react'
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

export const Card = (props) => {

    let course = props.course;
    let likedcourses = props.likedcourses;
    let setlikedcourses = props.setlikedcourses;

    function clickhandler() {
        
        if(likedcourses.includes(course.id)){
            //pahale se like hai  
            setlikedcourses((prev) => 
            prev.filter((cid) => (cid != course.id)));
            toast.warning("Liked Removed");
        }else{
            //new insert karna hai 
            if(likedcourses.length == 0){
                setlikedcourses([course.id]);
            }
            else{
                setlikedcourses((prev) => [...prev,course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

  return (
    <div className='w-[300px] bg-bgDark rounded-sm overflow-hidden
    bg-opacity-80'>

        <div className='relative'>
            <img src = {course.image.url}/>

            <div className='absolute w-[40px] h-[40px] bg-white rounded-full right-2 bottom-[-12px]
            flex justify-center items-center'>
            <button onClick={clickhandler}>
                {
                    likedcourses.includes(course.id) ? (<FcLike fontSize='1.75rem'/>) : (<FcLikePlaceholder fontSize='1.75rem'/>)
                }
            </button>
        </div>

        </div>

        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
            {
                course.description.length > 100 ? (course.description.substr(0,100)) + "..." : (course.description)
            }
            </p>
        </div>

    </div>
  )
}

export default Card;