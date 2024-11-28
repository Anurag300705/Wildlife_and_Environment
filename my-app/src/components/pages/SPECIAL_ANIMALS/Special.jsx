import React from 'react';
import { useEffect } from 'react';
import 'aos/dist/aos.css' ;
import Aos from "aos" ;

export default function Special() {

    useEffect(() => {
      Aos.init({
            duration:1200,
      });
    
      
    }, [])
    

  return (
    

    
        <div className='bg-gray-800 w-full h-full pt-[30px] pb-[40px]'>
            <p data-aos="fade-right" className='text-[35px] md:text-[60px] text-green-500 font-serif font-semibold text-center md:ml-[30px] '>Special Animals</p>

            <div className='pt-[30px] '>
                <p data-aos="fade-left" className='text-center text-[27px] md:text-[50px] font-serif text-gray-400 '>Mammals</p>
                <div className='md:max-w-[1300px] mx-auto pt-[60px] md:pt-[100px]  grid grid-cols-2 md:grid-cols-3 justify-items-center gap-[20px] md:gap-[50px] '>

                    <div data-aos="flip-left" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500 p-0 md:p-[3px]'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://usercontent1.hubstatic.com/4527350.jpg" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                     <div data-aos="flip-left" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://th.bing.com/th/id/OIP.M6tWXPiJ2_VQmbXvwYoMYAHaFA?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    <div data-aos="flip-left" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://th.bing.com/th/id/OIP.SWhl5uqlswCO0Ctw5fOhuAHaIu?rs=1&pid=ImgDetMain" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    <div data-aos="flip-left" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://th.bing.com/th/id/OIP.jdugXLGoQOPxpuCmTngvnAHaE8?w=232&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    <div data-aos="flip-left" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://th.bing.com/th/id/OIP.piCxmvR7JhzfaGBub1Ll8gHaE8?w=284&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    <div data-aos="flip-left" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://th.bing.com/th/id/OIP.bxuf3jpZsG7Y6PYM8caYvgHaFl?rs=1&pid=ImgDetMain" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    <div data-aos="flip-left" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://th.bing.com/th/id/OIP.nAC8RR44AYwHDwJ69vQ_WAHaE8?rs=1&pid=ImgDetMain" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white  text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    <div data-aos="flip-left" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://th.bing.com/th/id/OIP.WENrRqTmATj3r6UDHIvdmgHaLG?rs=1&pid=ImgDetMain" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    <div data-aos="flip-left" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500 ml-[200px] md:ml-0'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://th.bing.com/th/id/OIP.vAknmTNSHZ5O4V9I-hlLUgHaEK?rs=1&pid=ImgDetMain" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>


                    
                </div>
            </div>





           
            <div className='pt-[20px] md:pt-[30px] mt-[60px] md:mt-[80px]'>
            <p data-aos="fade-left" className='text-center text-[27px] md:text-[50px] font-serif text-blue-500 '>Reptiles</p>
                <div className='md:max-w-[1300px] mx-auto pt-[60px] md:pt-[100px]  grid grid-cols-2 md:grid-cols-3 justify-items-center gap-[20px] md:gap-[50px] '>

                    <div data-aos="zoom-out-right" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://www.animalsasia.org/us/assets/images/news/Reptile13.jpg" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                     <div data-aos="zoom-out-right" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://th.bing.com/th/id/OIP.J4YyAqc-DIBcMCPE2rInngHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    <div data-aos="zoom-out-right" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://th.bing.com/th/id/OIP.OKJ9hyBAwI7cINj8jfoXqAHaKb?w=126&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    <div data-aos="zoom-out-right" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://www.activewild.com/wp-content/uploads/2018/04/Giant_Plated_Lizard_Gerrhosaurus_validus.jpg" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    <div data-aos="zoom-out-right" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://th.bing.com/th/id/OIP.VYsXVXKZ9DMtGLfUaeWw9wHaFt?w=240&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    <div data-aos="zoom-out-right" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://th.bing.com/th/id/OIP.wh3JWBprDZ1hDS04mEPXjAHaE7?rs=1&pid=ImgDetMain" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    


                    
                </div>
            
            </div>  
           




            <div className='pt-[20px] md:pt-[30px] mt-[60px] md:mt-[80px] '>
            <p data-aos="fade-right" className='text-center text-[27px] md:text-[50px] font-serif text-pink-400 '>Birds</p>
                <div className='md:max-w-[1300px] mx-auto pt-[60px] md:pt-[100px]  grid grid-cols-2 md:grid-cols-3 justify-items-center gap-[20px] md:gap-[50px] '>

                    <div data-aos="zoom-in" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://th.bing.com/th/id/OIP.IAXtyz25m_0uF252frX1wgHaIv?rs=1&pid=ImgDetMain" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                     <div data-aos="zoom-in" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://www.australiangeographic.com.au/wp-content/uploads/2018/06/header.jpg" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    <div data-aos="zoom-in" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://th.bing.com/th/id/OIP.OjI8lkJwxSve_DpcUrXl9QHaFj?rs=1&pid=ImgDetMain" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    <div data-aos="zoom-in" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://th.bing.com/th/id/R.d8c6c9d3055bbd14ee37aeab4ff74e69?rik=nhP%2fafk%2bF9w%2bFA&riu=http%3a%2f%2fwww.bernhardschmitzphotography.com%2ftl_files%2fgallery_creator_albums%2fspecial-birds-ii%2fIMG_3886.JPG&ehk=o3pLeb9cuaQ3vmXT3HcxZkOfI6UITU5hEf6Eo%2bVK4DU%3d&risl=&pid=ImgRaw&r=0" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    <div data-aos="zoom-in" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://www.spacecoastpetservices.com/wp-content/uploads/2019/11/pair-of-macaw-parrots.jpg" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    <div data-aos="zoom-in" className='h-[210px] w-[150px]   md:h-[440px] md:w-[340px] border-[1px] md:border-[2px] border-yellow-300 rounded-[7px] text-center bg-blue-500'>
                        <img className="h-[140px] w-[147px] md:h-[300px] md:w-[340px]  rounded-[7px] pl-[2px] md:pl-0  pt-[2px]" src="https://th.bing.com/th/id/R.11689122b3ec8c4bfd7f0e37ade3cc3e?rik=y0uHJqEYi59Ahg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-jAy1GAqc3Nc%2fUcAYy8MhvpI%2fAAAAAAAADRU%2fLLwmguYhDzs%2fs1600%2fBlue-Jay-Bird-Info.jpg&ehk=ejv1vokqzyLIDpqYVGCi7XcSTwSYtm2oXrmOvz6UkEs%3d&risl=&pid=ImgRaw&r=0" alt="spcl" />
                        <p className='text-[18px] md:text-[30px] text-white'>Deer</p>
                        <p className='text-white text-[7px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure asperiores iste assumenda ipsum doloribus libero quae! </p>
                    </div>

                    


                    
                </div>
            
            </div>  

        </div>
    
  )
}
