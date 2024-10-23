import React from "react";



const mainCertificate = () => {
const Logo = "work station.jpg"

    return ( 
        <div className="animate-fadeIn w-full h-screen md:absolute bg-[#000300] md:w-[60%] lg:w-[74%] z-10 right-0 pt-[20%] md:pt-[15%] lg:pt-[10%] md:px-10 ">

            <div className=" md:w-[-50%] lg:w-[-50%]  h-[30%] lg:h-[30%] md:h-[30%] xl:h-[35%] 2xl:h-[70%]  2xl:px-[15%]">
            <div className="md:h-[100%] sm:px-2 md:w-[-50%] h-full px-2 rounded-md shadow-custom md:p-2  ">
            <img
                        src={Logo}
                            alt="Full Image"
                            className="w-full h-full object-cover rounded-md"
                    />
            </div>
                <div className="p-4">
                <a 
                    href="Resume.pdf"
                    download="Emmanuel Victor(Resume)"
                ><button className="bg-[#10c2aa] px-4 md:px-10 p-2 rounded-md text-black transition-transform duration-500 ease-in-out transform hover:scale-110">Download Certificate</button></a>
                </div>
            </div>

        </div>
     );
}
 
export default mainCertificate;