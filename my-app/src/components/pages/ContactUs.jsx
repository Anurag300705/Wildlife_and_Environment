import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useState } from 'react';



export default function ContactUs() {

const [Sbmt, setSbmt] = useState(false);


const handlClkSbmt = () => {
  setSbmt(true);
};



const hndlFb = () =>{
  window.open("https://www.facebook.com/" , "_blank");
}

const hndlInsta = () =>{
  window.open("https://www.instagram.com/accounts/login/" , "_blank");
}

const hndlLinkdn = () =>{
  window.open("https://in.linkedin.com/" , "_blank");
}

const hndlTwitt = () =>{
  window.open("https://x.com/?lang=en-in" , "_blank");
}



  return (

    <div className=' '  >
      <div className='w-screen '>
        <img src="https://wallpapercave.com/wp/OHhZS5M.jpg" alt="jungle" className='w-full object-cover h-[1500px] md:h-[1000px] '/>
        </div>

     <div className='absolute inset-0 md:flex w-full pt-[150px]'>



     <div className='pl-[20px] md:pl-[80px] '>
        <div className=' bg-blue-300 w-[220px] md:w-[600px]  text-center text-[20px] md:text-[30px] font-bold border-[2px] border-black font-serif rounded-[6px] ml-[60px] md:ml-0'><p>Contact us</p></div>

       <div className='pt-[30px] md:pt-[20px]'>
        <p className='uppercase text-[18px] md:text-[28px] font-semibold text-blue-100'>Address</p> 
        <p className='text-[12px] md:text-[18px]  font-semibold text-black '>KALYANI ZOOLOGICAL PARK <br /> Kalyani Station Road, Nadia, Kayani- 700125 <br />
        --------------------------------------------------</p>

        <p className='uppercase text-[18px] md:text-[28px] font-semibold text-blue-100'>phone</p>
        <p className='font-semibold text-[12px] md:text-[18px] text-black'>91-9999999999 <br />
        --------------------------------------------------</p>

        <p className='uppercase text-[18px] md:text-[28px] font-semibold text-blue-100'>email</p>
        <p className='font-semibold text-[12px] md:text-[18px] text-black'>wildlife1@gmail.com <br />
        --------------------------------------------------</p>

        <p className='uppercase text-[18px] md:text-[28px] font-semibold text-blue-100 '>on the web </p>
        <div className='flex gap-[20px] pt-[10px]'>
        <div ><FaSquareFacebook onClick={hndlFb} className=' h-[35px] w-[35px] md:h-[50px] md:w-[50px] hover:text-blue-500 cursor-pointer text-orange-300'/></div>
        <div><FaSquareInstagram onClick={hndlInsta} className='h-[35px] w-[35px] md:h-[50px] md:w-[50px] hover:text-blue-500 cursor-pointer text-orange-300'/></div>
        <div><FaLinkedin onClick={hndlLinkdn} className='h-[35px] w-[35px] md:h-[50px] md:w-[50px] hover:text-blue-500 cursor-pointer text-orange-300'/></div>
        <div><FaSquareXTwitter onClick={hndlTwitt} className='h-[35px] w-[35px] md:h-[50px] md:w-[50px] hover:text-blue-500 cursor-pointer text-orange-300'/></div>
        </div>

      
        </div>

      </div>




     <div className='pl-[20px] md:pl-[150px] mt-[70px] md:mt-0'> 
     <div className=' bg-blue-300 w-[220px] md:w-[550px]  text-center text-[20px] md:text-[30px] font-bold border-[2px] border-black font-serif rounded-[6px] ml-[60px] md:ml-0'><p>Feedback</p>
     </div>


     {Sbmt ? 
         (<p onClick={handlClkSbmt} className='text-white font-semibold text-[60px] mt-[200px]'>Thanks for Feedback..</p>)
         :
          (
            <div className=''>
      <p className='uppercase text-[18px] md:text-[28px] font-semibold text-blue-100 mt-[20px]'>Name</p>
      <input type="text" placeholder='Enter Your Name' className='text-[14px] w-[240px] md:w-[450px] pl-[5px] h-[30px] border-[1px] border-black rounded-[5px] bg-gradient-to-r from-white to-slate-300' />

      <p className='uppercase text-[18px] md:text-[28px] font-semibold text-blue-100 mt-[30px]'>Phone</p>
      <input type="number" placeholder='Enter Your Mobile number' className=' text-[14px] w-[240px] md:w-[450px] pl-[5px] h-[30px] border-[1px] border-black rounded-[5px] bg-gradient-to-r from-white to-slate-300' />

      <p className='uppercase text-[18px] md:text-[28px] font-semibold text-blue-100 mt-[30px]'>Email</p>
      <input type="email" placeholder='Enter Your Email' className='text-[14px] w-[240px] md:w-[450px] pl-[5px] h-[30px] border-[1px] border-black rounded-[5px] bg-gradient-to-r from-white to-slate-300' />

      <p className='uppercase text-[18px] md:text-[28px] font-semibold text-blue-100 mt-[30px]'>Address</p>
      <input type="text" placeholder='Enter Address' className='text-[14px] w-[240px] md:w-[450px] pl-[5px] h-[50px] border-[1px] border-black rounded-[5px] bg-gradient-to-r from-white to-slate-300' />

      <p className='uppercase text-[18px] md:text-[28px] font-semibold text-blue-100 mt-[30px]'>Message</p>
      <input type="text" placeholder='Message' className='text-[14px] w-[240px] md:w-[450px] pl-[5px] h-[70px] border-[1px] border-black rounded-[5px] bg-gradient-to-r from-white to-slate-300' /><br />

     
          
       <button onClick={handlClkSbmt} className='text-[15px] h-[40px] w-[150px] border-black border-[1px] mt-[50px] font-semibold bg-yellow-200 rounded-[40px]  bg-gradient-to-l from-blue-700 to-green-200 hover:bg-red-600'>Submit</button>
         


     </div>
      )
        } 

      
     </div>

   </div>
    </div>
    
  )
}
