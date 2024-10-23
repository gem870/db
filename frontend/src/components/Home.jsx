import React from "react";
import Logo2 from './assets/Emmanuel victor.png'
import Project from "./Project";
import Profile from "./Profile";



const Home = () => {
    return ( 
        <div className="  h-screen md:w-[100%] md:mt-[18%] animate-fadeIn pt-20 ">

            <div className=" md:w-[100%] xl:h-[70%] shadow-custom mb-2  ">
                <img
                        src={Logo2}             // backgroung image
                            alt="Full Image"
                            className="w-[100%] h-full object-cover opacity-15 mx-auto z-[-10] relative "
                    />
            </div>
            <div className="md:hidden ">
                <Profile/>
            </div>
            <div className="">
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            </div>
       </div>
     );
}
 
export default Home;