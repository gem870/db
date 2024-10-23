




const Socials = () => {
    const fb = "assets/facebook.png"
    const git = "assets/github.png"
    const instagram = "assets/instagram.png"
    const linkedin = "assets/linkedin.png"
    return ( 
        <div className=" bg-[#34928f] fixed right-4 bottom-[10px] p-1 w-[50%] md:w-[20%] mx-auto justify-center rounded-sm shadow-lg max-w-xs z-20 hover:animate-none  flex">
        <a href="#message"><img src={fb} className="w-[30px] md:mx-2 mx-2 transition-transform duration-500 ease-in-out transform hover:scale-110" alt="mail" /></a>
        <a href="#message"><img src={git} className="w-[30px] md:mx-2 mx-2 transition-transform duration-500 ease-in-out transform hover:scale-110" alt="mail" /></a>
        <a href="#message"><img src={instagram} className="w-[30px] md:mx-2 mx-2 transition-transform duration-500 ease-in-out transform hover:scale-110" alt="mail" /></a>
        <a href="#message"><img src={linkedin} className="w-[30px] md:mx-2 mx-2 transition-transform duration-500 ease-in-out transform hover:scale-110" alt="mail" /></a>
      </div>
     );
}
 
export default Socials;