import React from "react";



const About = () => {
    const Logo = "work station.jpg"
    return ( 
        <div className="animate-fadeIn  w-full h-screen 2xl:flex pt-[25%] lg:pt-[20%] md:block    ">

            <div className="h-[50%] shadow-custom p-2 w md:w-[90%] xl:w-[90%] 2xl:w-[40%] lg:h-[30%] xl:h-[40%] md:h-[40%] mb-8 md:mb-[7%] ml-[4%]">
            <img
                src={Logo}
                    alt="Full Image"
                    className="w-full h-full object-cover rounded-3xl"
            />
            </div>

            <div className="border  2xl:border-none border-gray-700 text-gray-500 text-[18px] p-4 mx-2 rounded-md 2xl:w-[70%]  pb-20 text-center 2xl:text-left ">
               <p>
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quos labore, corporis explicabo nam dicta illum molestias earum, molestiae beatae quae dolorum dolore magni accusantium. Nulla recusandae deserunt sunt atque. Sapiente perspiciatis, officia quasi molestiae voluptas repudiandae voluptatem quaerat suscipit iure totam, asperiores alias corporis mollitia aut minima consectetur delectus libero tempore expedita voluptates incidunt voluptate debitis modi. Cum, explicabo quis officiis placeat blanditiis sequi voluptate nisi sed enim aut vero nobis. Ut nesciunt quis facere iure, qui alias commodi eveniet culpa autem debitis adipisci voluptates id, eius perspiciatis facilis quaerat odit. Ut praesentium, atque quidem non iste, rerum, fuga aspernatur iure eius id rem deserunt aliquid nihil nisi architecto ea officia neque! Maxime eos illum ullam, accusantium dolor, neque facere numquam assumenda consectetur ducimus autem minus mollitia pariatur vel nesciunt quaerat accusamus rerum, distinctio eius repellendus aspernatur? Temporibus nesciunt ullam vitae libero tempora quos iure recusandae magni, sequi beatae, eos distinctio cumque? Quis, labore. Perspiciatis, quam necessitatibus. Eveniet expedita explicabo dolorem necessitatibus accusantium, facere iure aliquid distinctio odit cupiditate ullaexplicabo ipsa sapiente est.
               </p>
            </div>

        </div>
     );
}
 
export default About;