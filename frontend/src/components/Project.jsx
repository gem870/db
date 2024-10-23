import React from "react";





    const Project = () =>{
        const image = "work station.jpg"
        const git = "github.png"



        return(
         
          
             <div  className=" shadow-custom my-10    w-[100%] flex justify-end rounded-md ">

                  <div className="flex items-center  justify-center w-full h-[480px] bg-cover bg-center  rounded-md ">
                      <img
                          src={image}
                          alt="Project Image"
                          className="w-full h-full object-cover rounded-md"
                      />
                  </div>


              <div className=" flex flex-col h-[481px] w-[85%] xl:w-[55%] border-l  border-gray-500  absolute  bg-black bg-opacity-45 rounded-md ">
                  
                      <div>
                      <h2 className='font-bold text-[#d7da32] text-xl p-4 pt-3 '>dsjfjhsdcgjhashdgj</h2>
                      <div className='h-[360px] scroll-container '>
                      <p className='text-gray-300 pl-4 text-[18px]' >
                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem iure quod aliquam aspernatur dolor, molestiae, blanditiis obcaecati exercitationem nobis ipsam possimus fugiat et impedit voluptatibus hic sapiente, odio eligendi provident officiis. Sed, optio veniam repudiandae reiciendis, voluptatum, nulla amet totam repellendus tempore suscipit nam exercitationem officia quas libero accusantium distinctio praesentium consectetur temporibus nisi in autem. Architecto officia pariatur corporis? Unde eveniet harum voluptas suscipit officia. Delectus sed illo temporibus hic nemo nesciunt. Atque aut sint officiis modi voluptatem, optio earum. Nihil, obcaecati! Modi expedita qui quam, neque similique vero? Veniam et impedit reprehenderit, perferendis maxime cupiditate laborum tenetur pariatur distinctio dolores sapiente dicta, quia animi ratione magnam placeat expedita harum obcaecati! Voluptates modi libero nesciunt ratione accusamus voluptas commodi, consectetur quo odio aliquam in. Harum vero porro quidem nisi aperiam ducimus. Ad ab et assumenda! Officia corporis quos temporibus sit, nemo officiis numquam labore non sed ad quibusdam, illum eaque recusandae dolor velit laborum dolore, ipsa aliquid ut odio voluptate eligendi quas deleniti culpa! Voluptates, totam quam. Corporis tempora quas quo ad numquam repudiandae unde, quod odio sit dolores quos impedit provident in nemo id sapiente omnis nisi eos! Nihil facere vitae error necessitatibus soluta magni, libero reiciendis veritatis?
                      </p>
                      </div>
                      </div>

                  <div className='p-4'>
                   <a href=""><button className='bg-[#04b099] p-2 bg-opacity-60 hover:bg-opacity-90 rounded-md text-black transition-transform duration-500 ease-in-out transform hover:scale-110'>
                    <img src={git} alt="" className='w-6' />
                    </button></a>
                 </div>
               </div>

            
        </div>
    
     
        );
    }

 
export default Project;