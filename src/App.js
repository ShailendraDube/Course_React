import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";


const App = () => {

  const [courses,setcourses] = useState(null);
  //jab tak data nahi aata load karo scree  
  const [loading,setloading] = useState(true);

  //selecting category in react
  const[category,setcategory] = useState(filterData[0].title);

  //for api fecthing purpose  
  async function fetchData() {
    //data load ho raha hai
    setloading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setcourses(output.data);
    } 
    catch (error) {
      toast.error("Problem in your network")
    }
    //data load ho gaya hai
    setloading(false);
  }

  useEffect(() => {
    fetchData();
  },[]);

  return(
    <div className="flex flex-col min-h-screen bg-bgDark2">

      <div>
        <NavBar/>
      </div>

      <div className="">

      <div>
        <Filter filterData = {filterData}
          category = {category}
          setcategory = {setcategory}
        />
      </div>

      <div className='w-11/12 max-w-[1200px] flex items-center 
    mx-auto min-h-[50vh] flex-wrap justify-center'>
        {/* //loading true hai toh spinner batao
        else Cards show karo */}
        {
          loading ? (<Spinner/>) : (<Cards courses = {courses}
              category = {category}
          />)
        }
      </div>

      </div>



    </div>
  );
};

export default App;
