import Logo2 from './assets/Emmanuel victor.png'



const MiniCertificate = () => {
    return ( 
        <div className="md:fixed hidden  lg:block md:right-0  mr-2  md:w-[20%] md:h-[25%] md:mt-[8%] z-[1] text-gray-500">
            <h1 className='font-bold'>Certificates</h1>
            <div className="border border-gray-600 md:h-[86%] rounded-sm">
            <img
                        src={Logo2}             // backgroung image
                            alt="Full Image"
                            className="w-[100%] h-full object-cover   mx-auto"
                    />
            </div>
        </div>
     );
}
 
export default MiniCertificate;