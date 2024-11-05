import React, { useState } from 'react';




const About = () => {
  return (
    <div className='' >
    
    <div  className=' w-full'>
        <img className='w-full h-[500px] object-fill' src="https://wallpapercave.com/wp/wp9173690.jpg" alt="animal" />
    </div>
    <div className=''><p className='absolute inset-0 flex justify-center items-center pr-[700px] pb-[100px] font-serif  text-[60px] text-yellow-200 font-extrabold '>This is my about section</p></div>
    

    <div className='mt-[30px] grid grid-cols-2 pb-[50px]'>
        <div className='w-[600px] pl-[70px] mt-[30px]'>
            <img className='border-[5px] border-yellow-600 rounded-[10px]' src="https://wallpaperaccess.com/full/3180281.jpg" alt="image" />
        </div>

        <div className='w-[600px] text-center '>
            <p className='text-[40px] text-blue-500 font-semibold'>About Section</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolorum suscipit molestiae accusamus, facere ipsam cumque labore, dolore distinctio magnam unde saepe sed dolores consequuntur odit omnis ratione nesciunt aperiam.
            Deserunt, maiores, quo dolore magnam sed commodi earum cum ex temporibus amet aliquid eveniet! Rerum possimus amet id cum harum ut libero a, quae dolores facere illo repellendus magnam earum!
            Commodi, quos. Fugiat asperiores blanditiis cum magni, animi quibusdam a praesentium molestias saepe quam exercitationem velit odio, dolorum cumque, ab consequuntur porro quas. Eius optio nihil non a, vitae assumenda.
            Labore reiciendis accusamus repudiandae voluptatum eos delectus ea aperiam, placeat ullam iste hic id alias sunt velit sequi quia voluptas ipsa iusto, neque rerum veniam eveniet minus. Dolores, ex magni!</p>
        </div>
    </div>


    <div className='mt-[20px] grid grid-cols-2 bg-green-400 '>
        
            <div className='pl-[20px] mt-[30px]' >
                <p className='text-[50px] font-serif  uppercase underline text-center text-slate-600'>Uniqueness</p>
                <p className='pl-[100px]'>1. Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing. <br />
                2. Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum. <br />
                3. Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur. <br /> 
                4. Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit. <br />
                5. Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur. <br />
                6. Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur. <br />
                7. Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur. <br />
                8. Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor. <br />
                9. Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur.  <br />
                10. Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum.
                </p>
            </div>

            <div>
                <img src="https://wallpaperaccess.com/full/775987.jpg" alt="bird" />
            </div>
       

    </div>
    
    
    </div>
  )
}

export default About;
